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
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow h-1/2">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
