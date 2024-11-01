import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './reset.css';

async function enableMocking() {
  if (import.meta.env.VITE_REACT_APP_NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.ts');
  return worker.start();
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

enableMocking().then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
