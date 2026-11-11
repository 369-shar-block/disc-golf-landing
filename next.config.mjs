/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Old URLs keep their ranking: permanent (308) redirects to the renamed pages.
  async redirects() {
    return [
      { source: "/features/ai-analysis", destination: "/features/form-analysis", permanent: true },
      {
        source: "/blog/how-ai-disc-golf-form-analysis-works",
        destination: "/blog/how-disc-golf-form-analysis-software-works",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
