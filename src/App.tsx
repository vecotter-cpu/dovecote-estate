import React, { Suspense } from 'react';

/**
 * Tries to lazy-load a real App from common locations.
 * If none exist, renders a simple shell so the site loads.
 */
const TryRealApp = React.lazy(async () => {
  // Try common paths from typical Replit/Vite setups
  const candidates = [
    () => import('./app/App'),           // src/app/App.tsx
    () => import('./pages/App'),         // src/pages/App.tsx
    () => import('./pages/Home'),        // src/pages/Home.tsx
    () => import('./App')                // src/App.tsx (will be this file; ignored)
  ];
  for (const load of candidates) {
    try {
      const mod = await load();
      if (mod && (mod.default || mod.App)) {
        return { default: (mod.default ?? mod.App) as React.ComponentType };
      }
    } catch {}
  }
  // Fallback shell UI
  return {
    default: function FallbackApp() {
      return (
        <div style={{fontFamily:'Inter, system-ui, Arial', padding: '32px', lineHeight: 1.5}}>
          <h1 style={{margin:0}}>Dovecote Estate</h1>
          <p style={{opacity:0.8, marginTop:8}}>
            App component not found in common paths. This is a temporary shell so the site renders.
          </p>
          <ul style={{marginTop:16}}>
            <li>Place your real App component at <code>src/App.tsx</code>, or</li>
            <li>Adjust <code>src/main.tsx</code> to import your actual root component.</li>
          </ul>
        </div>
      );
    }
  };
});

export default function App() {
  return (
    <Suspense fallback={<div style={{padding:24}}>Loading…</div>}>
      <TryRealApp />
    </Suspense>
  );
}
