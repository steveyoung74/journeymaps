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
  }

};

// Export for use in application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = JOURNEY_TEMPLATES;
}
