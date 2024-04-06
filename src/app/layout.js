import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/BootstrapClient";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
