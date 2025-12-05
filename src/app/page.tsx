import Image from "next/image";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* App Icon with Glow */}
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

          <h1 className="mb-6 text-5xl font-black tracking-tight text-text-primary md:text-7xl">
            Hit your 10,000 steps.
            <br />
            <span className="text-purple">Every single day.</span>
          </h1>

          <p className="mb-8 text-xl text-text-secondary md:text-2xl">
            Track your daily steps, build lasting habits, and achieve your fitness goals with the
            simplest step counter app.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button as="link" href="/download" variant="primary" size="lg">
              Download for iOS
            </Button>
            <Button as="link" href="/about" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            How It Works
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            Three simple steps to transform your daily routine
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Download",
                description: "Get the app from the App Store and set up your profile in seconds.",
                icon: "📱",
              },
              {
                step: "02",
                title: "Track",
                description:
                  "Your steps are automatically counted throughout the day. No manual input needed.",
                icon: "👟",
              },
              {
                step: "03",
                title: "Achieve",
                description:
                  "Hit 10,000 steps daily, build streaks, and watch your progress over time.",
                icon: "🏆",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center rounded-3xl bg-navy-light p-8 text-center transition-all hover:scale-105"
              >
                <div className="mb-4 text-6xl">{item.icon}</div>
                <div className="mb-2 text-sm font-bold text-purple">{item.step}</div>
                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            Track Your Progress
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            Everything you need to monitor your daily activity
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-Time Step Count",
                description: "See your steps update automatically throughout the day",
                icon: "👣",
                color: "text-blue",
              },
              {
                title: "Distance Tracking",
                description: "Monitor how far you walk in miles or kilometers",
                icon: "🗺️",
                color: "text-green",
              },
              {
                title: "Floors Climbed",
                description: "Track elevation gain and stairs conquered",
                icon: "🏔️",
                color: "text-orange",
              },
              {
                title: "Daily Progress",
                description: "Visual progress rings show how close you are to your goal",
                icon: "📊",
                color: "text-purple",
              },
              {
                title: "Streak Counter",
                description: "Build consistency with fire streak indicators",
                icon: "🔥",
                color: "text-coral",
              },
              {
                title: "All-Time Stats",
                description: "View your lifetime achievements and averages",
                icon: "📈",
                color: "text-blue",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-navy-light p-6 transition-all hover:bg-opacity-80"
              >
                <div className={`mb-4 text-4xl ${feature.color}`}>{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 10k Steps */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-4xl font-black tracking-tight md:text-5xl">
            Why 10,000 Steps?
          </h2>
          <p className="mb-16 text-center text-lg text-text-secondary">
            The science-backed daily goal for better health
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Improved Heart Health",
                description:
                  "Regular walking strengthens your cardiovascular system and reduces risk of heart disease.",
              },
              {
                title: "Weight Management",
                description:
                  "Walking 10,000 steps burns approximately 300-400 calories, supporting healthy weight.",
              },
              {
                title: "Mental Wellness",
                description:
                  "Daily walking reduces stress, improves mood, and boosts mental clarity.",
              },
              {
                title: "Increased Energy",
                description:
                  "Consistent movement throughout the day leads to higher energy levels and better sleep.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-navy-light p-8"
              >
                <h3 className="mb-4 text-2xl font-bold">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Follow Us */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            Join the Community
          </h2>
          <p className="mb-12 text-lg text-text-secondary">
            Follow us for tips, motivation, and updates
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/10ksteps.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-navy-light px-8 py-4 transition-all hover:bg-purple hover:scale-105"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@10ksteps.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-navy-light px-8 py-4 transition-all hover:bg-purple hover:scale-105"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
              <span className="font-semibold">TikTok</span>
            </a>

            <a
              href="https://x.com/10kstepssite?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-navy-light px-8 py-4 transition-all hover:bg-purple hover:scale-105"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-semibold">X (Twitter)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-navy-light p-12 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            Ready to start your journey?
          </h2>
          <p className="mb-8 text-xl text-text-secondary">
            Download 10k Steps today and take the first step toward better health.
          </p>
          <Button as="link" href="/download" variant="primary" size="lg">
            Download Now
          </Button>
        </div>
      </section>
    </div>
  );
}
