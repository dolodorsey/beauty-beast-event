import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Beauty & The Beast | KHG Annual Fall Event Atlanta", description: "Atlanta's most anticipated themed affair — where elegance meets darkness" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }