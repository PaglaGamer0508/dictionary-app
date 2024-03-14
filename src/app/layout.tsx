import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WordWise",
  description:
    "WordWise is a english dictionary, where you can find definations and meaning of different english words, with exaple, voice and source",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
