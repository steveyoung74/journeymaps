// Onboarding Logic for Fathom

// Initialize Supabase
const SUPABASE_URL = 'https://ktctvaeulualihczwnrl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0Y3R2YWV1bHVhbGloY3p3bnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MTg0NDYsImV4cCI6MjA1MTQ5NDQ0Nn0.TZKS_S6Picked6TiFRzkdtrOkXKwI4W2LdxEblo5yLc';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    storage: localStorage,
    flowType: 'pkce'
  }
});

// State
let currentStep = 1;
let selectedPath = null;
let verifiedInvite = null;
let currentUser = null;

// Check existing session on load
async function checkExistingSession() {
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session?.user) {
    currentUser = session.user;
    
    // Check if user already has an organisation
    const { data: profile } = await supabase
      .from('users')
      .select('organisation_id, onboarding_step')
      .eq('id', session.user.id)
      .single();
    
    if (profile?.organisation_id) {
      // Already has workspace, go to dashboard
      window.location.href = 'dashboard.html';
      return;
    }
    
    // Check for invite token in URL
    const urlParams = new URLSearchParams(window.location.search);
    const inviteToken = urlParams.get('invite');
    
    if (inviteToken) {
      document.getElementById('inviteCode').value = inviteToken;
      selectChoice('join');
      nextStep();
      setTimeout(() => verifyInvite(), 100);
    }
  } else {
    // Not logged in, redirect to login
    window.location.href = 'dashboard.html';
  }
}

// Initialize
checkExistingSession();

// Select path choice
function selectChoice(choice) {
  selectedPath = choice;
  
  document.querySelectorAll('.choice-card').forEach(card => {
    card.classList.remove('selected');
  });
  document.querySelector(`[data-choice="${choice}"]`).classList.add('selected');
  document.getElementById('continueBtn').disabled = false;
}

// Navigate steps
function nextStep() {
  if (currentStep === 1 && selectedPath) {
    currentStep = 2;
    updateStepUI();
  }
}

function prevStep() {
  if (currentStep === 2) {
    currentStep = 1;
    updateStepUI();
  }
}

function updateStepUI() {
  document.querySelectorAll('.step-content').forEach(el => el.classList.add('hidden'));
  
  if (currentStep === 1) {
    document.getElementById('step1').classList.remove('hidden');
    document.getElementById('stepTitle').textContent = 'Welcome to Fathom';
    document.getElementById('stepSubtitle').textContent = "Let's get you set up in just a few steps";
  } else if (currentStep === 2) {
    if (selectedPath === 'create') {
      document.getElementById('step2create').classList.remove('hidden');
      document.getElementById('stepTitle').textContent = 'Create your workspace';
      document.getElementById('stepSubtitle').textContent = 'Give your workspace a name';
    } else {
      document.getElementById('step2join').classList.remove('hidden');
      document.getElementById('stepTitle').textContent = 'Join a workspace';
      document.getElementById('stepSubtitle').textContent = 'Enter your invite code to join your team';
    }
  } else if (currentStep === 3) {
    document.getElementById('step3').classList.remove('hidden');
    document.getElementById('stepTitle').textContent = "You're all set!";
    document.getElementById('stepSubtitle').textContent = '';
  }
  
  document.querySelectorAll('.progress-step').forEach((step, i) => {
    step.classList.remove('active', 'complete');
    if (i + 1 < currentStep) {
      step.classList.add('complete');
    } else if (i + 1 === currentStep) {
      step.classList.add('active');
    }
  });
}

function showError(message) {
  const errorEl = document.getElementById('errorMessage');
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
}

function hideError() {
  document.getElementById('errorMessage').classList.add('hidden');
}

