// app/ClientLayout.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ThemeProvider } from '@/app/Provider';
import { FormProvider } from '../components/FormContext';
// import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/redux/store';
// import { CalculationProvider } from '@/CalculationContext';
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
     {/* <CalculationProvider> */}
       <FormProvider>
       {/* <PersistGate loading={null} persistor={persistor}> */}
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      
        {children}
     
    </ThemeProvider>
    {/* </PersistGate> */}
    </FormProvider>
    {/* </CalculationProvider> */}
    </Provider>
  );
};

export default ClientLayout;
