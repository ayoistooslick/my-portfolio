export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://ayo-portal.netlify.app/sitemap.xml",
    host: "https://ayo-portal.netlify.app",
  };
}
