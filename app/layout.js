import './globals.css'
import {Inter} from 'next/font/google'
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Crossfit Events',
  description: 'Find the latest crossfit events',
  keywords: 'sport, crossfit, nutrition',
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
