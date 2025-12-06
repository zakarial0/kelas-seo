import * as React from "react";
// import { FaHandsHelping, FaLeaf, FaLightbulb } from "react-icons/fa";

const NilaiUtama = () => {
  const values = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 640 640">
      <path fill="#8B4513" d="M300.9 117.2L184.3 246.8C179.7 251.9 179.9 259.8 184.8 264.7C215.3 295.2 264.8 295.2 295.3 264.7L327.1 232.9C331.3 228.7 336.6 226.4 342 226C348.8 225.4 355.8 227.7 361 232.9L537.6 408L608 352L608 64L496 128L472.2 112.1C456.4 101.6 437.9 96 418.9 96L348.5 96C347.4 96 346.2 96 345.1 96.1C328.2 97 312.3 104.6 300.9 117.2zM148.6 214.7L255.4 96L215.8 96C190.3 96 165.9 106.1 147.9 124.1L32 256L32 608L176 472L188.4 482.3C211.4 501.5 240.4 512 270.3 512L286 512L279 505C269.6 495.6 269.6 480.4 279 471.1C288.4 461.8 303.6 461.7 312.9 471.1L353.9 512.1L362.9 512.1C382 512.1 400.7 507.8 417.7 499.8L391 473C381.6 463.6 381.6 448.4 391 439.1C400.4 429.8 415.6 429.7 424.9 439.1L456.9 471.1L474.4 453.6C483.3 444.7 485.9 431.8 482 420.5L344.1 283.7L329.2 298.6C279.9 347.9 200.1 347.9 150.8 298.6C127.8 275.6 126.9 238.7 148.6 214.6z"/></svg>,
      title: "Kolaborasi",
      desc: "Menjalin kerja sama dengan pelaku UMKM, petani, dan penjual kelapa untuk mengumpulkan tempurung dan serabut sebagai bahan utama produksi.",
      bg: "bg-[#FFFFFF]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 512 512">
    <path fill="#2e8b57" d="M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"/></svg>,
      title: "Keberlanjutan",
      desc: "Mengolah limbah serabut kelapa menjadi bahan baru yang bermanfaat melalui proses ramah lingkungan, menjaga keseimbangan antara alam dan manusia.",
      bg: "bg-[#F5F5F5]",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40" width="32" viewBox="0 0 384 512">
    <path fill="#8B4513" d="M292.9 384c7.3-22.3 21.9-42.5 38.4-59.9 32.7-34.4 52.7-80.9 52.7-132.1 0-106-86-192-192-192S0 86 0 192c0 51.2 20 97.7 52.7 132.1 16.5 17.4 31.2 37.6 38.4 59.9l201.7 0zM288 432l-192 0 0 16c0 44.2 35.8 80 80 80l32 0c44.2 0 80-35.8 80-80l0-16zM184 112c-39.8 0-72 32.2-72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24z"/></svg>,
      title: "Inovasi",
      desc: "Menghasilkan produk berkualitas seperti cocopeat dan briket kelapa, menghadirkan solusi efisien dan berkelanjutan bagi berbagai sektor.",
      bg: "bg-[#FFFFFF]",
    },
  ];

  return (
    <section className="py-16 bg-[#A3D1B4]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-4 font-poppins">
          Nilai Utama Kami
        </h2>
        <p className="text-[#2E8B57] max-w-2xl mx-auto mb-12 font-lato font-bold">
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