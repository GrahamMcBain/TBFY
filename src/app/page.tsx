'use client';

import { useState } from 'react';

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);

  const handleGetStarted = async () => {
    setShowAuth(true);
    try {
      // Get Google OAuth URL
      const response = await fetch('/api/auth/google/url');
      const data = await response.json();
      
      if (data.authUrl) {
        // Redirect to Google OAuth
        window.location.href = data.authUrl;
      } else {
        throw new Error('No auth URL received');
      }
    } catch (error) {
      console.error('Error starting auth:', error);
      alert('Error starting authentication. Please make sure environment variables are configured.');
      setShowAuth(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Grid Pattern Background - Exact TBPN Style */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          {/* Plus symbol grid pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at center, #00ff96 1px, transparent 1px),
                radial-gradient(circle at center, #00ff96 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
            }}
          />
          {/* Green accent bars like TBPN */}
          <div className="absolute top-16 left-1/4 w-64 h-32 bg-emerald-600 opacity-80 rounded-sm"></div>
          <div className="absolute top-20 left-1/3 w-48 h-24 bg-emerald-500 opacity-60 rounded-sm"></div>
          <div className="absolute top-24 left-1/2 w-32 h-16 bg-emerald-400 opacity-40 rounded-sm"></div>
        </div>
      </div>

      {/* Built with Amp */}
      <div className="absolute top-4 right-4 flex items-center space-x-2 text-gray-400 text-sm">
        <span>Built with</span>
        <a 
          href="https://ampcode.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://ampcode.com/amp-mark-color.svg" 
            alt="Amp" 
            className="w-4 h-4"
          />
        </a>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Hero Section - TBFY Logo */}
        <div className="flex items-center justify-center h-96 px-4">
          <div className="text-center">
            <h1 className="text-9xl md:text-[12rem] font-black tracking-tighter text-white drop-shadow-2xl">
              TBFY
            </h1>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="px-4 py-8 text-center">
          <h2 className="text-4xl font-black mb-8 text-white">GET STARTED</h2>
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 px-12 rounded-lg text-xl transition-colors duration-200 flex items-center justify-center space-x-4 w-full"
            >
              <span className="text-3xl">📅</span>
              <span>PROTECT YOUR TBPN VIEWING TIME</span>
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="px-4 py-8 text-center">
          <h2 className="text-4xl font-black mb-8 text-white">HOW IT WORKS</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            TBFY automatically blocks your calendar from 11am-2pm PST so you can watch The Boys' Pod Network without interruption. 
            Connect your Google Calendar, and we'll handle the rest – no more missing TBPN for meetings.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-yellow-500 text-black font-bold py-6 px-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🔐</div>
              <div className="text-sm font-bold">GOOGLE AUTH</div>
            </div>
            <div className="bg-yellow-500 text-black font-bold py-6 px-4 rounded-lg text-center">
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm font-bold">PICK ROLE</div>
            </div>
            <div className="bg-yellow-500 text-black font-bold py-6 px-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📅</div>
              <div className="text-sm font-bold">ADD MEETINGS</div>
            </div>
            <div className="bg-yellow-500 text-black font-bold py-6 px-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📺</div>
              <div className="text-sm font-bold">WATCH TBPN</div>
            </div>
          </div>
        </div>



        {/* Made Possible By Section */}
        <div className="px-4 py-12 mt-8 text-center">
          <h2 className="text-4xl font-black mb-6 text-white">MADE POSSIBLE BY</h2>
          <div className="bg-yellow-400 text-black font-bold py-8 px-8 rounded-lg max-w-2xl mb-8 mx-auto">
            <div className="text-2xl">
              TBPN viewers who refuse to be interrupted during the sacred 11am-2pm PST window
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/support" className="hover:text-white transition-colors">Support</a>
            <span>•</span>
            <a href="mailto:grahammcbain@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
