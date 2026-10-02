"use client";

import type { Faq } from "@/lib/seo";

// Native <details>: the answers are in the server-rendered HTML (crawlers and AI assistants
// read them) and it works without JavaScript. The Meta Pixel FAQClick event is kept.
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details
          key={f.question}
          className="group py-1"
          onToggle={(e) => {
            if ((e.currentTarget as HTMLDetailsElement).open)
              (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("trackCustom", "FAQClick", { question: f.question });
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-white [&::-webkit-details-marker]:hidden">
            <h3>{f.question}</h3>
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-line text-fog-400 transition-transform group-open:rotate-45">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 4v12M4 10h12" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 pr-12 text-[16px] leading-relaxed text-fog-200">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
