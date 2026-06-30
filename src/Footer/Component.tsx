import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import Image from 'next/image'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <>
      <footer className="bg-white py-8 pb-0 border-t border-gray-200 relative" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr_1fr_1fr] gap-4 md:gap-8 mb-8">
            {/* Logo + description */}
            <div className="pr-4">
              <Link className="flex items-start mb-3" href="/">
                <Logo />
              </Link>

              <p className="text-[0.9rem] text-[#4A5565] font-medium">
                Built for SMEs and growing businesses, 800-Simplify eases the process and takes the
                weight off finance, so you stay in control without the clutter.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <div className="text-lg text-[#0C0C0C] font-semibold mb-5">Quick Links</div>
              <ul className="list-disc pl-5 marker:text-[#8200DB]">
                {navItems.map(({ link }, i) => {
                  return (
                    <li>
                      <CMSLink
                        className="text-[0.9rem] text-[#4A5565] font-medium block mb-3"
                        key={i}
                        {...link}
                      />
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg text-[#0C0C0C] font-semibold mb-5">Services</h3>
              <ul className="list-disc pl-5 marker:text-[#8200DB]">
                <li>
                  <Link
                    href="#services"
                    className="text-[0.9rem] text-[#4A5565] font-medium block mb-3"
                  >
                    Accounting & Bookkeeping
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[0.9rem] text-[#4A5565] font-medium block mb-3"
                  >
                    Audit & Assurance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[0.9rem] text-[#4A5565] font-medium block mb-3"
                  >
                    Taxation Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-[0.9rem] text-[#4A5565] font-medium block mb-3"
                  >
                    PRO Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg text-[#0C0C0C] font-semibold mb-5">Contact Info</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Image src="/images/envelop.svg" alt="Email" width={40} height={40} />
                  <a
                    href="mailto:info@800-simplify.com"
                    className="text-sm hover:text-[#652D8E] text-[#525252]"
                  >
                    info@800-simplify.com
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Image src="/images/call.svg" alt="Phone" width={40} height={40} />
                  <a href="tel:80074675439" className="text-sm hover:text-[#652D8E] text-[#525252]">
                    800-SIMPLIFY
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="border-t border-gray-300 mt-3 py-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg text-[#0C0C0C] font-semibold mb-3">Sharjah</h4>
                <p className="text-sm text-[#525252]">
                  Suite 23, Building Y, Sharjah Airport International Free Zone, Sharjah, UAE
                </p>
              </div>

              <div>
                <h4 className="text-lg text-[#0C0C0C] font-semibold mb-3">Dubai</h4>
                <p className="text-sm text-[#525252]">
                  Business Gate Center, Unit 1005, Level 10, Ibn Batuta Gate Office, Jebel Ali,
                  Dubai, UAE
                </p>
              </div>

              <div>
                <h4 className="text-lg text-[#0C0C0C] font-semibold mb-3">Abu Dhabi</h4>
                <p className="text-sm text-[#525252]">
                  Office 49, 1st Floor, Max Home Business Centre, Emirates Towers, Hamdan Street,
                  Abu Dhabi, UAE
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-300 mt-3 py-4 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-[#4A5565]">© 2026 800-Simplify. All rights reserved.</p>

            <a
              href="/privacy-policy"
              className="text-[0.9rem] text-[#4A5565] font-medium mt-2 md:mt-0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
