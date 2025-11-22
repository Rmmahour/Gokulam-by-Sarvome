"use client"

import React from "react"

export function Hero() {
  return (

    <section className="relative overflow-hidden bg-cover"  style={{backgroundImage:`url('/3bhk-builder-floor-faridabad/hero.png')`}}>
      <div className="relative rounded-none overflow-hidden z-10">
        {/* <div className="banner-div">
          <img
            src="/3bhk-builder-floor-faridabad/hero.png"
            alt="Gokulam Layout Plan"
            className="w-full h-[600px] max-w-full object-cover block"
          />
          </div> */}
        <div className="absolute -z-1 left-0 right-0 bottom-0 top-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />
        <div className=" left-0 right-0 py-10 text-white w-full">
          <div className="max-w-[1400px] mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
              <div className="mx-auto px-5 max-w-[1200px] flex justify-center flex-col gap-2">
                <h1 className="text-4xl md:text-4xl lg:text-4xl font-extrabold leading-tight m-0 mb-2 text-white uppercase tracking-wide">
                  2 & 3 BHK Luxury Independent Floor
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-weight-bold text-white uppercase tracking-wider">
                  Sector 55, Faridabad
                </h2>
                <ul className="grid grid-cols-1 gap-2 mt-4 text-sm md:text-md lg:text-lg font-weight-medium text-white list-disc list-inside">
                  <li>SECURED GATED COMMUNITY</li>
                  <li>BASEMENT/ROOF RIGHTS*</li>
                  <li>SHOPPING COMPLEX WITHIN SOCIETY</li>
                  <li>READY TO MOVE</li>
                </ul>
                <p className="text-xl md:text-2xl lg:text-3xl font-weight-bold text-white mt-2">₹ 72 Lacs Onwards</p>
                <a href="#lead-form" className="w-max mt-4 px-8 py-3.5 rounded-md bg-white text-[#922e30] text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Enquire Now
                </a>
              </div>

              <div>
                <div className="bg-gradient-to-b from-white via-white to-[#f7f2f2] rounded-[20px] p-6 border border-[#e5e7eb] shadow-[0_12px_30px_rgba(146,46,48,.12)]">
                  <h2 className="text-[28px] m-0 mt-0 mb-4 text-black">Ready to Experience Gokulam?</h2>
                  {/* <p className="text-[#64748b] text-base mt-0 mb-4">
               


              </p> */}
                  <div id="lead-form">
                    <div
                      className="hs-form-frame"
                      data-region="na2"
                      data-form-id="0ee74008-58e3-441d-8eb2-629b6831e887"
                      data-portal-id="244196242"
                    ></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="relative overflow-hidden">
    //   <div className="relative rounded-none overflow-hidden">
    //     <img
    //       src="1920x700.png"
    //       alt="Gokulam by Sarvome — project facade"
    //       className="w-full h-[560px] max-w-full object-cover block"
    //     />
    //     <div className="absolute left-0 right-0 bottom-0 top-0 bg-gradient-to-b from-transparent to-black/35" />
    //     <div className="absolute left-0 right-0 bottom-6 text-white">
    //       <div className="container mx-auto px-5 max-w-[1200px] flex flex-col gap-2">
    //         <span className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-white/15 text-white rounded-full text-xs font-bold w-fit">
    //           Premium 3BHK Builder Floors
    //         </span>
    //         <h1 className="text-[38px] leading-tight m-0 text-white">
    //           Spacious 3BHK with Lift & Parking • Prime Connectivity • Limited Units
    //         </h1>
    //         <div className="flex gap-2.5 flex-wrap">
    //           <a
    //             href="#lead-form"
    //             className="px-4 py-3.5 rounded-[14px] bg-[#922e30] text-white font-bold shadow-[0_8px_24px_rgba(0,0,0,.25)] hover:bg-[#7d2729] transition-colors"
    //           >
    //             Get Price & Brochure
    //           </a>
    //           <a
    //             href="#lead-form"
    //             className="px-4 py-3.5 rounded-[14px] bg-white text-[#922e30] font-bold hover:bg-gray-50 transition-colors"
    //           >
    //             Book a Site Visit
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}