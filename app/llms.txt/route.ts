import { getAllPosts } from "@/lib/blog";
import { APP, COMPANY, FAQS, SITE_URL, SUPPORT_EMAIL } from "@/lib/seo";
import { FAULTS } from "@/lib/faults";

// /llms.txt: a plain-text brief for AI assistants (llmstxt.org convention). Built from the same
// facts file as the site, so it never drifts from the pages or the structured data.
export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts();
  const faults = (t: string) => FAULTS.filter((f) => f.throw === t).map((f) => f.name.toLowerCase()).join(", ");
  const body = `# ${APP.name} (${APP.shortName})

> ${APP.name} is a disc golf form analysis app for iPhone and Android by ${COMPANY}. You film one throw on your phone; the app grades your backhand or forehand against a real coach's ideal form, explains the main fault and the drill that fixes it, and can rebuild the throw as a 3D body. No sensors or extra hardware.

## Key facts
- Platforms: iOS (App Store) and Android (Google Play). AR placement in 3D Throw is iPhone-only.
- Price: $${APP.priceYearly} per year after a ${APP.trialDays}-day free trial.
- App Store rating: ${APP.ratingValue} out of 5 (${APP.ratingCount} ratings).
- Users: ${APP.accounts} accounts; ${APP.throwsAnalyzed} throws analyzed.
- Pose Estimation grades ${APP.faults} coach-defined faults (10 backhand, 10 forehand), only from camera angles that can show them.
- Backhand faults: ${faults("Backhand")}.
- Forehand faults: ${faults("Forehand")}.

## Features
- [Pose Estimation](${SITE_URL}/features/pose-estimation): skeleton tracking graded against a coach's ideal backhand and forehand, with the coach's fix, cue and drill per fault.
- [3D Throw](${SITE_URL}/features/3d-throw): a throw video becomes a 3D body; any angle, 1/4 speed, side-by-side compare synced at release, life-size AR on iPhone.
- [AI Analysis](${SITE_URL}/features/ai-analysis): what's working, the main issue and its root cause, the fix and a drill; backhand, forehand and putting; DGFA Coach answers follow-up questions.
- [DGFA Caddie](${SITE_URL}/features/caddie): disc bag manager (add discs from a photo with flight numbers) and hole-by-hole disc and shot picks from your own bag.

## How it compares
- Versus a private lesson ($80-150/hour): no live in-person correction, but feedback on every throw you film, any time, for $${APP.priceYearly}/year.
- Versus a sensor disc such as TechDisc (about $299): a sensor measures the disc (speed, spin, angles); ${APP.shortName} analyzes the body mechanics that produce them, with no hardware.

## Links
- Website: ${SITE_URL}
- App Store: ${APP.iosUrl}
- Google Play: ${APP.androidUrl}
- Guides: ${SITE_URL}/blog
- Support: ${SUPPORT_EMAIL}
${posts.length ? `\n## Guides\n${posts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`).join("\n")}\n` : ""}
## FAQ
${FAQS.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
