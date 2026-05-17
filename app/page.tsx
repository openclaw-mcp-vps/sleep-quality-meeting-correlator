export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Health-Tracking for Professionals
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Sleep Better,{" "}
          <span className="text-[#58a6ff]">Meet Smarter</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your wearable and calendar. Discover how your sleep quality impacts meeting performance and let AI schedule your most important calls when you peak.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $11/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Works with Fitbit, Oura, Apple Health · Google & Outlook Calendar</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {[
            "Sleep-to-performance scoring",
            "AI meeting time suggestions",
            "Wearable sync",
            "Calendar integration",
            "Weekly insights report",
          ].map((f) => (
            <span
              key={f}
              className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited wearable syncs",
              "Google & Outlook calendar",
              "AI scheduling recommendations",
              "Sleep-performance correlation dashboard",
              "Weekly email digest",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which wearables and calendars are supported?",
              a: "We support Fitbit, Oura Ring, and Apple Health for sleep data, and Google Calendar and Microsoft Outlook for meeting data. More integrations are on the roadmap.",
            },
            {
              q: "How does the AI determine my optimal meeting times?",
              a: "Our model correlates your historical sleep scores with self-reported or inferred meeting outcomes, then identifies time windows where your cognitive performance is statistically highest.",
            },
            {
              q: "Is my health and calendar data kept private?",
              a: "Yes. Your data is encrypted at rest and in transit, never sold to third parties, and you can delete everything from your account at any time.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Sleep Quality Meeting Correlator · $11/mo
      </footer>
    </main>
  )
}
