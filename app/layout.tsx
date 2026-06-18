import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Guo | Portfolio",
  description:
    "Software engineering portfolio for Daniel Guo, featuring projects, resume highlights, and interactive themes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
