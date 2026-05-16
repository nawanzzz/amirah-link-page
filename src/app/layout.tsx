import type { Metadata, Viewport } from "next";
import "./globals.css";
import { creator } from "@/config/creator";

export const metadata: Metadata = {
  title: creator.creatorName,
  description: creator.bio || `Official links for ${creator.creatorName}.`,
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: creator.theme.backgroundDeep
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
