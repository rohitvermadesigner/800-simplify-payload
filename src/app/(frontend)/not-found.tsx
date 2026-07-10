import Link from 'next/link'
import React from 'react'
import { Home } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="bg-white text-[#2F3B51]">
      <section className="relative flex min-h-[calc(100vh-520px)] items-center overflow-hidden px-6 py-20 md:min-h-[calc(100vh-420px)] md:px-10 md:py-28">
        <div className="absolute -right-20 top-10 h-52 w-52 rounded-full border-[34px] border-[#E4763D]/10" />
        <div className="absolute -left-24 bottom-8 h-56 w-56 rounded-full border-[36px] border-[#652D8E]/10" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4763D]">Error 404</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-[#2F3B51] md:text-7xl">
            This page could not be found
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-[#4A5565] md:text-lg">
            404 page error page: Uh oh. That page doesn't exist. Head to our homepage that does
            exist or clarify your queries in the messenger in the lower-left corner.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-[#652D8E] text-white hover:bg-[#552579]">
              <Link href="/">
                <Home className="h-4 w-4" />
                Go home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
