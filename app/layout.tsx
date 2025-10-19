import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
export const metadata: Metadata = {
  title: "Greensouq",
  description: "Developed by Abdullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
