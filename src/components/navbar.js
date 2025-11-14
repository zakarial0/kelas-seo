import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo-sementara.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="bg-[#2E8B57]">
      <div className="max-w-7xl mx-auto px-3 py-2 rounded-md">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a
              className="text-black flex-shrink-0 font-montserrat font-semibold flex flex-row"
              href="/"
            >
              <img src={logo} alt="Narikela Recycle" className="w-10 h-10 mr-2 rounded-full"></img>
              <span className="text-white font-bold font-poppins text-lg self-center">
                Narikela Recycle
              </span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  className="relative text-white hover:text-[#A3D1B4] px-3 py-2 rounded-md text-sm font-semibold font-poppins"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="relative text-white hover:text-[#A3D1B4] px-3 py-2 rounded-md text-sm font-semibold font-poppins"
                  to="/about"
                >
                  About
                </Link>

                <Link
                  className="relative text-white hover:text-[#A3D1B4] px-3 py-2 rounded-md text-sm font-semibold font-poppins"
                  to="/gallery"
                >
                  gallery
                </Link>
                <Link
                  className="relative text-white hover:text-[#A3D1B4] px-3 py-2 rounded-md text-sm font-semibold font-poppins"
                  to="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="relative text-white hover:text-[#A3D1B4] px-3 py-2 rounded-md text-sm font-semibold font-poppins"
                  to="/contact"
                >
                  Contact
                </Link>
                <div className="items-center">
                  <a
                    href="tel:#"
                    className="transition-all duration-500ms ease-in-out hover:ease-in-out bg-[#8B4513] mt-5 py-2.5 px-4 text-base font-medium text-center text-white rounded-lg hover:bg-[#C4A484]"
                  >
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              id="al"
              aria-label="Menu"
              onClick={() => setOpenMenu(!openMenu)}
              className="bg-white text-gray-800 dark:text-white hover:text-black-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                width="20"
                height="20"
                fill="#8B4513"
                className="h-8 w-8"
                viewBox="0 0 1792 1792"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className="transition duration-1000 ease-in-out md:hidden">
          <div className="md-px-2 pt-2 pb-3 space-y-1 sm:px-3 transition duration-1000 ease-in-out">
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 text-sm font-semibold font-poppins border-b-2 border-[#C4A484] w-full text-center"
              href="/"
            >
              Home
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 text-sm font-semibold font-poppins border-b-2 border-[#C4A484] w-full text-center"
              href="/about"
            >
              About
            </a>

            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 text-sm font-semibold font-poppins border-b-2 border-[#C4A484] w-full text-center"
              href="/gallery"
            >
              gallery
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 text-sm font-semibold font-poppins border-b-2 border-[#C4A484] w-full text-center"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="text-black opacity-50 hover:opacity-100 px-3 py-3 text-sm font-semibold font-poppins border-b-2 border-[#C4A484] w-full text-center"
              href="/contact"
            >
              Contact
            </a>
            <div className="items-center mt-20 py-3">
              <a
                href="tel:#"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-[#8B4513] text-white  font-poppins hover:text-white/70 border  hover:bg-transparent md:text-lg md:px-10 "
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar