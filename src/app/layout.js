import localFont from 'next/font/local'
import {
  Inter,
  Playfair_Display,
  Dancing_Script,
} from 'next/font/google'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

export const metadata = {
  title: 'Dra. Nadia Homsi',
  description: 'Médica clínica y terapeuta holística',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      className={`${playfair.variable} ${dancingScript.variable}`}
      suppressHydrationWarning={true}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
