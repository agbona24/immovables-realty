import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMMOVABLES REALTY - Providing Affordable Landed Properties",
  description: "Your trusted partner for affordable property ownership. Secure your future with land investments.",
  keywords: ["real estate", "landed properties", "affordable housing", "property investment", "land for sale"],
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
