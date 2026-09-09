import type { Metadata } from "next";
import "./globals.css";
import "./typography.css";
export const metadata: Metadata = { title: "Forma — Planes", description: "Elige el plan que acompaña tu trabajo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }