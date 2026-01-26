import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import { clinic, site } from "@/config/clinic";
import { CallNowButton } from "@/components/CallNowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${clinic.name}`,
  },
  description: site.description,
  icons: {
    icon: "/brand/logo.svg",
    apple: "/brand/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${sora.variable} ${fraunces.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <CallNowButton />
      </body>
    </html>
  );
}
