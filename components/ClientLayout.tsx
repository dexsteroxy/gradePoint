// app/ClientLayout.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ThemeProvider } from '@/app/Provider';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      
        {children}
     
    </ThemeProvider>
    </Provider>
  );
};

export default ClientLayout;
