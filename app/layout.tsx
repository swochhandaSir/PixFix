import "./globals.scss";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "../lib/utils";
import { ClerkProvider } from '@clerk/nextjs'
import { Variable } from "lucide-react";


export const metadata: Metadata = {
  title: "PixFix",
  description: "AI-based image manipulation website",
};

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ variables: {colorPrimary: '#624cf5' }}}>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
