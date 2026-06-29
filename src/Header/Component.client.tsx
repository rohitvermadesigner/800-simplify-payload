'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { CMSLink } from '@/components/Link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const navItems = data?.navItems || []

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // / next js code /

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`z-[10000] left-0 right-0 mx-auto  ${scrolled ? 'sticky md:top-0' : 'fixed max-w-7xl mx-auto md:top-5'}`}
      >
        <div
          className={`
    p-4 
    ${
      scrolled
        ? 'bg-white rounded-none border border-b-1'
        : isOpen
          ? 'bg-[#fff]'
          : 'bg-white md:bg-[rgba(255,255,255,0.7)] md:rounded-xl'
    }
    transition-all duration-300
  `}
        >
          {' '}
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
            <div className="md:shadow-sm w-full md:w-1/3 md:w-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <a href="#" className="flex items-center gap-3">
                    <Image
                      src="/images/logo.svg"
                      width={180}
                      height={0}
                      alt="800 Simplify"
                      className="h-auto w-[180px]"
                    />
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#697B84] hover:text-[#001f3f]"
                  >
                    <span>{isOpen ? <X /> : <Menu />}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:w-auto md:px-3">
              <nav
                id="mainNav"
                className={` ${isOpen ? 'block' : 'hidden'} flex md:flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-8 items-start md:items-center w-full md:w-auto mt-4 md:mt-0`}
              >
                {navItems.map(({ link }, i) => {
                  return <CMSLink key={i} {...link} appearance="link" />
                })}
              </nav>
            </div>

            <div className="md:block hidden">
              <Link
                href="https://800-simplify.org/800-simplify/?focus=true"
                target="_blank"
                className="bg-[#652D8E] text-[#ffffff] py-3 px-5 rounded-lg ml-0 md:ml-24 drop-shadow-[2px_4px_10px_#AD46FF4D]"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
