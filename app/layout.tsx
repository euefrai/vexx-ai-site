import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vexx-AI | A IA que controla seu computador",
  description: "Vexx-AI é uma IA de desktop que vê sua tela, entende o contexto e executa tarefas no seu computador automaticamente. 100% local, com suas próprias APIs.",
  keywords: ["IA", "automação", "controle remoto", "Vexx-AI", "agente autônomo", "assistente desktop", "IA local"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="noise-overlay" />
        <div className="bg-mesh" />
        <Navbar />
        <main className="relative z-10 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
