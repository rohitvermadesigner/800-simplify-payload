"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const affiliationLogos = [
  {
    src: "/images/affiliation/affiliation1.webp",
    alt: "Dubai Multi Commodities Centre",
  },
  {
    src: "/images/affiliation/affiliation2.webp",
    alt: "Dubai Design District",
  },
  {
    src: "/images/affiliation/affiliation4.webp",
    alt: "Dubai International Financial Centre (DIFC)",
  },
  {
    src: "/images/affiliation/affiliation5.webp",
    alt: "Dubai Airport Free Zone (DAFZA)",
  },
  {
    src: "/images/affiliation/affiliation6.webp",
    alt: "NAKHEEL",
  },
  {
    src: "/images/affiliation/affiliation7.webp",
    alt: "Dubai Internet City",
  },
  {
    src: "/images/affiliation/affiliation8.webp",
    alt: "Dubai Studio City",
  },
  {
    src: "/images/affiliation/affiliation9.webp",
    alt: "Dubai Media City",
  },
  {
    src: "/images/affiliation/affiliation10.webp",
    alt: "Global Trusted e-Network",
  },
  {
    src: "/images/affiliation/affiliation11.webp",
    alt: "DUBAI CHAMBER",
  },
  {
    src: "/images/affiliation/affiliation12.webp",
    alt: "JAFZA",
  },
  {
    src: "/images/affiliation/affiliation13.webp",
    alt: "Dubai Silicon Oasis Authority",
  },
  {
    src: "/images/affiliation/affiliation14.webp",
    alt: "IFZA",
  },
  {
    src: "/images/affiliation/affiliation15.webp",
    alt: "Dubai Healthcare City",
  },
  {
    src: "/images/affiliation/affiliation16.webp",
    alt: "UAQ Free Trade Zone",
  },
  {
    src: "/images/affiliation/affiliation18.webp",
    alt: "DUBAI DEVELOPMENT AUTHORITY",
  },
  {
    src: "/images/affiliation/affiliation19.webp",
    alt: "SAIF Zone",
  },
  {
    src: "/images/affiliation/affiliation20.webp",
    alt: "Dubai World Central (DWC)",
  },
  {
    src: "/images/affiliation/affiliation21.webp",
    alt: "Department of Economic Development",
  },
  {
    src: "/images/affiliation/affiliation23.webp",
    alt: "HFZA (Hamriyah Free Zone Authority)",
  },
  {
    src: "/images/affiliation/affiliation24.webp",
    alt: "ISO 9001:2015 Accredited Certification",
  },
  {
    src: "/images/affiliation/affiliation25.webp",
    alt: "IRQAO",
  },
  {
    src: "/images/affiliation/affiliation27.webp",
    alt: "QUALITY PLUS",
  },
  {
    src: "/images/affiliation/affiliation28.webp",
    alt: "Creative City Fujairah",
  },
  {
    src: "/images/affiliation/affiliation29.webp",
    alt: "MEYDAN",
  },
  {
    src: "/images/affiliation/affiliation30.webp",
    alt: "Ajman Free Zone Authority",
  },
  {
    src: "/images/affiliation/affiliation31.webp",
    alt: "Dubai World Trade Centre",
  },
  {
    src: "/images/affiliation/affiliation32.webp",
    alt: "TECOM",
  },
  {
    src: "/images/affiliation/affiliation33.webp",
    alt: "RAKEZ",
  },
  {
    src: "/images/affiliation/affiliation34.webp",
    alt: "ICC",
  },
  {
    src: "/images/affiliation/affiliation35.webp",
    alt: "Dubai Commerce City",
  },
  {
    src: "/images/affiliation/affiliation36.webp",
    alt: "Masdar City",
  },
  {
    src: "/images/affiliation/affiliation37.webp",
    alt: "Abu Dhabi Airport Free Zone (ADAFZ)",
  },
  {
    src: "/images/affiliation/affiliation38.webp",
    alt: "KHALIFA INDUSTRIAL ZONE ABU DHABI (KIZAD)",
  },
  {
    src: "/images/affiliation/affiliation39.webp",
    alt: "TWOFOUR54",
  },
];

const LogoSlider = () => {
  return (
    <section className="bg-[#E4763D] relative overflow-hidden">
      <Image
        src="/images/icons/2sqare-outline-bg.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -top-24 -left-20"
      />
      <Image
        src="/images/icons/sqare-bg.png"
        alt=""
        width="100"
        height="0"
        className="w-48 absolute -bottom-24 -right-24"
      />
      <div className="relative max-w-7xl mx-auto py-8 md:py-8 px-4 md:px-0 text-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Affiliations and Accreditations
          </h2>
        </div>
        <Swiper
          className="logo-swiper"
          modules={[Navigation, Autoplay]}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop
          speed={4500}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2.2,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          autoHeight={false}
        >
          {affiliationLogos.map((logo) => (
            <SwiperSlide key={logo.src} className="!h-auto">
              <Image
                src={logo.src}
                width={180}
                height={128}
                alt={logo.alt}
                className="h-20 md:h-32 w-full object-contain bg-white border border-[#EEEEEE] rounded-lg p-2"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoSlider;
