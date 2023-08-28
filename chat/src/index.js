import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import filter from 'leo-profanity';
import resources from './i18next/index.js';
import App from './App.js';
import store from './slices/index.js';
import { AuthProvider } from './providers/AuthProvider.jsx';
import { SocketProvider } from './providers/SocketProvider.jsx';

filter.loadDictionary('ru');
filter.loadDictionary('en');

const rollbarConfig = {
  accessToken: process.env.ROLLBAR_KEY,
  environment: process.env.ROLLBAR_ENV,
};

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources,
});

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(
  <React.StrictMode>
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <Provider store={store}>
          <AuthProvider>
            <SocketProvider>
              <App />
              <ToastContainer />
            </SocketProvider>
          </AuthProvider>
        </Provider>
      </ErrorBoundary>
    </RollbarProvider>
  </React.StrictMode>,
);
