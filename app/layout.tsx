// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/ClientLayout'; // Import the new ClientLayout component
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from '@/redux/store';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Result Tracker',
  description: 'This site helps you to calculate your Grade Point (GP)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
