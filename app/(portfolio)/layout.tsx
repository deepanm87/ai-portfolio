import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "../globals.css";
import { draftMode } from "next/headers"
import Script from "next/script"
import { AppSidebar } from "@/components/app-sidebar"
import { FloatingDock } from "@/components/FloatingDock"
import SidebarToggle from "@/components/SidebarToggle"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Portfolio",
  description: "a customizable portfolio with AI support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

          <Script 
            src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
            strategy="afterInteractive"
          />
          <SidebarProvider defaultOpen={false}>
            <SidebarInset>{children}</SidebarInset>

            <AppSidebar side="right" />

            <FloatingDock />
            <SidebarToggle />
          </SidebarProvider>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
