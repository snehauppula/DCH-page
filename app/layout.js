import "./globals.css";
import { Inter, Montserrat, Playfair_Display, Lora } from "next/font/google";
import JoinProvider from "@/components/JoinProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import SmoothScroll from "@/components/SmoothScroll";

// same type system as the HFC Billing site: Playfair display, Montserrat brand, Inter body, Lora tagline
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-brand" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const lora = Lora({ subsets: ["latin"], style: "italic", variable: "--font-tagline" });

export const metadata = {
  title: "HFC Software – Cloud Kitchen, Restaurant & POS Billing Software",
  description: "HFC Software builds cloud kitchen software, restaurant management, POS billing and custom software for modern food and digital businesses.",
};

// light is the default; the toggle stores an explicit choice
const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||"light"}catch(e){document.documentElement.dataset.theme="light"}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable} ${lora.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <JoinProvider>
          <SmoothScroll />
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
