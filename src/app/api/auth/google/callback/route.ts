import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/auth/google/callback`
);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL('/?error=access_denied', request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/?error=no_code', request.url));
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user info to verify authentication
    const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
    const userInfo = await oauth2.userinfo.get();

    // In a real app, you'd store tokens in a database or session
    // For demo purposes, we'll redirect to a setup page with the tokens in URL params (not recommended for production)
    const setupUrl = new URL('/setup', request.url);
    setupUrl.searchParams.set('access_token', tokens.access_token || '');
    setupUrl.searchParams.set('refresh_token', tokens.refresh_token || '');
    setupUrl.searchParams.set('email', userInfo.data.email || '');

    return NextResponse.redirect(setupUrl);
  } catch (error) {
    console.error('Error exchanging code for tokens:', error);
    return NextResponse.redirect(new URL('/?error=auth_failed', request.url));
  }
}
