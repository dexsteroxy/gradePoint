
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@/app/Provider';
import { FormProvider } from '../components/FormContext';
import InitializeState from '../components/InitializeState';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FormProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <InitializeState />
            {children}
          </ThemeProvider>
        </FormProvider>
      </PersistGate>
    </Provider>
  );
};

export default ClientLayout;
