import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immovable Realty - Smart Real Estate Solutions: Invest, Buy, or Sell with Confidence",
  description: "Your trusted partner for all things real estate. Connect with exceptional real estate opportunities designed to grow your wealth with expert guidance and detailed analytics.",
  keywords: ["real estate", "property investment", "real estate analytics", "investment properties", "real estate advisory", "property portfolio", "wealth building"],
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
