import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Tizzle Stores",
  description:
    "Shop a diverse range of products including cosmetics, food, electronic gadgets, fashion apparel, home goods, books, toys, sports equipment, pet supplies, automotive accessories, and much more. Discover quality items and great deals in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
