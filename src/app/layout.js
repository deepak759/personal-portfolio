import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Deepak's Personal Portfolio",
  description: "A personal portfolio website showcasing my projects, skills, and experience as a web developer. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and responsive design.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
