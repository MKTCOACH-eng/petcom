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
      {
        url:
          "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>\
<rect width='64' height='64' rx='12' fill='%23FFC107'/>\
<text x='50%' y='55%' text-anchor='middle' font-family='Inter,Arial' font-size='38' fill='%23FFFFFF' font-weight='700'>P</text>\
</svg>",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url:
          process.env.NEXT_PUBLIC_FAVICON_URL ||
          "https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url:
          process.env.NEXT_PUBLIC_FAVICON_URL ||
          "https://yxdamvwvnbkukcyzcemx.supabase.co/storage/v1/object/public/LOGO/Favicon.png",
        color: "#FFC107",
      },
    ],
  },
  themeColor: "#FFC107",
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
