import "./css/globals.scss";

export const metadata = {
  metadataBase: new URL("https://ayo-portal.netlify.app"),
  title: {
    default: "Ayodele Ayokunle David — Full-Stack Developer",
    template: "%s — Ayodele Ayokunle David",
  },
  description:
    "Ayodele Ayokunle David is a Nigerian full-stack developer interested in backend systems, programming languages, systems architecture and product engineering.",
  applicationName: "Ayodele Ayokunle David — Portfolio",
  authors: [{ name: "Ayodele Ayokunle David", url: "https://ayo-portal.netlify.app" }],
  creator: "Ayodele Ayokunle David",
  alternates: { canonical: "https://ayo-portal.netlify.app" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://ayo-portal.netlify.app",
    siteName: "Ayodele Ayokunle David",
    title: "Ayodele Ayokunle David — Full-Stack Developer",
    description:
      "Full-stack development, backend systems and programming language engineering. Based in Warri, Nigeria.",
    images: [{ url: "/ayodele-david.webp", width: 1086, height: 1448, alt: "Ayodele Ayokunle David" }],
  },
  twitter: {
    card: "summary",
    title: "Ayodele Ayokunle David — Full-Stack Developer",
    description:
      "Full-stack development, backend systems and programming language engineering. Based in Warri, Nigeria.",
    images: ["/ayodele-david.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
