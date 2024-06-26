import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/BootstrapClient";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { StoreProvider } from "@/redux/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kelana",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <BootstrapClient />
          <Navbar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
