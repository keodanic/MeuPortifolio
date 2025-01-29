
import "./globals.css";
import {Montserrat} from 'next/font/google'

const mainFont= Montserrat({
  weight:['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-family-main',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mainFont.variable}>
      <body >
        {children}
      </body>
    </html>
  );
}
