import * as React from "react";
import { FaHandsHelping, FaLeaf, FaLightbulb } from "react-icons/fa";

const NilaiUtama = () => {
  const values = [
    {
      icon: <FaHandsHelping className="w-10 h-10 text-[#8B4513]" />,
      title: "Kolaborasi",
      desc: "Menjalin kerja sama dengan pelaku UMKM, petani, dan penjual kelapa untuk mengumpulkan tempurung dan serabut sebagai bahan utama produksi.",
      bg: "bg-[#FFFFFF]",
    },
    {
      icon: <FaLeaf className="w-10 h-10 text-[#2E8B57]" />,
      title: "Keberlanjutan",
      desc: "Mengolah limbah serabut kelapa menjadi bahan baru yang bermanfaat melalui proses ramah lingkungan, menjaga keseimbangan antara alam dan manusia.",
      bg: "bg-[#F5F5F5]",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-[#8B4513]" />,
      title: "Inovasi",
      desc: "Menghasilkan produk berkualitas seperti cocopeat dan briket kelapa, menghadirkan solusi efisien dan berkelanjutan bagi berbagai sektor.",
      bg: "bg-[#FFFFFF]",
    },
  ];

  return (
    <section className="py-16 bg-[#A3D1B4]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#2E8B57] mb-4 font-poppins">
          Nilai Utama Kami
        </h2>
        <p className="text-white max-w-2xl mx-auto mb-12 font-lato font-semibold">
          Tiga pilar yang menjadi dasar Narikela Recycle dalam membangun
          keberlanjutan dan kolaborasi untuk lingkungan yang lebih baik.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md ${value.bg} p-8 hover:shadow-lg transition`}
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[#2E8B57] font-poppins mb-3">
                {value.title}
              </h3>
              <p className="text-[#333333] font-lato leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NilaiUtama;
