import "./globals.css";
import { Inter } from "next/font/google";
import JoinProvider from "@/components/JoinProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Digital Creators Hub – Where creators connect, collaborate & grow",
  description: "A community hub for podcasters, gamers, video makers, photographers, artists and writers.",
};

const themeScript = `try{var t=localStorage.getItem("theme");if(!t)t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <JoinProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
          <FloatingChat />
        </JoinProvider>
      </body>
    </html>
  );
}
