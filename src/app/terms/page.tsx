export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          
          <p className="text-gray-300 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Service Description</h2>
            <p className="text-gray-300 mb-4">
              TBFY (Too Busy For You) is a free service that creates calendar events 
              to protect your 11am-2pm PST time slot for TBPN viewing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• You authorize access to your Google Calendar</li>
              <li>• You select a job role for realistic meeting titles</li>
              <li>• We create calendar events from 11am-2pm PST for 30 days</li>
              <li>• Events appear as "busy" time to prevent meeting conflicts</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• You are responsible for managing your own calendar</li>
              <li>• You can modify or delete created events as needed</li>
              <li>• Use this service appropriately and professionally</li>
              <li>• Do not abuse the service or attempt to hack it</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Disclaimers</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• This service is provided "as is" without warranties</li>
              <li>• We are not responsible for calendar conflicts or issues</li>
              <li>• Service availability is not guaranteed</li>
              <li>• This is a fan project for TBPN viewers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data and Privacy</h2>
            <p className="text-gray-300 mb-4">
              We do not store your personal data. All calendar operations happen 
              directly with Google's services. See our Privacy Policy for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-gray-300 mb-4">
              You can stop using this service at any time by revoking access 
              through your Google Account settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-300">
              Questions about these terms? Contact us at: grahammcbain@gmail.com
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
