import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientThemeProvider from "./components/ClientThemeProvider";
import { ToastProvider } from "@/components/ui/use-toast";
import { AuthProvider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitMeAI - Virtual Try-On Platform",
  description: "Try clothes on virtually before you buy them",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClientThemeProvider>
          <ToastProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ToastProvider>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
