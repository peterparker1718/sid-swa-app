import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToMoviee - Discover & Stream Movies",
  description: "Your ultimate destination for discovering and streaming the latest movies and TV shows. Explore trending content, get recommendations, and enjoy seamless streaming.",
  keywords: "movies, streaming, TV shows, entertainment, watch online, cinema",
  authors: [{ name: "SID Capital Bridge" }],
  creator: "SID — U.S.–Indonesia Capital Bridge",
  publisher: "SID Capital Bridge",
  openGraph: {
    title: "ToMoviee - Discover & Stream Movies",
    description: "Your ultimate destination for discovering and streaming the latest movies and TV shows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToMoviee - Discover & Stream Movies",
    description: "Your ultimate destination for discovering and streaming the latest movies and TV shows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://app.tomoviee.cn" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
