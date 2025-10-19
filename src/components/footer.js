import * as React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../images/logo-sementara.png";

const Footer = () => {
  return (
    <footer className="bg-[#8B4513] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
        {/* Kolom 1 - Deskripsi */}
        <div>
          <img
            src={logo}
            alt="Narikela Recycle"
            className="w-16 mb-4"
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
            Jalan Raya Klapasawit No. 45,
            <br />
            Parung, Bogor, Jawa Barat,
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
            <li><a href="#produk" className="hover:underline">Produk</a></li>
            <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#galeri" className="hover:underline">Galeri</a></li>
            <li><a href="#kontak" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 4 - Media Sosial */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-3 relative">
            <span className="border-l-4 border-[#F5F5F5] pl-2">Temukan Kami</span>
          </h3>
          <ul className="space-y-2 text-sm font-lato">
            <li className="flex items-center gap-2">
              <FaFacebookF /> <a href="#" className="hover:underline">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> <a href="#" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> <a href="#" className="hover:underline">YouTube</a>
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
