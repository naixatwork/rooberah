import ConfiguredRoutes from './configuredRoutes.tsx';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <ConfiguredRoutes />
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
