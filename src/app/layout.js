import { Figtree } from 'next/font/google'
import { Providers } from "./providers";
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'


const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <Providers>
     
            {children}
  
        </Providers>
      </body>
      <GoogleTagManager gtmId="GTM-NLSDXS5K" />
    </html>
  )
}
