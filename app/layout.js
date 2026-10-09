import { Lobster, Roboto_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const mono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const lobster = Lobster({ subsets: ["latin"], weight: "400", variable: "--font-lobster" });

export const metadata = {
  title: { default: "AniCorner", template: "%s | AniCorner" },
  description: "Watch anime and read manga on AniCorner.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/thumbnails/logo.png` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${lobster.variable}`}>
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
