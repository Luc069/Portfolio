import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luc | Frontend Developer",
  description: "I specialize in crafting sleek and modern websites using React, NextJS, Supabase and TailwindCSS. From basic websites to complex web applications, I offer scalable solutions tailored to your needs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
