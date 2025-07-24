export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          
          <p className="text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-300 mb-4">
              TBFY (Too Busy For You) helps protect your calendar from 11am-2pm PST 
              for uninterrupted TBPN viewing by creating realistic meeting blocks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Your Google email address (to identify your calendar)</li>
              <li>• Your selected job role (to generate appropriate meeting titles)</li>
              <li>• Temporary access to your Google Calendar (to create events)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Create calendar events from 11am-2pm PST for the next 30 days</li>
              <li>• Generate job-appropriate meeting titles based on your selected role</li>
              <li>• We do NOT store, share, or sell your personal information</li>
              <li>• We do NOT read your existing calendar events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Storage</h2>
            <p className="text-gray-300 mb-4">
              We do NOT store any of your personal data on our servers. All calendar 
              operations happen directly between your browser and Google's servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              We use Google Calendar API to create events. Your data is subject to 
              Google's Privacy Policy when using their services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• You can revoke access at any time through your Google Account settings</li>
              <li>• You can delete created events manually from your calendar</li>
              <li>• You have full control over your calendar data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300">
              Questions about this privacy policy? Contact us at: grahammcbain@gmail.com
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
