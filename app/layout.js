import { Tangerine, Playfair_Display } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'Arabielle | Luxury Handbags - Coming Soon',
  description: 'Arabielle - Premium luxury handbags with desert-inspired elegance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}