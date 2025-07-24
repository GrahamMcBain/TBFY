export default function Support() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Support</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">How TBFY Works</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <ol className="text-gray-300 space-y-3">
                <li>1. Click "Get Started" and sign in with Google</li>
                <li>2. Grant calendar permissions</li>
                <li>3. Choose your job role</li>
                <li>4. We create calendar events 11am-2pm PST</li>
                <li>5. Enjoy protected TBPN viewing time!</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Common Issues</h2>
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">Google verification warning?</h3>
                  <p className="text-gray-300 text-sm">
                    Click "Advanced" → "Go to tbfy.xyz (unsafe)" to continue. 
                    We're working on Google verification.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">Events not appearing?</h3>
                  <p className="text-gray-300 text-sm">
                    Check your Google Calendar. Events are created for the next 30 days, 
                    Monday-Friday, 11am-2pm PST.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-400">Want to remove events?</h3>
                  <p className="text-gray-300 text-sm">
                    Delete them manually from your Google Calendar or search for 
                    "TBPN" to find and remove them all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Email us with questions, bug reports, or feedback:
            </p>
            <a 
              href="mailto:grahammcbain@gmail.com?subject=TBFY Support Request"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">About TBFY</h2>
          <div className="bg-gray-900 rounded-lg p-6">
            <p className="text-gray-300">
              TBFY is a fan-made tool for TBPN viewers who want to protect their 
              sacred 11am-2pm PST viewing time. Created with ❤️ for the community.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
