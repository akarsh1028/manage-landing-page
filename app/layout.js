import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

const inter = Be_Vietnam_Pro({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Frontend Mentor | Manage landing page by Akarsh Sharma',
  description: 'Manage landing page created using Next.js and Tailwind',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <div className="attribution">
          Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</Link>.
          Coded by <Link href="https://akarshsharma.vercel.app/" target="_blank">Akarsh Sharma</Link>.
        </div>
      </body>
    </html>
  )
}
