import React from "react"
import Fade from "react-reveal/Fade"

const WorkPage = () => {
  return (
    <Fade>
    <section className="bg-[#A3D1B4] py-20 px-6 md:px-16 font-lato">
      <div className="max-w-6xl mx-auto ">
        {/* Label Section */}
        <div className="items-center text-center text-2xl bg-white text-[#2E8B57] font-poppins font-bold px-4 py-1 rounded-full mb-4">
          Visi & Misi Kami
        </div>

        {/* Heading & Description */}
        <h2 className="text-white font-poppins font-semibold tracking-wide mb-2 uppercase ">
          Nilai Utama Kami
        </h2>
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-[#2E8B57] mb-6">
          Mewujudkan Ekonomi Sirkular dari Kelapa
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-4xl">
          <span className="font-poppins text-[#8B4513] font-bold">
            Narikela Recycle
          </span>{" "}
          hadir dengan visi membangun ekonomi sirkular berkelanjutan melalui
          pengolahan limbah kelapa menjadi produk bernilai tinggi. Kami percaya
          bahwa setiap bagian dari kelapa dapat memberikan manfaat bagi
          masyarakat, lingkungan, dan masa depan yang lebih hijau.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Misi */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold text-[#2E8B57] mb-4">
              Misi Kami
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-4">
              <li>
                <span className="font-poppins font-medium text-[#8B4513]">
                  Misi Lingkungan —{" "}
                </span>
                Menginisiasi revolusi daur ulang limbah organik melalui
                teknologi tepat guna yang mengubah sabut dan tempurung kelapa
                menjadi produk bernilai tinggi — cocopeat dan briket — yang
                memutus jejak karbon dan meminimalkan pembuangan akhir.
              </li>
              <li>
                <span className="font-poppins font-medium text-[#8B4513]">
                  Misi Ekonomi —{" "}
                </span>
                Memberdayakan jaringan UMKM kelapa dengan menciptakan aliran
                pendapatan tambahan dari limbah mereka, sekaligus menyediakan
                solusi energi dan agro yang terjangkau bagi pelaku usaha dan
                komunitas.
              </li>
              <li>
                <span className="font-poppins font-medium text-[#8B4513]">
                  Misi Sosial —{" "}
                </span>
                Membangun kesadaran kolektif akan gaya hidup berkelanjutan
                melalui edukasi dan kolaborasi aktif dengan komunitas, serta
                menciptakan lapangan kerja hijau di sepanjang rantai nilai
                kelapa.
              </li>
            </ul>
          </div>

          {/* Visi */}
          <div className="bg-[#C4A484]/10 border-l-4 border-[#8B4513] pl-6 py-4 rounded-md">
            <h3 className="text-2xl font-poppins font-semibold text-[#2E8B57] mb-4">
              Visi Kami
            </h3>
            <p className="text-gray-800 leading-relaxed italic">
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
