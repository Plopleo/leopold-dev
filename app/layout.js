import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Léopold Pélissier | Full Stack Developer",
  description: "Portfolio of Léopold Pélissier, Full Stack Developer based in Lyon.",
  keywords: "Full Stack Developer, Next.js, React, Web Development, Lyon, France",
  authors: [{ name: "Léopold Pélissier" }],
  creator: "Léopold Pélissier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="pastel">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
