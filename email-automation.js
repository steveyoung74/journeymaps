// Email Automation Integration for FATHOM
// Add this to editor.html to replace mailto: links with proper email sending

const EmailAutomation = {
  
  /**
   * Send bulk survey emails via Supabase Edge Function
   */
  async sendBulkSurveyEmails(surveys) {
    const results = {
      success: [],
      failed: []
    };
    
    for (const survey of surveys) {
      try {
        const response = await fetch(
          'https://ktctvaeuluallhczwnrl.supabase.co/functions/v1/send-survey-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabase.auth.session()?.access_token}`
            },
            body: JSON.stringify({
              type: 'survey_invite',
              to: survey.email,
              toName: survey.name,
              surveyUrl: survey.url,
              mapTitle: survey.mapTitle,
              stepCount: survey.stepCount,
              role: survey.role,
              message: survey.message,
              fromName: survey.fromName
            })
          }
        );
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        results.success.push({
          email: survey.email,
          emailId: data.emailId
        });
        
        // Schedule reminder if enabled
        if (survey.reminderEnabled) {
          await this.scheduleReminder(survey);
        }
        
      } catch (error) {
        console.error(`Failed to send email to ${survey.email}:`, error);
        results.failed.push({
          email: survey.email,
          error: error.message
        });
      }
    }
    
    return results;
  },
  
  /**
   * Schedule a reminder for incomplete survey
   */
  async scheduleReminder(survey) {
    try {
      const { data, error } = await supabase.rpc('schedule_survey_reminder', {
        p_invitation_id: survey.invitationId,
        p_map_id: survey.mapId,
        p_recipient_email: survey.email,
        p_survey_url: survey.url,
        p_days_delay: survey.reminderDays || 3
      });
      
      if (error) throw error;
      return data;
      
    } catch (error) {
      console.error('Failed to schedule reminder:', error);
      throw error;
    }
  },
  
  /**
   * Send completion thank you email
   */
  async sendCompletionEmail(email, mapTitle, surveyUrl) {
    try {
      const response = await fetch(
        'https://ktctvaeuluallhczwnrl.supabase.co/functions/v1/send-survey-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabase.auth.session()?.access_token}`
          },
          body: JSON.stringify({
            type: 'survey_complete',
            to: email,
            surveyUrl: surveyUrl,
            mapTitle: mapTitle
          })
        }
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
      
    } catch (error) {
      console.error('Failed to send completion email:', error);
      throw error;
    }
  },
  
  /**
   * Generate survey invite email preview (for testing)
   */
  generateEmailPreview(survey) {
    const recipientName = survey.name || survey.email.split('@')[0];
    
    return `
<div style="max-width: 600px; margin: 0 auto; background: #FFF; border-radius: 12px; box-shadow: 0 2px 8px rgba(25, 43, 69, 0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="background: linear-gradient(135deg, #192B45 0%, #111E2E 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
    <h1 style="margin: 0; color: #FFFFFF; font-size: 28px; font-weight: 700; letter-spacing: 2px;">FATHOM</h1>
    <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">Feedback Request</p>
  </div>
  
  <div style="padding: 40px 32px;">
    <p style="margin: 0 0 24px 0; color: #1A2332; font-size: 16px; line-height: 1.6;">
      Hi ${recipientName},
    </p>
    
    <p style="margin: 0 0 24px 0; color: #1A2332; font-size: 16px; line-height: 1.6;">
      ${survey.fromName || 'Your team'} has requested your feedback on the <strong>${survey.mapTitle}</strong> process.
    </p>
    
    ${survey.message ? `
    <div style="background: #E9EEF4; border-left: 4px solid #5B8A9A; padding: 16px; margin: 0 0 24px 0; border-radius: 4px;">
      <p style="margin: 0; color: #1A2332; font-size: 14px; line-height: 1.6; font-style: italic;">
        "${survey.message}"
      </p>
    </div>
    ` : ''}
    
    <p style="margin: 0 0 8px 0; color: #6E7B8C; font-size: 14px;">
      📋 This survey covers <strong>${survey.stepCount} steps</strong> where you're involved as <strong>${survey.role}</strong>.
    </p>
    
    <div style="text-align: center; margin: 32px 0;">
      <a href="${survey.url}" style="display: inline-block; background: linear-gradient(135deg, #5B8A9A 0%, #4A7485 100%); color: #FFFFFF; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600;">
        Complete Survey →
      </a>
    </div>
  </div>
  
  <div style="background: #F4F5F7; padding: 24px 32px; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="margin: 0; color: #6E7B8C; font-size: 12px;">
      This survey was sent via FATHOM
    </p>
  </div>
</div>
    `;
  }
};

// Usage example in editor.html:
/*

// Replace the existing sendBulkSurveyEmails function with:

async function sendBulkSurveyEmails() {
  const selectedRole = document.getElementById('bulkSurveyRole').value;
  const selectedMembers = Array.from(document.querySelectorAll('.bulk-survey-member:checked'))
    .map(cb => cb.value);
  const customMessage = document.getElementById('bulkSurveyMessage').value;
  
  if (!selectedRole || selectedMembers.length === 0) {
    alert('Please select a role and at least one team member');
    return;
  }
  
  // Prepare survey data
  const surveys = selectedMembers.map(email => {
    const member = getTeamMemberByEmail(email, selectedRole);
    const stepIds = getStepIdsForRole(selectedRole);
    const token = generateBulkSurveyToken(selectedRole, email, stepIds);
    
    return {
      email: email,
      name: member?.name,
      url: `${window.location.origin}/survey-response.html?token=${token}`,
      mapTitle: config.meta.title || 'Journey Map',
      stepCount: stepIds.length,
      role: selectedRole,
      message: customMessage,
      fromName: currentUser?.name || currentUser?.email,
      reminderEnabled: true,
      reminderDays: 3,
      mapId: currentMapId,
      organisationId: currentUser?.organisation_id
    };
  });
  
  // Show loading
  const button = event.target;
  button.disabled = true;
  button.textContent = 'Sending...';
  
  try {
    // Send emails via automation
    const results = await EmailAutomation.sendBulkSurveyEmails(surveys);
    
    // Show results
    const successCount = results.success.length;
    const failedCount = results.failed.length;
    
    if (failedCount === 0) {
      showToast('success', 'Surveys Sent!', `${successCount} survey${successCount > 1 ? 's' : ''} sent successfully`);
    } else {
      showToast('warning', 'Partially Sent', `${successCount} sent, ${failedCount} failed`);
      console.error('Failed emails:', results.failed);
    }
    
    // Close modal
    closeBulkSurveyModal();
    
  } catch (error) {
    console.error('Error sending emails:', error);
    showToast('error', 'Send Failed', 'Could not send survey emails');
  } finally {
    button.disabled = false;
    button.textContent = 'Send Survey Links';
  }
}

*/
