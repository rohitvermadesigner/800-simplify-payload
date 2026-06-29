import { Calendar } from "lucide-react";
import Image from "next/image";

const StartBuildScale = () => {
  return (
    <section className="px-4 py-4 md:py-20 cta-section bg-[linear-gradient(90deg,#78398B,#954597)] relative overflow-hidden">
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
              className="w-48 absolute -right-8 -top-20"
            />
            <Image
              src="/images/icons/sqare-outline-purple.png"
              alt=""
              width="125"
              height="0"
              className="w-60 absolute -bottom-20 -right-20"
            />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-row gap-8 items-center justify-center text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-5xl mb-0 leading-[1.1] font-bold">
              Start. Build. Scale.
            </h2>
            <p className="text-lg md:text-[1.2rem] mt-4">
              Tell us what you need and get a quote you can act on.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://800-simplify.org/800-simplify/?focus=true"
              className="bg-[#FFFFFF] text-[#652D8E] px-8 py-3 rounded-[0.5rem] font-medium transition-all duration-200 inline-flex gap-4 items-center shadow-xl justify-center"
            >
              <Calendar className="w-5 h-5" />
              Book my consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartBuildScale;
