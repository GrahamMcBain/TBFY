import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TBFY - Too Busy For You",
  description: "Protect your calendar 11am-2pm PST for TBPN viewing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
