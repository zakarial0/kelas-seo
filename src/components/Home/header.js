import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/hero-section.webp"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className=" my-4 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-6 lg:mt-8 lg:px-0 xl:mt-0 flex gap-10 lg:flex-justify lg:flex lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#2e8b57] text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-poppins">
              Narikela Recycle
            </h2>
            <h3 className="mt-2 text-lg sm:text-2xl md:text-3xl lg:text-xl font-bold font-montserrat text-[#8B4513]">
              Bersama Menciptakan Lingkaran Kebaikan.
            </h3>
            <p className="font-lato font-medium mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-5xl lg:me-20">
              Kami menghadirkan kehidupan baru dari tempurung dan serabut kelapa. Dari limbah menjadi manfaat — dari alam, kembali untuk alam.
            </p>

            <div
              className="
                mt-5 sm:mt-8
                flex flex-col
                items-stretch
                gap-3
                sm:flex-row sm:justify-center
                lg:justify-start
                min-h-[120px]
              "
            >
              {/* BUTTON UTAMA */}
              <div className="w-full sm:w-auto">
                <a
                  href="/contact"
                  className="
                    w-full sm:w-auto
                    min-h-[48px]
                    flex items-center justify-center
                    px-8
                    font-semibold
                    rounded-lg
                    bg-[#8B4513] text-white
                    border-2 border-[#8B4513]
                    transition-colors duration-300
                    hover:bg-[#C4A484]
                    hover:text-[#1F6F43]
                    hover:border-[#C4A484]
                    focus:outline-none
                    focus:ring-2 focus:ring-[#C4A484]
                  "
                >
                  Jalin Kerja Sama
                  <svg
                    className="w-4 h-4 ml-2 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>

              {/* BUTTON SEKUNDER */}
              <div className="w-full sm:w-auto">
                <a
                  href="/products"
                  className="
                    w-full sm:w-auto
                    min-h-[48px]
                    flex items-center justify-center
                    px-6
                    border-2 border-[#1F6F43]
                    text-[#1F6F43]
                    bg-white
                    font-semibold
                    rounded-lg
                    transition-colors duration-300
                    hover:bg-[#1F6F43]
                    hover:text-white
                    focus:outline-none
                    focus:ring-2 focus:ring-[#A3D1B4]
                  "
                >
                  Lihat Produk Kami
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-7 flex lg:justify-end justify-center">
            <img
              className="rounded-xl xl:w-[600px] xl:h-[510px] sm:h-[350px] h-full w-full object-cover flex justify-center"
              src={hero}
              alt="cocopeat media tanam ramah lingkungan"
              loading="eager"
              fetchpriority="high"
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header