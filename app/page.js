import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/theme-toggle";
import CopyContact from "./components/copy-contact";

const external = { target: "_blank", rel: "noreferrer" };
const skills = [
  { title: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Responsive interfaces"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Application logic", "Authentication & validation"] },
  { title: "Databases", items: ["MongoDB", "SQL"] },
  { title: "Tools & infrastructure", items: ["Git", "GitHub", "Linux", "Termux", "Vercel", "Netlify", "VPS environments", "Deployment workflows"] },
  { title: "Interests", items: ["AI & LLM integration", "Programming languages", "Systems architecture", "Software testing", "Product engineering"] },
];

function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span>{index}</span>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-intro">{children}</p> : null}
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social profiles">
      <a href="https://github.com/ayoistooslick" {...external}>GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/ayodele-david-206828445" {...external}>LinkedIn <span aria-hidden="true">↗</span></a>
      <a href="https://x.com/ayoistooslick" {...external}>X <span aria-hidden="true">↗</span></a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <Link className="wordmark" href="#top" aria-label="Ayodele Ayokunle David, home"><span>ay</span><i>.</i></Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions"><ThemeToggle /><a className="nav-contact" href="mailto:davidayodele847@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a></div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span></span><span></span><span></span></summary>
            <nav aria-label="Mobile navigation">
              <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main" className="page-shell">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span>Developer · Warri, Nigeria</p>
            <h1 id="hero-title">I’m Ayodele.<br /><span>I build things</span><br />that matter.</h1>
            <p className="hero-role">Full-Stack Developer <b>·</b> Backend Engineer <b>·</b> Systems Architect</p>
            <p className="hero-summary">Self-driven software developer working across the stack, with a particular interest in backend systems, programming languages and how complex software fits together.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="mailto:davidayodele847@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
            </div>
            <SocialLinks />
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image className="portrait" src="/ayodele-david.webp" alt="Ayodele Ayokunle David" width={760} height={1013} priority sizes="(max-width: 760px) 80vw, 380px" />
              <div className="portrait-caption"><span>AYODELE AYOKUNLE DAVID</span><span>WARRI, NIGERIA&nbsp; / &nbsp;GMT+1</span></div>
            </div>
            <div className="visual-note"><span className="status-dot"></span>Currently learning, building and contributing.</div>
          </div>
          <div className="hero-index" aria-hidden="true">PORTFOLIO — 2026</div>
        </section>

        <section className="content-section about-section" id="about">
          <SectionHeading index="02" eyebrow="A little about me" title="Curiosity, then code." />
          <div className="about-grid">
            <p className="about-lead">I’m a self-driven Nigerian developer who likes to understand a problem before reaching for the obvious solution.</p>
            <div className="about-body">
              <p>I enjoy exploring unconventional ideas and turning them into working software. My work spans frontend and backend engineering; outside that, I experiment with AI engineering and spend time figuring out how complex systems work.</p>
              <p>I’m especially drawn to programming languages, backend systems, systems architecture and product development.</p>
              <p className="philosophy"><span>PERSONAL PHILOSOPHY</span>“Build things that matter.”</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading index="03" eyebrow="Experience & contributions" title="Work in progress, by design.">A straightforward picture of how I spend my time—without padded titles or invented timelines.</SectionHeading>
          <div className="experience-list">
            <article className="experience-item"><span className="item-index">01</span><div><h3>Independent Software Developer</h3><p>Designing and building software independently, from early ideas through implementation.</p></div><span className="item-arrow" aria-hidden="true">↗</span></article>
            <article className="experience-item"><span className="item-index">02</span><div><h3>Open-Source Contributor</h3><p>Contributed to Tabbycat, with work involving backend validation, implementation improvements and testing.</p><a className="inline-link" href="https://github.com/ayoistooslick/tabbycat" {...external}>Tabbycat repository <span aria-hidden="true">↗</span></a></div><span className="item-arrow" aria-hidden="true">↗</span></article>
            <article className="experience-item"><span className="item-index">03</span><div><h3>Member, The Pale Architects</h3><p>Member of The Pale Architects.</p></div><span className="item-arrow" aria-hidden="true">↗</span></article>
            <article className="experience-item"><span className="item-index">04</span><div><h3>Collaborative Software Development</h3><p>Working with others to shape ideas, solve implementation problems and build software together.</p></div><span className="item-arrow" aria-hidden="true">↗</span></article>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionHeading index="04" eyebrow="Tools & interests" title="A practical toolkit.">Things I work with and areas I’m actively curious about. No score bars—just the tools and topics.</SectionHeading>
          <div className="skill-grid">
            {skills.map((group, index) => <article className="skill-group" key={group.title}><p className="skill-index">0{index + 1}</p><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="content-section education-section" id="education">
          <SectionHeading index="05" eyebrow="Education & mentorship" title="Learning is ongoing." />
          <div className="education-grid">
            <article className="education-card"><p className="card-kicker">CURRENT STUDIES</p><h3>Regent International School</h3><p>Current high school student.</p></article>
            <article className="education-card"><p className="card-kicker">MENTORSHIP</p><h3>Warri Tech Hub</h3><p>Technology mentorship.</p></article>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <SectionHeading index="06" eyebrow="Selected projects" title="Ideas made tangible.">A language, a simulation, and the engineering questions behind them.</SectionHeading>
          <article className="project-feature">
            <div className="project-feature-top"><span className="project-label"><span className="status-dot"></span>FLAGSHIP · PROGRAMMING LANGUAGE</span><span className="project-number">PROJECT 01 / 02</span></div>
            <div className="project-feature-grid">
              <div className="project-copy"><h3>PlainScript</h3><p className="project-deck">An intent-oriented language and compiler for JavaScript.</p><p>PlainScript compiles its source into JavaScript. Its compiler is deterministic, with a build workflow designed for regular npm projects and browser or backend development. The public package is distributed as <code>plainscript-lang</code>.</p><div className="tag-list"><span>Language design</span><span>Compiler</span><span>JavaScript</span><span>npm</span></div><div className="project-links"><a className="button button-primary" href="https://github.com/ayoistooslick/plainscript" {...external}>View source <span aria-hidden="true">↗</span></a><a className="inline-link" href="https://www.npmjs.com/package/plainscript-lang" {...external}>npm package <span aria-hidden="true">↗</span></a></div></div>
              <div className="code-panel" aria-label="PlainScript code example"><div className="code-panel-head"><span>example.pln</span><span>PLAINSCRIPT</span></div><pre><code><span className="code-key">when</span> score is at least <span className="code-number">80</span>{"\n  "}<span className="code-key">show</span> <span className="code-string">&quot;accepted&quot;</span>{"\n"}<span className="code-key">otherwise</span>{"\n  "}<span className="code-key">show</span> <span className="code-string">&quot;review&quot;</span>{"\n"}<span className="code-key">done</span></code></pre><div className="code-panel-foot"><span>Plain source → JavaScript</span><span>01</span></div></div>
            </div>
          </article>
          <article className="project-secondary"><div className="project-feature-top"><span className="project-label">EXPERIMENTAL · ARTIFICIAL LIFE</span><span className="project-number">PROJECT 02 / 02</span></div><div className="renew-layout"><div><h3>Renew</h3><span className="paused-pill">Paused / Experimental</span></div><div><p>An artificial-life simulation exploring embodied intelligence, persistent memory, autonomous behaviour, survival and interaction inside a virtual world.</p><p className="muted-note">An experiment in research and engineering, not a completed product or currently active development.</p></div></div></article>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy"><p className="eyebrow"><span>07</span>Contact</p><h2>Have something<br />worth building?</h2><p>I’m open to thoughtful conversations, collaborations and ideas worth exploring.</p><a className="button button-primary" href="mailto:davidayodele847@gmail.com">Email me <span aria-hidden="true">↗</span></a></div>
          <div className="contact-details"><div><span className="detail-label">EMAIL</span><a href="mailto:davidayodele847@gmail.com">davidayodele847@gmail.com</a></div><div><span className="detail-label">LOCATION</span><span>Warri, Delta State, Nigeria</span></div><div><span className="detail-label">TELEGRAM</span><a href="https://t.me/ayokunledavid" {...external}>@ayokunledavid <span aria-hidden="true">↗</span></a></div><div><span className="detail-label">DISCORD</span><CopyContact value="luffytheone" /></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-shell"><Link className="wordmark" href="#top" aria-label="Back to top"><span>ay</span><i>.</i></Link><p>Ayodele Ayokunle David <span>·</span> Building things that matter.</p><div className="footer-links"><a href="https://github.com/ayoistooslick" {...external}>GitHub</a><a href="https://www.linkedin.com/in/ayodele-david-206828445" {...external}>LinkedIn</a><a href="https://x.com/ayoistooslick" {...external}>X</a><a href="https://ayo-portal.netlify.app">Portfolio</a></div><a className="back-top" href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
