import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function ensureMount(): HTMLElement {
  const el = document.getElementById('root')
          || document.getElementById('app');
  if (el) return el as HTMLElement;
  const div = document.createElement('div');
  div.id = 'root';
  document.body.appendChild(div);
  return div;
}

ReactDOM.createRoot(ensureMount()).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
