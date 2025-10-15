import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div style={{fontFamily:'system-ui',padding:24}}>Dovecote Estate</div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><App /></React.StrictMode>
);
