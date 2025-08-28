import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'ANUSREE PANKAN - MERN STACK DEVELOPER',
  description: "Portfolio of Anusree Pankan, a MERN Stack Developer with 1.5+ years experience in building scalable, user-friendly applications.",
  keywords: [
    "MERN Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Full Stack",
    "Portfolio",
    "TypeScript",
  ],
  authors: [{ name: "Anusree Pankan" }],
  openGraph: {
    title: "Anusree Pankan | MERN Stack Developer",
    description:
      "Explore my projects, skills, and experience in full-stack development.",
    url: "https://my-profile-two-pearl.vercel.app/",
    siteName: "Anusree Pankan Portfolio",
    images: [
      {
        url: "/https://res.cloudinary.com/dezmechji/image/upload/v1756385369/shareImg_pbbcgt.png",
        width: 1200,
        height: 630,
        alt: "Anusree Pankan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
