import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Your Dream Shed | Complete DIY Guide",
  description: "A step-by-step guide to building a beautiful, sturdy shed from scratch. Learn about materials, tools, and every construction step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
