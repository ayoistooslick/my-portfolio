export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ayoistooslick.netlify.app/sitemap.xml",
    host: "https://ayoistooslick.netlify.app",
  };
}
