import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "IronPulse Fitness | Elite Performance Training",
  description: "Push your limits with state-of-the-art equipment, expert trainers, and high-energy classes designed to transform your physique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${oswald.variable} ${roboto.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-red-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
