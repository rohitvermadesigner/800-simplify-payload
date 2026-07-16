import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Quicksand } from 'next/font/google'
import React from 'react'
import Script from 'next/script'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(quicksand.variable)} lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-5T9Z46MW");
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5T9Z46MW"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Script id="chat-widget-config" strategy="beforeInteractive">
            {`
            window.ChatWidgetConfig = {
              baseUrl: 'https://chatbot.excellencedigitalaccess.com',
              apiKey: 'JGlYkh2sXfUKUUsJw9LcHxetH8fztq6w'
            };
          `}
          </Script>
          <Script
            src="https://chatbot.excellencedigitalaccess.com/js/widgets/widget-loader.js"
            strategy="afterInteractive"
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
