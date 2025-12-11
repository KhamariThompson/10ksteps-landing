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
            <strong>Last Updated:</strong> December 10, 2025
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
              <p className="text-text-secondary">
                10k Steps ("we," "our," or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application. By using the app, you agree to the
                collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* HealthKit Data - CRITICAL for App Store */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">HealthKit Data</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  We access the following health data from Apple HealthKit (read-only):
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Step Count</li>
                  <li>Walking/Running Distance</li>
                  <li>Floors Climbed</li>
                  <li>Active Calories Burned</li>
                  <li>Activity Summary Data (for calorie goals)</li>
                </ul>
                <div className="mt-6 rounded-lg border-2 border-purple p-4">
                  <p className="font-semibold text-text-primary">
                    IMPORTANT: Your health data is NEVER:
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>Sold to third parties</li>
                    <li>Used for advertising or marketing</li>
                    <li>Used for data mining</li>
                    <li>Shared outside the app (except with group challenge participants you choose to join)</li>
                  </ul>
                </div>
                <p className="mt-4">
                  Health data is stored locally on your device and synced to Firebase Firestore for
                  backup and multi-device access. You can revoke HealthKit permissions at any time
                  in your iPhone Settings → Health → Data Access & Devices → 10k Steps.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Other Information We Collect</h2>
              <div className="space-y-4 text-text-secondary">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    Account Information
                  </h3>
                  <p>
                    When you create an account: email address, name, username, display name, and
                    optional profile photo and phone number.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    Optional Personal Details
                  </h3>
                  <p>
                    You may optionally provide: date of birth, gender, weight, height, and fitness
                    goals for AI coach personalization.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    Fitness Stats & Settings
                  </h3>
                  <p>
                    Daily step goal, timezone, streak data, notification preferences, and lifetime
                    statistics.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    Group Challenge Data
                  </h3>
                  <p>
                    When you join a challenge, your steps, distance, and streak are visible to
                    other participants in that specific challenge only.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6 text-text-secondary">
                <li>Provide step tracking, streaks, and progress visualization</li>
                <li>Sync your data across your devices</li>
                <li>Enable group challenges and leaderboards</li>
                <li>Provide AI coaching insights</li>
                <li>Send optional notifications about your progress</li>
                <li>Process subscription payments (via RevenueCat)</li>
                <li>Improve app performance and fix bugs</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Third-Party Services</h2>
              <div className="space-y-3 text-text-secondary">
                <p>We use the following third-party services:</p>
                <div>
                  <strong className="text-text-primary">Firebase (Google)</strong> - User
                  authentication, data storage, and push notifications.{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:text-purple/80"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <strong className="text-text-primary">RevenueCat</strong> - Subscription
                  management (does NOT access health data).{" "}
                  <a
                    href="https://www.revenuecat.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:text-purple/80"
                  >
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <strong className="text-text-primary">OpenAI</strong> - AI coach feature
                  (receives anonymized fitness stats + your questions, NOT personal details).{" "}
                  <a
                    href="https://openai.com/policies/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:text-purple/80"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Your data is stored locally on your device and synced to Firebase Cloud Firestore.
                We use industry-standard encryption for data transmission and storage. However, no
                method of transmission over the internet is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Data Retention</h2>
              <p className="text-text-secondary">
                We retain your data while your account is active. If you delete your account, your
                data will be permanently deleted within 30 days. You can request data deletion at
                any time by contacting support@10ksteps.site.
              </p>
            </section>

            {/* Your Rights */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Your Privacy Rights</h2>
              <p className="mb-4 text-text-secondary">
                You have the right to (GDPR/CCPA compliant):
              </p>
              <ul className="list-disc space-y-2 pl-6 text-text-secondary">
                <li>Access your personal data</li>
                <li>Request a copy of your data (data export)</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Revoke HealthKit permissions at any time</li>
                <li>Opt out of push notifications</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4 text-text-secondary">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:support@10ksteps.site"
                  className="text-purple hover:text-purple/80"
                >
                  support@10ksteps.site
                </a>
              </p>
            </section>

            {/* Subscriptions */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Subscriptions & Payments</h2>
              <div className="space-y-3 text-text-secondary">
                <p>
                  10k Steps offers auto-renewable subscriptions (Pro Monthly: $4.99/month, Pro
                  Annual: $39.99/year) with a 3-day free trial.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Payment is charged to your iTunes Account at purchase confirmation</li>
                  <li>Subscriptions auto-renew unless cancelled 24 hours before the period ends</li>
                  <li>
                    Manage subscriptions in Settings → [Your Name] → Subscriptions → 10k Steps
                  </li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>
                    Refunds are handled by Apple at{" "}
                    <a
                      href="https://reportaproblem.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple hover:text-purple/80"
                    >
                      reportaproblem.apple.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Medical Disclaimer */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Medical Disclaimer</h2>
              <p className="text-text-secondary">
                10k Steps is a fitness tracking tool and is NOT a medical device. The app is not
                intended to diagnose, treat, cure, or prevent any disease. Always consult with a
                qualified healthcare professional before starting any fitness program.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Children's Privacy</h2>
              <p className="text-text-secondary">
                Our app is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe we have
                collected information from a child under 13, please contact us immediately at
                support@10ksteps.site.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Changes to This Privacy Policy</h2>
              <p className="text-text-secondary">
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                Updated" date. Continued use of the app after changes constitutes acceptance of the
                updated policy.
              </p>
            </section>

            {/* Contact Us */}
            <section className="rounded-2xl bg-navy-light p-8">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="mb-4 text-text-secondary">
                If you have any questions about this Privacy Policy, your data, or want to exercise
                your privacy rights, please contact us:
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
