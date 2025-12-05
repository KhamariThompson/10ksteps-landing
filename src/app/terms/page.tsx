import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - 10k Steps",
  description: "Terms and Conditions for using the 10k Steps app.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-5xl font-black tracking-tight">Terms & Conditions</h1>
          <p className="mb-8 text-text-secondary">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">1. Agreement to Terms</h2>
              <p className="text-text-secondary">
                By accessing or using the 10k Steps mobile application, you agree to be bound by
                these Terms and Conditions. If you disagree with any part of these terms, you may
                not access the app.
              </p>
            </section>

            {/* License */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">2. License</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  10k Steps grants you a revocable, non-exclusive, non-transferable, limited
                  license to download, install, and use the app solely for your personal,
                  non-commercial purposes strictly in accordance with these Terms and Conditions.
                </p>
                <p>
                  <strong>You may not:</strong>
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Modify, copy, or distribute the app</li>
                  <li>Reverse engineer or attempt to extract the source code</li>
                  <li>Remove any copyright or proprietary notices</li>
                  <li>Use the app for any illegal purposes</li>
                  <li>Transfer the app to another person or entity</li>
                </ul>
              </div>
            </section>

            {/* User Accounts */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">3. User Accounts</h2>
              <p className="text-text-secondary">
                When you create an account with us, you must provide accurate, complete, and
                current information. You are responsible for safeguarding your account and for all
                activities that occur under your account. You must notify us immediately of any
                unauthorized use of your account.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">4. Acceptable Use</h2>
              <p className="mb-4 text-text-secondary">You agree not to use the app to:</p>
              <ul className="list-disc space-y-2 pl-6 text-text-secondary">
                <li>Violate any laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>
                  Attempt to gain unauthorized access to any portion of the app or its systems
                </li>
                <li>Interfere with or disrupt the app or servers</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            {/* Health Disclaimer */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">5. Health and Medical Disclaimer</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  10k Steps is designed for general fitness tracking purposes only. The app is not
                  intended to diagnose, treat, cure, or prevent any disease or medical condition.
                </p>
                <p>
                  <strong>Important:</strong> Always consult with a qualified healthcare
                  professional before beginning any fitness program or if you have any health
                  concerns. The information provided by the app should not be used as a substitute
                  for professional medical advice.
                </p>
                <p>
                  The step count and other metrics provided by the app are estimates and may not be
                  100% accurate. We are not liable for any health issues that may arise from using
                  the app.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">6. Intellectual Property</h2>
              <p className="text-text-secondary">
                The app and its original content, features, and functionality are owned by 10k
                Steps and are protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">7. Limitation of Liability</h2>
              <p className="text-text-secondary">
                To the maximum extent permitted by law, 10k Steps shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including
                without limitation, loss of profits, data, use, goodwill, or other intangible
                losses, resulting from your access to or use of or inability to access or use the
                app.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">8. Disclaimer of Warranties</h2>
              <p className="text-text-secondary">
                The app is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of
                any kind, either express or implied, including but not limited to implied
                warranties of merchantability, fitness for a particular purpose, or
                non-infringement.
              </p>
            </section>

            {/* Termination */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">9. Termination</h2>
              <p className="text-text-secondary">
                We may terminate or suspend your access to the app immediately, without prior
                notice or liability, for any reason, including if you breach these Terms and
                Conditions. Upon termination, your right to use the app will cease immediately.
              </p>
            </section>

            {/* Governing Law */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">10. Governing Law</h2>
              <p className="text-text-secondary">
                These Terms shall be governed and construed in accordance with the laws of [Your
                Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">11. Changes to Terms</h2>
              <p className="text-text-secondary">
                We reserve the right to modify or replace these Terms at any time. We will provide
                notice of any material changes by posting the new Terms on this page and updating
                the "Last Updated" date. Your continued use of the app after such changes
                constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">12. Contact Us</h2>
              <p className="mb-4 text-text-secondary">
                If you have any questions about these Terms and Conditions, please contact us:
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
