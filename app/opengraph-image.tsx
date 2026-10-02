import { ogCard, OG_SIZE } from "@/lib/og";

export const alt = "Disc Golf Form Analyzer: find the fault costing you distance";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ label: "AI disc golf form analysis", title: "Find the fault costing you distance." });
}
