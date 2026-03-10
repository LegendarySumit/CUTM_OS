import PublicLayout from '../../components/layout/PublicLayout';

export default function PrivacyPolicyPage() {
  return (
    <PublicLayout>
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Last updated: March 2026</p>

        <section className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-slate-700 mb-4">
            CUTM OS ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">2. Information We Collect</h2>
          <p className="text-slate-700 mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li>Personal Data: Name, email address, phone number, and other contact details</li>
            <li>Academic Information: Course enrollments, grades, and learning progress</li>
            <li>Usage Data: How you interact with our platform, including pages visited and time spent</li>
            <li>Device Information: Browser type, IP address, and device information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">
            We use the collected information for various purposes:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To personalize your learning experience</li>
            <li>To send administrative information and updates</li>
            <li>To respond to your inquiries and provide support</li>
            <li>To analyze platform usage and improve our services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">4. Data Security</h2>
          <p className="text-slate-700 mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">5. Contact Us</h2>
          <p className="text-slate-700">
            If you have questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@cutmos.edu" className="text-primary-600 hover:text-primary-700">
              privacy@cutmos.edu
            </a>
          </p>
        </section>
        </div>
      </div>
    </PublicLayout>
  );
}
