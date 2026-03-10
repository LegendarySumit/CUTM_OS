import PublicLayout from '../../components/layout/PublicLayout';

export default function TermsOfServicePage() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Last updated: March 2026</p>

        <section className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-slate-700 mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision 
            of this agreement.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">2. Use License</h2>
          <p className="text-slate-700 mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) 
            on CUTM OS for personal, non-commercial transitory viewing only. This is the grant of a license, 
            not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-slate-700 mb-4">
            The materials on CUTM OS are provided on an 'as is' basis. CUTM OS makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties including, without 
            limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
            or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">4. Limitations</h2>
          <p className="text-slate-700 mb-4">
            In no event shall CUTM OS or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising out 
            of the use or inability to use the materials on CUTM OS.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">5. Accuracy of Materials</h2>
          <p className="text-slate-700 mb-4">
            The materials appearing on CUTM OS could include technical, typographical, or photographic errors. 
            CUTM OS does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">6. Contact Us</h2>
          <p className="text-slate-700">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@cutmos.edu" className="text-primary-600 hover:text-primary-700">
              legal@cutmos.edu
            </a>
          </p>
        </section>
      </div>
    </PublicLayout>
  );
}
