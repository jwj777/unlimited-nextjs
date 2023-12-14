import { Figtree } from 'next/font/google'
import { Providers } from "./providers";
import './globals.css'
import Page from '@/_layout/PageContainer';
import Script from 'next/script';

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-NLSDXS5K" /> */}
      <Script id="google-analytics">
        {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NLSDXS5K');
        `}
      </Script>
        <Providers>
          {/* <Page> */}
            {children}
          {/* </Page> */}
        </Providers>
      </body>
    </html>
  )
}
