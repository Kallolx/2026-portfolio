import type { Metadata } from "next";
import { Agdasima, Afacad } from "next/font/google";
import "./globals.css";

const agdasima = Agdasima({
  variable: "--font-agdasima",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${agdasima.variable} ${afacad.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white min-h-full flex flex-col font-afacad">
        {children}
      </body>
    </html>
  );
}
