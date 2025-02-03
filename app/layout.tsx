import type { Metadata } from "next";
import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartMobile } from "@/components/cart-mobile";
import { CartDesktop } from "@/components/cart-desktop";
import { CartMobileButton } from "@/components/cart-mobile-button";

import { CartProvider } from "@/context/cart-context";

import "./globals.css";

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-robotoCondensed",
});

export const metadata: Metadata = {
  title: "PizzaLand",
  description: "Pizza Shop is a pizza delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${bangers.variable} ${quicksand.variable} ${robotoCondensed.variable} antialiased`}
        >
          <Header />
          <CartMobileButton />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
