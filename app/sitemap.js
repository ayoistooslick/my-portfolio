export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://ayoistooslick.netlify.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
