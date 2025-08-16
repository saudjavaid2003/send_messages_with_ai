import './globals.css';
import AuthProvider from '@/context/AuthProvider';

export const metadata = {
  title: 'My App',
  description: 'Test NextAuth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
