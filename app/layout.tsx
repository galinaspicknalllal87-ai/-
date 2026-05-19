import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Materials Engineer Portfolio',
  description: 'Portfolio for Thermal Interface Materials and Epoxy Composite R&D engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
