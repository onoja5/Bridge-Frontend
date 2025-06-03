// src/main.tsx
import './global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store, { persistor } from '@/utils/reduxstore.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add this import

// Create custom history with future flags
const history = createBrowserHistory({
  window,
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}
            onBeforeLift={() => {
              console.log('Redux state rehydrated');
            }}
          >

            <HistoryRouter history={history}>
              {/* Wrap App with HelmetProvider */}
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </HistoryRouter>

          </PersistGate>
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);