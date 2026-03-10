import PublicLayout from '../../components/layout/PublicLayout';
import { Eye, Ear, Keyboard, Zap } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <PublicLayout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Accessibility Statement</h1>
        <p className="text-slate-600 mb-8">Our commitment to inclusive design and accessibility</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Our Commitment</h2>
            <p className="text-slate-700 mb-4">
              CUTM OS is committed to ensuring digital accessibility for people with disabilities. 
              We continuously improve the user experience for everyone and apply relevant accessibility standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-primary-50 p-6 rounded-lg">
              <Eye className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold text-primary-900 mb-2">Visual Accessibility</h3>
              <p className="text-sm text-slate-700">
                High contrast options, adjustable font sizes, and compatibility with screen readers
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <Ear className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold text-primary-900 mb-2">Audio Accessibility</h3>
              <p className="text-sm text-slate-700">
                Captions and transcripts for video content, audio descriptions for visual content
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <Keyboard className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold text-primary-900 mb-2">Keyboard Navigation</h3>
              <p className="text-sm text-slate-700">
                Full keyboard navigation support for all interactive elements and features
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <Zap className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold text-primary-900 mb-2">Performance</h3>
              <p className="text-sm text-slate-700">
                Fast load times and responsive design for all devices and connection speeds
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Standards Compliance</h2>
            <p className="text-slate-700 mb-4">
              CUTM OS strives to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary-900 mb-4">Feedback</h2>
            <p className="text-slate-700 mb-4">
              We welcome feedback on the accessibility of CUTM OS. Please contact us if you encounter any 
              barriers to accessing our content.
            </p>
            <a 
              href="mailto:accessibility@cutmos.edu" 
              className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Report Accessibility Issue
            </a>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
