import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const { accessToken } = await request.json();

    if (!accessToken) {
      return NextResponse.json({ error: 'Missing access token' }, { status: 400 });
    }

    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const calendar = google.calendar({ version: 'v3', auth });

    // Get all events from the next 30 days
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + 30);

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      timeMax: futureDate.toISOString(),
      q: 'TBFY Built with Ampcode.com', // Search for events with our unique description
      maxResults: 1000,
    });

    const events = response.data.items || [];
    let deletedCount = 0;

    // Delete each TBFY event
    for (const event of events) {
      if (event.id && event.description?.includes('TBFY Built with Ampcode.com')) {
        try {
          await calendar.events.delete({
            calendarId: 'primary',
            eventId: event.id,
          });
          deletedCount++;
        } catch (error) {
          console.error('Error deleting event:', event.id, error);
        }
      }
    }

    return NextResponse.json({
      success: true,
      eventsDeleted: deletedCount,
      message: `Successfully removed ${deletedCount} TBFY protection events from your calendar!`
    });

  } catch (error) {
    console.error('Error deleting calendar events:', error);
    return NextResponse.json({ error: 'Failed to delete calendar events' }, { status: 500 });
  }
}
