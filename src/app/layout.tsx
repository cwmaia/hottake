import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Íslenskar Fréttir',
  description: 'Nýjustu fréttir frá öllum landshlutum Íslands',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="is">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Íslenskar Fréttir
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-white mt-12 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Íslenskar Fréttir. Allur réttur áskilinn.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 