import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from './components/Navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'React Learning Hub - Học React từ cơ bản đến nâng cao',
  description:
    'Trang web học React toàn diện với các chủ đề từ cơ bản đến nâng cao bao gồm SPA, Redux, Styling và nhiều hơn nữa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
