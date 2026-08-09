import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { ToastContainer } from '@/components/ui/ToastContainer';

export const metadata: Metadata = {
  title: 'Sign Today | Custom Signs & Graphics',
  description:
    'Sign Today - Custom signs, vinyl graphics, foamex boards, acrylic signage, correx boards, metal signage, eco banners & boards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="text-gray-800 bg-white min-h-screen flex flex-col font-sans">
        <AppProvider>
          {children}
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}
