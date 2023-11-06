import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack Web Developer',
  description: "Explore the work of an experienced Full Stack Web Developer. Discover web projects showcasing skills in front-end and back-end development. Let's create your web solution together!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