// Create workspace
async function createWorkspace() {
  const name = document.getElementById('workspaceName').value.trim();
  const industry = document.getElementById('workspaceIndustry').value;
  
  if (!name) {
    showError('Please enter a workspace name');
    return;
  }
  
  const btn = document.getElementById('createWorkspaceBtn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Creating...';
  hideError();
  
  try {
    // Create slug from name
    const slug = name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') 
      + '-' + Math.random().toString(36).substring(2, 6);
    
    // Create organisation
    const { data: org, error: orgError } = await supabase
      .from('organisations')
      .insert({
        name: name,
        slug: slug,
        industry: industry || null,
        owner_id: currentUser.id
      })
      .select()
      .single();
    
    if (orgError) throw orgError;
    
    // Update user profile with organisation
    const { error: userError } = await supabase
      .from('users')
      .update({
        organisation_id: org.id,
        role: 'owner',
        onboarding_step: 'complete'
      })
      .eq('id', currentUser.id);
    
    if (userError) throw userError;
    
    // Create starter content
    await createStarterContent(org.id);
    
    // Update organisation to mark starter content created
    await supabase
      .from('organisations')
      .update({ 
        onboarding_completed: true,
        starter_content_created: true 
      })
      .eq('id', org.id);
    
    // Show success
    document.getElementById('successTitle').textContent = 'Your workspace is ready!';
    document.getElementById('successDesc').textContent = 
      `Welcome to ${name}. We've created 3 example journey maps to help you explore Fathom's features.`;
    
    currentStep = 3;
    updateStepUI();
    
  } catch (err) {
    console.error('Error creating workspace:', err);
    showError('Failed to create workspace. Please try again.');
    btn.disabled = false;
    btn.textContent = 'Create Workspace';
  }
}

// Verify invite code
async function verifyInvite() {
  let code = document.getElementById('inviteCode').value.trim();
  const link = document.getElementById('inviteLink').value.trim();
  
  if (link && !code) {
    const match = link.match(/invite[\/=]([a-zA-Z0-9]+)/);
    if (match) {
      code = match[1];
      document.getElementById('inviteCode').value = code;
    }
  }
  
  if (!code) {
    showError('Please enter an invite code');
    return;
  }
  
  hideError();
  
  try {
    const { data: invite, error } = await supabase
      .from('workspace_invites')
      .select(`
        id,
        email,
        role,
        expires_at,
        accepted_at,
        organisations (
          id,
          name
        )
      `)
      .eq('token', code)
      .single();
    
    if (error || !invite) {
      showError('Invalid invite code. Please check and try again.');
      return;
    }
    
    if (invite.accepted_at) {
      showError('This invite has already been used.');
      return;
    }
    
    if (new Date(invite.expires_at) < new Date()) {
      showError('This invite has expired. Please ask for a new one.');
      return;
    }
    
    verifiedInvite = invite;
    document.getElementById('inviteWorkspaceName').textContent = invite.organisations.name;
    document.getElementById('inviteRole').textContent = invite.role;
    document.getElementById('invitePreview').classList.remove('hidden');
    document.getElementById('joinWorkspaceBtn').disabled = false;
    
  } catch (err) {
    console.error('Error verifying invite:', err);
    showError('Failed to verify invite. Please try again.');
  }
}

// Join workspace
async function joinWorkspace() {
  if (!verifiedInvite) {
    showError('Please verify your invite code first');
    return;
  }
  
  const btn = document.getElementById('joinWorkspaceBtn');
  btn.disabled = true;
  btn.innerHTML = '<div class="spinner"></div> Joining...';
  hideError();
  
  try {
    const { error: userError } = await supabase
      .from('users')
      .update({
        organisation_id: verifiedInvite.organisations.id,
        role: verifiedInvite.role,
        onboarding_step: 'complete'
      })
      .eq('id', currentUser.id);
    
    if (userError) throw userError;
    
    await supabase
      .from('workspace_invites')
      .update({ accepted_at: new Date().toISOString() })
      .eq('id', verifiedInvite.id);
    
    document.getElementById('successTitle').textContent = `Welcome to ${verifiedInvite.organisations.name}!`;
    document.getElementById('successDesc').textContent = 
      `You've joined as a ${verifiedInvite.role}. Your team's journey maps are waiting for you.`;
    
    currentStep = 3;
    updateStepUI();
    
  } catch (err) {
    console.error('Error joining workspace:', err);
    showError('Failed to join workspace. Please try again.');
    btn.disabled = false;
    btn.textContent = 'Join Workspace';
  }
}

// Create starter content
async function createStarterContent(organisationId) {
  const starterMaps = getStarterMaps();
  
  for (const map of starterMaps) {
    await supabase
      .from('journey_maps')
      .insert({
        organisation_id: organisationId,
        title: map.title,
        description: map.description,
        journey_type: map.journey_type,
        template_source: 'starter-example',
        is_example: true,
        created_by: currentUser.id,
        config: map.config
      });
  }
}

// Starter maps data
function getStarterMaps() {
  return [
    // Coffee Shop Journey
    {
      title: '☕ Coffee Shop Customer Journey',
      description: 'Example: A typical customer journey from entering to leaving a coffee shop',
      journey_type: 'Customer Experience',
      config: {
        meta: {
          title: '☕ Coffee Shop Customer Journey',
          description: 'Example: A typical customer journey from entering to leaving a coffee shop',
          journeyType: 'Customer Experience',
          isExample: true
        },
        stages: [
          {
            id: 'stage-1', name: 'Arrival',
            steps: [
              { id: 's1-1', name: 'Enter shop', persona: 'customer', timeMinutes: 1, friction: 1 },
              { id: 's1-2', name: 'Queue assessment', persona: 'customer', timeMinutes: 1, friction: 2 },
              { id: 's1-3', name: 'Wait in queue', persona: 'customer', timeMinutes: 5, friction: 3, painPoints: 'Long wait times during peak hours' }
            ]
          },
          {
            id: 'stage-2', name: 'Order',
            steps: [
              { id: 's2-1', name: 'Review menu', persona: 'customer', timeMinutes: 2, friction: 2 },
              { id: 's2-2', name: 'Place order', persona: 'barista', timeMinutes: 2, friction: 1 },
              { id: 's2-3', name: 'Payment', persona: 'customer', timeMinutes: 1, friction: 1 }
            ]
          },
          {
            id: 'stage-3', name: 'Fulfilment',
            steps: [
              { id: 's3-1', name: 'Prepare drink', persona: 'barista', timeMinutes: 4, friction: 1 },
              { id: 's3-2', name: 'Wait for drink', persona: 'customer', timeMinutes: 4, friction: 2 },
              { id: 's3-3', name: 'Collect order', persona: 'customer', timeMinutes: 1, friction: 1 }
            ]
          },
          {
            id: 'stage-4', name: 'Experience',
            steps: [
              { id: 's4-1', name: 'Find seating', persona: 'customer', timeMinutes: 2, friction: 2, painPoints: 'Limited seating during busy periods' },
              { id: 's4-2', name: 'Enjoy', persona: 'customer', timeMinutes: 20, friction: 1 },
              { id: 's4-3', name: 'Depart', persona: 'customer', timeMinutes: 1, friction: 1 }
            ]
          }
        ],
        personas: [
          { id: 'customer', label: 'Customer', color: '#3B82F6', isExternal: true, hourlyRate: 0 },
          { id: 'barista', label: 'Barista', color: '#10B981', isExternal: false, hourlyRate: 12 }
        ],
        funnel: { enabled: true, initialVolume: 100, stageDropOffs: { 'stage-1': 5, 'stage-2': 2, 'stage-3': 1, 'stage-4': 0 } }
      }
    },
    
    // Employee Onboarding Journey
    {
      title: '🏢 Employee Onboarding Journey',
      description: 'Example: From offer acceptance to full productivity for a new hire',
      journey_type: 'Employee Onboarding',
      config: {
        meta: {
          title: '🏢 Employee Onboarding Journey',
          description: 'Example: From offer acceptance to full productivity for a new hire',
          journeyType: 'Employee Onboarding',
          isExample: true
        },
        stages: [
          {
            id: 'stage-1', name: 'Pre-boarding',
            steps: [
              { id: 's1-1', name: 'Send offer letter', persona: 'hr', timeMinutes: 30, friction: 1 },
              { id: 's1-2', name: 'Receive signed contract', persona: 'hr', timeMinutes: 15, friction: 2, painPoints: 'Delays waiting for signatures' },
              { id: 's1-3', name: 'Background check', persona: 'hr', timeMinutes: 20, friction: 2, thirdPartyCost: 50 },
              { id: 's1-4', name: 'IT equipment order', persona: 'it', timeMinutes: 30, friction: 2, thirdPartyCost: 1200 },
              { id: 's1-5', name: 'System accounts', persona: 'it', timeMinutes: 45, friction: 3, painPoints: 'Multiple systems need setup', automationOpportunity: 'high' }
            ]
          },
          {
            id: 'stage-2', name: 'Day One',
            steps: [
              { id: 's2-1', name: 'Welcome & tour', persona: 'hr', timeMinutes: 60, friction: 1 },
              { id: 's2-2', name: 'Equipment setup', persona: 'it', timeMinutes: 45, friction: 2 },
              { id: 's2-3', name: 'HR paperwork', persona: 'new-hire', timeMinutes: 60, friction: 3, painPoints: 'Repetitive form filling', automationOpportunity: 'medium' },
              { id: 's2-4', name: 'Team intros', persona: 'manager', timeMinutes: 30, friction: 1 },
              { id: 's2-5', name: 'Compliance training', persona: 'new-hire', timeMinutes: 120, friction: 3, regulatoryRequired: true }
            ]
          },
          {
            id: 'stage-3', name: 'Week One',
            steps: [
              { id: 's3-1', name: 'Role training', persona: 'manager', timeMinutes: 240, friction: 2 },
              { id: 's3-2', name: 'System training', persona: 'new-hire', timeMinutes: 180, friction: 3 },
              { id: 's3-3', name: 'First 1:1', persona: 'manager', timeMinutes: 30, friction: 1 },
              { id: 's3-4', name: 'Buddy check-in', persona: 'buddy', timeMinutes: 30, friction: 1 }
            ]
          },
          {
            id: 'stage-4', name: 'First Month',
            steps: [
              { id: 's4-1', name: 'Weekly 1:1s (x4)', persona: 'manager', timeMinutes: 120, friction: 1 },
              { id: 's4-2', name: 'Complete training', persona: 'new-hire', timeMinutes: 180, friction: 2, regulatoryRequired: true },
              { id: 's4-3', name: 'First project', persona: 'new-hire', timeMinutes: 480, friction: 2 },
              { id: 's4-4', name: '30-day review', persona: 'manager', timeMinutes: 60, friction: 1 }
            ]
          },
          {
            id: 'stage-5', name: '90-Day Checkpoint',
            steps: [
              { id: 's5-1', name: 'Probation review', persona: 'hr', timeMinutes: 60, friction: 2 },
              { id: 's5-2', name: 'Competency check', persona: 'manager', timeMinutes: 60, friction: 2 },
              { id: 's5-3', name: 'Feedback', persona: 'hr', timeMinutes: 30, friction: 1 },
              { id: 's5-4', name: 'Confirmation', persona: 'hr', timeMinutes: 30, friction: 1 }
            ]
          }
        ],
        personas: [
          { id: 'new-hire', label: 'New Hire', color: '#3B82F6', isExternal: false, hourlyRate: 25 },
          { id: 'hr', label: 'HR', color: '#8B5CF6', isExternal: false, hourlyRate: 30 },
          { id: 'it', label: 'IT Support', color: '#F59E0B', isExternal: false, hourlyRate: 28 },
          { id: 'manager', label: 'Line Manager', color: '#10B981', isExternal: false, hourlyRate: 45 },
          { id: 'buddy', label: 'Buddy', color: '#EC4899', isExternal: false, hourlyRate: 25 }
        ],
        funnel: { enabled: true, initialVolume: 100, stageDropOffs: { 'stage-1': 8, 'stage-2': 3, 'stage-3': 2, 'stage-4': 2, 'stage-5': 5 } }
      }
    },
    
    // Wealth Management Journey
    {
      title: '🏦 Wealth Management Client Onboarding',
      description: 'Example: High-net-worth client onboarding with full KYC and compliance',
      journey_type: 'Client Onboarding',
      config: {
        meta: {
          title: '🏦 Wealth Management Client Onboarding',
          description: 'Example: High-net-worth client onboarding with full KYC and compliance',
          journeyType: 'Client Onboarding',
          isExample: true
        },
        stages: [
          {
            id: 'stage-1', name: 'Initial Engagement',
            steps: [
              { id: 's1-1', name: 'Enquiry received', persona: 'admin', timeMinutes: 15, friction: 1 },
              { id: 's1-2', name: 'Qualification call', persona: 'advisor', timeMinutes: 30, friction: 2 },
              { id: 's1-3', name: 'Send info pack', persona: 'admin', timeMinutes: 20, friction: 1 },
              { id: 's1-4', name: 'Schedule meeting', persona: 'admin', timeMinutes: 15, friction: 2, painPoints: 'Back-and-forth scheduling' }
            ]
          },
          {
            id: 'stage-2', name: 'Discovery & Fact Find',
            steps: [
              { id: 's2-1', name: 'Discovery meeting', persona: 'advisor', timeMinutes: 90, friction: 2 },
              { id: 's2-2', name: 'Fact find form', persona: 'client', timeMinutes: 60, friction: 4, painPoints: 'Lengthy forms, repeated info requests' },
              { id: 's2-3', name: 'Document request', persona: 'admin', timeMinutes: 30, friction: 3 },
              { id: 's2-4', name: 'Client provides docs', persona: 'client', timeMinutes: 120, friction: 4, painPoints: 'Difficulty locating documents' }
            ]
          },
          {
            id: 'stage-3', name: 'KYC & Compliance',
            steps: [
              { id: 's3-1', name: 'ID verification', persona: 'compliance', timeMinutes: 30, friction: 2, thirdPartyCost: 25, regulatoryRequired: true },
              { id: 's3-2', name: 'AML screening', persona: 'compliance', timeMinutes: 45, friction: 2, thirdPartyCost: 50, regulatoryRequired: true },
              { id: 's3-3', name: 'Source of wealth', persona: 'compliance', timeMinutes: 120, friction: 4, painPoints: 'Complex cases need extensive docs', regulatoryRequired: true },
              { id: 's3-4', name: 'Risk assessment', persona: 'compliance', timeMinutes: 60, friction: 3, regulatoryRequired: true },
              { id: 's3-5', name: 'Compliance sign-off', persona: 'compliance', timeMinutes: 30, friction: 2, regulatoryRequired: true }
            ]
          },
          {
            id: 'stage-4', name: 'Proposal & Agreement',
            steps: [
              { id: 's4-1', name: 'Financial plan prep', persona: 'paraplanner', timeMinutes: 240, friction: 2 },
              { id: 's4-2', name: 'Internal review', persona: 'advisor', timeMinutes: 60, friction: 2 },
              { id: 's4-3', name: 'Proposal presentation', persona: 'advisor', timeMinutes: 90, friction: 2 },
              { id: 's4-4', name: 'Client consideration', persona: 'client', timeMinutes: 60, friction: 2 },
              { id: 's4-5', name: 'Agreement signing', persona: 'client', timeMinutes: 30, friction: 2, automationOpportunity: 'medium' }
            ]
          },
          {
            id: 'stage-5', name: 'Account Setup',
            steps: [
              { id: 's5-1', name: 'Platform account', persona: 'admin', timeMinutes: 45, friction: 3, thirdPartyCost: 150, painPoints: 'Multiple platform applications' },
              { id: 's5-2', name: 'Custody account', persona: 'admin', timeMinutes: 60, friction: 3, thirdPartyCost: 100 },
              { id: 's5-3', name: 'Transfer initiation', persona: 'admin', timeMinutes: 90, friction: 4, painPoints: 'Legacy providers slow', automationOpportunity: 'high' },
              { id: 's5-4', name: 'Transfer tracking', persona: 'admin', timeMinutes: 120, friction: 3 },
              { id: 's5-5', name: 'Initial investment', persona: 'advisor', timeMinutes: 60, friction: 2 }
            ]
          },
          {
            id: 'stage-6', name: 'Handover & Review',
            steps: [
              { id: 's6-1', name: 'Welcome pack', persona: 'admin', timeMinutes: 30, friction: 1 },
              { id: 's6-2', name: 'Portal access', persona: 'admin', timeMinutes: 20, friction: 2, automationOpportunity: 'high' },
              { id: 's6-3', name: 'First review meeting', persona: 'advisor', timeMinutes: 60, friction: 1 },
              { id: 's6-4', name: 'Service schedule', persona: 'admin', timeMinutes: 15, friction: 1 }
            ]
          }
        ],
        personas: [
          { id: 'client', label: 'Client', color: '#3B82F6', isExternal: true, hourlyRate: 0 },
          { id: 'advisor', label: 'Financial Advisor', color: '#10B981', isExternal: false, hourlyRate: 85 },
          { id: 'paraplanner', label: 'Paraplanner', color: '#8B5CF6', isExternal: false, hourlyRate: 45 },
          { id: 'admin', label: 'Client Services', color: '#F59E0B', isExternal: false, hourlyRate: 28 },
          { id: 'compliance', label: 'Compliance', color: '#EF4444', isExternal: false, hourlyRate: 55 }
        ],
        funnel: { enabled: true, initialVolume: 100, stageDropOffs: { 'stage-1': 25, 'stage-2': 15, 'stage-3': 10, 'stage-4': 8, 'stage-5': 3, 'stage-6': 1 } }
      }
    }
  ];
}

// Go to dashboard
function goToDashboard() {
  window.location.href = 'dashboard.html';
}

// Event listeners
document.getElementById('inviteCode')?.addEventListener('input', function() {
  document.getElementById('invitePreview').classList.add('hidden');
  document.getElementById('joinWorkspaceBtn').disabled = true;
  verifiedInvite = null;
});

document.getElementById('inviteLink')?.addEventListener('input', function() {
  const link = this.value;
  if (link) {
    const match = link.match(/invite[\/=]([a-zA-Z0-9]+)/);
    if (match) {
      document.getElementById('inviteCode').value = match[1];
    }
  }
});
