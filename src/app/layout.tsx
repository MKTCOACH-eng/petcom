import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/layout/components";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PETCOM - Todo para el bienestar de tu mejor amigo",
  description: "Infraestructura digital para el cuidado de mascotas. Pet store premium con productos de calidad.",
  keywords: ["mascotas", "pet store", "cuidado de mascotas", "productos para mascotas"],
  icons: {
    icon: [
      {
        url:
          process.env.NEXT_PUBLIC_FAVICON_URL ||
          "https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url:
          process.env.NEXT_PUBLIC_FAVICON_URL ||
          "https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: [
      {
        url:
          process.env.NEXT_PUBLIC_FAVICON_URL ||
          "https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
