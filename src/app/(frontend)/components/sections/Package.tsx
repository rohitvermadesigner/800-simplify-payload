"use client";

import React, { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const packages = [
  {
    name: "CORE",
    price: "800",
    description:
      "For Startups, small business or companies getting their financial footing.",
    features: ["Accounting", "VAT Returns Filing", "Email Support"],
    hiddenRows: 3,
    accent: {
      border: "hover:border-[#0092B8]",
      gradient: "from-[#155DFC] to-[#0092B8]",
      button:
        "group-hover:bg-[linear-gradient(90deg,#155DFC,#0092B8)] group-hover:border-[#FFFFFF]",
    },
  },
  {
    name: "ADVANCED",
    price: "1,200",
    description:
      "For Growing Business seeking better controls and financial insights.",
    features: [
      "Accounting",
      "VAT Returns Filing",
      "Email Support",
      "Call Support",
      "VAT Compliance",
      "Regular Updates to Regulatory Changes",
      "License Renewal",
      "Corporate Tax Returns Filing",
    ],
    popular: true,
    accent: {
      border: "hover:border-[#652D8E]",
      gradient: "from-[#9D4A9A] to-[#652D8E]",
      button:
        "group-hover:bg-[linear-gradient(90deg,#9D4A9A,#652D8E)] group-hover:border-[#FFFFFF]",
    },
  },
  {
    name: "ELITE",
    price: "2,500",
    description:
      "For Established organization seeking full-scale financial oversight and strategic advisory.",
    features: [
      "Accounting",
      "VAT Returns Filing",
      "Email Support",
      "Call Support",
      "VAT Compliance",
      "Regular Updates to Regulatory Changes",
      "License Renewal",
      "Corporate Tax Returns Filing",
    ],
    extraFeatures: [
      "Dedicated Account Manager",
      "Annual Audit Report",
      "Monthly Meetings",
      "Visa Renewal (Up to 3 per year)",
      "Corporate Tax Compliance",
    ],
    accent: {
      border: "hover:border-[#155DFC]",
      gradient: "from-[#4F39F6] to-[#155DFC]",
      button:
        "group-hover:bg-[linear-gradient(90deg,#4F39F6,#155DFC)] group-hover:border-[#FFFFFF]",
      text: "text-[#155DFC]",
    },
  },
];

const Package = () => {
  const [showEliteFeatures, setShowEliteFeatures] = useState(false);

  return (
    <section>
      <div
        className="relative max-w-7xl mx-auto pt-8 md:pt-16 px-4 md:px-0"
        id="packages"
      >
        <div className="lg:px-64 text-center">
          <span className="uppercase text-xl md:text-2xl font-bold text-[#652D8E]">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F3B51] mt-4">
            Built for every stage, structured to adapt.
          </h2>
          <p className="text-[#4A5565] md:px-4 font-medium mt-2">
            Choose the level of financial oversight that matches your
            operations. Upgrade anytime.
          </p>
        </div>

        <Swiper
          className="mt-8 md:mt-12 md:px-4 lg:!px-28 !py-8"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween:12
            },
            768: {
              slidesPerView: 2,
              spaceBetween:12
            },
            1024: {
              slidesPerView: 3,
              spaceBetween:24
            },
          }}
        >
          {packages.map((plan) => {
            const isElite = plan.name === "ELITE";
            const visibleExtraFeatures =
              isElite && showEliteFeatures ? plan.extraFeatures ?? [] : [];
            const featureList = [...plan.features, ...visibleExtraFeatures];

            return (
              <SwiperSlide key={plan.name} className="!h-auto py-2">
                <div
                  className={`h-full border-2 border-[#F3F4F6] rounded-[2rem] px-4 pt-6 pb-24 md:px-4 md:pt-4 md:pb-24 lg:px-6 lg:pt-6 lg:pb-24 text-center shadow-[2px_4px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-105 relative group ${plan.accent.border}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[linear-gradient(90deg,#9D4A9A,#652D8E)] text-white px-3 py-1 rounded-full text-[0.7rem] font-bold flex gap-1 items-center">
                      <Image
                        src="/images/most-popular.svg"
                        alt="Most Popular"
                        width="15"
                        height="0"
                      />
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-[#2F3B51] text-[1.2rem] font-bold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#4A5565] text-[0.9rem] mb-4 font-medium">
                    Starting from
                  </p>
                  <div className="mb-4">
                    <span className="text-[#4A5565] text-[0.9rem]">AED</span>
                    <span
                      className={`font-bold text-[2.5rem] bg-gradient-to-r ${plan.accent.gradient} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-[#4A5565] text-[0.9rem]">
                      /month
                    </span>
                  </div>
                  <p className="text-[#4A5565] mt-4 text-[0.8rem] mb-6 text-left">
                    {plan.description}
                  </p>

                  <div className="list-box">
                    <ul className="text-[#314158] text-left mb-6">
                      {featureList.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 mb-3 text-[0.9rem]"
                        >
                          <span
                            className={`bg-gradient-to-r ${plan.accent.gradient} w-6 h-6 rounded-md shadow-lg flex items-center justify-center absolute`}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </span>
                          <span className="pl-8">{feature}</span>
                        </li>
                      ))}

                      {Array.from({ length: plan.hiddenRows ?? 0 }).map(
                        (_, index) => (
                          <li
                            key={`empty-${plan.name}-${index}`}
                            className="items-start gap-2 mb-3 text-[0.9rem] hidden md:block"
                          >
                            &nbsp;
                          </li>
                        )
                      )}
                    </ul>

                    {isElite && (
                      <button
                        type="button"
                        className={`toggleBtn ${plan.accent.text} text-[0.9rem] inline-flex items-center gap-1`}
                        onClick={() =>
                          setShowEliteFeatures((current) => !current)
                        }
                      >
                        {showEliteFeatures ? "Show Less" : "Show More"}
                        {showEliteFeatures ? (
                          <ChevronUp className="w-3 h-3" />
                        ) : (
                          <ChevronDown className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                  <a
                    href="mailto:info@800-simplify.com"
                    className={`bg-white border-[1px] border-[#000000] duration-300 ${plan.accent.button} text-black group-hover:text-white px-6 py-3 rounded-full font-medium transition-all inline-block w-[85%] group-hover:shadow-xl absolute bottom-6 left-0 right-0 ml-auto mr-auto`}
                  >
                    Get Started
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Package;
