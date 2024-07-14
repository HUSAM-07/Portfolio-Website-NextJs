import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_Mono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
 });

export const metadata = {
  title: "Mohammed Husamuddin's Portfolio Website",
  description: "Built Using React, Tailwind CSS and Framer Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>{children}
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
}
