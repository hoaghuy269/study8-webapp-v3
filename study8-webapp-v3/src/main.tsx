import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import i18n from './i18n';
import {setLocale} from "./services/api-service";
import { ToastProvider } from './providers/toast-provider';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const getLocale = () => localStorage.getItem('locale') || navigator.language.split('-')[0] || 'en';
setLocale(getLocale());

root.render(
  <StrictMode>
    <ToastProvider>
      <HelmetProvider>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
            <Suspense>
              <App />
            </Suspense>
          </I18nextProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ToastProvider>
  </StrictMode>
);
