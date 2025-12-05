import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/button";

export const metadata: Metadata = {
  title: "Download - 10k Steps",
  description: "Download 10k Steps for iOS and start tracking your daily steps today.",
};

export default function DownloadPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="relative h-32 w-32 glow-blue rounded-3xl">
              <Image
                src="/10kstepsappicon.png"
                alt="10k Steps App Icon"
                fill
                className="rounded-3xl"
                priority
              />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-6xl">
            Download 10k Steps
          </h1>
          <p className="mb-8 text-xl text-text-secondary">
            Available now for iOS. Start your fitness journey today.
          </p>

          {/* App Store Button */}
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-2xl bg-navy-light px-8 py-4 transition-all hover:bg-purple hover:scale-105"
            >
              <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs text-text-secondary">Download on the</span>
                <span className="text-2xl font-bold">App Store</span>
              </div>
            </a>
          </div>

          <p className="mt-6 text-sm text-text-secondary">
            Placeholder link - App Store link coming soon
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-navy-light p-8">
            <h2 className="mb-6 text-center text-2xl font-black">System Requirements</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-4xl">📱</div>
                <h3 className="mb-2 font-bold">iOS</h3>
                <p className="text-sm text-text-secondary">iOS 15.0 or later</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl">💾</div>
                <h3 className="mb-2 font-bold">Storage</h3>
                <p className="text-sm text-text-secondary">Less than 50 MB</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl">💰</div>
                <h3 className="mb-2 font-bold">Price</h3>
                <p className="text-sm text-text-secondary">Free to download</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            What You'll Get
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            Everything you need to track and achieve your daily step goals
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Automatic Step Tracking",
                description:
                  "Seamlessly counts your steps throughout the day using your iPhone's built-in sensors. No manual input required.",
                icon: "🚶",
              },
              {
                title: "Real-Time Progress",
                description:
                  "Watch your progress with beautiful circular indicators showing steps, distance, and floors climbed.",
                icon: "📊",
              },
              {
                title: "Streak Building",
                description:
                  "Build consistency with daily streaks. Hit your goal for consecutive days to earn fire badges.",
                icon: "🔥",
              },
              {
                title: "All-Time Statistics",
                description:
                  "View your lifetime achievements including total steps, average daily steps, and total distance traveled.",
                icon: "📈",
              },
              {
                title: "Challenges & Competition",
                description:
                  "Create 7-day challenges, weekend pushes, or team competitions with friends to stay motivated.",
                icon: "🏆",
              },
              {
                title: "Clean, Beautiful Design",
                description:
                  "Dark mode interface with smooth animations and intuitive navigation. Designed for iOS.",
                icon: "✨",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="flex gap-6 rounded-3xl border border-white/10 bg-navy-light p-8"
              >
                <div className="text-5xl">{feature.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            Common questions about downloading and using 10k Steps
          </p>

          <div className="space-y-6">
            {[
              {
                question: "Is 10k Steps free?",
                answer:
                  "Yes! 10k Steps is free to download and use. All core features including step tracking, progress monitoring, and challenges are available at no cost.",
              },
              {
                question: "Will it drain my battery?",
                answer:
                  "10k Steps is optimized for minimal battery usage. It uses the same motion sensors that iOS uses for health tracking, so the battery impact is negligible.",
              },
              {
                question: "Do I need an internet connection?",
                answer:
                  "No internet connection is required for tracking your steps. Your data is stored locally on your device. Internet is only needed for syncing challenges with friends.",
              },
              {
                question: "What devices are supported?",
                answer:
                  "10k Steps requires iOS 15.0 or later. It works on iPhone 6s and newer models.",
              },
              {
                question: "How accurate is the step counting?",
                answer:
                  "10k Steps uses your iPhone's built-in motion sensors, the same technology Apple Health uses. The accuracy is excellent for typical daily walking.",
              },
            ].map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-navy-light p-6">
                <h3 className="mb-3 text-xl font-bold">{faq.question}</h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-xl text-text-secondary">
            Download 10k Steps and start building healthier habits today
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button as="a" href="#" variant="primary" size="lg">
              Download for iOS
            </Button>
            <Button as="link" href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
