import React from "react"
import Fade from "react-reveal/Fade"
import aboutImg from "../../images/about.jpg";

const AboutHeader = () => {
  return (
    <Fade>
      <section id="about" className="py-20 bg-white px-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* Text Section */}
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E8B57] mb-4 font-poppins">
            Halo, dari <span className="text-[#8B4513]">Narikela Recycle</span>
          </h2>
          <p className="text-[#333333] font-lato leading-relaxed mb-4 font-medium">
            Narikela Recycle hadir sebagai pelopor pengelolaan limbah kelapa di
            Indonesia. Kami berkomitmen menciptakan siklus keberlanjutan melalui
            pengumpulan, pengolahan, dan pemanfaatan tempurung serta serabut
            kelapa menjadi produk bernilai tinggi dan ramah lingkungan.
          </p>
          <p className="text-[#333333] font-lato leading-relaxed mb-4 font-medium">
            Setiap tahap produksi kami — mulai dari pemilihan bahan baku,
            pencucian, pengeringan, hingga pengepakan — dilakukan dengan kontrol
            kualitas ketat untuk memastikan hasil terbaik bagi pelanggan kami.
          </p>
          <p className="text-[#333333] font-lato leading-relaxed font-medium">
            Narikela Recycle tidak hanya menghadirkan produk seperti cocopeat,
            coco fiber, dan briket kelapa, tapi juga membuka peluang kolaborasi
            dengan UMKM dan komunitas untuk bersama menjaga bumi.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-80">
          <img
            src={aboutImg}
            alt="Proses Produksi Narikela Recycle"
            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
    </Fade>
  )
}

export default AboutHeader
