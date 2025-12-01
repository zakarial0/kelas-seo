import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <Fade>
      <section className="bg-[#A3D1B4] py-14 md:py-20 px-5 md:px-16 font-lato">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <div className="text-center text-xl md:text-2xl bg-white text-[#2E8B57] font-poppins font-bold px-4 py-1 rounded-full mb-4 w-fit mx-auto">
            Visi & Misi Kami
          </div>

          {/* Title */}
          <h2 className="text-white font-poppins font-semibold tracking-wide mb-1 text-center uppercase">
            Nilai Utama Kami
          </h2>
          <h1 className="text-3xl md:text-5xl font-poppins font-bold text-[#2E8B57] mb-6 text-center">
            Mewujudkan Ekonomi Sirkular dari Kelapa
          </h1>

          {/* Desc */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center md:text-left">
            <span className="font-poppins text-[#8B4513] font-bold">Narikela Recycle</span>{" "}
            hadir dengan visi membangun ekonomi sirkular berkelanjutan...
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            
            {/* Misi */}
            <div>
              <h3 className="text-2xl font-poppins font-semibold text-[#2E8B57] mb-4 text-center md:text-left">
                Misi Kami
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-4 text-left">
                <li>
                  <span className="font-poppins font-bold text-[#8B4513]">Misi Lingkungan — </span>
                  Menginisiasi revolusi daur ulang limbah organik melalui
                teknologi tepat guna yang mengubah sabut dan tempurung kelapa
                menjadi produk bernilai tinggi.
                </li>
                <li>
                  <span className="font-poppins font-bold text-[#8B4513]">Misi Ekonomi — </span>
                  dengan menciptakan aliran
                pendapatan tambahan dari limbah mereka.
                </li>
                <li>
                  <span className="font-poppins font-bold text-[#8B4513]">Misi Sosial — </span>
                  Membangun kesadaran kolektif akan gaya hidup berkelanjutan
                melalui edukasi dan kolaborasi aktif dengan komunitas.
                </li>
              </ul>
            </div>

            {/* Visi */}
            <div className="bg-[#C4A484]/10 border-l-4 border-[#8B4513] pl-6 py-4 rounded-md">
              <h3 className="text-2xl font-poppins font-semibold text-[#2E8B57] mb-4 text-center md:text-left">
                Visi Kami
              </h3>
              <p className="text-gray-800 leading-relaxed italic text-center md:text-left">
                “Menjadi Poros Ekonomi Sirkular Terdepan di Indonesia, dengan
              Mengubah Limbah Kelapa Menjadi Solusi Berkelanjutan untuk
              Masyarakat dan Planet.”
              </p>
            </div>

          </div>
        </div>
      </section>
    </Fade>
  )
}

export default WorkPage