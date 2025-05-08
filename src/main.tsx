import './global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import store, { persistor } from '@/utils/reduxstore.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
            <App />
          </PersistGate>
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
