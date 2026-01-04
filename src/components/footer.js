import * as React from "react";
import logo from "../images/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* Kolom 1 - Deskripsi */}
        <div>
          <img
            src={logo}
            width="80"
            height="80"
            className="w-20 h-20 mb-4"
            alt="Narikela Recycle"
          />
          <p className="text-sm leading-relaxed font-lato">
            Narikela Recycle hadir sebagai solusi untuk mengubah limbah kelapa
            menjadi produk bernilai tinggi dan ramah lingkungan, seperti cocopeat
            dan briket kelapa.
          </p>
        </div>

        {/* Kolom 2 - Lokasi */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-3 relative">
            <span className="border-l-4 border-[#F5F5F5] pl-2">Lokasi Kami</span>
          </h3>
          <p className="text-sm font-lato">
            <span className="font-semibold">Workshop Narikela</span>
            <br /> 
            Jalan Kendal 1,
            <br />
            Sindang Jaya, Kabupaten Tangerang, Banten
            <br />
            Indonesia.
          </p>
        </div>

        {/* Kolom 3 - Menu Cepat */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-3 relative">
            <span className="border-l-4 border-[#F5F5F5] pl-2">Menu Cepat</span>
          </h3>
          <ul className="space-y-2 text-sm font-lato">
            <li><a href="/product" className="hover:underline">Produk</a></li>
            <li><a href="/about" className="hover:underline">Tentang Kami</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 4 - Media Sosial */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-3 relative">
            <span className="border-l-4 border-[#F5F5F5] pl-2">Temukan Kami</span>
          </h3>
          <ul className="space-y-2 text-sm font-lato">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.75" viewBox="0 0 320 512">
              <path fill="#ffffff" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg> 
              <a href="https://facebook.com" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10.75" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> 
              <a href="https://instagram.com" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="13.25" viewBox="0 0 576 512">
              <path fill="#ffffff" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>
              <a href="https://youtube.com" className="hover:underline">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-white/80 mt-6 font-lato">
        © {new Date().getFullYear()} Narikela Recycle — All Rights Reserved. Designed by Narikela Team.
      </div>
    </footer>
  );
};

export default Footer;