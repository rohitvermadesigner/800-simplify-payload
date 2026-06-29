"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const leanTeamCards = [
  {
    title: "Freelancers",
    image: "/images/freelancers.png",
    alt: "800 Simplify - Freelancers",
    hoverGradient:
      "hover:bg-[radial-gradient(circle,_#845084_20%,_transparent_80%)]",
    description:
      "Focus on what you love and leave your financial hassles to us. From monthly accounting to periodic audits and tax filings in the UAE, we've got you covered.",
  },
  {
    title: "Startups",
    image: "/images/startups.png",
    alt: "800 Simplify - Startups",
    hoverGradient:
      "hover:bg-[radial-gradient(circle,_#9447a1_20%,_transparent_80%)]",
    description:
      "You build the foundation, and we'll keep everything behind your numbers simple. We make accounting, audit & tax, and PRO effortless so your growth stays on track.",
  },
  {
    title: "Entrepreneurs",
    image: "/images/entrepreneurs.png",
    alt: "800 Simplify - Entrepreneurs",
    hoverGradient:
      "hover:bg-[radial-gradient(circle,_#7243a1_20%,_transparent_80%)]",
    description:
      "You build the vision, and we'll handle the chaos behind the scenes. We turn financial complexity into decisions and clarity you can trust.",
  },
  {
    title: "SMEs",
    image: "/images/smes.png",
    alt: "Small and Medium Enterprises (SMEs)",
    circleAlt: "800 Simplify - SMEs",
    hoverGradient:
      "hover:bg-[radial-gradient(circle,_#a3548e_20%,_transparent_80%)]",
    description:
      "Growing fast? We make sure your numbers keep up and give you clarity that lets you scale with confidence.",
  },
];

const ForLeanTeams = () => {
  return (
    <section className="bg-[linear-gradient(90deg,#78398B,#954597)] text-white relative overflow-hidden">
      <Image
        src="/images/icons/2sqare-outline-purple.png"
        alt=""
        width="150"
        height="0"
        className="w-72 absolute -top-24 -left-28"
      />
      <Image
        src="/images/icons/sqare-bg-purple.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -bottom-20 -left-20"
      />
      <Image
        src="/images/icons/sqare-bg-purple.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -right-24 -top-24"
      />
      <Image
        src="/images/icons/sqare-outline-purple.png"
        alt=""
        width="125"
        height="0"
        className="w-60 absolute -bottom-20 -right-20"
      />
      <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 md:px-4 lg:px-0 text-center">
        <div className="lg:px-72">
          <h2 className="text-3xl md:text-4xl font-bold">
            For lean teams with growing ambitions.
          </h2>
          <p className="font-medium mt-2">
            We&apos;re here to support the dreams that are building slowly to
            the ones who are ready to scale.
          </p>
        </div>

        <Swiper
          className="mt-8 md:mt-12"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {leanTeamCards.map((card) => (
            <SwiperSlide key={card.title} className="!h-auto">
              <div
                className={`relative h-full pb-12 md:pb-6 md:h-96 p-6 rounded-xl border-[1px] bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)] overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:backdrop-blur-xl ${card.hoverGradient} text-left`}
              >
                <Image
                  src={card.image}
                  width={60}
                  height={60}
                  alt={card.alt}
                  className="rounded-[1rem] shadow-xl shadow-black/30 group-hover:-rotate-[15deg] group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold mt-5">{card.title}</h3>
                <p className="mt-4">{card.description}</p>
                <Image
                  src="/images/circle.png"
                  width={110}
                  height={110}
                  alt={card.circleAlt ?? card.alt}
                  className="absolute -bottom-6 -right-6 group-hover:scale-[1.2] transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ForLeanTeams;
