import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vexx-AI — A IA que controla seu computador",
  description:
    "Vexx-AI é uma IA de desktop que vê sua tela, entende o contexto e executa tarefas no seu computador. 100% local, com suas próprias APIs.",
  keywords: [
    "IA",
    "automação",
    "controle remoto",
    "Vexx-AI",
    "agente autônomo",
    "assistente desktop",
    "IA local",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${inter.variable} antialiased bg-background text-ink`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
