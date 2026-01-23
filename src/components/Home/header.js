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

            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
              {/* Button Primary */}
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3
                  text-base md:text-lg
                  font-poppins font-bold
                  rounded-md
                  text-white
                  bg-[#8B4513]
                  border border-[#8B4513]
                  transition-all duration-300
                  hover:bg-[#C4A484]
                  hover:text-[#8B4513]
                  hover:border-[#C4A484]
                "
              >
                Jalin Kerja Sama
                <svg
                  className="w-3.5 h-3.5 ms-2"
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

              {/* Button Secondary */}
              <a
                href="/products"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3
                  text-base md:text-lg
                  font-semibold
                  rounded-md
                  border-2 border-[#1F6F43]
                  text-[#1F6F43]
                  bg-white
                  transition-all duration-300
                  hover:bg-[#1F6F43]
                  hover:text-white
                "
              >
                Lihat Produk Kami
              </a>
            </div>

          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-7 flex lg:justify-end justify-center">
            <img
              className="rounded-xl xl:w-[600px] xl:h-[510px] sm:h-[350px] aspect-[4/3] w-[520] h-[390] object-cover flex justify-center"
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