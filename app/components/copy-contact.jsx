"use client";

import { useState } from "react";

export default function CopyContact({ value }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-contact" type="button" onClick={copy} aria-label={`Copy Discord username ${value}`}>
      <span>{value}</span><span className="copy-hint">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
