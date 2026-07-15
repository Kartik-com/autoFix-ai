import { ScoreCard } from '@/components/score-card';
import { agents, reasoning, workflow } from '@/lib/demo-data';

const scores = [
  { label: 'Repository Health', value: 92, detail: 'Architecture, dependencies, and build checks are continuously reviewed.' },
  { label: 'Security Score', value: 91, detail: 'Permission-gated scans detect secrets, unsafe routes, and dependency risks.' },
  { label: 'Test Coverage', value: 84, detail: 'Generated unit, integration, and edge-case tests are attached to every PR.' },
  { label: 'Engineering Score', value: 94, detail: 'A combined score for quality, documentation, risk, and verification.' }
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),#070A12]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan to-brand font-bold">AF</div>
          <div><p className="font-semibold">AutoFix AI</p><p className="text-xs text-slate-400">Your Autonomous AI Software Engineer</p></div>
        </div>
        <button className="rounded-full border border-line px-4 py-2 text-sm text-slate-200 hover:bg-white/10">Connect GitHub</button>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_420px]">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan-200">Built for OpenAI Build Week with GPT-5.6 + Codex</div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">Autonomous repository repair from analysis to pull request.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">AutoFix AI studies a codebase, coordinates specialized agents, applies explainable fixes in a Codex workspace, runs verification, and generates a production-ready PR report.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-white px-5 py-3 font-medium text-ink">Analyze Repository</button>
            <button className="rounded-full border border-line px-5 py-3 font-medium text-white">View Demo PR</button>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-panel/80 p-5 shadow-glow backdrop-blur">
          <p className="text-sm text-slate-400">Live Codex run</p>
          <div className="mt-4 space-y-3">
            {workflow.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400/10 text-xs text-emerald-300">{index + 1}</span>
                <span className="text-sm text-slate-200">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-4">{scores.map((score) => <ScoreCard key={score.label} {...score} />)}</section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-panel/70 p-6">
          <h2 className="text-2xl font-semibold">Specialized AI engineering agents</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {agents.map((agent) => (
              <article key={agent.name} className="rounded-2xl border border-line bg-white/[0.03] p-4">
                <div className={`mb-4 h-1.5 rounded-full bg-gradient-to-r ${agent.accent}`} />
                <div className="flex items-center justify-between"><h3 className="font-medium">{agent.name}</h3><span className="text-sm text-slate-400">{agent.score}%</span></div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{agent.status}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-panel/70 p-6">
          <h2 className="text-2xl font-semibold">AI reasoning panel</h2>
          <div className="mt-6 space-y-4">
            {Object.entries(reasoning).map(([key, value]) => (
              <div key={key} className="rounded-2xl bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">{key.replace(/([A-Z])/g, ' $1')}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
