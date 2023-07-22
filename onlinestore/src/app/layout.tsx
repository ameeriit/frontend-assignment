'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import QueryProvider from './api/QueryProvider';
import { Provider } from 'react-redux';
import store from './store/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>OnlineStore</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <QueryProvider>{children}</QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
