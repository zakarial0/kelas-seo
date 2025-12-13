import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/hero-section.webp"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className=" my-5 mx-auto max-w-7xl px-4 sm:mt-4 sm:px-6 md:mt-6 lg:mt-8 lg:px-0 xl:mt-0 flex gap-10 lg:flex-justify lg:flex lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-[#2e8b57] text-3xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-poppins">
              Narikela Recycle
            </h2>
            <h4 className="mt-2 text-lg sm:text-2xl md:text-3xl lg:text-xl font-bold font-montserrat text-[#8B4513]">
              Bersama Menciptakan Lingkaran Kebaikan.
            </h4>
            <p className="font-lato font-semibold mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-5xl lg:me-20">
              Kami menghadirkan kehidupan baru dari tempurung dan serabut kelapa. Dari limbah menjadi manfaat — dari alam, kembali untuk alam.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="font-poppins font-bold transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base rounded-md text-center bg-[#8B4513] text-white border border-[#8B4513] hover:text-[#8B4513] hover:border-[#C4A484] hover:bg-[#C4A484] md:text-lg md:px-10 "
                >
                  Jalin Kerja Sama
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/products"
                  className="font-lato font-bold transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border-2  border-[#2E8B57] text-base rounded-md text-[#2E8B57] hover:text-white bg-transparent hover:bg-[#2E8B57] md:py-3 md:text-lg md:px-10"
                >
                  Lihat Produk Kami
                </a>
              </div>
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 flex lg:justify-end justify-center">
            <img
              className="rounded-xl w-auto h-full object-cover flex justify-center"
              src={hero}
              alt=""
              fetchpriority="high"
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header