import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell not-found">
      <p className="eyebrow"><span>404</span>That route doesn’t exist</p>
      <h1>Nothing here<br /><span>but a dead end.</span></h1>
      <p>The page may have moved. You can head back to the portfolio home.</p>
      <Link className="button button-primary" href="/">Back to home <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
