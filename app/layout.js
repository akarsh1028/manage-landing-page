import { Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

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
      </body>
    </html>
  )
}
