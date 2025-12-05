import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - 10k Steps",
  description: "Privacy Policy for 10k Steps app.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-black tracking-tight">Privacy Policy</h1>
          <p className="mb-8 text-text-secondary">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
              <p className="text-text-secondary">
                10k Steps ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Information We Collect</h2>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    Health and Fitness Data
                  </h3>
                  <p>
                    We collect step count, distance traveled, and floors climbed data from your
                    device's motion sensors. This data is stored locally on your device and is used
                    solely to provide you with step tracking functionality.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">Usage Data</h3>
                  <p>
                    We may collect information about how you interact with the app, including
                    features used, preferences, and app performance data.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">Device Information</h3>
                  <p>
                    We may collect device-specific information such as your device model, operating
                    system version, and unique device identifiers.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6 text-text-secondary">
                <li>To provide and maintain step tracking functionality</li>
                <li>To calculate your daily progress, streaks, and statistics</li>
                <li>To enable challenge features with other users</li>
                <li>To improve and optimize the app experience</li>
                <li>To send you notifications about your progress (if you opt in)</li>
                <li>To provide customer support</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Your step data is primarily stored locally on your device. We implement appropriate
                technical and organizational security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            {/* Third-Party Services */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Third-Party Services</h2>
              <p className="text-text-secondary">
                We may use third-party services for analytics and app performance monitoring. These
                services may collect information used to identify you. We encourage you to review
                the privacy policies of these third-party services.
              </p>
            </section>

            {/* Your Rights */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Your Rights</h2>
              <p className="mb-4 text-text-secondary">You have the right to:</p>
              <ul className="list-disc space-y-2 pl-6 text-text-secondary">
                <li>Access your personal data</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Children's Privacy</h2>
              <p className="text-text-secondary">
                Our app is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe we have
                collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary">
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                Updated" date.
              </p>
            </section>

            {/* Contact Us */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="mb-4 text-text-secondary">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <a
                href="mailto:support@10ksteps.site"
                className="text-purple hover:text-purple/80 transition-colors"
              >
                support@10ksteps.site
              </a>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
