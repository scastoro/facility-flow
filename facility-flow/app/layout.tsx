import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/navbar';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Facility Flow',
  description: 'Email management for storage facility brokers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col
        bg-gradient-to-br from-accent-50 to-white dark:from-gray-900 dark:to-gray-800
        text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider
          attribute='class'
          enableSystem
          disableTransitionOnChange
          defaultTheme='system'
          themes={['light', 'dark']}
        >
          <Navbar />
          <main className='container mx-auto p-4 flex-1 flex items-center justify-center'>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
