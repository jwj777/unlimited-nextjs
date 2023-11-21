import { Figtree } from 'next/font/google'
import { Providers } from "./providers";
import './globals.css'
import Page from '@/_layout/PageContainer';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <Providers>
          {/* <Page> */}
            {children}
          {/* </Page> */}
        </Providers>
      </body>
    </html>
  )
}
