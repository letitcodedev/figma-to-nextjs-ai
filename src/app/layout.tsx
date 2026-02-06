import type { Metadata } from "next";
import { Comfortaa, Nunito, Playfair_Display, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Madelyn Torff | UI/UX Designer",
  description: "Portfolio of Madelyn Torff, a professional UI/UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${nunito.variable} ${playfair.variable} ${raleway.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-[#F9FAFF]">
          {children}
        </main>
      </body>
    </html>
  );
}
