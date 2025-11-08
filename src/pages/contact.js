import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"
import Seo from "../components/seo"

const mapIframeCode = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1112.724711218781!2d106.52694459948137!3d-6.150203794112649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1762075014758!5m2!1sid!2sid"
      width="600"
      height="450"
      style={{ border: 0 }} 
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" 
    ></iframe>
  );

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact | "
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS"
      ></Seo>

      <div className="max-w-7xl mx-auto mt-4 flex h-full content-center text-white xxs:flex-col sm:flex-row">
        <Fade duration={1200}>
          <div className="bg-[#A3D1B4] p-8 rounded-xl w-2/4 m-5 w-auto h-98">
            <h2 className=" text-[#2E8B57] text-xl font-bold mt-1 xxs:text-lg sm:text-2xl lg:text-4xl">
              Mari Berkolaborasi dengan Narikela
            </h2>
            <p className="text-lg text-white font-semibold font-lato mt-1 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Kami siap membantu Anda, baik untuk kebutuhan pasokan Cocopeat dan Briket, menjalin kemitraan.
            </p>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-ful mt-10 bg-white p-4 rounded-xl">
              <div>
                <ul>
                  <li className="flex items-center mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="20" 
                      width="15"
                      viewBox="0 0 384 512"
                    >
                      <path 
                        fill="#2E8B57"
                        d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                      />
                    </svg>
                    <a 
                      className="ml-2 text-[#2E8B57] font-bold font-lato xxs:text-xs sm:text-sm hover:text-[#A3D1B4]"
                      href="https://maps.app.goo.gl/9cKE2vqju2vGsNPe8"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Jalan Kendal 1, Sindang Panon,Kec. Sindang Jaya, Kabupaten Tangerang, Banten
                    </a>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="20" 
                      width="15"
                      viewBox="0 0 512 512"
                    >
                      <path 
                        fill="#2E8B57"
                        d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                      />
                    </svg>
                    <a 
                      className="ml-2 text-[#2E8B57] font-bold font-lato xxs:text-xs sm:text-sm hover:text-[#A3D1B4]"
                      href="https://wa.me/6213-1225-7583"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      0813-1225-7583
                    </a>
                  </li>
                  <li className="flex items-center mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      height="20" 
                      width="15"
                      viewBox="0 0 512 512"
                    >
                      <path 
                        fill="#2E8B57"
                        d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                      />
                    </svg>
                    <a 
                      className="ml-2 text-[#2E8B57] font-bold font-lato xxs:text-xs sm:text-sm hover:text-[#A3D1B4]"
                      href="mailto:narikela@gmail.com"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      narikela@mail.com
                    </a>
                  </li>
                </ul>
                <p className="text-[#8B4513] font-poppins text-xs font-bold ">Sosial Media Kami : </p>
                <ul className="space-y-2 flex flex-row items-center gap-4">
            <li>
              <a href="#" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" height="23" width="22.75" viewBox="0 0 320 512">
                <path fill="#8B4513" d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg> 
              </a>
            </li>
            <li >
              <a href="#" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" height="23" width="22.75" viewBox="0 0 448 512">
                <path fill="#8B4513" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg> 
              </a>
            </li>
            <li >
              <a href="#" className="hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" height="23" width="26.25" viewBox="0 0 576 512">
                <path fill="#8B4513" d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>  
              </a>
            </li>
          </ul>
              </div>
            </div>
            </div>
        </Fade>
        <Fade bottom cascade>
          <div className="w-2/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block h-98">
            {mapIframeCode}
          </div>
        </Fade>
      </div>
      <div className="bg-white mx-auto mt-4 flex h-full xxs:flex-col sm:flex-row ">
        <div className=" p-10  w-full mx-20">
          <h2 className="text-[#2E8B57] text-2xl font-bold">Hubungi Kami</h2>
          <p className="text-[#2E8B57] mt-2 font-lato">
            Hubungi kami melalui form ini untuk mendiskusikan kebutuhan Anda terkait kerjasama
          </p>
        <form className="mt-5" name="contact" method="POST" netlify>
            <div className="grid grid-cols-3 ">
              <div className="grid grid-cols-1 gap-6">
                <div >
                  <label>
                    <Input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                    ></Input>
                  </label>
                </div>
                <div >
                  <label>
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                    ></Input>
                  </label>
                </div>
                <div >
                  <label>
                    <Input
                      placeholder="Your Number/Whatsapp"
                      type="number"
                      name="number"
                    ></Input>
                  </label>
                </div>
                <div>
                  <label>
                    {" "}
                    <Input
                      placeholder="Subject"
                      type="text"
                      name="text"
                    ></Input>
                  </label>
                </div>
              </div>
              <div className="col-span-2">
                <label>
                  <textarea
                    className="mt-5 w-full bg-bg bg-opacity-20 rounded-xl p-5 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
                    rows="5"
                    placeholder="Apa yang ingin Anda sampaikan?"
                    type="text"
                    name="Message"
                  ></textarea>
                </label>
                <div>
                  <label>
                    <Button
                      type="submit"
                      title="Send Message"
                      marginClass="mt-5"
                      className="bg-[#8B4513] px-6 py-3 rounded-xl hover:scale-105 transform transition-transform duration-300"
                    ></Button>
                  </label>
                </div>
              </div>
            </div>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
