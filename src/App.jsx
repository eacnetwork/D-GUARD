const stats = [
  { label: 'Attacks blocked', value: '4.8M+' },
  { label: 'Global edge nodes', value: '120+' },
  { label: 'Average mitigation', value: '< 30s' },
  { label: 'Network uptime', value: '99.99%' }
];

const features = [
  {
    title: 'Edge DDoS Mitigation',
    text: 'Filter volumetric floods and protocol abuse at the edge before they reach your infrastructure.'
  },
  {
    title: 'Application Shielding',
    text: 'Protect APIs, websites, and apps with adaptive rules that block malformed traffic in real time.'
  },
  {
    title: 'Bot and Abuse Defense',
    text: 'Automatically isolate malicious requests, scraping traffic, and abuse patterns without slowing users down.'
  },
  {
    title: 'Forensics & Insights',
    text: 'See attack paths, source regions, and attack timelines via a streamlined, real-time dashboard.'
  }
];

const layers = [
  'Multi-layer traffic filtering',
  'Rate limiting and challenge orchestration',
  'Origin protection with live failover',
  'Attack analytics and incident response'
];

const trust = ['Cloudflare', 'Vercel', 'Railway', 'Shopify', 'GitHub', 'AWS'];

function App() {
  return (
    <div className="min-h-screen bg-[#080914] text-white antialiased selection:bg-pink-400 selection:text-[#120c18]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,94,180,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,128,175,0.14),_transparent_30%)]" />

      <header className="mx-auto max-w-7xl px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-violet-600 text-sm font-black text-white shadow-glow">
              D
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white">D-Guard</span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#platform" className="transition hover:text-white">Platform</a>
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#protection" className="transition hover:text-white">Protection</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-pink-400/60 hover:text-white sm:inline-flex">
              Login
            </button>
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
              Start free trial
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
              <span className="h-2 w-2 rounded-full bg-pink-400" />
              Real-time DDoS defense
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.04] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Stop attacks before they touch your infrastructure.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              D-Guard protects your websites, APIs, and applications with edge filtering, traffic intelligence,
              and instant mitigation built for modern digital businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
                Get protected now
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-pink-400/50 hover:text-white">
                Book a demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                24/7 monitoring
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                1-click onboarding
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-7 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute -right-3 bottom-0 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-[#111827]/80 p-4 shadow-soft backdrop-blur-xl">
              <div className="rounded-[24px] border border-pink-400/20 bg-gradient-to-b from-[#151c2d] via-[#0f1526] to-[#0d1019] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Threat status</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Protected</h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    online
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Traffic</p>
                    <p className="mt-4 text-3xl font-black text-white">8.6M</p>
                    <p className="mt-2 text-sm text-slate-400">requests / minute</p>
                  </div>
                  <div className="rounded-2xl border border-pink-400/20 bg-pink-500/10 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-pink-200">Mitigation</p>
                    <p className="mt-4 text-3xl font-black text-white">99.99%</p>
                    <p className="mt-2 text-sm text-pink-200">attack blocking rate</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1020] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">Live traffic map</p>
                    <span className="text-xs text-slate-400">Updated 4s ago</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    {Array.from({ length: 48 }).map((_, index) => (
                      <div
                        key={index}
                        className={`h-7 rounded-md ${
                          index % 4 === 0
                            ? 'bg-pink-500/60'
                            : index % 3 === 0
                              ? 'bg-fuchsia-500/40'
                              : index % 2 === 0
                                ? 'bg-slate-700'
                                : 'bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
              <div className="text-3xl font-black tracking-tight text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </section>

        <section id="features" className="mt-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">Built for scale</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Layered defense for every edge of your network.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/30 to-fuchsia-500/20 ring-1 ring-pink-400/30">
                  <span className="h-3 w-3 rounded-full bg-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="protection" className="mt-28 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-pink-400/20 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">Why teams choose D-Guard</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white">
              Protect mission-critical services without sacrificing speed.
            </h2>
            <div className="mt-8 space-y-4">
              {layers.map((layer) => (
                <div key={layer} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20 text-sm font-bold text-pink-200">
                    ✓
                  </span>
                  <span className="text-slate-200">{layer}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0a101b] p-8 shadow-soft">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Attack timeline</p>
                <h3 className="mt-2 text-2xl font-bold text-white">Threat intelligence</h3>
              </div>
              <div className="rounded-full border border-pink-400/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200">
                Critical events
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>HTTP flood mitigation</span>
                  <span>94%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-2.5 w-[94%] rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Botnet filtering</span>
                  <span>87%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-2.5 w-[87%] rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Origin shielding</span>
                  <span>98%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-2.5 w-[98%] rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-white">1.2s</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Avg response</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-white">230+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Regions</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">Coverage</div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-28">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-violet-500/10 p-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-200">Trusted by modern operations teams</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xl font-semibold tracking-[0.12em] text-slate-300">
              {trust.map((name) => (
                <span key={name} className="opacity-80">{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-28 rounded-[32px] border border-white/10 bg-[#0b1020] p-10 text-center shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-pink-300">Ready for launch</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            D-Guard keeps your service online when traffic spikes.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
              Start protecting your site
            </button>
            <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-slate-200 transition hover:border-pink-400/60 hover:text-white">
              Talk to sales
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#080914]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 via-fuchsia-500 to-violet-600 text-xs font-black text-white">
              D
            </div>
            <span>D-Guard</span>
          </div>
          <div>© 2026 D-Guard. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
