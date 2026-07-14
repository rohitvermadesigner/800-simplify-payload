'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

interface HeaderClientProps {
  data: Header
}

type BaseNavItem = NonNullable<Header['navItems']>[number]
type GrandchildNavItem = BaseNavItem
type ChildNavItem = BaseNavItem & {
  subItems?: GrandchildNavItem[] | null
}
type TopNavItem = BaseNavItem & {
  subItems?: ChildNavItem[] | null
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const navItems = (data?.navItems || []) as TopNavItem[]

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
  const [openTopItem, setOpenTopItem] = useState<string | null>(null)
  const [openChildItem, setOpenChildItem] = useState<string | null>(null)
  const [dropdownDismissed, setDropdownDismissed] = useState(false)

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setOpenTopItem(null)
    setOpenChildItem(null)
    setDropdownDismissed(true)
  }, [])

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

  useEffect(() => {
    closeMenu()
  }, [closeMenu, pathname])

  const renderGrandchildItems = (items: GrandchildNavItem[], parentKey: string) => {
    return (
      <div className="flex flex-col gap-1 border-l border-[#e2e8f0] pl-3 md:min-w-56 md:rounded-lg md:border md:border-[#e2e8f0] md:bg-white md:p-2 md:pl-2 md:shadow-lg">
        {items.map(({ link }, index) => (
          <div
            className="rounded-md text-[#364153] hover:bg-[#f8fafc] hover:text-[#652D8E]"
            key={`${parentKey}-grandchild-${index}`}
            onClick={closeMenu}
          >
            <CMSLink
              {...link}
              appearance="link"
              className="block w-full px-3 py-2 text-left text-sm font-medium"
            />
          </div>
        ))}
      </div>
    )
  }

  const renderChildItems = (items: ChildNavItem[], parentKey: string) => {
    return (
      <div className="mt-2 flex w-full flex-col gap-1 rounded-lg bg-[#f8fafc] p-2 md:mt-0 md:min-w-64 md:border md:border-[#e2e8f0] md:bg-white md:shadow-lg">
        {items.map((item, index) => {
          const itemKey = `${parentKey}-child-${index}`
          const children = item.subItems?.filter((child) => child?.link) || []
          const hasChildren = children.length > 0
          const isChildOpen = openChildItem === itemKey

          return (
            <div className="group/child relative" key={itemKey}>
              <div className="flex items-center justify-between gap-2 rounded-md text-[#364153] hover:bg-white hover:text-[#652D8E] md:hover:bg-[#f8fafc]">
                <div className="min-w-0 flex-1" onClick={closeMenu}>
                  <CMSLink
                    {...item.link}
                    appearance="link"
                    className="block w-full px-3 py-2 text-left text-sm font-medium"
                  />
                </div>

                {hasChildren ? (
                  <button
                    aria-expanded={isChildOpen}
                    aria-label={`${item.link?.label || 'Menu item'} submenu`}
                    className="flex size-9 shrink-0 items-center justify-center rounded-md text-[#697B84] hover:text-[#652D8E] md:size-7"
                    onClick={(event) => {
                      event.stopPropagation()
                      setDropdownDismissed(false)
                      setOpenChildItem(isChildOpen ? null : itemKey)
                    }}
                    type="button"
                  >
                    <ChevronDown
                      className={`size-4 transition-transform md:-rotate-90 ${isChildOpen ? 'rotate-180 md:-rotate-90' : ''}`}
                    />
                  </button>
                ) : null}
              </div>

              {hasChildren ? (
                <div
                  className={`${isChildOpen ? 'block' : 'hidden'} mt-1 md:absolute md:left-full md:top-0 md:mt-0 md:hidden md:pl-2 md:group-hover/child:block md:group-focus-within/child:block`}
                >
                  {renderGrandchildItems(children, itemKey)}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    )
  }

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
                  <a href="/" className="flex items-center gap-3">
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
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    onClick={() => {
                      setDropdownDismissed(false)
                      setIsOpen(!isOpen)
                    }}
                    className="md:hidden p-2 text-[#697B84] hover:text-[#001f3f]"
                    type="button"
                  >
                    <span>{isOpen ? <X /> : <Menu />}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 md:w-auto md:px-3">
              <nav
                id="mainNav"
                className={` ${isOpen ? 'block' : 'hidden'} flex md:flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-8 items-start md:items-center w-full md:w-auto mt-4 md:mt-0 text-[#364153]`}
              >
                {navItems.map((item, i) => {
                  const itemKey = `top-${i}`
                  const children = item.subItems?.filter((child) => child?.link) || []
                  const hasChildren = children.length > 0
                  const isTopOpen = openTopItem === itemKey

                  return (
                    <div
                      className="group/top relative w-full md:w-auto"
                      key={itemKey}
                      onFocus={() => setDropdownDismissed(false)}
                      onMouseEnter={() => setDropdownDismissed(false)}
                    >
                      <div className="flex w-full items-center justify-between gap-2 rounded-md md:w-auto">
                        <div className="min-w-0 flex-1" onClick={closeMenu}>
                          <CMSLink
                            {...item.link}
                            appearance="link"
                            className="block w-full px-1 py-2 text-left text-sm font-medium text-[#364153] hover:text-[#652D8E] md:w-auto"
                          />
                        </div>

                        {hasChildren ? (
                          <button
                            aria-expanded={isTopOpen}
                            aria-label={`${item.link?.label || 'Menu item'} submenu`}
                            className="flex size-9 shrink-0 items-center justify-center rounded-md text-[#697B84] hover:text-[#652D8E] md:pointer-events-none md:size-auto"
                            onClick={(event) => {
                              event.stopPropagation()
                              setDropdownDismissed(false)
                              setOpenTopItem(isTopOpen ? null : itemKey)
                              setOpenChildItem(null)
                            }}
                            type="button"
                          >
                            <ChevronDown
                              className={`size-4 transition-transform ${isTopOpen ? 'rotate-180' : ''} md:group-hover/top:rotate-180`}
                            />
                          </button>
                        ) : null}
                      </div>

                      {hasChildren ? (
                        <div
                          className={`${!dropdownDismissed && isTopOpen ? 'block' : 'hidden'} md:absolute md:left-0 md:top-full md:hidden md:pt-3 ${dropdownDismissed ? '' : 'md:group-hover/top:block md:group-focus-within/top:block'}`}
                        >
                          {renderChildItems(children, itemKey)}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </nav>
            </div>

            <div className="md:block hidden">
              <Link
                href="https://wa.me/97145579552"
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
