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

export const quicksand = Quicksand({
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
          <Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How will your team support my business?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We take full ownership of your annual financial audits, monthly accounting & bookkeeping, tax, and PRO needs. Our team makes sure every detail is accurate, secure, and fully documented. What does this mean to you? Complete clarity, stronger decisions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'I’m a startup in the DMCC free zone and need audit support. Are you approved to handle this?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Absolutely. We can take care of your annual DMCC audit requirements with no back-and-forth. 800- Simplify is a registered and approved auditor across DMCC, DIFC, JAFZA, DED, DWC, DAFZA, TECOM, Dubai Media City, SAIF Zone, Dubai Internet City, DSO, Hamriyah Free Zone, D3, and other major UAE free zones. You just need to focus on growing your business and let us manage the books.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I know my numbers will be accurate and compliant?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We don’t cut corners. For us, compliance is non-negotiable, so we stick to the UAE tax regulations as well as IAS and IFRS for accounting meticulously. All this keeps your numbers rock-solid, always.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'I run a small business. What should I really be paying for an accountant?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The small business accountant cost depends on your transaction volume, business complexity, and the level of support you need. With 800-Simplify, you don’t just pay for CPA accounting services; you get real value. Small businesses deserve expert support without the heavy price tag. That’s exactly what we deliver. Our experienced accountants offer structured support at a price that fits your budget and business.',
                  },
                },
              ],
            })}
          </Script>

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
