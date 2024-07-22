import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans_Thai({ subsets: ["thai"], weight: "400" });
const noto = Noto_Sans_Thai({ subsets: ["thai"], weight: "400" });

export const metadata: Metadata = {
  title: "Alphawolf: Big C AI",
  description: "Your Personal Shopping Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
