import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://immovablesrealty.com"),
  title: {
    default: "IMMOVABLES REALTY - Smart Real Estate Solutions: Invest, Buy, or Sell with Confidence",
    template: "%s | IMMOVABLES REALTY",
  },
  description:
    "Your trusted partner for all things real estate. Connect with exceptional real estate opportunities in Ogun State designed to grow your wealth with expert guidance and detailed analytics.",
  keywords: [
    "real estate",
    "property investment",
    "real estate analytics",
    "investment properties",
    "real estate advisory",
    "property portfolio",
    "wealth building",
    "Ogun State properties",
    "Abeokuta real estate",
    "Nigeria property investment",
    "land for sale",
    "houses for sale",
    "estate development",
    "IMMOVABLES REALTY",
  ],
  authors: [{ name: "IMMOVABLES REALTY" }],
  creator: "IMMOVABLES REALTY",
  publisher: "IMMOVABLES REALTY",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://immovablesrealty.com",
    siteName: "IMMOVABLES REALTY",
    title: "IMMOVABLES REALTY - Smart Real Estate Solutions",
    description:
      "Your trusted partner for real estate investment in Ogun State. Explore prime properties, estates, and land with expert advisory services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IMMOVABLES REALTY - Real Estate Investment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMMOVABLES REALTY - Smart Real Estate Solutions",
    description:
      "Your trusted partner for real estate investment in Ogun State.",
    images: ["/og-image.jpg"],
    creator: "@immovablesrealt",
    site: "@immovablesrealt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0C3B82",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Real Estate",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700&family=Allura&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
