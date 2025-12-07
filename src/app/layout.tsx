import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Super Science Academy Gadhinglaj - JEE, NEET, MHT-CET Coaching",
  description: "S.B. Patil Sir's Super Science Academy - Premier coaching institute for JEE, NEET, MHT-CET, and foundation courses in Gadhinglaj. Expert faculty, proven track record, comprehensive study materials.",
  keywords: ["Super Science Academy", "JEE coaching Gadhinglaj", "NEET coaching", "MHT-CET", "S.B. Patil", "competitive exams", "foundation courses", "science coaching"],
  authors: [{ name: "Super Science Academy" }],
  creator: "Super Science Academy",
  publisher: "Desolve Frames PVT LTD",
  robots: "index, follow",
  openGraph: {
    title: "Super Science Academy Gadhinglaj",
    description: "Premier coaching institute for JEE, NEET, and competitive exams",
    type: "website",
    locale: "en_IN",
    siteName: "Super Science Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Science Academy Gadhinglaj",
    description: "Premier coaching institute for JEE, NEET, and competitive exams",
  },
  icons: {
    icon: "/assets/images/imgs/img1.png",
    apple: "/assets/images/imgs/img1.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="relative">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
