import React from "react"

const AboutExtra = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <div className="bg-gradient-to-r from-[#3e2b1c] to-[#2a1c13] text-white py-12 md:mx-20 mx-4 rounded-md shadow-lg my-10">
        <div className="max-w-3xl mx-auto text-center md:text-left px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Punya Pertanyaan Tentang Layanan Kami?
          </h2>
          <p className="text-base md:text-lg mb-8">
            Hubungi kami untuk konsultasi gratis dan temukan solusi terbaik sesuai kebutuhan Anda.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#3e2b1c] transition-all w-full md:w-auto">
              Minta Contoh
            </button>

            <button className="text-white px-6 py-3 rounded-md font-semibold transition-all underline underline-offset-8 w-full md:w-auto">
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutExtra