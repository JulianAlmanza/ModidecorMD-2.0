import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Modidecor MD",
  description: "Pagina principal de Modidecor MD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={
          merriweather.className +
          " w-screen bg-gradient-to-r from-red-500 to-orange-500"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
