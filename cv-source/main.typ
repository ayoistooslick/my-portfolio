#import "report-theme.typ": report-theme

#show: report-theme.with(
  title: "Ayodele Ayokunle David — Developer CV",
  author: "Ayodele Ayokunle David",
  rhythm: "longform",
  body-size: 10pt,
  running-header: false,
)
#set page(paper: "a4", margin: (top: 1.3cm, bottom: 1.2cm, x: 1.35cm), numbering: none, header: none, footer: none)
#set text(font: "Noto Sans", size: 9.4pt, lang: "en", region: "us", fill: rgb("#222629"))
#set par(justify: false, leading: 1.2em, spacing: 0pt, first-line-indent: 0pt)
#show link: set text(fill: rgb("#3b5913"))

#let ink = rgb("#171a1c")
#let muted = rgb("#586065")
#let accent = rgb("#d6ff63")
#let divider = rgb("#d9ded7")
#let section-title(label) = [
  #text(size: 11pt, weight: "bold", fill: ink)[#label]
  #v(2pt)
  #line(length: 100%, stroke: 0.6pt + divider)
  #v(9pt)
]
#let small-label(label) = text(size: 7.7pt, weight: "bold", fill: rgb("#3b5913"), tracking: 0.4pt)[#label]

#block(width: 100%, fill: ink, radius: 5pt, inset: (x: 15pt, y: 13pt))[
  #show link: set text(fill: accent)
  #text(size: 27pt, weight: "bold", fill: white)[Ayodele Ayokunle David]
  #v(7pt)
  #text(size: 10pt, weight: "medium", fill: accent)[FULL-STACK DEVELOPER  ·  BACKEND ENGINEER  ·  SYSTEMS ARCHITECT]
  #v(9pt)
  #text(size: 8.6pt, fill: white)[Warri, Delta State, Nigeria  ·  #link("mailto:davidayodele847@gmail.com")[#text("davidayodele847@gmail.com")]]
  #v(5pt)
  #text(size: 8.1pt, fill: rgb("#d4d8d2"))[#link("https://github.com/ayoistooslick")[GitHub / ayoistooslick]  ·  #link("https://www.linkedin.com/in/ayodele-david-206828445")[LinkedIn]  ·  #link("https://x.com/ayoistooslick")[X / #text("@ayoistooslick")]  ·  #link("https://t.me/ayokunledavid")[Telegram / #text("@ayokunledavid")]]
]

#v(9pt)
#small-label("PROFILE")
#v(2pt)
#text(size: 9.6pt)[Self-driven Nigerian software developer working across frontend and backend engineering. Interested in backend systems, programming languages, systems architecture and product development; enjoys turning unconventional ideas into working software and exploring AI engineering.]

#v(10pt)
#grid(columns: (1.58fr, 0.9fr), gutter: 18pt,
  [
    #section-title("Selected projects")
    #text(size: 10pt, weight: "bold", fill: ink)[PlainScript]
    #h(5pt)#small-label("FLAGSHIP · PROGRAMMING LANGUAGE & COMPILER")
    #v(2pt)
    #text(size: 9pt)[Intent-oriented language and deterministic compiler that translates PlainScript to JavaScript. Distributed on npm as #text(weight: "bold")[plainscript-lang]; designed for browser and backend development.]
    #v(2pt)
    #text(size: 8.4pt)[#link("https://github.com/ayoistooslick/plainscript")[Source repository ↗]  ·  #link("https://www.npmjs.com/package/plainscript-lang")[npm package ↗]]
    #v(9pt)
    #text(size: 10pt, weight: "bold", fill: ink)[Renew]
    #h(5pt)#small-label("PAUSED / EXPERIMENTAL")
    #v(2pt)
    #text(size: 9pt)[Artificial-life simulation exploring embodied intelligence, persistent memory, autonomous behaviour, survival and interaction in a virtual world. It remains a paused research and engineering experiment, not a completed product or active development effort.]

    #v(11pt)
    #section-title("Experience & contributions")
    #text(size: 8.9pt, weight: "bold", fill: ink)[Independent Software Developer]
    #v(4pt)
    #text(size: 8.7pt, fill: muted)[Independent software development across the stack, from idea exploration through implementation.]
    #v(9pt)
    #text(size: 8.9pt, weight: "bold", fill: ink)[Open-Source Contributor · Tabbycat]
    #v(4pt)
    #text(size: 8.7pt, fill: muted)[Technical contribution involving backend validation, implementation improvements and testing.]
    #v(9pt)
    #text(size: 8.9pt, weight: "bold", fill: ink)[The Pale Architects · Collaborative Development]
    #v(4pt)
    #text(size: 8.7pt, fill: muted)[Member of The Pale Architects; collaborates with others on software development.]

    #v(11pt)
    #section-title("Education & mentorship")
    #grid(columns: (1fr, 1fr), gutter: 8pt,
      [#text(size: 8.9pt, weight: "bold", fill: ink)[Regent International School]#v(4pt)#text(size: 8.7pt, fill: muted)[Current high school student.]],
      [#text(size: 8.9pt, weight: "bold", fill: ink)[Warri Tech Hub]#v(4pt)#text(size: 8.7pt, fill: muted)[Technology mentorship.]],
    )
  ],
  [
    #section-title("Technical skills")
    #small-label("FRONTEND")
    #v(2pt)
    #text(size: 8.7pt)[React · JavaScript · HTML5 · CSS3 · Responsive interfaces]
    #v(9pt)
    #small-label("BACKEND")
    #v(2pt)
    #text(size: 8.7pt)[Node.js · Express.js · REST APIs · Application logic · Authentication & validation]
    #v(9pt)
    #small-label("DATABASES")
    #v(2pt)
    #text(size: 8.7pt)[MongoDB · SQL]
    #v(9pt)
    #small-label("TOOLS & INFRASTRUCTURE")
    #v(2pt)
    #text(size: 8.7pt)[Git · GitHub · Linux · Termux · Vercel · Netlify · VPS environments · Deployment workflows]
    #v(9pt)
    #small-label("ADDITIONAL INTERESTS")
    #v(2pt)
    #text(size: 8.7pt)[AI & LLM integration · Programming languages · Systems architecture · Software testing · Product engineering]
  ],
)

#v(11pt)
#line(length: 100%, stroke: 0.6pt + divider)
#v(3pt)
#text(size: 8pt, fill: muted)[“Build things that matter.”  ·  #link("https://github.com/ayoistooslick")[github.com/ayoistooslick]  ·  #link("mailto:davidayodele847@gmail.com")[#text("davidayodele847@gmail.com")]]
