import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoFix AI — Your Autonomous AI Software Engineer',
  description: 'Autonomous repository analysis, repair, verification, and pull request generation powered by GPT-5.6 and Codex.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
