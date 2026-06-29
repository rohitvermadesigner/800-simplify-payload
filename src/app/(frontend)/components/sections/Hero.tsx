import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-x-0 top-[4.8rem] h-[26rem] w-full object-cover object-[60%_center] md:inset-0 md:h-full md:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/800-simplify.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}
      <div className="absolute inset-0 z-10 hidden md:block bg-gradient-to-r from-black via-black/25 to-transparent" />
      <div className="absolute inset-x-0 top-20 bottom-0 z-10 md:hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.20),rgba(0,0,0,0.30),rgba(0,0,0,0.99),rgba(0,0,0,0.92)_68%,#000_100%)]" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-end md:items-center pb-16">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4 md:gap-8 items-center">
            <div className="text-white">
              <h1 className="text-3xl md:text-7xl font-bold leading-tight drop-shadow-[2px_4px_10px_rgba(0,0,0,0.5)]">
                Built for businesses <br />
                that appreciate value.
              </h1>

              <p className="mt-4 mb-6 text-md md:text-2xl">
                Effective Solutions for Audit, Accounting, Tax and PRO Services
                in the UAE.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="mailto:info@800-simplify.com"
                  target="_blank"
                  className="btn-primary inline-flex gap-2"
                >
                  Write to us <ArrowRight />
                </Link>

                <Link
                  href="tel:80074675439"
                  className="btn-secondary inline-flex gap-2"
                >
                  <Phone />
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
