import type { Metadata } from "next";
import { Button } from "@/components/button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - 10k Steps",
  description:
    "Learn about 10k Steps, our mission to help people build lasting fitness habits through daily step tracking.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-8 flex justify-center">
            <div className="relative h-24 w-24">
              <Image
                src="/10kstepsappicon.png"
                alt="10k Steps"
                fill
                className="rounded-2xl"
              />
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-6xl">
            About 10k Steps
          </h1>
          <p className="text-xl text-text-secondary">
            Building lasting fitness habits, one step at a time
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-navy-light p-12">
            <h2 className="mb-6 text-center text-3xl font-black md:text-4xl">Our Mission</h2>
            <p className="mb-6 text-center text-lg text-text-secondary">
              We believe that small, consistent actions lead to transformative results. 10k Steps
              was created to make fitness accessible, simple, and sustainable for everyone.
            </p>
            <p className="text-center text-lg text-text-secondary">
              Walking 10,000 steps daily is one of the most researched and achievable health goals.
              Our app removes all the complexity and focuses on what matters: helping you build the
              habit of moving more, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            Who It's For
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            10k Steps is designed for anyone who wants to improve their health through movement
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Beginners",
                description:
                  "Starting your fitness journey? Walking is the perfect low-impact way to build healthy habits.",
                icon: "🌱",
              },
              {
                title: "Busy Professionals",
                description:
                  "Incorporate movement into your workday without needing a gym membership or special equipment.",
                icon: "💼",
              },
              {
                title: "Health-Conscious",
                description:
                  "Track and optimize your daily movement to support heart health and overall wellness.",
                icon: "❤️",
              },
              {
                title: "Competitive Spirits",
                description:
                  "Challenge friends and stay motivated through friendly competition and streaks.",
                icon: "🏆",
              },
              {
                title: "Weight Management",
                description:
                  "Support your weight goals with consistent daily activity and calorie burn tracking.",
                icon: "⚖️",
              },
              {
                title: "Active Seniors",
                description:
                  "Stay mobile and healthy with an easy-to-use app designed for all ages and fitness levels.",
                icon: "👴",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="rounded-3xl bg-navy-light p-8 text-center transition-all hover:scale-105"
              >
                <div className="mb-4 text-5xl">{audience.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{audience.title}</h3>
                <p className="text-text-secondary">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            How It Works
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            Simple, automatic tracking with powerful insights
          </p>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Automatic Step Tracking",
                description:
                  "Once you download the app, it automatically syncs with your iPhone's built-in motion sensors. No need to manually log anything - your steps are counted throughout the day.",
              },
              {
                step: "2",
                title: "Real-Time Progress",
                description:
                  "Watch your progress in real-time with beautiful circular progress indicators. See exactly how many steps you have left to reach your 10,000 step goal, plus distance traveled and floors climbed.",
              },
              {
                step: "3",
                title: "Build Your Streak",
                description:
                  "Hit your goal for consecutive days to build a streak. The longer your streak, the stronger your habit becomes. We'll keep you motivated with fire indicators and milestone celebrations.",
              },
              {
                step: "4",
                title: "Track Long-Term Progress",
                description:
                  "View all-time statistics including total steps, average daily steps, total distance traveled, and more. See your progress over weeks, months, and years.",
              },
              {
                step: "5",
                title: "Challenge Friends",
                description:
                  "Create challenges with friends to stay accountable and motivated. Compete in 7-day challenges, weekend pushes, or team competitions.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-3xl border border-white/10 bg-navy-light p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple text-xl font-black">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            Ready to get started?
          </h2>
          <p className="mb-8 text-xl text-text-secondary">
            Join thousands of users building healthier habits with 10k Steps
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button as="link" href="/download" variant="primary" size="lg">
              Download for iOS
            </Button>
            <Button as="link" href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
