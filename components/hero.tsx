"use client"

import React from "react"
import EmblaCarousel from "./Carousel"

export function Hero() {

  type Benefit = {
  imgSrc: string;
  title: string;
};

  const benefits: Benefit[] = [
    { title: 'READY TO MOVE', imgSrc: '/3bhk-builder-floor-faridabad/buy home.webp' },
    { title: 'SECURED GATED COMMUNITY', imgSrc: '/3bhk-builder-floor-faridabad/security guarrd.webp' },
    { title: 'BASEMENT/ROOF RIGHTS', imgSrc: '' },
    { title: 'SHOPPING COMPLEX WITHIN SOCIETY', imgSrc: '' },
  ]


  return (

    <>
      {/* <section className="relative overflow-hidden bg-cover" style={{ backgroundImage: `url('/3bhk-builder-floor-faridabad/hero.png')` }}> */}
      {/* <img src="3bhk-builder-floor-faridabad/Ele-55.jpg" alt="Floor" className="sm:hidden block w-full min-h-[30vh]" /> */}
      <EmblaCarousel />

      <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/3bhk-builder-floor-faridabad/Ele-55.jpg')` }}>
        <div className="relative rounded-none overflow-hidden z-10 md:min-h-[80vh] h-auto flex align-center justify-center">
          {/* <div className="banner-div">
          <img
            src="/3bhk-builder-floor-faridabad/hero.png"
            alt="Gokulam Layout Plan"
            className="w-full h-[600px] max-w-full object-cover block"
          />
          </div> */}
          {/* <div className="absolute -z-1 left-0 right-0 bottom-0 top-0 bg-gradient-to-t from-black/90 via-black/90 to-black/30" /> */}
          <div className="absolute -z-1 left-0 right-0 bottom-0 top-0 bg-white sm:hidden block" />
          <div className="left-0 right-0 py-10 text-white w-full">
            <div className="max-w-[1400px] w-[100%] mx-auto py-5 px-3 flex h-[100%]">
              {/* <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 lg:gap-2 justify-center"> */}
              <div className="flex justify-center text-center lg:gap-2 w-full">
                <div className="flex flex-col align-between md:flex-row justify-end gap-8 w-full">
                  <div className="px-5 flex justify-end flex-col gap-8 w-full">
                    <div className="sm:flex block justify-between items-center gap-4 w-full">
                      <div className="bg-[#922e30] text-white rounded-2xl p-8 md:w-[40%] md:w-[42%] sm:w-[45%] w-[100%] flex flex-col gap-4 md:mb-0 mb-4">
                        <h1 className="lg:text-2xl md:text-xl text-lg font-extrabold leading-tight m-0 mb-2 text-white uppercase tracking-wide">
                          2 & 3 BHK Luxury Independent Floor
                        </h1>
                        <h2 className="lg:text-xl md:text-lg text-sm font-[400] text-white uppercase tracking-wider">
                          Sector 55, Faridabad
                        </h2>
                        <div className="flex flex-col gap-3">
                          <p className="text-2xl lg:text-4xl md:text-3xl font-extrabold text-white pt-4 border-t w-max mx-auto">
                            ₹ 78 Lacs Onwards
                          </p>
                          <a href="#lead-form" className="w-max mx-auto px-8 py-3.5 rounded-md hover:bg-white bg-white/90 text-lg font-bold text-[#922e30] transition-colors shadow-lg">
                            Enquire Now
                          </a>
                        </div>
                      </div>

                      <div className="bg-[#922e30] text-white rounded-2xl p-4 ps-6 h-max">
                        <ul className="flex flex-col gap-1 text-sm md:text-md lg:text-lg font-weight-medium text-white list-inside text-left">
                          {benefits.map((benefit, index) => (
                            <li key={index} className="flex gap-2 items-center">
                              {/* <span>
                                <img
                                  src={benefit.imgSrc}
                                  alt={benefit.title}
                                  width={30}
                                  height={30}
                                />
                              </span> */}
                              {benefit.title}
                            </li>
                          ))}

                        </ul>
                      </div>
                    </div>



                  </div>
                </div>


                {/* <div className="w-[75%] md:w-[100%] mx-auto">
                <div className="bg-gradient-to-b from-white via-white to-[#f7f2f2] rounded-[20px] p-6 border border-[#e5e7eb] shadow-[0_12px_30px_rgba(146,46,48,.12)]">
                  <h2 className="text-sm m-0 mt-0 mb-4 text-black">Ready to Experience Gokulam?</h2>
                  
                </div>
              </div> */}

              </div>


            </div>
          </div>
        </div>
      </section>

    </>
  )
}