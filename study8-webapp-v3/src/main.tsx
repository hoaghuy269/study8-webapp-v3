import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import i18n from './i18n';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Suspense>
            <App />
          </Suspense>
        </I18nextProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
