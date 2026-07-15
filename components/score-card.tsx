type ScoreCardProps = { label: string; value: number; detail: string };

export function ScoreCard({ label, value, detail }: ScoreCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-white/[0.03] p-5 shadow-glow">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{label}</p>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live</span>
      </div>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-semibold tracking-tight">{value}</span>
        <span className="mb-1 text-slate-500">/100</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-gradient-to-r from-cyan to-brand" style={{ width: `${value}%` }} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{detail}</p>
    </article>
  );
}
