import React, { useEffect, useState } from 'react';

/** Probe a few likely locations for your real app without static imports */
const candidates = import.meta.glob([
  './App.real.tsx',
  './AppReal.tsx',
  './app/App.tsx',
  './pages/App.tsx',
  './pages/Home.tsx'
]);

async function loadFirst(): Promise<React.ComponentType | null> {
  for (const loader of Object.values(candidates)) {
    try {
      const mod: any = await loader();
      return (mod.default ?? mod.App) as React.ComponentType;
    } catch {
      /* keep trying */
    }
  }
  return null;
}

export default function App() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);
  useEffect(() => { loadFirst().then(setComp); }, []);
  if (Comp) return <Comp />;
  return (
    <div style={{fontFamily:'system-ui, -apple-system, Segoe UI', padding: 24, lineHeight: 1.5}}>
      <h1 style={{margin:0}}>Dovecote Estate</h1>
      <p style={{opacity:.8, marginTop:8}}>
        Temporary shell. Place your real app at <code>src/App.real.tsx</code>
        (or <code>src/app/App.tsx</code>, <code>src/pages/App.tsx</code>, <code>src/pages/Home.tsx</code>) and redeploy.
      </p>
    </div>
  );
}
