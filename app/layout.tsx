import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { themeBootScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Music Connect - Conectando Artistas e Contratantes",
  description:
    "Plataforma para conexão entre artistas e contratantes através da música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Aplica tema antes do React hidratar para evitar flash de tema errado */}
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="antialiased bg-bg text-fg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
