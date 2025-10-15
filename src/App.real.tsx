import React from "react";

export default function AppReal() {
  return (
    <main style={{fontFamily:"system-ui, -apple-system, Segoe UI", lineHeight:1.5}}>
      <header style={{padding:"24px 24px 8px"}}>
        <img src="/dovecote-logo.png" alt="Dovecote Estate" style={{height:48}} />
        <h1 style={{margin:"16px 0 4px"}}>Dovecote Estate</h1>
        <p style={{opacity:.8, margin:0}}>
          Live on Netlify ✅ — replace this starter with your real UI.
        </p>
      </header>
    </main>
  );
}
