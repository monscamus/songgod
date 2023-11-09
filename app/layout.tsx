import "./globals.css";
import type { Metadata } from "next";
import { didot } from "./fonts";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Song God",
  description: "Quiztactular.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${didot.className}`}>
        <div className="w-screen flex flex-row place-content-center">
          <div className="flex flex-col md:max-w-screen-md content-center justify-center ">
            {children}
          </div>
          </div>
      </body>
    </html>
  );
}
