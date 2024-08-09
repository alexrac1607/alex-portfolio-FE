import { ReactNode } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
