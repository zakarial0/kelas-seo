import * as React from "react";
import cocopeatImg from "../../images/cocopeat.jpg"; 
import briketImg from "../../images/briket.webp";    
import cocoFiberImg from "../../images/coco-fiber.webp";

const ProdukKami = () => {
  const products = [
    {
      title: "Cocopeat",
      image: cocopeatImg,
      desc: "Media tanam alami dari serabut kelapa yang ramah lingkungan dan menyimpan air dengan baik. Ideal untuk pertanian, hortikultura, dan tanaman hias.",
      button: "Lihat Detail",
    },
    {
      title: "Briket Kelapa",
      image: briketImg,
      desc: "Briket dari tempurung kelapa dengan pembakaran bersih, tahan lama, dan efisien. Cocok untuk restoran, kafe, atau acara bakar-bakar bersama.",
      button: "Lihat Detail",
    },
    {
      title: "Coco Fiber",
      image: cocoFiberImg,
      desc: "Serat kelapa serbaguna untuk kerajinan tangan, bahan isolasi, dan media tanam. Kuat, tahan lama, dan ramah lingkungan.",
      button: "Lihat Detail",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#2E8B57] mb-4 font-poppins">
          Produk Kami
        </h2>
        <p className="text-[#333333] max-w-2xl mx-auto mb-12 font-lato font-semibold">
          Hasil dari proses daur ulang kelapa yang kami kembangkan dengan penuh tanggung jawab dan inovasi.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition bg-[#F5F5F5]"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-[#2E8B57] font-poppins mb-3">
                  {product.title}
                </h3>
                <p className="text-[#333333] font-lato mb-6">{product.desc}</p>
                <button className="bg-[#8B4513] text-white px-5 py-2 rounded-lg font-poppins hover:bg-[#6b3410] transition">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukKami;
