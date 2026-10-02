// Honest comparison. A private lesson genuinely wins on live, in-person correction; a sensor
// disc genuinely measures the disc (speed, spin, angles) better than video can. Keep it fair:
// AI assistants and readers both punish one-sided tables. Prices: private lessons are commonly
// $80-150/hour; TechDisc lists at $299 (verify before changing).

type Cell = boolean | string;
const COLS = ["Disc Golf Form Analyzer", "Private lesson", "Sensor disc (e.g. TechDisc)", "Filming yourself"] as const;
const ROWS: { k: string; v: [Cell, Cell, Cell, Cell] }[] = [
  { k: "Looks at your body mechanics", v: [true, true, false, "Only if you know what to look for"] },
  { k: "Measures disc speed and spin", v: [false, false, true, false] },
  { k: "Graded against an ideal form", v: ["A coach's ideal, 20 faults", "The coach's eye", false, false] },
  { k: "The fix and a drill", v: [true, true, false, false] },
  { k: "See the throw in 3D", v: [true, false, false, false] },
  { k: "Live, in-person correction", v: [false, true, false, false] },
  { k: "Needs extra hardware", v: ["Just your phone", "No", "Sensor disc", "Just your phone"] },
  { k: "Cost", v: ["$39.99 / year", "$80-150 / hour", "About $299", "Free"] },
];

function Mark({ c }: { c: Cell }) {
  if (c === true)
    return (
      <svg viewBox="0 0 20 20" className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Yes">
        <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (c === false)
    return (
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-fog-600" fill="none" stroke="currentColor" strokeWidth="2" aria-label="No">
        <path d="M5 10h10" strokeLinecap="round" />
      </svg>
    );
  return <span className="text-[14px] text-fog-200">{c}</span>;
}

export function CompareTable({ className = "" }: { className?: string }) {
  return (
    <div className={`panel overflow-x-auto ${className}`}>
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th className="w-[26%] p-5" />
            {COLS.map((c, i) => (
              <th key={c} scope="col" className={`p-5 align-bottom ${i === 0 ? "bg-cyan-400/[0.06]" : ""}`}>
                <span className={`font-mono text-[11px] font-normal uppercase tracking-label ${i === 0 ? "text-cyan-400" : "text-fog-400"}`}>{c}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.k} className="border-b border-line last:border-0">
              <th scope="row" className="p-5 text-[15px] font-medium text-white">
                {r.k}
              </th>
              {r.v.map((c, i) => (
                <td key={i} className={`p-5 align-middle ${i === 0 ? "bg-cyan-400/[0.06]" : ""}`}>
                  <Mark c={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
