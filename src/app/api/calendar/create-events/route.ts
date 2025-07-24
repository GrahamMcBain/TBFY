import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

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

function getRandomMeeting(role: string): string {
  const templates = meetingTemplates[role as keyof typeof meetingTemplates];
  if (!templates) return 'Team Meeting';
  
  return templates[Math.floor(Math.random() * templates.length)];
}

function getPSTDateTime(date: Date, hour: number): string {
  const pstOffset = -8; // PST is UTC-8
  const utcTime = new Date(date);
  utcTime.setHours(hour + Math.abs(pstOffset), 0, 0, 0);
  return utcTime.toISOString();
}

export async function POST(request: NextRequest) {
  try {
    const { accessToken, role } = await request.json();

    if (!accessToken || !role) {
      return NextResponse.json({ error: 'Missing access token or role' }, { status: 400 });
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: 'v3', auth });

    // Create events for the next 30 days, Monday-Friday, 11am-2pm PST
    const events = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      const dayOfWeek = date.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;

      // Create 3 events for the TBPN window (11am-2pm PST)
      const eventTimes = [
        { start: 11, end: 12 },   // 11am-12pm
        { start: 12, end: 13 },   // 12pm-1pm  
        { start: 13, end: 14 }    // 1pm-2pm
      ];

      for (const timeSlot of eventTimes) {
        const event = {
          summary: getRandomMeeting(role),
          description: 'Protecting TBPN viewing time 📺',
          start: {
            dateTime: getPSTDateTime(date, timeSlot.start),
            timeZone: 'America/Los_Angeles',
          },
          end: {
            dateTime: getPSTDateTime(date, timeSlot.end),
            timeZone: 'America/Los_Angeles',
          },
          transparency: 'opaque', // Shows as busy
          visibility: 'private',
        };

        try {
          const response = await calendar.events.insert({
            calendarId: 'primary',
            requestBody: event,
          });
          events.push(response.data);
        } catch (error) {
          console.error('Error creating event:', error);
        }
      }
    }

    return NextResponse.json({ 
      success: true, 
      eventsCreated: events.length,
      message: `Created ${events.length} TBFY protection events for the next 30 days!` 
    });

  } catch (error) {
    console.error('Error creating calendar events:', error);
    return NextResponse.json({ error: 'Failed to create calendar events' }, { status: 500 });
  }
}
