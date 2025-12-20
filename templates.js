// FATHOM Journey Map Templates
// These provide starting points for common operational journeys

const JOURNEY_TEMPLATES = {
  
  // ============================================
  // BLANK TEMPLATE
  // ============================================
  blank: {
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start from scratch with an empty journey map',
    icon: '📄',
    industry: 'Any',
    config: {
      title: 'New Journey Map',
      currency: '£',
      stages: [
        {
          id: 'stage-1',
          name: 'Stage 1',
          steps: [
            { id: 'step-1-1', name: 'First Step', time: 30, personaId: null, friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer', salary: 0, isExternal: true },
        { id: 'staff', name: 'Staff Member', salary: 35000, isExternal: false }
      ],
      funnelConfig: {
        enabled: false,
        startVolume: 100,
        stages: {}
      }
    }
  },

  // ============================================
  // FINANCIAL SERVICES - CLIENT ONBOARDING
  // ============================================
  financial_client_onboarding: {
    id: 'financial_client_onboarding',
    name: 'Client Onboarding (Financial Services)',
    description: 'Wealth management or advisory client onboarding with KYC, compliance, and account setup',
    icon: '🏦',
    industry: 'Financial Services',
    config: {
      title: 'Client Onboarding Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-discovery',
          name: 'Discovery & Qualification',
          steps: [
            { id: 'step-1-1', name: 'Initial Enquiry Received', time: 15, personaId: 'administrator', friction: 'none', notes: 'Via web form, phone, or referral' },
            { id: 'step-1-2', name: 'Qualification Call', time: 45, personaId: 'advisor', friction: 'low', notes: 'Assess fit and requirements' },
            { id: 'step-1-3', name: 'Send Welcome Pack', time: 20, personaId: 'administrator', friction: 'none', notes: 'Digital or postal' },
            { id: 'step-1-4', name: 'Schedule Discovery Meeting', time: 15, personaId: 'administrator', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-kyc',
          name: 'KYC & Compliance',
          steps: [
            { id: 'step-2-1', name: 'Collect ID Documents', time: 30, personaId: 'client', friction: 'medium', notes: 'Passport, proof of address, etc.' },
            { id: 'step-2-2', name: 'Verify Identity (AML Check)', time: 45, personaId: 'compliance', friction: 'low', notes: 'Third-party verification service' },
            { id: 'step-2-3', name: 'Source of Wealth Declaration', time: 60, personaId: 'client', friction: 'high', notes: 'Often requires chasing' },
            { id: 'step-2-4', name: 'Compliance Review & Sign-off', time: 30, personaId: 'compliance', friction: 'medium', notes: 'May require escalation' },
            { id: 'step-2-5', name: 'Risk Profiling Questionnaire', time: 25, personaId: 'client', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-factfind',
          name: 'Fact Find & Analysis',
          steps: [
            { id: 'step-3-1', name: 'Discovery Meeting', time: 90, personaId: 'advisor', friction: 'none', notes: 'Deep dive into goals and circumstances' },
            { id: 'step-3-2', name: 'Gather Financial Information', time: 120, personaId: 'client', friction: 'high', notes: 'Existing policies, pensions, assets' },
            { id: 'step-3-3', name: 'Input Data to Planning System', time: 60, personaId: 'paraplanner', friction: 'medium', notes: 'Manual data entry' },
            { id: 'step-3-4', name: 'Cash Flow Modelling', time: 120, personaId: 'paraplanner', friction: 'low', notes: '' },
            { id: 'step-3-5', name: 'Research & Provider Selection', time: 180, personaId: 'paraplanner', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-advice',
          name: 'Advice & Recommendation',
          steps: [
            { id: 'step-4-1', name: 'Draft Suitability Report', time: 240, personaId: 'paraplanner', friction: 'medium', notes: 'Compliance-heavy document' },
            { id: 'step-4-2', name: 'Advisor Review & Amendments', time: 60, personaId: 'advisor', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Compliance Review', time: 45, personaId: 'compliance', friction: 'medium', notes: '' },
            { id: 'step-4-4', name: 'Recommendation Meeting', time: 90, personaId: 'advisor', friction: 'none', notes: 'Present and explain recommendations' },
            { id: 'step-4-5', name: 'Handle Client Questions', time: 30, personaId: 'advisor', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-implementation',
          name: 'Implementation',
          steps: [
            { id: 'step-5-1', name: 'Prepare Application Forms', time: 45, personaId: 'administrator', friction: 'medium', notes: 'Multiple providers often' },
            { id: 'step-5-2', name: 'Client Signatures', time: 30, personaId: 'client', friction: 'medium', notes: 'Wet signatures still often required' },
            { id: 'step-5-3', name: 'Submit Applications', time: 30, personaId: 'administrator', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Chase Providers', time: 60, personaId: 'administrator', friction: 'high', notes: 'Average 3 follow-ups per application' },
            { id: 'step-5-5', name: 'Confirm Setup Complete', time: 20, personaId: 'administrator', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-handover',
          name: 'Handover & Review',
          steps: [
            { id: 'step-6-1', name: 'Welcome to Service Call', time: 30, personaId: 'advisor', friction: 'none', notes: '' },
            { id: 'step-6-2', name: 'Portal Setup & Training', time: 20, personaId: 'administrator', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Schedule Annual Review', time: 10, personaId: 'administrator', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Send Confirmation Pack', time: 15, personaId: 'administrator', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'client', name: 'Client', salary: 0, isExternal: true },
        { id: 'advisor', name: 'Financial Advisor', salary: 75000, isExternal: false },
        { id: 'paraplanner', name: 'Paraplanner', salary: 45000, isExternal: false },
        { id: 'administrator', name: 'Administrator', salary: 28000, isExternal: false },
        { id: 'compliance', name: 'Compliance Officer', salary: 55000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-discovery': { dropOff: 25 },
          'stage-kyc': { dropOff: 10 },
          'stage-factfind': { dropOff: 5 },
          'stage-advice': { dropOff: 10 },
          'stage-implementation': { dropOff: 5 },
          'stage-handover': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // HR - EMPLOYEE ONBOARDING
  // ============================================
  employee_onboarding: {
    id: 'employee_onboarding',
    name: 'Employee Onboarding',
    description: 'New hire onboarding from offer acceptance through to full productivity',
    icon: '👋',
    industry: 'Human Resources',
    config: {
      title: 'Employee Onboarding Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-preboarding',
          name: 'Pre-boarding',
          steps: [
            { id: 'step-1-1', name: 'Send Offer Letter', time: 30, personaId: 'hr', friction: 'none', notes: '' },
            { id: 'step-1-2', name: 'Receive Signed Contract', time: 15, personaId: 'new-hire', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Collect Personal Details', time: 20, personaId: 'new-hire', friction: 'low', notes: 'Bank details, emergency contacts, etc.' },
            { id: 'step-1-4', name: 'Right to Work Check', time: 30, personaId: 'hr', friction: 'medium', notes: '' },
            { id: 'step-1-5', name: 'DBS/Background Check', time: 20, personaId: 'hr', friction: 'low', notes: 'If applicable' },
            { id: 'step-1-6', name: 'Send Welcome Email', time: 15, personaId: 'hr', friction: 'none', notes: 'First day info, what to expect' }
          ]
        },
        {
          id: 'stage-it-setup',
          name: 'IT & Access Setup',
          steps: [
            { id: 'step-2-1', name: 'Create User Accounts', time: 45, personaId: 'it', friction: 'low', notes: 'Email, AD, SSO' },
            { id: 'step-2-2', name: 'Provision Laptop/Equipment', time: 60, personaId: 'it', friction: 'medium', notes: 'Ordering and configuration' },
            { id: 'step-2-3', name: 'Setup Software & Tools', time: 45, personaId: 'it', friction: 'low', notes: '' },
            { id: 'step-2-4', name: 'Configure Access Permissions', time: 30, personaId: 'it', friction: 'medium', notes: 'Often requires manager approval chain' },
            { id: 'step-2-5', name: 'Create Building Pass', time: 20, personaId: 'facilities', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-day-one',
          name: 'First Day',
          steps: [
            { id: 'step-3-1', name: 'Reception & Welcome', time: 15, personaId: 'hr', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Workspace Setup', time: 30, personaId: 'new-hire', friction: 'low', notes: '' },
            { id: 'step-3-3', name: 'IT Equipment Handover', time: 30, personaId: 'it', friction: 'low', notes: '' },
            { id: 'step-3-4', name: 'HR Paperwork Session', time: 60, personaId: 'hr', friction: 'medium', notes: 'Policies, handbook, benefits enrollment' },
            { id: 'step-3-5', name: 'Manager Welcome Meeting', time: 45, personaId: 'manager', friction: 'none', notes: '' },
            { id: 'step-3-6', name: 'Team Introductions', time: 30, personaId: 'manager', friction: 'none', notes: '' },
            { id: 'step-3-7', name: 'Buddy Introduction', time: 20, personaId: 'buddy', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-first-week',
          name: 'First Week',
          steps: [
            { id: 'step-4-1', name: 'Company Induction Session', time: 120, personaId: 'hr', friction: 'low', notes: 'Culture, values, structure' },
            { id: 'step-4-2', name: 'Health & Safety Training', time: 60, personaId: 'new-hire', friction: 'low', notes: 'Mandatory compliance' },
            { id: 'step-4-3', name: 'IT Systems Training', time: 90, personaId: 'new-hire', friction: 'medium', notes: '' },
            { id: 'step-4-4', name: 'Role-Specific Orientation', time: 180, personaId: 'manager', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Meet Key Stakeholders', time: 120, personaId: 'new-hire', friction: 'low', notes: '' },
            { id: 'step-4-6', name: 'End of Week Check-in', time: 30, personaId: 'manager', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-first-month',
          name: 'First Month',
          steps: [
            { id: 'step-5-1', name: 'Complete Compliance Training', time: 240, personaId: 'new-hire', friction: 'medium', notes: 'GDPR, security, policies' },
            { id: 'step-5-2', name: 'Role-Specific Training', time: 480, personaId: 'new-hire', friction: 'medium', notes: '' },
            { id: 'step-5-3', name: 'Weekly 1:1s with Manager', time: 120, personaId: 'manager', friction: 'none', notes: '4 x 30 min sessions' },
            { id: 'step-5-4', name: 'Buddy Check-ins', time: 60, personaId: 'buddy', friction: 'none', notes: '' },
            { id: 'step-5-5', name: '30-Day Review Meeting', time: 45, personaId: 'manager', friction: 'low', notes: '' },
            { id: 'step-5-6', name: 'HR Check-in', time: 30, personaId: 'hr', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-probation',
          name: 'Probation & Sign-off',
          steps: [
            { id: 'step-6-1', name: '60-Day Review', time: 45, personaId: 'manager', friction: 'low', notes: '' },
            { id: 'step-6-2', name: '90-Day Review', time: 60, personaId: 'manager', friction: 'low', notes: 'Formal probation review' },
            { id: 'step-6-3', name: 'Probation Sign-off', time: 30, personaId: 'hr', friction: 'medium', notes: '' },
            { id: 'step-6-4', name: 'Update Employee Record', time: 15, personaId: 'hr', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Onboarding Survey', time: 15, personaId: 'new-hire', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'new-hire', name: 'New Hire', salary: 40000, isExternal: false },
        { id: 'manager', name: 'Hiring Manager', salary: 65000, isExternal: false },
        { id: 'hr', name: 'HR Coordinator', salary: 32000, isExternal: false },
        { id: 'it', name: 'IT Support', salary: 35000, isExternal: false },
        { id: 'buddy', name: 'Onboarding Buddy', salary: 40000, isExternal: false },
        { id: 'facilities', name: 'Facilities', salary: 28000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 50,
        stages: {
          'stage-preboarding': { dropOff: 3 },
          'stage-it-setup': { dropOff: 0 },
          'stage-day-one': { dropOff: 1 },
          'stage-first-week': { dropOff: 1 },
          'stage-first-month': { dropOff: 2 },
          'stage-probation': { dropOff: 2 }
        }
      }
    }
  },

  // ============================================
  // HR - RECRUITMENT & HIRING
  // ============================================
  recruitment_hiring: {
    id: 'recruitment_hiring',
    name: 'Recruitment & Hiring',
    description: 'End-to-end hiring process from job requisition to offer acceptance',
    icon: '🎯',
    industry: 'Human Resources',
    config: {
      title: 'Recruitment Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-requisition',
          name: 'Requisition & Planning',
          steps: [
            { id: 'step-1-1', name: 'Hiring Need Identified', time: 30, personaId: 'hiring-manager', friction: 'none', notes: '' },
            { id: 'step-1-2', name: 'Complete Job Requisition', time: 45, personaId: 'hiring-manager', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Budget Approval', time: 30, personaId: 'finance', friction: 'medium', notes: 'Can cause delays' },
            { id: 'step-1-4', name: 'Draft Job Description', time: 60, personaId: 'recruiter', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Hiring Manager Review', time: 20, personaId: 'hiring-manager', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-sourcing',
          name: 'Sourcing & Advertising',
          steps: [
            { id: 'step-2-1', name: 'Post to Job Boards', time: 30, personaId: 'recruiter', friction: 'none', notes: '' },
            { id: 'step-2-2', name: 'Post to LinkedIn', time: 20, personaId: 'recruiter', friction: 'none', notes: '' },
            { id: 'step-2-3', name: 'Direct Sourcing/Headhunting', time: 180, personaId: 'recruiter', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Agency Briefing', time: 45, personaId: 'recruiter', friction: 'low', notes: 'If using agencies' },
            { id: 'step-2-5', name: 'Employee Referral Outreach', time: 30, personaId: 'recruiter', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-screening',
          name: 'Screening',
          steps: [
            { id: 'step-3-1', name: 'CV/Resume Review', time: 120, personaId: 'recruiter', friction: 'medium', notes: 'Per batch of ~50 applications' },
            { id: 'step-3-2', name: 'Phone Screen Calls', time: 180, personaId: 'recruiter', friction: 'low', notes: '6 x 30 min calls avg' },
            { id: 'step-3-3', name: 'Skills Assessment', time: 30, personaId: 'candidate', friction: 'low', notes: 'Online test if applicable' },
            { id: 'step-3-4', name: 'Shortlist Review', time: 30, personaId: 'hiring-manager', friction: 'low', notes: '' },
            { id: 'step-3-5', name: 'Schedule Interviews', time: 45, personaId: 'recruiter', friction: 'medium', notes: 'Calendar coordination' }
          ]
        },
        {
          id: 'stage-interview',
          name: 'Interviews',
          steps: [
            { id: 'step-4-1', name: 'First Round Interview', time: 60, personaId: 'hiring-manager', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Technical/Skills Interview', time: 90, personaId: 'interviewer', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Culture Fit Interview', time: 45, personaId: 'interviewer', friction: 'none', notes: '' },
            { id: 'step-4-4', name: 'Final Round/Panel', time: 90, personaId: 'hiring-manager', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Interview Debrief', time: 30, personaId: 'hiring-manager', friction: 'none', notes: '' },
            { id: 'step-4-6', name: 'Candidate Feedback Calls', time: 60, personaId: 'recruiter', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-offer',
          name: 'Offer & Negotiation',
          steps: [
            { id: 'step-5-1', name: 'Reference Checks', time: 60, personaId: 'recruiter', friction: 'medium', notes: 'Chasing referees' },
            { id: 'step-5-2', name: 'Prepare Offer Package', time: 45, personaId: 'recruiter', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Offer Approval', time: 30, personaId: 'hr', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Verbal Offer Call', time: 30, personaId: 'hiring-manager', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Salary Negotiation', time: 45, personaId: 'recruiter', friction: 'medium', notes: 'May require multiple rounds' },
            { id: 'step-5-6', name: 'Send Written Offer', time: 20, personaId: 'hr', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-close',
          name: 'Close & Handover',
          steps: [
            { id: 'step-6-1', name: 'Receive Signed Offer', time: 15, personaId: 'candidate', friction: 'low', notes: '' },
            { id: 'step-6-2', name: 'Reject Other Candidates', time: 45, personaId: 'recruiter', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Handover to Onboarding', time: 20, personaId: 'recruiter', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Update ATS/Records', time: 15, personaId: 'recruiter', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Hiring Retrospective', time: 30, personaId: 'hiring-manager', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'candidate', name: 'Candidate', salary: 0, isExternal: true },
        { id: 'hiring-manager', name: 'Hiring Manager', salary: 65000, isExternal: false },
        { id: 'recruiter', name: 'Recruiter', salary: 38000, isExternal: false },
        { id: 'interviewer', name: 'Interview Panel Member', salary: 55000, isExternal: false },
        { id: 'hr', name: 'HR Manager', salary: 50000, isExternal: false },
        { id: 'finance', name: 'Finance Approver', salary: 60000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 150,
        stages: {
          'stage-requisition': { dropOff: 0 },
          'stage-sourcing': { dropOff: 0 },
          'stage-screening': { dropOff: 120 },
          'stage-interview': { dropOff: 20 },
          'stage-offer': { dropOff: 5 },
          'stage-close': { dropOff: 2 }
        }
      }
    }
  },

  // ============================================
  // SAAS - CUSTOMER ONBOARDING
  // ============================================
  saas_customer_onboarding: {
    id: 'saas_customer_onboarding',
    name: 'Customer Onboarding (SaaS)',
    description: 'Enterprise software customer implementation and activation journey',
    icon: '🚀',
    industry: 'Technology / SaaS',
    config: {
      title: 'Customer Onboarding Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-handoff',
          name: 'Sales Handoff',
          steps: [
            { id: 'step-1-1', name: 'Deal Closed in CRM', time: 15, personaId: 'sales', friction: 'none', notes: '' },
            { id: 'step-1-2', name: 'Internal Handoff Meeting', time: 30, personaId: 'csm', friction: 'low', notes: 'Sales to CS knowledge transfer' },
            { id: 'step-1-3', name: 'Review Contract & Scope', time: 30, personaId: 'csm', friction: 'low', notes: '' },
            { id: 'step-1-4', name: 'Assign Implementation Team', time: 15, personaId: 'csm', friction: 'none', notes: '' },
            { id: 'step-1-5', name: 'Send Welcome Email', time: 15, personaId: 'csm', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-kickoff',
          name: 'Kickoff',
          steps: [
            { id: 'step-2-1', name: 'Schedule Kickoff Call', time: 20, personaId: 'csm', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Kickoff Meeting', time: 60, personaId: 'csm', friction: 'none', notes: 'Introductions, timeline, expectations' },
            { id: 'step-2-3', name: 'Gather Technical Requirements', time: 45, personaId: 'implementation', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Define Success Criteria', time: 30, personaId: 'csm', friction: 'low', notes: '' },
            { id: 'step-2-5', name: 'Create Implementation Plan', time: 60, personaId: 'implementation', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-setup',
          name: 'Technical Setup',
          steps: [
            { id: 'step-3-1', name: 'Provision Tenant/Environment', time: 30, personaId: 'implementation', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'SSO/Authentication Setup', time: 90, personaId: 'implementation', friction: 'high', notes: 'Often requires customer IT involvement' },
            { id: 'step-3-3', name: 'Data Migration Planning', time: 60, personaId: 'implementation', friction: 'medium', notes: '' },
            { id: 'step-3-4', name: 'Data Import/Migration', time: 180, personaId: 'implementation', friction: 'high', notes: 'Data quality issues common' },
            { id: 'step-3-5', name: 'Integration Configuration', time: 120, personaId: 'implementation', friction: 'high', notes: 'API setup, webhooks, etc.' },
            { id: 'step-3-6', name: 'Custom Configuration', time: 90, personaId: 'implementation', friction: 'medium', notes: 'Workflows, fields, permissions' }
          ]
        },
        {
          id: 'stage-training',
          name: 'Training',
          steps: [
            { id: 'step-4-1', name: 'Admin Training Session', time: 90, personaId: 'implementation', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'End User Training (Group 1)', time: 120, personaId: 'implementation', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'End User Training (Group 2)', time: 120, personaId: 'implementation', friction: 'low', notes: '' },
            { id: 'step-4-4', name: 'Create Custom Documentation', time: 60, personaId: 'csm', friction: 'medium', notes: '' },
            { id: 'step-4-5', name: 'Q&A / Office Hours', time: 60, personaId: 'implementation', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-golive',
          name: 'Go-Live',
          steps: [
            { id: 'step-5-1', name: 'User Acceptance Testing', time: 120, personaId: 'customer', friction: 'medium', notes: '' },
            { id: 'step-5-2', name: 'Fix UAT Issues', time: 90, personaId: 'implementation', friction: 'medium', notes: '' },
            { id: 'step-5-3', name: 'Go-Live Readiness Check', time: 30, personaId: 'csm', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Go-Live Support', time: 120, personaId: 'support', friction: 'medium', notes: 'Hypercare period' },
            { id: 'step-5-5', name: 'Post Go-Live Review', time: 45, personaId: 'csm', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-adoption',
          name: 'Adoption & Handover',
          steps: [
            { id: 'step-6-1', name: 'Monitor Adoption Metrics', time: 30, personaId: 'csm', friction: 'low', notes: 'Weekly for first month' },
            { id: 'step-6-2', name: 'Address Adoption Blockers', time: 60, personaId: 'csm', friction: 'medium', notes: '' },
            { id: 'step-6-3', name: '30-Day Success Review', time: 45, personaId: 'csm', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Transition to BAU Support', time: 30, personaId: 'csm', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Collect NPS/Feedback', time: 15, personaId: 'customer', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer Stakeholder', salary: 0, isExternal: true },
        { id: 'sales', name: 'Account Executive', salary: 70000, isExternal: false },
        { id: 'csm', name: 'Customer Success Manager', salary: 50000, isExternal: false },
        { id: 'implementation', name: 'Implementation Specialist', salary: 45000, isExternal: false },
        { id: 'support', name: 'Support Engineer', salary: 38000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 20,
        stages: {
          'stage-handoff': { dropOff: 0 },
          'stage-kickoff': { dropOff: 1 },
          'stage-setup': { dropOff: 1 },
          'stage-training': { dropOff: 0 },
          'stage-golive': { dropOff: 1 },
          'stage-adoption': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // INSURANCE CLAIM
  // ============================================
  insurance_claim: {
    id: 'insurance_claim',
    name: 'Insurance Claim',
    description: 'End-to-end insurance claim processing from FNOL to settlement',
    icon: '🛡️',
    industry: 'Insurance',
    config: {
      title: 'Insurance Claim Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-fnol',
          name: 'First Notice of Loss',
          steps: [
            { id: 'step-1-1', name: 'Claim Reported', time: 20, personaId: 'claimant', friction: 'medium', notes: 'Phone, web, or app' },
            { id: 'step-1-2', name: 'Initial Claim Logging', time: 15, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-1-3', name: 'Policy Verification', time: 10, personaId: 'agent', friction: 'low', notes: '' },
            { id: 'step-1-4', name: 'Gather Incident Details', time: 25, personaId: 'agent', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Issue Claim Reference', time: 5, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-1-6', name: 'Send Acknowledgement', time: 10, personaId: 'agent', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-documentation',
          name: 'Documentation',
          steps: [
            { id: 'step-2-1', name: 'Request Supporting Documents', time: 15, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-2-2', name: 'Claimant Gathers Evidence', time: 60, personaId: 'claimant', friction: 'high', notes: 'Photos, receipts, police reports' },
            { id: 'step-2-3', name: 'Submit Documents', time: 20, personaId: 'claimant', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Chase Missing Documents', time: 30, personaId: 'agent', friction: 'high', notes: 'Average 2 follow-ups' },
            { id: 'step-2-5', name: 'Document Review', time: 20, personaId: 'agent', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-assessment',
          name: 'Assessment',
          steps: [
            { id: 'step-3-1', name: 'Assign to Assessor', time: 10, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Review Claim Details', time: 30, personaId: 'assessor', friction: 'low', notes: '' },
            { id: 'step-3-3', name: 'Schedule Site Visit', time: 20, personaId: 'assessor', friction: 'medium', notes: 'If required' },
            { id: 'step-3-4', name: 'Conduct Assessment', time: 90, personaId: 'assessor', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Obtain Repair Quotes', time: 45, personaId: 'assessor', friction: 'medium', notes: '' },
            { id: 'step-3-6', name: 'Write Assessment Report', time: 45, personaId: 'assessor', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-adjudication',
          name: 'Adjudication',
          steps: [
            { id: 'step-4-1', name: 'Review Assessment', time: 30, personaId: 'adjuster', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Check Policy Terms', time: 20, personaId: 'adjuster', friction: 'low', notes: 'Exclusions, limits, excess' },
            { id: 'step-4-3', name: 'Fraud Screening', time: 15, personaId: 'adjuster', friction: 'low', notes: 'Automated + manual flags' },
            { id: 'step-4-4', name: 'Calculate Settlement', time: 25, personaId: 'adjuster', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Manager Approval', time: 20, personaId: 'manager', friction: 'medium', notes: 'For claims over threshold' },
            { id: 'step-4-6', name: 'Decision Documentation', time: 15, personaId: 'adjuster', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-settlement',
          name: 'Settlement',
          steps: [
            { id: 'step-5-1', name: 'Communicate Decision', time: 20, personaId: 'agent', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Handle Queries/Disputes', time: 30, personaId: 'agent', friction: 'medium', notes: '' },
            { id: 'step-5-3', name: 'Process Payment', time: 15, personaId: 'payments', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Arrange Repairs', time: 30, personaId: 'agent', friction: 'low', notes: 'If repair network used' },
            { id: 'step-5-5', name: 'Confirm Receipt', time: 10, personaId: 'claimant', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-close',
          name: 'Closure',
          steps: [
            { id: 'step-6-1', name: 'Final Documentation', time: 15, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-6-2', name: 'Close Claim in System', time: 10, personaId: 'agent', friction: 'none', notes: '' },
            { id: 'step-6-3', name: 'Customer Satisfaction Survey', time: 5, personaId: 'claimant', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Archive Records', time: 10, personaId: 'agent', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'claimant', name: 'Claimant', salary: 0, isExternal: true },
        { id: 'agent', name: 'Claims Agent', salary: 28000, isExternal: false },
        { id: 'assessor', name: 'Loss Assessor', salary: 42000, isExternal: false },
        { id: 'adjuster', name: 'Claims Adjuster', salary: 38000, isExternal: false },
        { id: 'manager', name: 'Claims Manager', salary: 55000, isExternal: false },
        { id: 'payments', name: 'Payments Team', salary: 30000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 500,
        stages: {
          'stage-fnol': { dropOff: 25 },
          'stage-documentation': { dropOff: 40 },
          'stage-assessment': { dropOff: 15 },
          'stage-adjudication': { dropOff: 30 },
          'stage-settlement': { dropOff: 5 },
          'stage-close': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // CONTRACT LIFECYCLE
  // ============================================
  contract_lifecycle: {
    id: 'contract_lifecycle',
    name: 'Contract Lifecycle',
    description: 'Contract request through negotiation, approval, and execution',
    icon: '📝',
    industry: 'Legal / Procurement',
    config: {
      title: 'Contract Lifecycle Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-request',
          name: 'Request & Intake',
          steps: [
            { id: 'step-1-1', name: 'Contract Request Submitted', time: 20, personaId: 'requestor', friction: 'low', notes: '' },
            { id: 'step-1-2', name: 'Initial Triage', time: 15, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-1-3', name: 'Assign to Legal Counsel', time: 10, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-1-4', name: 'Gather Requirements', time: 30, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-draft',
          name: 'Drafting',
          steps: [
            { id: 'step-2-1', name: 'Select Template', time: 15, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-2-2', name: 'Draft Contract', time: 120, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-2-3', name: 'Internal Legal Review', time: 45, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-2-4', name: 'Requestor Review', time: 30, personaId: 'requestor', friction: 'low', notes: '' },
            { id: 'step-2-5', name: 'Incorporate Feedback', time: 30, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-negotiation',
          name: 'Negotiation',
          steps: [
            { id: 'step-3-1', name: 'Send to Counterparty', time: 15, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Counterparty Review', time: 60, personaId: 'counterparty', friction: 'medium', notes: 'External timeline varies' },
            { id: 'step-3-3', name: 'Receive Redlines', time: 30, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-3-4', name: 'Review & Respond to Redlines', time: 90, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Negotiate Key Terms', time: 60, personaId: 'legal', friction: 'high', notes: 'May require multiple rounds' },
            { id: 'step-3-6', name: 'Final Version Agreement', time: 30, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-approval',
          name: 'Approval',
          steps: [
            { id: 'step-4-1', name: 'Prepare Approval Package', time: 20, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Business Owner Approval', time: 30, personaId: 'requestor', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Finance Review', time: 45, personaId: 'finance', friction: 'medium', notes: 'If above threshold' },
            { id: 'step-4-4', name: 'Legal Sign-off', time: 20, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-4-5', name: 'Executive Approval', time: 30, personaId: 'executive', friction: 'medium', notes: 'If above threshold' }
          ]
        },
        {
          id: 'stage-execution',
          name: 'Execution',
          steps: [
            { id: 'step-5-1', name: 'Prepare for Signature', time: 15, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-5-2', name: 'Internal Signature', time: 20, personaId: 'signatory', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Send for Counterparty Signature', time: 10, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-5-4', name: 'Chase Counterparty', time: 30, personaId: 'legal-ops', friction: 'medium', notes: '' },
            { id: 'step-5-5', name: 'Receive Executed Contract', time: 15, personaId: 'counterparty', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-post-execution',
          name: 'Post-Execution',
          steps: [
            { id: 'step-6-1', name: 'Upload to CLM System', time: 15, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-6-2', name: 'Extract Key Terms/Dates', time: 20, personaId: 'legal-ops', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Set Renewal Reminders', time: 10, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Distribute to Stakeholders', time: 15, personaId: 'legal-ops', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Close Request', time: 5, personaId: 'legal-ops', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'counterparty', name: 'Counterparty', salary: 0, isExternal: true },
        { id: 'requestor', name: 'Business Requestor', salary: 55000, isExternal: false },
        { id: 'legal', name: 'Legal Counsel', salary: 85000, isExternal: false },
        { id: 'legal-ops', name: 'Legal Operations', salary: 38000, isExternal: false },
        { id: 'finance', name: 'Finance', salary: 60000, isExternal: false },
        { id: 'signatory', name: 'Authorised Signatory', salary: 90000, isExternal: false },
        { id: 'executive', name: 'Executive Approver', salary: 120000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 50,
        stages: {
          'stage-request': { dropOff: 2 },
          'stage-draft': { dropOff: 3 },
          'stage-negotiation': { dropOff: 5 },
          'stage-approval': { dropOff: 2 },
          'stage-execution': { dropOff: 1 },
          'stage-post-execution': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // PROPERTY PURCHASE (CONVEYANCING)
  // ============================================
  property_purchase: {
    id: 'property_purchase',
    name: 'Property Purchase (Conveyancing)',
    description: 'UK residential property purchase from offer to completion',
    icon: '🏠',
    industry: 'Property / Real Estate',
    config: {
      title: 'Property Purchase Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-offer',
          name: 'Offer & Instruction',
          steps: [
            { id: 'step-1-1', name: 'Offer Accepted', time: 15, personaId: 'buyer', friction: 'none', notes: '' },
            { id: 'step-1-2', name: 'Instruct Solicitor', time: 30, personaId: 'buyer', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Complete Client Care Forms', time: 45, personaId: 'buyer', friction: 'medium', notes: 'ID, AML, terms' },
            { id: 'step-1-4', name: 'Pay Initial Fees', time: 15, personaId: 'buyer', friction: 'low', notes: 'Search fees on account' },
            { id: 'step-1-5', name: 'Instruct Mortgage Broker', time: 30, personaId: 'buyer', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-mortgage',
          name: 'Mortgage Application',
          steps: [
            { id: 'step-2-1', name: 'Gather Financial Documents', time: 90, personaId: 'buyer', friction: 'high', notes: 'Payslips, bank statements, etc.' },
            { id: 'step-2-2', name: 'Submit Mortgage Application', time: 45, personaId: 'broker', friction: 'low', notes: '' },
            { id: 'step-2-3', name: 'Lender Processing', time: 30, personaId: 'lender', friction: 'medium', notes: 'External timeline' },
            { id: 'step-2-4', name: 'Valuation Arranged', time: 20, personaId: 'lender', friction: 'low', notes: '' },
            { id: 'step-2-5', name: 'Valuation Conducted', time: 60, personaId: 'surveyor', friction: 'low', notes: '' },
            { id: 'step-2-6', name: 'Mortgage Offer Issued', time: 15, personaId: 'lender', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-searches',
          name: 'Searches & Enquiries',
          steps: [
            { id: 'step-3-1', name: 'Order Searches', time: 20, personaId: 'solicitor', friction: 'none', notes: 'Local, water, environmental' },
            { id: 'step-3-2', name: 'Receive Search Results', time: 30, personaId: 'solicitor', friction: 'medium', notes: '2-4 weeks typically' },
            { id: 'step-3-3', name: 'Review Title Documents', time: 60, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-3-4', name: 'Raise Enquiries', time: 45, personaId: 'solicitor', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Chase Enquiry Responses', time: 60, personaId: 'solicitor', friction: 'high', notes: 'Often significant delays' },
            { id: 'step-3-6', name: 'Review Enquiry Responses', time: 45, personaId: 'solicitor', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-survey',
          name: 'Survey',
          steps: [
            { id: 'step-4-1', name: 'Instruct Surveyor', time: 20, personaId: 'buyer', friction: 'low', notes: 'Homebuyer or Full Building' },
            { id: 'step-4-2', name: 'Survey Conducted', time: 180, personaId: 'surveyor', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Receive Survey Report', time: 30, personaId: 'buyer', friction: 'low', notes: '' },
            { id: 'step-4-4', name: 'Review Survey Issues', time: 45, personaId: 'buyer', friction: 'medium', notes: '' },
            { id: 'step-4-5', name: 'Renegotiate if Required', time: 60, personaId: 'estate-agent', friction: 'high', notes: '' }
          ]
        },
        {
          id: 'stage-exchange',
          name: 'Exchange',
          steps: [
            { id: 'step-5-1', name: 'Report on Title', time: 45, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Sign Contract', time: 30, personaId: 'buyer', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Transfer Deposit', time: 30, personaId: 'buyer', friction: 'medium', notes: 'Usually 10%' },
            { id: 'step-5-4', name: 'Agree Completion Date', time: 30, personaId: 'estate-agent', friction: 'medium', notes: 'Chain coordination' },
            { id: 'step-5-5', name: 'Exchange Contracts', time: 30, personaId: 'solicitor', friction: 'low', notes: 'Legally binding' }
          ]
        },
        {
          id: 'stage-completion',
          name: 'Completion',
          steps: [
            { id: 'step-6-1', name: 'Final Checks', time: 30, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-6-2', name: 'Request Mortgage Funds', time: 20, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Transfer Completion Funds', time: 30, personaId: 'buyer', friction: 'medium', notes: '' },
            { id: 'step-6-4', name: 'Complete Purchase', time: 15, personaId: 'solicitor', friction: 'none', notes: 'Funds transferred, keys released' },
            { id: 'step-6-5', name: 'Pay Stamp Duty', time: 15, personaId: 'solicitor', friction: 'none', notes: '' },
            { id: 'step-6-6', name: 'Register with Land Registry', time: 30, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-6-7', name: 'Send Completion Documents', time: 20, personaId: 'solicitor', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'buyer', name: 'Buyer', salary: 0, isExternal: true },
        { id: 'solicitor', name: 'Conveyancing Solicitor', salary: 48000, isExternal: false },
        { id: 'broker', name: 'Mortgage Broker', salary: 45000, isExternal: false },
        { id: 'surveyor', name: 'Surveyor', salary: 50000, isExternal: false },
        { id: 'estate-agent', name: 'Estate Agent', salary: 35000, isExternal: false },
        { id: 'lender', name: 'Mortgage Lender', salary: 40000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-offer': { dropOff: 5 },
          'stage-mortgage': { dropOff: 10 },
          'stage-searches': { dropOff: 8 },
          'stage-survey': { dropOff: 12 },
          'stage-exchange': { dropOff: 5 },
          'stage-completion': { dropOff: 2 }
        }
      }
    }
  },

  // ============================================
  // VENDOR/SUPPLIER ONBOARDING
  // ============================================
  vendor_onboarding: {
    id: 'vendor_onboarding',
    name: 'Vendor/Supplier Onboarding',
    description: 'Third-party vendor setup with due diligence and compliance',
    icon: '🤝',
    industry: 'Procurement',
    config: {
      title: 'Vendor Onboarding Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-request',
          name: 'Request & Justification',
          steps: [
            { id: 'step-1-1', name: 'New Vendor Request Submitted', time: 20, personaId: 'requestor', friction: 'low', notes: '' },
            { id: 'step-1-2', name: 'Business Justification', time: 30, personaId: 'requestor', friction: 'medium', notes: '' },
            { id: 'step-1-3', name: 'Check Existing Vendors', time: 15, personaId: 'procurement', friction: 'none', notes: 'Avoid duplication' },
            { id: 'step-1-4', name: 'Initial Approval', time: 20, personaId: 'manager', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-collection',
          name: 'Information Collection',
          steps: [
            { id: 'step-2-1', name: 'Send Vendor Questionnaire', time: 15, personaId: 'procurement', friction: 'none', notes: '' },
            { id: 'step-2-2', name: 'Vendor Completes Forms', time: 60, personaId: 'vendor', friction: 'medium', notes: 'Company details, bank info' },
            { id: 'step-2-3', name: 'Collect Certifications', time: 30, personaId: 'vendor', friction: 'medium', notes: 'Insurance, compliance certs' },
            { id: 'step-2-4', name: 'Chase Missing Information', time: 45, personaId: 'procurement', friction: 'high', notes: '' },
            { id: 'step-2-5', name: 'Verify Information', time: 30, personaId: 'procurement', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-due-diligence',
          name: 'Due Diligence',
          steps: [
            { id: 'step-3-1', name: 'Financial Health Check', time: 30, personaId: 'finance', friction: 'low', notes: 'Credit check, accounts review' },
            { id: 'step-3-2', name: 'Compliance Screening', time: 30, personaId: 'compliance', friction: 'low', notes: 'Sanctions, PEP, adverse media' },
            { id: 'step-3-3', name: 'Security Assessment', time: 45, personaId: 'it-security', friction: 'medium', notes: 'If handling data' },
            { id: 'step-3-4', name: 'GDPR/Privacy Review', time: 30, personaId: 'legal', friction: 'medium', notes: 'If processing personal data' },
            { id: 'step-3-5', name: 'ESG/Sustainability Check', time: 20, personaId: 'procurement', friction: 'low', notes: '' },
            { id: 'step-3-6', name: 'Risk Assessment Summary', time: 30, personaId: 'procurement', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-contract',
          name: 'Contracting',
          steps: [
            { id: 'step-4-1', name: 'Select Contract Template', time: 15, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Draft/Customise Contract', time: 60, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Negotiate Terms', time: 90, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-4-4', name: 'Legal Approval', time: 30, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Obtain Signatures', time: 30, personaId: 'procurement', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-setup',
          name: 'System Setup',
          steps: [
            { id: 'step-5-1', name: 'Create Vendor in ERP', time: 30, personaId: 'finance', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Set Up Payment Terms', time: 20, personaId: 'finance', friction: 'none', notes: '' },
            { id: 'step-5-3', name: 'Configure Procurement Catalog', time: 30, personaId: 'procurement', friction: 'low', notes: 'If applicable' },
            { id: 'step-5-4', name: 'Grant System Access', time: 20, personaId: 'it', friction: 'low', notes: 'If portal access needed' },
            { id: 'step-5-5', name: 'Add to Approved Vendor List', time: 10, personaId: 'procurement', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-activation',
          name: 'Activation',
          steps: [
            { id: 'step-6-1', name: 'Send Welcome Pack', time: 15, personaId: 'procurement', friction: 'none', notes: '' },
            { id: 'step-6-2', name: 'Vendor Portal Training', time: 30, personaId: 'vendor', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Process Test Transaction', time: 20, personaId: 'finance', friction: 'low', notes: '' },
            { id: 'step-6-4', name: 'Notify Stakeholders', time: 15, personaId: 'procurement', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Schedule Review Date', time: 10, personaId: 'procurement', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'vendor', name: 'Vendor Contact', salary: 0, isExternal: true },
        { id: 'requestor', name: 'Business Requestor', salary: 50000, isExternal: false },
        { id: 'procurement', name: 'Procurement Specialist', salary: 42000, isExternal: false },
        { id: 'manager', name: 'Approving Manager', salary: 65000, isExternal: false },
        { id: 'finance', name: 'Finance/AP Team', salary: 35000, isExternal: false },
        { id: 'legal', name: 'Legal Counsel', salary: 75000, isExternal: false },
        { id: 'compliance', name: 'Compliance Officer', salary: 55000, isExternal: false },
        { id: 'it-security', name: 'IT Security', salary: 60000, isExternal: false },
        { id: 'it', name: 'IT Support', salary: 35000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 80,
        stages: {
          'stage-request': { dropOff: 10 },
          'stage-collection': { dropOff: 8 },
          'stage-due-diligence': { dropOff: 12 },
          'stage-contract': { dropOff: 5 },
          'stage-setup': { dropOff: 2 },
          'stage-activation': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // MORTGAGE APPLICATION
  // ============================================
  mortgage_application: {
    id: 'mortgage_application',
    name: 'Mortgage Application',
    description: 'Residential mortgage application from enquiry to completion',
    icon: '🏠',
    industry: 'Financial Services',
    config: {
      title: 'Mortgage Application Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-enquiry',
          name: 'Initial Enquiry',
          steps: [
            { id: 'step-1-1', name: 'Customer Enquiry Received', time: 10, personaId: 'customer', friction: 'none', notes: 'Online, phone, or branch' },
            { id: 'step-1-2', name: 'Initial Affordability Check', time: 15, personaId: 'advisor', friction: 'none', notes: 'Quick income/outgoings assessment' },
            { id: 'step-1-3', name: 'Explain Product Options', time: 30, personaId: 'advisor', friction: 'low', notes: 'Fixed, variable, term options' },
            { id: 'step-1-4', name: 'Agreement in Principle', time: 20, personaId: 'advisor', friction: 'low', notes: 'Soft credit check' }
          ]
        },
        {
          id: 'stage-application',
          name: 'Full Application',
          steps: [
            { id: 'step-2-1', name: 'Complete Application Form', time: 45, personaId: 'customer', friction: 'medium', notes: 'Personal, employment, property details' },
            { id: 'step-2-2', name: 'Gather Supporting Documents', time: 60, personaId: 'customer', friction: 'high', notes: 'Payslips, bank statements, ID' },
            { id: 'step-2-3', name: 'Upload/Submit Documents', time: 20, personaId: 'customer', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Application Review', time: 30, personaId: 'processor', friction: 'low', notes: 'Check completeness' },
            { id: 'step-2-5', name: 'Chase Missing Documents', time: 45, personaId: 'processor', friction: 'high', notes: 'Average 2 chase cycles' }
          ]
        },
        {
          id: 'stage-underwriting',
          name: 'Underwriting',
          steps: [
            { id: 'step-3-1', name: 'Credit Check', time: 15, personaId: 'underwriter', friction: 'none', notes: 'Hard credit search' },
            { id: 'step-3-2', name: 'Income Verification', time: 30, personaId: 'underwriter', friction: 'low', notes: '' },
            { id: 'step-3-3', name: 'Affordability Assessment', time: 30, personaId: 'underwriter', friction: 'low', notes: 'Stress testing' },
            { id: 'step-3-4', name: 'Property Valuation Ordered', time: 15, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-3-5', name: 'Valuation Completed', time: 60, personaId: 'surveyor', friction: 'low', notes: 'On-site visit' },
            { id: 'step-3-6', name: 'Underwriting Decision', time: 45, personaId: 'underwriter', friction: 'medium', notes: 'May require referral' }
          ]
        },
        {
          id: 'stage-offer',
          name: 'Mortgage Offer',
          steps: [
            { id: 'step-4-1', name: 'Generate Offer Document', time: 20, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Quality Check Offer', time: 15, personaId: 'processor', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Send Offer to Customer', time: 10, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-4-4', name: 'Send Offer to Solicitor', time: 10, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-4-5', name: 'Customer Reviews Offer', time: 30, personaId: 'customer', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-legal',
          name: 'Legal Process',
          steps: [
            { id: 'step-5-1', name: 'Solicitor Reviews Title', time: 60, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Raise Enquiries', time: 45, personaId: 'solicitor', friction: 'medium', notes: '' },
            { id: 'step-5-3', name: 'Respond to Lender Queries', time: 30, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Prepare Completion Statement', time: 30, personaId: 'solicitor', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Request Mortgage Funds', time: 15, personaId: 'solicitor', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-completion',
          name: 'Completion',
          steps: [
            { id: 'step-6-1', name: 'Release Funds', time: 20, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-6-2', name: 'Complete Purchase', time: 15, personaId: 'solicitor', friction: 'none', notes: '' },
            { id: 'step-6-3', name: 'Register Mortgage', time: 30, personaId: 'solicitor', friction: 'low', notes: 'Land Registry' },
            { id: 'step-6-4', name: 'Send Welcome Pack', time: 15, personaId: 'processor', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Set Up Direct Debit', time: 10, personaId: 'customer', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer/Applicant', salary: 0, isExternal: true },
        { id: 'advisor', name: 'Mortgage Advisor', salary: 45000, isExternal: false },
        { id: 'processor', name: 'Mortgage Processor', salary: 32000, isExternal: false },
        { id: 'underwriter', name: 'Underwriter', salary: 48000, isExternal: false },
        { id: 'surveyor', name: 'Surveyor', salary: 50000, isExternal: false },
        { id: 'solicitor', name: 'Solicitor', salary: 55000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 200,
        stages: {
          'stage-enquiry': { dropOff: 40 },
          'stage-application': { dropOff: 25 },
          'stage-underwriting': { dropOff: 20 },
          'stage-offer': { dropOff: 5 },
          'stage-legal': { dropOff: 8 },
          'stage-completion': { dropOff: 2 }
        }
      }
    }
  },

  // ============================================
  // PATIENT REFERRAL (HEALTHCARE)
  // ============================================
  patient_referral: {
    id: 'patient_referral',
    name: 'Patient Referral',
    description: 'NHS or private healthcare referral from GP to specialist treatment',
    icon: '🏥',
    industry: 'Healthcare',
    config: {
      title: 'Patient Referral Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-presentation',
          name: 'Patient Presentation',
          steps: [
            { id: 'step-1-1', name: 'Patient Books GP Appointment', time: 10, personaId: 'patient', friction: 'medium', notes: 'Online, phone, or walk-in' },
            { id: 'step-1-2', name: 'GP Consultation', time: 15, personaId: 'gp', friction: 'none', notes: 'History, examination, initial assessment' },
            { id: 'step-1-3', name: 'Decision to Refer', time: 10, personaId: 'gp', friction: 'low', notes: 'Clinical judgement' },
            { id: 'step-1-4', name: 'Explain Referral to Patient', time: 10, personaId: 'gp', friction: 'none', notes: 'Set expectations' }
          ]
        },
        {
          id: 'stage-referral-creation',
          name: 'Referral Creation',
          steps: [
            { id: 'step-2-1', name: 'Select Referral Pathway', time: 10, personaId: 'gp', friction: 'low', notes: 'Choose specialty/service' },
            { id: 'step-2-2', name: 'Complete Referral Form', time: 15, personaId: 'gp', friction: 'medium', notes: 'Clinical details, history' },
            { id: 'step-2-3', name: 'Attach Supporting Info', time: 10, personaId: 'gp', friction: 'low', notes: 'Test results, images' },
            { id: 'step-2-4', name: 'Submit via e-Referral', time: 5, personaId: 'gp', friction: 'none', notes: '' },
            { id: 'step-2-5', name: 'Patient Receives UBRN', time: 5, personaId: 'patient', friction: 'low', notes: 'Unique booking reference' }
          ]
        },
        {
          id: 'stage-triage',
          name: 'Triage & Acceptance',
          steps: [
            { id: 'step-3-1', name: 'Referral Received by Service', time: 5, personaId: 'admin', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Clinical Triage', time: 15, personaId: 'consultant', friction: 'low', notes: 'Priority assessment' },
            { id: 'step-3-3', name: 'Request Additional Info', time: 20, personaId: 'admin', friction: 'medium', notes: 'If incomplete' },
            { id: 'step-3-4', name: 'Accept/Reject Referral', time: 10, personaId: 'consultant', friction: 'low', notes: '' },
            { id: 'step-3-5', name: 'Notify GP of Outcome', time: 5, personaId: 'admin', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-booking',
          name: 'Appointment Booking',
          steps: [
            { id: 'step-4-1', name: 'Add to Waiting List', time: 5, personaId: 'admin', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Patient Books Appointment', time: 15, personaId: 'patient', friction: 'medium', notes: 'Via NHS app or phone' },
            { id: 'step-4-3', name: 'Send Appointment Letter', time: 10, personaId: 'admin', friction: 'none', notes: '' },
            { id: 'step-4-4', name: 'Pre-Appointment Instructions', time: 5, personaId: 'admin', friction: 'none', notes: 'Fasting, tests, etc.' },
            { id: 'step-4-5', name: 'Appointment Reminder', time: 5, personaId: 'admin', friction: 'none', notes: 'SMS/Call' }
          ]
        },
        {
          id: 'stage-consultation',
          name: 'Specialist Consultation',
          steps: [
            { id: 'step-5-1', name: 'Patient Attends Clinic', time: 15, personaId: 'patient', friction: 'low', notes: 'Check-in, waiting' },
            { id: 'step-5-2', name: 'Consultant Assessment', time: 30, personaId: 'consultant', friction: 'none', notes: 'Examination, history review' },
            { id: 'step-5-3', name: 'Order Further Tests', time: 15, personaId: 'consultant', friction: 'low', notes: 'If required' },
            { id: 'step-5-4', name: 'Discuss Treatment Options', time: 15, personaId: 'consultant', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Document Consultation', time: 15, personaId: 'consultant', friction: 'medium', notes: 'Clinical notes' }
          ]
        },
        {
          id: 'stage-outcome',
          name: 'Outcome & Follow-up',
          steps: [
            { id: 'step-6-1', name: 'Write Clinic Letter', time: 20, personaId: 'consultant', friction: 'medium', notes: 'To GP and patient' },
            { id: 'step-6-2', name: 'Transcribe & Send Letter', time: 15, personaId: 'admin', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Schedule Treatment/Follow-up', time: 10, personaId: 'admin', friction: 'low', notes: 'If required' },
            { id: 'step-6-4', name: 'Update GP Records', time: 10, personaId: 'admin', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Discharge or Continue Care', time: 10, personaId: 'consultant', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'patient', name: 'Patient', salary: 0, isExternal: true },
        { id: 'gp', name: 'GP', salary: 95000, isExternal: false },
        { id: 'consultant', name: 'Consultant', salary: 120000, isExternal: false },
        { id: 'admin', name: 'Medical Secretary', salary: 28000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 500,
        stages: {
          'stage-presentation': { dropOff: 0 },
          'stage-referral-creation': { dropOff: 10 },
          'stage-triage': { dropOff: 25 },
          'stage-booking': { dropOff: 40 },
          'stage-consultation': { dropOff: 15 },
          'stage-outcome': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // COMPLAINT HANDLING
  // ============================================
  complaint_handling: {
    id: 'complaint_handling',
    name: 'Complaint Handling',
    description: 'Customer complaint resolution from receipt to closure',
    icon: '📢',
    industry: 'Customer Service',
    config: {
      title: 'Complaint Handling Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-receipt',
          name: 'Complaint Receipt',
          steps: [
            { id: 'step-1-1', name: 'Complaint Received', time: 5, personaId: 'customer', friction: 'high', notes: 'Via email, phone, social, letter' },
            { id: 'step-1-2', name: 'Log in CRM System', time: 10, personaId: 'csr', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Send Acknowledgement', time: 5, personaId: 'csr', friction: 'none', notes: 'Within 24 hours' },
            { id: 'step-1-4', name: 'Categorise Complaint', time: 10, personaId: 'csr', friction: 'low', notes: 'Type, severity, product' },
            { id: 'step-1-5', name: 'Assign to Handler', time: 5, personaId: 'csr', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-investigation',
          name: 'Investigation',
          steps: [
            { id: 'step-2-1', name: 'Review Customer History', time: 15, personaId: 'handler', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Gather Internal Evidence', time: 30, personaId: 'handler', friction: 'medium', notes: 'Logs, records, calls' },
            { id: 'step-2-3', name: 'Contact Customer for Details', time: 20, personaId: 'handler', friction: 'medium', notes: 'If needed' },
            { id: 'step-2-4', name: 'Consult Relevant Team', time: 30, personaId: 'handler', friction: 'medium', notes: 'Product, legal, ops' },
            { id: 'step-2-5', name: 'Document Findings', time: 20, personaId: 'handler', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-resolution',
          name: 'Resolution',
          steps: [
            { id: 'step-3-1', name: 'Determine Outcome', time: 20, personaId: 'handler', friction: 'medium', notes: 'Uphold, reject, partial' },
            { id: 'step-3-2', name: 'Calculate Redress', time: 15, personaId: 'handler', friction: 'low', notes: 'If applicable' },
            { id: 'step-3-3', name: 'Manager Approval', time: 20, personaId: 'manager', friction: 'low', notes: 'For redress over threshold' },
            { id: 'step-3-4', name: 'Draft Response Letter', time: 30, personaId: 'handler', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Quality Check Response', time: 15, personaId: 'qa', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-communication',
          name: 'Customer Communication',
          steps: [
            { id: 'step-4-1', name: 'Send Final Response', time: 10, personaId: 'handler', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Process Refund/Redress', time: 15, personaId: 'finance', friction: 'low', notes: 'If applicable' },
            { id: 'step-4-3', name: 'Customer Receives Outcome', time: 10, personaId: 'customer', friction: 'medium', notes: '' },
            { id: 'step-4-4', name: 'Handle Customer Queries', time: 20, personaId: 'handler', friction: 'medium', notes: 'If they disagree' }
          ]
        },
        {
          id: 'stage-closure',
          name: 'Closure & Learning',
          steps: [
            { id: 'step-5-1', name: 'Close Complaint', time: 5, personaId: 'handler', friction: 'none', notes: '' },
            { id: 'step-5-2', name: 'Record Root Cause', time: 10, personaId: 'handler', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Update Knowledge Base', time: 15, personaId: 'qa', friction: 'low', notes: 'If systemic issue' },
            { id: 'step-5-4', name: 'Trigger Process Improvement', time: 20, personaId: 'manager', friction: 'medium', notes: 'If pattern identified' },
            { id: 'step-5-5', name: 'Customer Satisfaction Survey', time: 5, personaId: 'customer', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer', salary: 0, isExternal: true },
        { id: 'csr', name: 'Customer Service Rep', salary: 26000, isExternal: false },
        { id: 'handler', name: 'Complaint Handler', salary: 32000, isExternal: false },
        { id: 'manager', name: 'Team Manager', salary: 45000, isExternal: false },
        { id: 'qa', name: 'Quality Analyst', salary: 35000, isExternal: false },
        { id: 'finance', name: 'Finance Team', salary: 30000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-receipt': { dropOff: 5 },
          'stage-investigation': { dropOff: 0 },
          'stage-resolution': { dropOff: 0 },
          'stage-communication': { dropOff: 0 },
          'stage-closure': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // GRANT APPLICATION
  // ============================================
  grant_application: {
    id: 'grant_application',
    name: 'Grant Application',
    description: 'Funding application from initial enquiry to award and reporting',
    icon: '💰',
    industry: 'Non-Profit / Public Sector',
    config: {
      title: 'Grant Application Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-discovery',
          name: 'Discovery & Eligibility',
          steps: [
            { id: 'step-1-1', name: 'Identify Funding Opportunity', time: 60, personaId: 'applicant', friction: 'medium', notes: 'Research available grants' },
            { id: 'step-1-2', name: 'Review Eligibility Criteria', time: 30, personaId: 'applicant', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Eligibility Pre-Check', time: 20, personaId: 'grants-officer', friction: 'low', notes: 'If service offered' },
            { id: 'step-1-4', name: 'Register on Portal', time: 15, personaId: 'applicant', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Attend Information Session', time: 60, personaId: 'applicant', friction: 'low', notes: 'If available' }
          ]
        },
        {
          id: 'stage-preparation',
          name: 'Application Preparation',
          steps: [
            { id: 'step-2-1', name: 'Gather Supporting Documents', time: 120, personaId: 'applicant', friction: 'high', notes: 'Accounts, governance, policies' },
            { id: 'step-2-2', name: 'Develop Project Plan', time: 180, personaId: 'applicant', friction: 'high', notes: 'Activities, outcomes, timeline' },
            { id: 'step-2-3', name: 'Create Budget', time: 90, personaId: 'applicant', friction: 'high', notes: 'Detailed costings' },
            { id: 'step-2-4', name: 'Write Narrative Sections', time: 240, personaId: 'applicant', friction: 'high', notes: 'Need, approach, impact' },
            { id: 'step-2-5', name: 'Obtain Partner Letters', time: 60, personaId: 'applicant', friction: 'medium', notes: 'If collaborative' },
            { id: 'step-2-6', name: 'Internal Review', time: 60, personaId: 'applicant', friction: 'low', notes: 'Board/leadership sign-off' }
          ]
        },
        {
          id: 'stage-submission',
          name: 'Submission',
          steps: [
            { id: 'step-3-1', name: 'Complete Online Form', time: 90, personaId: 'applicant', friction: 'medium', notes: '' },
            { id: 'step-3-2', name: 'Upload Attachments', time: 20, personaId: 'applicant', friction: 'low', notes: '' },
            { id: 'step-3-3', name: 'Final Review', time: 30, personaId: 'applicant', friction: 'low', notes: 'Check completeness' },
            { id: 'step-3-4', name: 'Submit Application', time: 5, personaId: 'applicant', friction: 'none', notes: '' },
            { id: 'step-3-5', name: 'Receive Confirmation', time: 5, personaId: 'grants-officer', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-assessment',
          name: 'Assessment',
          steps: [
            { id: 'step-4-1', name: 'Eligibility Check', time: 30, personaId: 'grants-officer', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Request Clarifications', time: 20, personaId: 'grants-officer', friction: 'medium', notes: 'If incomplete' },
            { id: 'step-4-3', name: 'Applicant Responds', time: 60, personaId: 'applicant', friction: 'medium', notes: '' },
            { id: 'step-4-4', name: 'Technical Assessment', time: 60, personaId: 'assessor', friction: 'medium', notes: 'Score against criteria' },
            { id: 'step-4-5', name: 'Due Diligence Checks', time: 45, personaId: 'grants-officer', friction: 'low', notes: 'Financial, governance' },
            { id: 'step-4-6', name: 'Panel Review', time: 90, personaId: 'panel', friction: 'medium', notes: 'Decision meeting' }
          ]
        },
        {
          id: 'stage-decision',
          name: 'Decision & Award',
          steps: [
            { id: 'step-5-1', name: 'Decision Made', time: 15, personaId: 'panel', friction: 'none', notes: '' },
            { id: 'step-5-2', name: 'Prepare Award Letter', time: 30, personaId: 'grants-officer', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Notify Applicant', time: 10, personaId: 'grants-officer', friction: 'none', notes: '' },
            { id: 'step-5-4', name: 'Award Acceptance', time: 30, personaId: 'applicant', friction: 'low', notes: 'Sign grant agreement' },
            { id: 'step-5-5', name: 'Release First Payment', time: 20, personaId: 'finance', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-delivery',
          name: 'Delivery & Reporting',
          steps: [
            { id: 'step-6-1', name: 'Project Delivery', time: 0, personaId: 'applicant', friction: 'medium', notes: 'Ongoing - varies by project' },
            { id: 'step-6-2', name: 'Submit Progress Report', time: 120, personaId: 'applicant', friction: 'high', notes: 'Usually quarterly' },
            { id: 'step-6-3', name: 'Review Report', time: 45, personaId: 'grants-officer', friction: 'low', notes: '' },
            { id: 'step-6-4', name: 'Release Subsequent Payment', time: 20, personaId: 'finance', friction: 'low', notes: 'If satisfactory' },
            { id: 'step-6-5', name: 'Final Evaluation', time: 90, personaId: 'grants-officer', friction: 'medium', notes: '' },
            { id: 'step-6-6', name: 'Grant Closure', time: 30, personaId: 'grants-officer', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'applicant', name: 'Applicant Organisation', salary: 0, isExternal: true },
        { id: 'grants-officer', name: 'Grants Officer', salary: 38000, isExternal: false },
        { id: 'assessor', name: 'Technical Assessor', salary: 45000, isExternal: false },
        { id: 'panel', name: 'Decision Panel', salary: 60000, isExternal: false },
        { id: 'finance', name: 'Finance Team', salary: 35000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 200,
        stages: {
          'stage-discovery': { dropOff: 60 },
          'stage-preparation': { dropOff: 40 },
          'stage-submission': { dropOff: 10 },
          'stage-assessment': { dropOff: 50 },
          'stage-decision': { dropOff: 5 },
          'stage-delivery': { dropOff: 5 }
        }
      }
    }
  },

  // ============================================
  // PRODUCT RETURN / REFUND
  // ============================================
  product_return: {
    id: 'product_return',
    name: 'Product Return & Refund',
    description: 'E-commerce or retail product return from request to refund',
    icon: '📦',
    industry: 'Retail / E-commerce',
    config: {
      title: 'Product Return Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-request',
          name: 'Return Request',
          steps: [
            { id: 'step-1-1', name: 'Customer Initiates Return', time: 10, personaId: 'customer', friction: 'low', notes: 'Online portal or contact centre' },
            { id: 'step-1-2', name: 'Select Return Reason', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'System Checks Eligibility', time: 2, personaId: 'system', friction: 'none', notes: 'Within return window?' },
            { id: 'step-1-4', name: 'Generate Return Label', time: 5, personaId: 'system', friction: 'none', notes: 'If approved' },
            { id: 'step-1-5', name: 'Email Confirmation & Label', time: 2, personaId: 'system', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-shipping',
          name: 'Return Shipping',
          steps: [
            { id: 'step-2-1', name: 'Customer Packages Item', time: 15, personaId: 'customer', friction: 'medium', notes: 'Find box, pack securely' },
            { id: 'step-2-2', name: 'Drop at Collection Point', time: 20, personaId: 'customer', friction: 'medium', notes: 'Or arrange collection' },
            { id: 'step-2-3', name: 'Carrier Collects Package', time: 5, personaId: 'carrier', friction: 'none', notes: '' },
            { id: 'step-2-4', name: 'In Transit', time: 60, personaId: 'carrier', friction: 'none', notes: '2-5 days typically' },
            { id: 'step-2-5', name: 'Delivered to Warehouse', time: 10, personaId: 'carrier', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-processing',
          name: 'Warehouse Processing',
          steps: [
            { id: 'step-3-1', name: 'Receive & Log Return', time: 10, personaId: 'warehouse', friction: 'low', notes: 'Scan barcode' },
            { id: 'step-3-2', name: 'Open & Inspect Item', time: 15, personaId: 'warehouse', friction: 'medium', notes: '' },
            { id: 'step-3-3', name: 'Assess Condition', time: 10, personaId: 'warehouse', friction: 'medium', notes: 'Resellable, damaged, etc.' },
            { id: 'step-3-4', name: 'Photo Documentation', time: 5, personaId: 'warehouse', friction: 'low', notes: 'If issues found' },
            { id: 'step-3-5', name: 'Update System Status', time: 5, personaId: 'warehouse', friction: 'none', notes: '' },
            { id: 'step-3-6', name: 'Route to Restock/Dispose', time: 10, personaId: 'warehouse', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-refund',
          name: 'Refund Processing',
          steps: [
            { id: 'step-4-1', name: 'Refund Triggered', time: 5, personaId: 'system', friction: 'none', notes: 'Auto or manual' },
            { id: 'step-4-2', name: 'Calculate Refund Amount', time: 5, personaId: 'system', friction: 'none', notes: 'Less any deductions' },
            { id: 'step-4-3', name: 'Process Payment', time: 10, personaId: 'finance', friction: 'low', notes: '' },
            { id: 'step-4-4', name: 'Notify Customer', time: 2, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-4-5', name: 'Funds Received', time: 30, personaId: 'customer', friction: 'low', notes: '3-5 business days' }
          ]
        },
        {
          id: 'stage-exceptions',
          name: 'Exception Handling',
          steps: [
            { id: 'step-5-1', name: 'Review Disputed Return', time: 20, personaId: 'csr', friction: 'medium', notes: 'If condition dispute' },
            { id: 'step-5-2', name: 'Contact Customer', time: 15, personaId: 'csr', friction: 'medium', notes: 'Explain issue' },
            { id: 'step-5-3', name: 'Manager Escalation', time: 20, personaId: 'manager', friction: 'medium', notes: 'If unresolved' },
            { id: 'step-5-4', name: 'Final Decision', time: 15, personaId: 'manager', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Close Case', time: 5, personaId: 'csr', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer', salary: 0, isExternal: true },
        { id: 'system', name: 'Automated System', salary: 0, isExternal: false },
        { id: 'carrier', name: 'Delivery Carrier', salary: 25000, isExternal: true },
        { id: 'warehouse', name: 'Warehouse Staff', salary: 24000, isExternal: false },
        { id: 'csr', name: 'Customer Service Rep', salary: 26000, isExternal: false },
        { id: 'manager', name: 'Returns Manager', salary: 38000, isExternal: false },
        { id: 'finance', name: 'Finance Team', salary: 32000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 500,
        stages: {
          'stage-request': { dropOff: 50 },
          'stage-shipping': { dropOff: 25 },
          'stage-processing': { dropOff: 0 },
          'stage-refund': { dropOff: 0 },
          'stage-exceptions': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // ACCOUNT OPENING (BANKING)
  // ============================================
  bank_account_opening: {
    id: 'bank_account_opening',
    name: 'Bank Account Opening',
    description: 'Personal or business current account opening journey',
    icon: '💳',
    industry: 'Banking',
    config: {
      title: 'Account Opening Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-application',
          name: 'Application',
          steps: [
            { id: 'step-1-1', name: 'Start Application', time: 5, personaId: 'customer', friction: 'none', notes: 'Online, app, or branch' },
            { id: 'step-1-2', name: 'Select Account Type', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Enter Personal Details', time: 10, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-1-4', name: 'Enter Address History', time: 10, personaId: 'customer', friction: 'medium', notes: '3 years typically' },
            { id: 'step-1-5', name: 'Employment Details', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-1-6', name: 'Tax Residency Declaration', time: 5, personaId: 'customer', friction: 'low', notes: 'FATCA/CRS' }
          ]
        },
        {
          id: 'stage-verification',
          name: 'Identity Verification',
          steps: [
            { id: 'step-2-1', name: 'Upload ID Document', time: 10, personaId: 'customer', friction: 'medium', notes: 'Passport or driving licence' },
            { id: 'step-2-2', name: 'Selfie/Liveness Check', time: 5, personaId: 'customer', friction: 'low', notes: 'If digital' },
            { id: 'step-2-3', name: 'Proof of Address Upload', time: 10, personaId: 'customer', friction: 'medium', notes: 'Utility bill, bank statement' },
            { id: 'step-2-4', name: 'Document Verification', time: 15, personaId: 'kyc-team', friction: 'low', notes: 'Auto + manual review' },
            { id: 'step-2-5', name: 'Request Additional Docs', time: 20, personaId: 'kyc-team', friction: 'high', notes: 'If issues found' }
          ]
        },
        {
          id: 'stage-checks',
          name: 'Checks & Screening',
          steps: [
            { id: 'step-3-1', name: 'Credit Check', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Fraud Screening', time: 5, personaId: 'system', friction: 'none', notes: 'CIFAS, National Hunter' },
            { id: 'step-3-3', name: 'Sanctions Screening', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-3-4', name: 'PEP Check', time: 5, personaId: 'system', friction: 'none', notes: 'Politically Exposed Persons' },
            { id: 'step-3-5', name: 'AML Risk Assessment', time: 15, personaId: 'kyc-team', friction: 'low', notes: '' },
            { id: 'step-3-6', name: 'Refer to Financial Crime', time: 30, personaId: 'fincrime', friction: 'medium', notes: 'If alerts raised' }
          ]
        },
        {
          id: 'stage-approval',
          name: 'Approval',
          steps: [
            { id: 'step-4-1', name: 'Automated Decision', time: 5, personaId: 'system', friction: 'none', notes: 'Pass/refer/decline' },
            { id: 'step-4-2', name: 'Manual Review', time: 20, personaId: 'onboarding', friction: 'medium', notes: 'If referred' },
            { id: 'step-4-3', name: 'Senior Approval', time: 15, personaId: 'manager', friction: 'low', notes: 'If high risk' },
            { id: 'step-4-4', name: 'Decision Notification', time: 5, personaId: 'system', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-activation',
          name: 'Account Activation',
          steps: [
            { id: 'step-5-1', name: 'Create Account', time: 5, personaId: 'system', friction: 'none', notes: 'Generate account number' },
            { id: 'step-5-2', name: 'Set Up Online Banking', time: 10, personaId: 'customer', friction: 'low', notes: 'Username, password' },
            { id: 'step-5-3', name: 'Order Debit Card', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-5-4', name: 'Card Delivery', time: 30, personaId: 'customer', friction: 'low', notes: '3-5 days' },
            { id: 'step-5-5', name: 'Activate Card', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-5-6', name: 'First Deposit/Transfer', time: 10, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-5-7', name: 'Welcome Call', time: 10, personaId: 'onboarding', friction: 'none', notes: 'If premium account' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer', salary: 0, isExternal: true },
        { id: 'system', name: 'Automated System', salary: 0, isExternal: false },
        { id: 'kyc-team', name: 'KYC Analyst', salary: 32000, isExternal: false },
        { id: 'onboarding', name: 'Onboarding Officer', salary: 30000, isExternal: false },
        { id: 'fincrime', name: 'Financial Crime Analyst', salary: 42000, isExternal: false },
        { id: 'manager', name: 'Team Manager', salary: 50000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 1000,
        stages: {
          'stage-application': { dropOff: 300 },
          'stage-verification': { dropOff: 100 },
          'stage-checks': { dropOff: 50 },
          'stage-approval': { dropOff: 30 },
          'stage-activation': { dropOff: 20 }
        }
      }
    }
  },

  // ============================================
  // TENANT MOVE-IN
  // ============================================
  tenant_move_in: {
    id: 'tenant_move_in',
    name: 'Tenant Move-In',
    description: 'Rental property tenant onboarding from enquiry to key handover',
    icon: '🔑',
    industry: 'Property Management',
    config: {
      title: 'Tenant Move-In Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-enquiry',
          name: 'Enquiry & Viewing',
          steps: [
            { id: 'step-1-1', name: 'Tenant Enquiry', time: 5, personaId: 'tenant', friction: 'none', notes: 'Via portal, agent, direct' },
            { id: 'step-1-2', name: 'Pre-Qualify Tenant', time: 10, personaId: 'lettings', friction: 'low', notes: 'Basic affordability check' },
            { id: 'step-1-3', name: 'Schedule Viewing', time: 10, personaId: 'lettings', friction: 'low', notes: '' },
            { id: 'step-1-4', name: 'Conduct Viewing', time: 30, personaId: 'lettings', friction: 'none', notes: '' },
            { id: 'step-1-5', name: 'Tenant Feedback', time: 10, personaId: 'tenant', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-application',
          name: 'Application',
          steps: [
            { id: 'step-2-1', name: 'Submit Application', time: 20, personaId: 'tenant', friction: 'medium', notes: 'Personal & financial details' },
            { id: 'step-2-2', name: 'Pay Holding Deposit', time: 10, personaId: 'tenant', friction: 'low', notes: '1 week rent max' },
            { id: 'step-2-3', name: 'Upload Documents', time: 20, personaId: 'tenant', friction: 'medium', notes: 'ID, payslips, bank statements' },
            { id: 'step-2-4', name: 'Employer Reference', time: 30, personaId: 'referencing', friction: 'medium', notes: '' },
            { id: 'step-2-5', name: 'Previous Landlord Reference', time: 30, personaId: 'referencing', friction: 'medium', notes: '' },
            { id: 'step-2-6', name: 'Credit Check', time: 15, personaId: 'referencing', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-approval',
          name: 'Approval & Offer',
          steps: [
            { id: 'step-3-1', name: 'Review References', time: 20, personaId: 'lettings', friction: 'low', notes: '' },
            { id: 'step-3-2', name: 'Landlord Approval', time: 30, personaId: 'landlord', friction: 'medium', notes: '' },
            { id: 'step-3-3', name: 'Issue Offer', time: 15, personaId: 'lettings', friction: 'none', notes: '' },
            { id: 'step-3-4', name: 'Tenant Accepts Offer', time: 20, personaId: 'tenant', friction: 'low', notes: '' },
            { id: 'step-3-5', name: 'Agree Move-In Date', time: 10, personaId: 'lettings', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-documentation',
          name: 'Documentation',
          steps: [
            { id: 'step-4-1', name: 'Prepare Tenancy Agreement', time: 30, personaId: 'lettings', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Review Agreement', time: 30, personaId: 'tenant', friction: 'medium', notes: '' },
            { id: 'step-4-3', name: 'Sign Tenancy Agreement', time: 15, personaId: 'tenant', friction: 'low', notes: 'Digital or wet signature' },
            { id: 'step-4-4', name: 'Countersign Agreement', time: 10, personaId: 'landlord', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Issue Prescribed Documents', time: 15, personaId: 'lettings', friction: 'low', notes: 'Gas cert, EPC, How to Rent guide' }
          ]
        },
        {
          id: 'stage-payment',
          name: 'Payments & Deposit',
          steps: [
            { id: 'step-5-1', name: 'Pay First Month Rent', time: 10, personaId: 'tenant', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Pay Security Deposit', time: 10, personaId: 'tenant', friction: 'medium', notes: '5 weeks rent max' },
            { id: 'step-5-3', name: 'Register Deposit with TDS', time: 15, personaId: 'lettings', friction: 'low', notes: 'Deposit Protection Scheme' },
            { id: 'step-5-4', name: 'Send Deposit Certificate', time: 10, personaId: 'lettings', friction: 'none', notes: '' },
            { id: 'step-5-5', name: 'Set Up Standing Order', time: 10, personaId: 'tenant', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-move-in',
          name: 'Move-In',
          steps: [
            { id: 'step-6-1', name: 'Inventory & Check-In', time: 60, personaId: 'inventory-clerk', friction: 'medium', notes: 'Detailed condition report' },
            { id: 'step-6-2', name: 'Meter Readings', time: 15, personaId: 'inventory-clerk', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Key Handover', time: 15, personaId: 'lettings', friction: 'none', notes: '' },
            { id: 'step-6-4', name: 'Welcome Pack & Instructions', time: 10, personaId: 'lettings', friction: 'none', notes: 'Appliances, bins, contacts' },
            { id: 'step-6-5', name: 'Notify Utilities', time: 20, personaId: 'tenant', friction: 'medium', notes: '' },
            { id: 'step-6-6', name: 'Notify Council Tax', time: 10, personaId: 'tenant', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'tenant', name: 'Tenant', salary: 0, isExternal: true },
        { id: 'landlord', name: 'Landlord', salary: 0, isExternal: true },
        { id: 'lettings', name: 'Lettings Agent', salary: 32000, isExternal: false },
        { id: 'referencing', name: 'Referencing Service', salary: 28000, isExternal: false },
        { id: 'inventory-clerk', name: 'Inventory Clerk', salary: 26000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-enquiry': { dropOff: 40 },
          'stage-application': { dropOff: 15 },
          'stage-approval': { dropOff: 10 },
          'stage-documentation': { dropOff: 5 },
          'stage-payment': { dropOff: 3 },
          'stage-move-in': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // PERSONAL LOAN APPLICATION
  // ============================================
  personal_loan: {
    id: 'personal_loan',
    name: 'Personal Loan Application',
    description: 'Unsecured personal loan from application to disbursement',
    icon: '💵',
    industry: 'Financial Services',
    config: {
      title: 'Personal Loan Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-quote',
          name: 'Quote & Eligibility',
          steps: [
            { id: 'step-1-1', name: 'Enter Loan Amount & Term', time: 5, personaId: 'customer', friction: 'none', notes: '' },
            { id: 'step-1-2', name: 'Soft Credit Check', time: 2, personaId: 'system', friction: 'none', notes: 'No impact on credit score' },
            { id: 'step-1-3', name: 'Display Personalised Rate', time: 2, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-1-4', name: 'Show Repayment Schedule', time: 5, personaId: 'customer', friction: 'none', notes: '' },
            { id: 'step-1-5', name: 'Select Loan Option', time: 5, personaId: 'customer', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-application',
          name: 'Full Application',
          steps: [
            { id: 'step-2-1', name: 'Personal Details', time: 10, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Employment Information', time: 10, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-2-3', name: 'Income & Expenditure', time: 15, personaId: 'customer', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Bank Account Details', time: 5, personaId: 'customer', friction: 'low', notes: 'For disbursement' },
            { id: 'step-2-5', name: 'Loan Purpose Declaration', time: 5, personaId: 'customer', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-verification',
          name: 'Verification',
          steps: [
            { id: 'step-3-1', name: 'ID Verification', time: 10, personaId: 'customer', friction: 'medium', notes: 'Upload or biometric' },
            { id: 'step-3-2', name: 'Open Banking Connection', time: 10, personaId: 'customer', friction: 'medium', notes: 'Income verification' },
            { id: 'step-3-3', name: 'Analyse Bank Transactions', time: 5, personaId: 'system', friction: 'none', notes: 'Automated income/expense analysis' },
            { id: 'step-3-4', name: 'Request Payslips', time: 20, personaId: 'underwriter', friction: 'high', notes: 'If Open Banking unavailable' },
            { id: 'step-3-5', name: 'Verify Employment', time: 15, personaId: 'underwriter', friction: 'medium', notes: 'If required' }
          ]
        },
        {
          id: 'stage-underwriting',
          name: 'Underwriting',
          steps: [
            { id: 'step-4-1', name: 'Hard Credit Check', time: 2, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-4-2', name: 'Affordability Assessment', time: 10, personaId: 'system', friction: 'none', notes: 'Automated scoring' },
            { id: 'step-4-3', name: 'Fraud Checks', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-4-4', name: 'Policy Rules Check', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-4-5', name: 'Manual Review', time: 30, personaId: 'underwriter', friction: 'medium', notes: 'If referred' },
            { id: 'step-4-6', name: 'Final Decision', time: 5, personaId: 'system', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-offer',
          name: 'Loan Offer',
          steps: [
            { id: 'step-5-1', name: 'Generate Loan Agreement', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-5-2', name: 'Present Terms to Customer', time: 10, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Accept Terms & Conditions', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'E-Sign Agreement', time: 5, personaId: 'customer', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Cooling Off Period Info', time: 2, personaId: 'system', friction: 'none', notes: '14 day withdrawal right' }
          ]
        },
        {
          id: 'stage-disbursement',
          name: 'Disbursement',
          steps: [
            { id: 'step-6-1', name: 'Final Pre-Disbursement Checks', time: 10, personaId: 'operations', friction: 'low', notes: '' },
            { id: 'step-6-2', name: 'Initiate Bank Transfer', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-6-3', name: 'Funds in Customer Account', time: 30, personaId: 'customer', friction: 'none', notes: 'Same day or next day' },
            { id: 'step-6-4', name: 'Send Welcome Pack', time: 5, personaId: 'system', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Set Up Direct Debit', time: 10, personaId: 'customer', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'customer', name: 'Customer', salary: 0, isExternal: true },
        { id: 'system', name: 'Automated System', salary: 0, isExternal: false },
        { id: 'underwriter', name: 'Underwriter', salary: 42000, isExternal: false },
        { id: 'operations', name: 'Operations Team', salary: 30000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 1000,
        stages: {
          'stage-quote': { dropOff: 400 },
          'stage-application': { dropOff: 150 },
          'stage-verification': { dropOff: 80 },
          'stage-underwriting': { dropOff: 100 },
          'stage-offer': { dropOff: 20 },
          'stage-disbursement': { dropOff: 10 }
        }
      }
    }
  },

  // ============================================
  // IT INCIDENT MANAGEMENT
  // ============================================
  incident_management: {
    id: 'incident_management',
    name: 'IT Incident Management',
    description: 'IT service incident from detection to resolution and review',
    icon: '🚨',
    industry: 'IT Service Management',
    config: {
      title: 'Incident Management Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-detection',
          name: 'Detection & Logging',
          steps: [
            { id: 'step-1-1', name: 'Incident Detected', time: 5, personaId: 'user', friction: 'medium', notes: 'User report, monitoring alert, or auto-detection' },
            { id: 'step-1-2', name: 'Log Incident', time: 10, personaId: 'service-desk', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Categorise & Prioritise', time: 5, personaId: 'service-desk', friction: 'low', notes: 'Impact vs urgency matrix' },
            { id: 'step-1-4', name: 'Initial Triage', time: 10, personaId: 'service-desk', friction: 'low', notes: 'Known error? Quick fix?' },
            { id: 'step-1-5', name: 'Acknowledge to User', time: 5, personaId: 'service-desk', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-diagnosis',
          name: 'Diagnosis',
          steps: [
            { id: 'step-2-1', name: 'Check Knowledge Base', time: 10, personaId: 'service-desk', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Replicate Issue', time: 20, personaId: 'l2-support', friction: 'medium', notes: '' },
            { id: 'step-2-3', name: 'Gather Diagnostic Data', time: 15, personaId: 'l2-support', friction: 'low', notes: 'Logs, screenshots, traces' },
            { id: 'step-2-4', name: 'Identify Root Cause', time: 30, personaId: 'l2-support', friction: 'medium', notes: '' },
            { id: 'step-2-5', name: 'Escalate to L3', time: 10, personaId: 'l2-support', friction: 'low', notes: 'If complex' }
          ]
        },
        {
          id: 'stage-resolution',
          name: 'Resolution',
          steps: [
            { id: 'step-3-1', name: 'Identify Fix/Workaround', time: 20, personaId: 'l2-support', friction: 'medium', notes: '' },
            { id: 'step-3-2', name: 'Test Fix in Non-Prod', time: 30, personaId: 'l3-support', friction: 'low', notes: 'If change required' },
            { id: 'step-3-3', name: 'Change Approval', time: 15, personaId: 'change-manager', friction: 'medium', notes: 'Emergency change process' },
            { id: 'step-3-4', name: 'Implement Fix', time: 30, personaId: 'l3-support', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Verify Resolution', time: 15, personaId: 'l2-support', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-closure',
          name: 'Closure',
          steps: [
            { id: 'step-4-1', name: 'Confirm with User', time: 10, personaId: 'service-desk', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Document Resolution', time: 15, personaId: 'l2-support', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Update Knowledge Base', time: 20, personaId: 'l2-support', friction: 'low', notes: 'If new solution' },
            { id: 'step-4-4', name: 'Close Incident', time: 5, personaId: 'service-desk', friction: 'none', notes: '' },
            { id: 'step-4-5', name: 'User Satisfaction Survey', time: 5, personaId: 'user', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-review',
          name: 'Review (Major Incidents)',
          steps: [
            { id: 'step-5-1', name: 'Schedule PIR Meeting', time: 10, personaId: 'incident-manager', friction: 'low', notes: 'Post-Incident Review' },
            { id: 'step-5-2', name: 'Gather Timeline', time: 30, personaId: 'incident-manager', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Conduct PIR', time: 60, personaId: 'incident-manager', friction: 'medium', notes: '' },
            { id: 'step-5-4', name: 'Document Lessons Learned', time: 30, personaId: 'incident-manager', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Create Improvement Actions', time: 20, personaId: 'incident-manager', friction: 'low', notes: '' },
            { id: 'step-5-6', name: 'Track to Completion', time: 30, personaId: 'incident-manager', friction: 'medium', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'user', name: 'End User', salary: 0, isExternal: true },
        { id: 'service-desk', name: 'Service Desk (L1)', salary: 28000, isExternal: false },
        { id: 'l2-support', name: 'L2 Support', salary: 38000, isExternal: false },
        { id: 'l3-support', name: 'L3/Engineering', salary: 55000, isExternal: false },
        { id: 'incident-manager', name: 'Incident Manager', salary: 50000, isExternal: false },
        { id: 'change-manager', name: 'Change Manager', salary: 48000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 500,
        stages: {
          'stage-detection': { dropOff: 0 },
          'stage-diagnosis': { dropOff: 0 },
          'stage-resolution': { dropOff: 0 },
          'stage-closure': { dropOff: 0 },
          'stage-review': { dropOff: 450 }
        }
      }
    }
  },

  // ============================================
  // PATIENT REGISTRATION & ADMISSION (HEALTHCARE)
  // ============================================
  patient_admission: {
    id: 'patient_admission',
    name: 'Patient Registration & Admission',
    description: 'Hospital or clinic patient registration, insurance verification, and admission',
    icon: '🏨',
    industry: 'Healthcare',
    config: {
      title: 'Patient Admission Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-arrival',
          name: 'Arrival & Registration',
          steps: [
            { id: 'step-1-1', name: 'Patient Arrives', time: 5, personaId: 'patient', friction: 'low', notes: 'A&E, outpatient, or planned admission' },
            { id: 'step-1-2', name: 'Check-In at Reception', time: 10, personaId: 'receptionist', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Verify/Update Demographics', time: 10, personaId: 'receptionist', friction: 'medium', notes: 'Address, contact, NOK' },
            { id: 'step-1-4', name: 'Scan/Copy ID Documents', time: 5, personaId: 'receptionist', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Issue Wristband/Patient ID', time: 5, personaId: 'receptionist', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-insurance',
          name: 'Insurance & Eligibility',
          steps: [
            { id: 'step-2-1', name: 'Collect Insurance Details', time: 10, personaId: 'receptionist', friction: 'medium', notes: 'Policy number, insurer' },
            { id: 'step-2-2', name: 'Verify Coverage', time: 15, personaId: 'insurance-coord', friction: 'medium', notes: 'Real-time eligibility check' },
            { id: 'step-2-3', name: 'Check Pre-Authorisation', time: 20, personaId: 'insurance-coord', friction: 'high', notes: 'For planned procedures' },
            { id: 'step-2-4', name: 'Request Auth if Needed', time: 30, personaId: 'insurance-coord', friction: 'high', notes: 'Can delay admission' },
            { id: 'step-2-5', name: 'Confirm Excess/Co-Pay', time: 10, personaId: 'insurance-coord', friction: 'medium', notes: '' },
            { id: 'step-2-6', name: 'Explain Costs to Patient', time: 15, personaId: 'receptionist', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-consent',
          name: 'Consent & Forms',
          steps: [
            { id: 'step-3-1', name: 'Provide Consent Forms', time: 5, personaId: 'receptionist', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Patient Reviews Forms', time: 15, personaId: 'patient', friction: 'medium', notes: 'Treatment consent, privacy, etc.' },
            { id: 'step-3-3', name: 'Sign General Consent', time: 5, personaId: 'patient', friction: 'low', notes: '' },
            { id: 'step-3-4', name: 'Complete Health Questionnaire', time: 15, personaId: 'patient', friction: 'medium', notes: 'Medical history, allergies' },
            { id: 'step-3-5', name: 'Sign Procedure-Specific Consent', time: 10, personaId: 'patient', friction: 'medium', notes: 'With clinician present' },
            { id: 'step-3-6', name: 'Witness Signatures', time: 5, personaId: 'nurse', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-clinical-assessment',
          name: 'Clinical Assessment',
          steps: [
            { id: 'step-4-1', name: 'Nursing Assessment', time: 20, personaId: 'nurse', friction: 'low', notes: 'Vitals, pain, mobility' },
            { id: 'step-4-2', name: 'Medication Reconciliation', time: 15, personaId: 'nurse', friction: 'medium', notes: 'Current medications' },
            { id: 'step-4-3', name: 'Allergy Documentation', time: 10, personaId: 'nurse', friction: 'low', notes: '' },
            { id: 'step-4-4', name: 'Falls Risk Assessment', time: 10, personaId: 'nurse', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'VTE Risk Assessment', time: 10, personaId: 'nurse', friction: 'low', notes: 'Blood clot risk' },
            { id: 'step-4-6', name: 'Nutrition Screening', time: 10, personaId: 'nurse', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-bed-allocation',
          name: 'Bed Allocation',
          steps: [
            { id: 'step-5-1', name: 'Check Bed Availability', time: 10, personaId: 'bed-manager', friction: 'medium', notes: '' },
            { id: 'step-5-2', name: 'Allocate Appropriate Bed', time: 15, personaId: 'bed-manager', friction: 'medium', notes: 'Ward, isolation, specialty' },
            { id: 'step-5-3', name: 'Prepare Bed Space', time: 15, personaId: 'nurse', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Escort Patient to Ward', time: 10, personaId: 'porter', friction: 'none', notes: '' },
            { id: 'step-5-5', name: 'Ward Handover', time: 15, personaId: 'nurse', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-admission-complete',
          name: 'Admission Complete',
          steps: [
            { id: 'step-6-1', name: 'Settle Patient', time: 10, personaId: 'nurse', friction: 'none', notes: 'Orientation, call bell' },
            { id: 'step-6-2', name: 'Enter Admission in PAS', time: 15, personaId: 'receptionist', friction: 'low', notes: 'Patient Admin System' },
            { id: 'step-6-3', name: 'Create Care Plan', time: 20, personaId: 'nurse', friction: 'medium', notes: '' },
            { id: 'step-6-4', name: 'Notify Clinical Team', time: 10, personaId: 'nurse', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Document Admission Complete', time: 10, personaId: 'nurse', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'patient', name: 'Patient', salary: 0, isExternal: true },
        { id: 'receptionist', name: 'Receptionist', salary: 24000, isExternal: false },
        { id: 'insurance-coord', name: 'Insurance Coordinator', salary: 30000, isExternal: false },
        { id: 'nurse', name: 'Nurse', salary: 35000, isExternal: false },
        { id: 'bed-manager', name: 'Bed Manager', salary: 38000, isExternal: false },
        { id: 'porter', name: 'Porter', salary: 22000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 200,
        stages: {
          'stage-arrival': { dropOff: 5 },
          'stage-insurance': { dropOff: 10 },
          'stage-consent': { dropOff: 3 },
          'stage-clinical-assessment': { dropOff: 2 },
          'stage-bed-allocation': { dropOff: 5 },
          'stage-admission-complete': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // EMPLOYEE OFFBOARDING
  // ============================================
  employee_offboarding: {
    id: 'employee_offboarding',
    name: 'Employee Offboarding',
    description: 'Employee exit process including knowledge transfer, access revocation, and final pay',
    icon: '👋',
    industry: 'Human Resources',
    config: {
      title: 'Employee Offboarding Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-notification',
          name: 'Resignation & Notification',
          steps: [
            { id: 'step-1-1', name: 'Employee Submits Resignation', time: 15, personaId: 'leaver', friction: 'medium', notes: 'Or termination initiated' },
            { id: 'step-1-2', name: 'Manager Acknowledgement', time: 20, personaId: 'manager', friction: 'medium', notes: 'Discussion, counteroffer?' },
            { id: 'step-1-3', name: 'Notify HR', time: 10, personaId: 'manager', friction: 'low', notes: '' },
            { id: 'step-1-4', name: 'Confirm Last Working Day', time: 15, personaId: 'hr', friction: 'low', notes: 'Notice period calculation' },
            { id: 'step-1-5', name: 'Create Offboarding Checklist', time: 15, personaId: 'hr', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-knowledge-transfer',
          name: 'Knowledge Transfer',
          steps: [
            { id: 'step-2-1', name: 'Identify Key Knowledge Areas', time: 30, personaId: 'manager', friction: 'medium', notes: '' },
            { id: 'step-2-2', name: 'Document Processes', time: 120, personaId: 'leaver', friction: 'high', notes: 'Often rushed or incomplete' },
            { id: 'step-2-3', name: 'Handover Meetings', time: 60, personaId: 'leaver', friction: 'medium', notes: 'With successor/team' },
            { id: 'step-2-4', name: 'Transfer Project Ownership', time: 45, personaId: 'leaver', friction: 'medium', notes: '' },
            { id: 'step-2-5', name: 'Update Contact Lists', time: 15, personaId: 'leaver', friction: 'low', notes: 'Client/vendor relationships' },
            { id: 'step-2-6', name: 'Handover Documentation Review', time: 30, personaId: 'manager', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-access-revocation',
          name: 'Access & Security',
          steps: [
            { id: 'step-3-1', name: 'List All System Access', time: 20, personaId: 'it', friction: 'medium', notes: 'Applications, shares, tools' },
            { id: 'step-3-2', name: 'Schedule Access Revocation', time: 15, personaId: 'it', friction: 'low', notes: 'Timing with last day' },
            { id: 'step-3-3', name: 'Backup Employee Data', time: 30, personaId: 'it', friction: 'medium', notes: 'Emails, files' },
            { id: 'step-3-4', name: 'Transfer Email/Calendar', time: 20, personaId: 'it', friction: 'low', notes: 'Delegate or auto-reply' },
            { id: 'step-3-5', name: 'Revoke Building Access', time: 10, personaId: 'facilities', friction: 'low', notes: 'Badge, keys, parking' },
            { id: 'step-3-6', name: 'Remove from Distribution Lists', time: 15, personaId: 'it', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-asset-return',
          name: 'Asset Recovery',
          steps: [
            { id: 'step-4-1', name: 'Inventory Assigned Assets', time: 15, personaId: 'it', friction: 'low', notes: 'Laptop, phone, monitors' },
            { id: 'step-4-2', name: 'Collect IT Equipment', time: 20, personaId: 'it', friction: 'medium', notes: '' },
            { id: 'step-4-3', name: 'Wipe/Reimage Devices', time: 30, personaId: 'it', friction: 'low', notes: '' },
            { id: 'step-4-4', name: 'Collect Company Property', time: 15, personaId: 'hr', friction: 'low', notes: 'Credit cards, uniforms, tools' },
            { id: 'step-4-5', name: 'Return Personal Items', time: 15, personaId: 'leaver', friction: 'low', notes: '' },
            { id: 'step-4-6', name: 'Update Asset Register', time: 10, personaId: 'it', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-final-pay',
          name: 'Final Pay & Benefits',
          steps: [
            { id: 'step-5-1', name: 'Calculate Outstanding Leave', time: 20, personaId: 'hr', friction: 'low', notes: 'Pay or deduct' },
            { id: 'step-5-2', name: 'Calculate Final Pay', time: 30, personaId: 'payroll', friction: 'medium', notes: 'Pro-rata, expenses, deductions' },
            { id: 'step-5-3', name: 'Process Benefits Cessation', time: 20, personaId: 'hr', friction: 'low', notes: 'Pension, healthcare, etc.' },
            { id: 'step-5-4', name: 'Issue P45', time: 15, personaId: 'payroll', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Provide Pension Options', time: 15, personaId: 'hr', friction: 'low', notes: 'Transfer, leave, withdraw' },
            { id: 'step-5-6', name: 'Final Payslip', time: 10, personaId: 'payroll', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-exit',
          name: 'Exit & Closure',
          steps: [
            { id: 'step-6-1', name: 'Conduct Exit Interview', time: 30, personaId: 'hr', friction: 'low', notes: 'Valuable feedback' },
            { id: 'step-6-2', name: 'Reference Agreement', time: 15, personaId: 'hr', friction: 'low', notes: 'What will be provided' },
            { id: 'step-6-3', name: 'Issue Reference Letter', time: 20, personaId: 'hr', friction: 'low', notes: 'If requested' },
            { id: 'step-6-4', name: 'Update HRIS', time: 15, personaId: 'hr', friction: 'low', notes: 'Mark as leaver' },
            { id: 'step-6-5', name: 'Add to Alumni Network', time: 10, personaId: 'hr', friction: 'none', notes: 'If applicable' },
            { id: 'step-6-6', name: 'Farewell Communication', time: 15, personaId: 'manager', friction: 'none', notes: 'Team announcement' }
          ]
        }
      ],
      personas: [
        { id: 'leaver', name: 'Departing Employee', salary: 0, isExternal: false },
        { id: 'manager', name: 'Manager', salary: 55000, isExternal: false },
        { id: 'hr', name: 'HR', salary: 38000, isExternal: false },
        { id: 'it', name: 'IT Support', salary: 35000, isExternal: false },
        { id: 'payroll', name: 'Payroll', salary: 32000, isExternal: false },
        { id: 'facilities', name: 'Facilities', salary: 28000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 50,
        stages: {
          'stage-notification': { dropOff: 5 },
          'stage-knowledge-transfer': { dropOff: 0 },
          'stage-access-revocation': { dropOff: 0 },
          'stage-asset-return': { dropOff: 0 },
          'stage-final-pay': { dropOff: 0 },
          'stage-exit': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // CLIENT INTAKE - LAW FIRM
  // ============================================
  law_firm_intake: {
    id: 'law_firm_intake',
    name: 'Client Intake (Law Firm)',
    description: 'Legal client onboarding with conflict checks, engagement letters, and AML/KYC',
    icon: '⚖️',
    industry: 'Legal & Professional Services',
    config: {
      title: 'Legal Client Intake Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-enquiry',
          name: 'Initial Enquiry',
          steps: [
            { id: 'step-1-1', name: 'Enquiry Received', time: 10, personaId: 'client', friction: 'low', notes: 'Phone, email, referral, website' },
            { id: 'step-1-2', name: 'Log in CRM/PMS', time: 10, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-1-3', name: 'Initial Conflict Check', time: 15, personaId: 'accounts', friction: 'low', notes: 'Basic name search' },
            { id: 'step-1-4', name: 'Allocate to Fee Earner', time: 10, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Acknowledge Enquiry', time: 10, personaId: 'accounts', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-consultation',
          name: 'Initial Consultation',
          steps: [
            { id: 'step-2-1', name: 'Schedule Consultation', time: 15, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Send Pre-Meeting Info Request', time: 10, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-2-3', name: 'Client Provides Background', time: 30, personaId: 'client', friction: 'medium', notes: '' },
            { id: 'step-2-4', name: 'Initial Consultation', time: 60, personaId: 'partner', friction: 'none', notes: 'Understand matter, assess merits' },
            { id: 'step-2-5', name: 'Confirm Interest to Proceed', time: 15, personaId: 'partner', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-conflict',
          name: 'Conflict Check',
          steps: [
            { id: 'step-3-1', name: 'Full Conflict Search', time: 30, personaId: 'compliance', friction: 'medium', notes: 'All parties, related entities' },
            { id: 'step-3-2', name: 'Review Historical Matters', time: 20, personaId: 'compliance', friction: 'medium', notes: '' },
            { id: 'step-3-3', name: 'Check for Potential Conflicts', time: 20, personaId: 'compliance', friction: 'medium', notes: 'Current clients, opponents' },
            { id: 'step-3-4', name: 'Partner Review', time: 15, personaId: 'partner', friction: 'low', notes: 'Sign-off on conflicts' },
            { id: 'step-3-5', name: 'Obtain Conflict Waiver', time: 30, personaId: 'partner', friction: 'high', notes: 'If conflict identified' },
            { id: 'step-3-6', name: 'Document Conflict Clearance', time: 15, personaId: 'compliance', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-aml-kyc',
          name: 'AML & KYC',
          steps: [
            { id: 'step-4-1', name: 'Send ID Request to Client', time: 10, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-4-2', name: 'Client Provides ID Documents', time: 30, personaId: 'client', friction: 'high', notes: 'Passport, proof of address' },
            { id: 'step-4-3', name: 'Electronic Verification', time: 15, personaId: 'compliance', friction: 'low', notes: 'ID verification service' },
            { id: 'step-4-4', name: 'Source of Funds Check', time: 30, personaId: 'compliance', friction: 'high', notes: 'Especially for property/high value' },
            { id: 'step-4-5', name: 'PEP & Sanctions Screening', time: 15, personaId: 'compliance', friction: 'low', notes: '' },
            { id: 'step-4-6', name: 'Risk Assessment', time: 20, personaId: 'compliance', friction: 'medium', notes: '' },
            { id: 'step-4-7', name: 'MLRO Sign-Off', time: 15, personaId: 'compliance', friction: 'low', notes: 'Money Laundering Reporting Officer' }
          ]
        },
        {
          id: 'stage-engagement',
          name: 'Engagement & Terms',
          steps: [
            { id: 'step-5-1', name: 'Prepare Fee Estimate', time: 30, personaId: 'associate', friction: 'medium', notes: '' },
            { id: 'step-5-2', name: 'Draft Engagement Letter', time: 30, personaId: 'associate', friction: 'low', notes: 'Terms, scope, fees' },
            { id: 'step-5-3', name: 'Partner Review & Approval', time: 15, personaId: 'partner', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Send to Client', time: 10, personaId: 'accounts', friction: 'none', notes: '' },
            { id: 'step-5-5', name: 'Client Reviews Terms', time: 30, personaId: 'client', friction: 'medium', notes: '' },
            { id: 'step-5-6', name: 'Negotiate Terms', time: 30, personaId: 'partner', friction: 'medium', notes: 'If required' },
            { id: 'step-5-7', name: 'Client Signs Engagement', time: 15, personaId: 'client', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-matter-setup',
          name: 'Matter Setup',
          steps: [
            { id: 'step-6-1', name: 'Open Matter in PMS', time: 20, personaId: 'accounts', friction: 'low', notes: 'Practice Management System' },
            { id: 'step-6-2', name: 'Request Money on Account', time: 15, personaId: 'accounts', friction: 'medium', notes: '' },
            { id: 'step-6-3', name: 'Client Pays Retainer', time: 20, personaId: 'client', friction: 'medium', notes: '' },
            { id: 'step-6-4', name: 'Allocate Client Account Funds', time: 15, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-6-5', name: 'Create Document Folder', time: 10, personaId: 'accounts', friction: 'low', notes: '' },
            { id: 'step-6-6', name: 'Send Welcome Pack', time: 15, personaId: 'accounts', friction: 'none', notes: 'Key contacts, client portal' },
            { id: 'step-6-7', name: 'Schedule Kick-Off Meeting', time: 15, personaId: 'associate', friction: 'low', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'client', name: 'Client', salary: 0, isExternal: true },
        { id: 'partner', name: 'Partner', salary: 150000, isExternal: false },
        { id: 'associate', name: 'Associate', salary: 65000, isExternal: false },
        { id: 'compliance', name: 'Compliance/MLRO', salary: 55000, isExternal: false },
        { id: 'accounts', name: 'Accounts/Admin', salary: 30000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-enquiry': { dropOff: 30 },
          'stage-consultation': { dropOff: 15 },
          'stage-conflict': { dropOff: 5 },
          'stage-aml-kyc': { dropOff: 5 },
          'stage-engagement': { dropOff: 8 },
          'stage-matter-setup': { dropOff: 2 }
        }
      }
    }
  },

  // ============================================
  // CONTRACT LIFECYCLE
  // ============================================
  contract_lifecycle: {
    id: 'contract_lifecycle',
    name: 'Contract Lifecycle',
    description: 'Contract creation, negotiation, approval, and execution',
    icon: '📝',
    industry: 'Legal & Professional Services',
    config: {
      title: 'Contract Lifecycle Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-request',
          name: 'Contract Request',
          steps: [
            { id: 'step-1-1', name: 'Business Request Submitted', time: 15, personaId: 'requestor', friction: 'low', notes: 'Via form, email, or system' },
            { id: 'step-1-2', name: 'Provide Business Context', time: 20, personaId: 'requestor', friction: 'medium', notes: 'Deal terms, timeline, value' },
            { id: 'step-1-3', name: 'Initial Legal Triage', time: 15, personaId: 'legal', friction: 'low', notes: 'Complexity assessment' },
            { id: 'step-1-4', name: 'Assign to Legal Resource', time: 10, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-1-5', name: 'Confirm Timeline', time: 10, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-drafting',
          name: 'Drafting',
          steps: [
            { id: 'step-2-1', name: 'Select Contract Template', time: 10, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-2-2', name: 'Customise Key Terms', time: 45, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-2-3', name: 'Add Special Clauses', time: 30, personaId: 'legal', friction: 'medium', notes: 'Deal-specific provisions' },
            { id: 'step-2-4', name: 'Internal Legal Review', time: 30, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-2-5', name: 'Business Review', time: 30, personaId: 'requestor', friction: 'medium', notes: 'Confirm commercial terms' },
            { id: 'step-2-6', name: 'Incorporate Feedback', time: 20, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-negotiation',
          name: 'Negotiation',
          steps: [
            { id: 'step-3-1', name: 'Send Draft to Counterparty', time: 10, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-3-2', name: 'Counterparty Review', time: 120, personaId: 'counterparty', friction: 'medium', notes: 'Often slow' },
            { id: 'step-3-3', name: 'Receive Redline/Comments', time: 10, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-3-4', name: 'Review Counterparty Changes', time: 45, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-3-5', name: 'Consult Business on Positions', time: 30, personaId: 'requestor', friction: 'medium', notes: '' },
            { id: 'step-3-6', name: 'Prepare Counter-Proposal', time: 30, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-3-7', name: 'Negotiate Key Issues', time: 60, personaId: 'legal', friction: 'high', notes: 'Calls, emails, iterations' }
          ]
        },
        {
          id: 'stage-approval',
          name: 'Internal Approval',
          steps: [
            { id: 'step-4-1', name: 'Prepare Approval Summary', time: 20, personaId: 'legal', friction: 'low', notes: 'Key terms, deviations' },
            { id: 'step-4-2', name: 'Business Owner Approval', time: 20, personaId: 'requestor', friction: 'low', notes: '' },
            { id: 'step-4-3', name: 'Finance Approval', time: 30, personaId: 'finance', friction: 'medium', notes: 'If above threshold' },
            { id: 'step-4-4', name: 'Procurement Review', time: 25, personaId: 'procurement', friction: 'medium', notes: 'For vendor contracts' },
            { id: 'step-4-5', name: 'Senior/Executive Approval', time: 30, personaId: 'executive', friction: 'medium', notes: 'If above value threshold' },
            { id: 'step-4-6', name: 'Legal Final Sign-Off', time: 15, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-execution',
          name: 'Execution',
          steps: [
            { id: 'step-5-1', name: 'Prepare Final Version', time: 15, personaId: 'legal', friction: 'low', notes: 'Clean copy, signature blocks' },
            { id: 'step-5-2', name: 'Send for Our Signature', time: 10, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-5-3', name: 'Internal Signatory Signs', time: 20, personaId: 'signatory', friction: 'low', notes: '' },
            { id: 'step-5-4', name: 'Send to Counterparty', time: 10, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-5-5', name: 'Counterparty Signature', time: 60, personaId: 'counterparty', friction: 'medium', notes: '' },
            { id: 'step-5-6', name: 'Obtain Fully Executed Copy', time: 15, personaId: 'legal', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-post-execution',
          name: 'Post-Execution',
          steps: [
            { id: 'step-6-1', name: 'Store in Contract Repository', time: 15, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-6-2', name: 'Update Contract Register', time: 10, personaId: 'legal', friction: 'low', notes: 'Key dates, obligations' },
            { id: 'step-6-3', name: 'Set Renewal Reminders', time: 10, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-6-4', name: 'Notify Stakeholders', time: 15, personaId: 'legal', friction: 'none', notes: '' },
            { id: 'step-6-5', name: 'Handover to Contract Owner', time: 20, personaId: 'legal', friction: 'low', notes: '' },
            { id: 'step-6-6', name: 'Close Request', time: 5, personaId: 'legal', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'counterparty', name: 'Counterparty', salary: 0, isExternal: true },
        { id: 'requestor', name: 'Business Requestor', salary: 50000, isExternal: false },
        { id: 'legal', name: 'Legal Counsel', salary: 75000, isExternal: false },
        { id: 'finance', name: 'Finance', salary: 55000, isExternal: false },
        { id: 'procurement', name: 'Procurement', salary: 45000, isExternal: false },
        { id: 'executive', name: 'Executive Approver', salary: 120000, isExternal: false },
        { id: 'signatory', name: 'Authorised Signatory', salary: 100000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 100,
        stages: {
          'stage-request': { dropOff: 5 },
          'stage-drafting': { dropOff: 3 },
          'stage-negotiation': { dropOff: 15 },
          'stage-approval': { dropOff: 5 },
          'stage-execution': { dropOff: 2 },
          'stage-post-execution': { dropOff: 0 }
        }
      }
    }
  },

  // ============================================
  // ENTERPRISE SALES CYCLE
  // ============================================
  enterprise_sales: {
    id: 'enterprise_sales',
    name: 'Enterprise Sales Cycle',
    description: 'B2B enterprise sales from lead to closed deal',
    icon: '🤝',
    industry: 'B2B / SaaS',
    config: {
      title: 'Enterprise Sales Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-prospecting',
          name: 'Prospecting',
          steps: [
            { id: 'step-1-1', name: 'Lead Identified', time: 15, personaId: 'sdr', friction: 'low', notes: 'Inbound or outbound' },
            { id: 'step-1-2', name: 'Research Account', time: 30, personaId: 'sdr', friction: 'low', notes: 'Company, stakeholders, needs' },
            { id: 'step-1-3', name: 'Initial Outreach', time: 20, personaId: 'sdr', friction: 'medium', notes: 'Email, call, LinkedIn' },
            { id: 'step-1-4', name: 'Follow-Up Sequence', time: 45, personaId: 'sdr', friction: 'medium', notes: 'Multi-touch campaign' },
            { id: 'step-1-5', name: 'Book Discovery Call', time: 15, personaId: 'sdr', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-discovery',
          name: 'Discovery',
          steps: [
            { id: 'step-2-1', name: 'Discovery Call', time: 45, personaId: 'ae', friction: 'none', notes: 'Understand needs, pain, timeline' },
            { id: 'step-2-2', name: 'Identify Stakeholders', time: 20, personaId: 'ae', friction: 'medium', notes: 'Decision makers, influencers' },
            { id: 'step-2-3', name: 'Qualify Opportunity', time: 20, personaId: 'ae', friction: 'low', notes: 'BANT, MEDDIC, etc.' },
            { id: 'step-2-4', name: 'Technical Requirements', time: 30, personaId: 'se', friction: 'medium', notes: 'Integrations, security, scale' },
            { id: 'step-2-5', name: 'Document in CRM', time: 15, personaId: 'ae', friction: 'low', notes: '' }
          ]
        },
        {
          id: 'stage-demo',
          name: 'Demo & Evaluation',
          steps: [
            { id: 'step-3-1', name: 'Prepare Custom Demo', time: 60, personaId: 'se', friction: 'medium', notes: 'Tailored to use case' },
            { id: 'step-3-2', name: 'Deliver Demo', time: 60, personaId: 'ae', friction: 'none', notes: 'With technical support' },
            { id: 'step-3-3', name: 'Handle Technical Q&A', time: 30, personaId: 'se', friction: 'medium', notes: '' },
            { id: 'step-3-4', name: 'Provide POC/Trial', time: 120, personaId: 'se', friction: 'high', notes: 'If required' },
            { id: 'step-3-5', name: 'Reference Call', time: 45, personaId: 'ae', friction: 'medium', notes: 'Connect with existing customer' },
            { id: 'step-3-6', name: 'Security Review', time: 60, personaId: 'se', friction: 'high', notes: 'Complete security questionnaire' }
          ]
        },
        {
          id: 'stage-proposal',
          name: 'Proposal',
          steps: [
            { id: 'step-4-1', name: 'Develop Solution Proposal', time: 60, personaId: 'ae', friction: 'medium', notes: '' },
            { id: 'step-4-2', name: 'Build Pricing', time: 30, personaId: 'ae', friction: 'medium', notes: 'Discounts, terms' },
            { id: 'step-4-3', name: 'Internal Deal Review', time: 30, personaId: 'sales-mgr', friction: 'low', notes: 'Discount approval' },
            { id: 'step-4-4', name: 'Present Proposal', time: 60, personaId: 'ae', friction: 'medium', notes: '' },
            { id: 'step-4-5', name: 'Handle Objections', time: 45, personaId: 'ae', friction: 'high', notes: '' },
            { id: 'step-4-6', name: 'Negotiate Terms', time: 60, personaId: 'ae', friction: 'high', notes: '' }
          ]
        },
        {
          id: 'stage-procurement',
          name: 'Procurement',
          steps: [
            { id: 'step-5-1', name: 'Engage Procurement', time: 30, personaId: 'prospect', friction: 'high', notes: 'New stakeholder appears' },
            { id: 'step-5-2', name: 'Complete Vendor Forms', time: 60, personaId: 'ae', friction: 'high', notes: '' },
            { id: 'step-5-3', name: 'Contract Negotiation', time: 120, personaId: 'legal', friction: 'high', notes: 'T&Cs, liability, SLAs' },
            { id: 'step-5-4', name: 'Legal Review (Ours)', time: 45, personaId: 'legal', friction: 'medium', notes: '' },
            { id: 'step-5-5', name: 'Legal Review (Theirs)', time: 90, personaId: 'prospect', friction: 'high', notes: 'Often causes delays' },
            { id: 'step-5-6', name: 'Finalise Contract', time: 30, personaId: 'legal', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-close',
          name: 'Close',
          steps: [
            { id: 'step-6-1', name: 'Obtain Internal Approval', time: 30, personaId: 'prospect', friction: 'medium', notes: 'Budget sign-off' },
            { id: 'step-6-2', name: 'Contract Signature', time: 30, personaId: 'ae', friction: 'low', notes: '' },
            { id: 'step-6-3', name: 'Process Order', time: 20, personaId: 'ae', friction: 'low', notes: '' },
            { id: 'step-6-4', name: 'Issue Invoice', time: 15, personaId: 'finance', friction: 'low', notes: '' },
            { id: 'step-6-5', name: 'Handover to CSM', time: 30, personaId: 'ae', friction: 'low', notes: 'Implementation kickoff' },
            { id: 'step-6-6', name: 'Update CRM - Won', time: 10, personaId: 'ae', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'prospect', name: 'Prospect', salary: 0, isExternal: true },
        { id: 'sdr', name: 'SDR (Sales Dev Rep)', salary: 35000, isExternal: false },
        { id: 'ae', name: 'Account Executive', salary: 65000, isExternal: false },
        { id: 'se', name: 'Solutions Engineer', salary: 70000, isExternal: false },
        { id: 'sales-mgr', name: 'Sales Manager', salary: 90000, isExternal: false },
        { id: 'legal', name: 'Legal', salary: 75000, isExternal: false },
        { id: 'finance', name: 'Finance', salary: 45000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 500,
        stages: {
          'stage-prospecting': { dropOff: 350 },
          'stage-discovery': { dropOff: 50 },
          'stage-demo': { dropOff: 30 },
          'stage-proposal': { dropOff: 25 },
          'stage-procurement': { dropOff: 15 },
          'stage-close': { dropOff: 5 }
        }
      }
    }
  },

  // ============================================
  // PERMIT / LICENSE APPLICATION
  // ============================================
  permit_application: {
    id: 'permit_application',
    name: 'Permit/License Application',
    description: 'Government permit or license application from submission to issuance',
    icon: '🏛️',
    industry: 'Public Sector / Government',
    config: {
      title: 'Permit Application Journey',
      currency: '£',
      stages: [
        {
          id: 'stage-preparation',
          name: 'Preparation',
          steps: [
            { id: 'step-1-1', name: 'Identify Permit Required', time: 30, personaId: 'applicant', friction: 'medium', notes: 'Research requirements' },
            { id: 'step-1-2', name: 'Review Eligibility Criteria', time: 20, personaId: 'applicant', friction: 'medium', notes: '' },
            { id: 'step-1-3', name: 'Gather Required Documents', time: 90, personaId: 'applicant', friction: 'high', notes: 'Certificates, plans, reports' },
            { id: 'step-1-4', name: 'Complete Pre-Requisites', time: 60, personaId: 'applicant', friction: 'high', notes: 'Training, inspections, etc.' },
            { id: 'step-1-5', name: 'Pre-Application Consultation', time: 45, personaId: 'case-officer', friction: 'medium', notes: 'If offered' }
          ]
        },
        {
          id: 'stage-submission',
          name: 'Submission',
          steps: [
            { id: 'step-2-1', name: 'Complete Application Form', time: 45, personaId: 'applicant', friction: 'high', notes: 'Often complex, multi-section' },
            { id: 'step-2-2', name: 'Attach Supporting Documents', time: 20, personaId: 'applicant', friction: 'medium', notes: '' },
            { id: 'step-2-3', name: 'Pay Application Fee', time: 15, personaId: 'applicant', friction: 'low', notes: '' },
            { id: 'step-2-4', name: 'Submit Application', time: 10, personaId: 'applicant', friction: 'low', notes: 'Online, post, or in person' },
            { id: 'step-2-5', name: 'Receive Acknowledgement', time: 5, personaId: 'admin', friction: 'none', notes: 'Reference number issued' }
          ]
        },
        {
          id: 'stage-validation',
          name: 'Validation',
          steps: [
            { id: 'step-3-1', name: 'Check Application Completeness', time: 20, personaId: 'admin', friction: 'low', notes: '' },
            { id: 'step-3-2', name: 'Verify Fee Payment', time: 10, personaId: 'admin', friction: 'none', notes: '' },
            { id: 'step-3-3', name: 'Request Missing Information', time: 30, personaId: 'admin', friction: 'high', notes: 'Common delay point' },
            { id: 'step-3-4', name: 'Applicant Provides Info', time: 60, personaId: 'applicant', friction: 'high', notes: '' },
            { id: 'step-3-5', name: 'Validate Application', time: 15, personaId: 'admin', friction: 'low', notes: '' },
            { id: 'step-3-6', name: 'Assign to Case Officer', time: 10, personaId: 'admin', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-assessment',
          name: 'Assessment',
          steps: [
            { id: 'step-4-1', name: 'Review Application', time: 45, personaId: 'case-officer', friction: 'medium', notes: '' },
            { id: 'step-4-2', name: 'Site Visit/Inspection', time: 60, personaId: 'inspector', friction: 'medium', notes: 'If required' },
            { id: 'step-4-3', name: 'Consultation Period', time: 90, personaId: 'case-officer', friction: 'low', notes: 'Statutory consultees, public' },
            { id: 'step-4-4', name: 'Collate Consultation Responses', time: 30, personaId: 'case-officer', friction: 'low', notes: '' },
            { id: 'step-4-5', name: 'Request Additional Info', time: 30, personaId: 'case-officer', friction: 'high', notes: 'If issues identified' },
            { id: 'step-4-6', name: 'Technical Assessment', time: 60, personaId: 'case-officer', friction: 'medium', notes: 'Against policy/criteria' },
            { id: 'step-4-7', name: 'Prepare Officer Report', time: 45, personaId: 'case-officer', friction: 'medium', notes: '' }
          ]
        },
        {
          id: 'stage-decision',
          name: 'Decision',
          steps: [
            { id: 'step-5-1', name: 'Quality Review', time: 30, personaId: 'senior-officer', friction: 'low', notes: '' },
            { id: 'step-5-2', name: 'Committee/Panel Review', time: 60, personaId: 'approver', friction: 'medium', notes: 'If not delegated' },
            { id: 'step-5-3', name: 'Make Decision', time: 20, personaId: 'approver', friction: 'low', notes: 'Approve, refuse, conditions' },
            { id: 'step-5-4', name: 'Draft Decision Notice', time: 30, personaId: 'case-officer', friction: 'low', notes: '' },
            { id: 'step-5-5', name: 'Issue Decision Notice', time: 15, personaId: 'admin', friction: 'none', notes: '' }
          ]
        },
        {
          id: 'stage-post-decision',
          name: 'Post-Decision',
          steps: [
            { id: 'step-6-1', name: 'Applicant Receives Decision', time: 10, personaId: 'applicant', friction: 'low', notes: '' },
            { id: 'step-6-2', name: 'Issue Permit/License', time: 20, personaId: 'admin', friction: 'low', notes: 'If approved' },
            { id: 'step-6-3', name: 'Add to Register', time: 15, personaId: 'admin', friction: 'low', notes: '' },
            { id: 'step-6-4', name: 'Schedule Compliance Check', time: 15, personaId: 'case-officer', friction: 'low', notes: 'If conditions apply' },
            { id: 'step-6-5', name: 'Handle Appeal', time: 120, personaId: 'case-officer', friction: 'high', notes: 'If refused and appealed' },
            { id: 'step-6-6', name: 'Close Case', time: 10, personaId: 'admin', friction: 'none', notes: '' }
          ]
        }
      ],
      personas: [
        { id: 'applicant', name: 'Applicant', salary: 0, isExternal: true },
        { id: 'admin', name: 'Admin Officer', salary: 26000, isExternal: false },
        { id: 'case-officer', name: 'Case Officer', salary: 38000, isExternal: false },
        { id: 'inspector', name: 'Inspector', salary: 42000, isExternal: false },
        { id: 'senior-officer', name: 'Senior Officer', salary: 48000, isExternal: false },
        { id: 'approver', name: 'Decision Maker/Panel', salary: 55000, isExternal: false }
      ],
      funnelConfig: {
        enabled: true,
        startVolume: 200,
        stages: {
          'stage-preparation': { dropOff: 40 },
          'stage-submission': { dropOff: 10 },
          'stage-validation': { dropOff: 15 },
          'stage-assessment': { dropOff: 5 },
          'stage-decision': { dropOff: 25 },
          'stage-post-decision': { dropOff: 5 }
        }
      }
    }
  }

};

// Export for use in application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JOURNEY_TEMPLATES;
}
