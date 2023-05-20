import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJam } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJam = BaiJam({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baiJam',
})

export const metadata = {
  title: 'NLW Soacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJam.variable} bg-gray-950 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
