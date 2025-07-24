'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const jobRoles = [
  'Software Engineer',
  'Product Manager',
  'Designer',
  'Marketing Manager',
  'Sales Representative',
  'Data Analyst',
  'Operations Manager',
  'Customer Success Manager',
  'Finance Manager',
  'HR Manager'
];

const meetingTemplates = {
  'Software Engineer': [
    'Code Review Session',
    'Sprint Planning',
    'Technical Architecture Discussion',
    'Bug Triage Meeting',
    'API Design Review'
  ],
  'Product Manager': [
    'Product Strategy Meeting',
    'User Research Review',
    'Stakeholder Alignment',
    'Feature Planning Session',
    'Market Analysis Discussion'
  ],
  'Designer': [
    'Design Review',
    'User Experience Research',
    'Creative Brainstorming',
    'Design System Meeting',
    'Prototype Review Session'
  ],
  'Marketing Manager': [
    'Campaign Strategy Meeting',
    'Brand Review Session',
    'Marketing Analytics Review',
    'Content Planning Meeting',
    'Social Media Strategy'
  ],
  'Sales Representative': [
    'Client Strategy Meeting',
    'Sales Pipeline Review',
    'Proposal Development',
    'Territory Planning',
    'Customer Relationship Review'
  ],
  'Data Analyst': [
    'Data Review Meeting',
    'Analytics Strategy Session',
    'Report Planning Meeting',
    'Database Optimization',
    'KPI Review Session'
  ],
  'Operations Manager': [
    'Process Improvement Meeting',
    'Operational Review',
    'Workflow Optimization',
    'Resource Planning Session',
    'Quality Assurance Review'
  ],
  'Customer Success Manager': [
    'Customer Health Review',
    'Account Strategy Meeting',
    'Onboarding Planning',
    'Renewal Strategy Session',
    'Customer Feedback Review'
  ],
  'Finance Manager': [
    'Budget Review Meeting',
    'Financial Planning Session',
    'Cost Analysis Review',
    'Investment Strategy Meeting',
    'Risk Assessment Discussion'
  ],
  'HR Manager': [
    'Talent Strategy Meeting',
    'Performance Review Planning',
    'Team Development Session',
    'Recruitment Strategy',
    'Employee Engagement Review'
  ]
};

export default function Setup() {
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = searchParams.get('access_token');
    const email = searchParams.get('email');
    
    if (token) setAccessToken(token);
    if (email) setUserEmail(email);
  }, [searchParams]);

  const createTBFYEvents = async () => {
    if (!selectedRole || !accessToken) return;

    setIsCreating(true);
    
    try {
      const response = await fetch('/api/calendar/create-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accessToken,
          role: selectedRole,
        }),
      });

      if (response.ok) {
        setIsComplete(true);
      } else {
        throw new Error('Failed to create calendar events');
      }
    } catch (error) {
      console.error('Error creating events:', error);
      alert('Error creating calendar events. Please try again.');
    } finally {
      setIsCreating(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="text-6xl mb-8">🎉</div>
          <h1 className="text-4xl font-bold mb-4">TBFY Protection Activated!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your calendar is now protected from 11am-2pm PST with realistic {selectedRole} meetings.
          </p>
          <p className="text-gray-400 mb-8">
            Enjoy uninterrupted TBPN viewing! Your meetings will automatically appear on your calendar.
          </p>
          <a 
            href="/"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black mb-4">TBFY</h1>
          <p className="text-xl text-gray-300">Set up your calendar protection</p>
          {userEmail && (
            <p className="text-gray-400 mt-2">Signed in as: {userEmail}</p>
          )}
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Choose Your Job Role</h2>
          <p className="text-gray-400 mb-6">
            Select your role to generate realistic meeting titles for your TBPN protection time.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {jobRoles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`p-4 rounded-lg text-left transition-colors duration-200 ${
                  selectedRole === role
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {selectedRole && (
            <div className="mb-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Preview: Your Meeting Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {meetingTemplates[selectedRole as keyof typeof meetingTemplates]?.map((meeting, index) => (
                  <div key={index} className="text-sm text-gray-400 flex items-center">
                    <span className="mr-2">📅</span>
                    {meeting}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              onClick={createTBFYEvents}
              disabled={!selectedRole || isCreating || !accessToken}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              {isCreating ? 'Creating Protection...' : 'Protect My Calendar'}
            </button>
            <p className="text-gray-400 text-sm mt-4">
              This will create recurring meetings from 11am-2pm PST to protect your TBPN viewing time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
