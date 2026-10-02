import { ImageResponse } from "next/og";

// Shared 1200x630 social card in the site's style: dark lab grid, mono label, big title.
export const OG_SIZE = { width: 1200, height: 630 };

export function ogCard({ label, title, foot = "Disc Golf Form Analyzer · iPhone + Android" }: { label: string; title: string; foot?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#080b11",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px), radial-gradient(circle at 85% 10%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 10% 90%, rgba(34,227,255,0.18), transparent 45%)",
          backgroundSize: "56px 56px, 56px 56px, 100% 100%, 100% 100%",
          color: "#eef3f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#22e3ff" }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#22e3ff" }} />
          {label}
        </div>
        <div style={{ display: "flex", fontSize: title.length > 60 ? 62 : 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1, maxWidth: 1000 }}>{title}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 22, color: "#8e9bad" }}>
          <span style={{ fontWeight: 700, color: "#ffffff", letterSpacing: 2 }}>DGFA</span>
          <span>{foot}</span>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
