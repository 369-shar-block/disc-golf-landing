import { JsonLd, breadcrumbSchema, faqSchema, type Faq } from "@/lib/seo";
import { FaqList } from "./FaqList";
import { StoreButtons } from "./StoreButtons";
import { Breadcrumbs, FinalCta, SectionHead, Shot, TrustRow } from "./blocks";

// Shared layout for /features/*: breadcrumb, hero with a real screenshot, page-specific
// sections (children), a page FAQ (also emitted as FAQPage JSON-LD) and the closing CTA.
export function FeaturePage({
  slug,
  label,
  title,
  intro,
  shot,
  faqs,
  ctaTitle,
  children,
}: {
  slug: string;
  label: string;
  title: React.ReactNode;
  intro: string;
  shot: string;
  faqs: Faq[];
  ctaTitle?: string;
  children: React.ReactNode;
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/#how-it-works" },
    { name: label, path: `/features/${slug}` },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <section data-section={`feature-${slug}-hero`} className="relative overflow-hidden">
        <div className="lab-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-20 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="wrap relative grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-16">
          <div>
            <Breadcrumbs items={crumbs} />
            <div className="mt-8">
              <SectionHead as="h1" label={label} title={title} intro={intro} />
            </div>
            <StoreButtons where={`feature-${slug}`} className="mt-9" />
            <TrustRow className="mt-6" />
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Shot name={shot} priority />
          </div>
        </div>
      </section>
      {children}
      <section data-section={`feature-${slug}-faq`} className="border-t border-line">
        <div className="wrap grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead label="FAQ" title="Questions" />
          <FaqList faqs={faqs} />
        </div>
      </section>
      <FinalCta title={ctaTitle} where={`feature-${slug}-final`} />
    </>
  );
}

// A titled band of explanatory content used inside feature pages.
export function Band({ index, label, title, children, id }: { index?: string; label: string; title: React.ReactNode; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-line">
      <div className="wrap grid gap-12 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHead index={index} label={label} title={title} />
        <div className="space-y-5 text-[17px] leading-relaxed text-fog-200">{children}</div>
      </div>
    </section>
  );
}

export function Points({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((p) => (
        <div key={p.t} className="panel p-6">
          <h3 className="text-[17px] font-semibold text-white">{p.t}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-fog-400">{p.d}</p>
        </div>
      ))}
    </div>
  );
}
