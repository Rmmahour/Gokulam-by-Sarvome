// export function Amenities() {
//   const amenities = [
//     { icon: <path d="M12 3v18M8 3v18M16 3v18" strokeWidth="1.6" />, label: "Lift" },
//     {
//       icon: (
//         <>
//           <path d="M3 20h18M5 20V8h14v12" strokeWidth="1.6" />
//           <path d="M7 20v-4h4v4M13 20v-6h4v6" strokeWidth="1.6" />
//         </>
//       ),
//       label: "Covered Parking",
//     },
//     { icon: <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.6" />, label: "Modular Kitchen‑ready" },
//     { icon: <path d="M4 20h16M6 8h12v8H6z" strokeWidth="1.6" />, label: "Wardrobes‑ready" },
//     { icon: <path d="M4 8h16M4 12h16M4 16h16" strokeWidth="1.6" />, label: "False Ceiling‑ready" },
//     {
//       icon: (
//         <>
//           <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
//           <path d="M12 8v4l3 3" strokeWidth="1.6" />
//         </>
//       ),
//       label: "CCTV‑ready",
//     },
//     { icon: <path d="M4 4h16v16H4z" strokeWidth="1.6" />, label: "Branded Fittings" },
//     { icon: <path d="M3 21h18M3 10h18" strokeWidth="1.6" />, label: "Stone/Tile Flooring" },
//     { icon: <path d="M4 20h16M6 6h12v10H6z" strokeWidth="1.6" />, label: "Balcony Railings" },
//     {
//       icon: (
//         <>
//           <path d="M5 12h14" strokeWidth="1.6" />
//           <circle cx="12" cy="12" r="6" strokeWidth="1.6" />
//         </>
//       ),
//       label: "LED Lighting",
//     },
//     {
//       icon: (
//         <>
//           <path d="M12 2l9 7H3l9-7zM3 9v11h18V9" strokeWidth="1.6" />
//         </>
//       ),
//       label: "Vastu‑conscious Design",
//     },
//     {
//       icon: (
//         <>
//           <path d="M4 10h16v10H4z" strokeWidth="1.6" />
//           <path d="M8 10V7a4 4 0 0 1 8 0v3" strokeWidth="1.6" />
//         </>
//       ),
//       label: "Gated Access",
//     },
//   ]

//   return (
//     <section className="py-14 bg-[#922e30] text-white">
//       <div className="container mx-auto px-5 max-w-[1200px]">
//         <div className="flex items-end justify-between mb-5.5">
//           <h2 className="text-[28px] m-0 text-white">Everyday Comforts</h2>
//           <span className="inline-flex items-center gap-2 bg-white text-[#922e30] rounded-full px-3 py-1.5 font-bold text-xs">
//             Amenities
//           </span>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
//           {amenities.map((amenity, index) => (
//             <div
//               key={index}
//               className="bg-white/[0.06] border border-white/35 text-white p-4 rounded-[14px] text-center text-[13px] flex flex-col items-center gap-2 transition-all duration-[250ms] hover:bg-white hover:text-[#922e30] hover:border-transparent hover:shadow-[0_8px_20px_rgba(146,46,48,.35)] hover:-translate-y-0.5"
//             >
//               <svg className="w-5.5 h-5.5 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 {amenity.icon}
//               </svg>
//               {amenity.label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { MapPin } from "lucide-react"

export function Amenities() {
  const locations = [
    { distance: "1 min", name: " HSVP Fully Developed Sector-55" },
    { distance: "5 minutes", name: "Ballabgarh Metro Station" },
    { distance: "2 minutes.", name: "Delhi Mathura Road" },
    { distance: "10 min", name: "Govt. Hospital" },
    { distance: "1 min ", name: "Govt. Model School" },
    { distance: "2 min", name: "HSVP Market" },
   
  ]

  return (
    <section className="relative py-16">
     <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-end justify-between mb-5.5">
          <h2 className="text-[28px] m-0">Location Advantages</h2>
           {/* <span className="inline-flex items-center gap-2 bg-white text-[#922e30] rounded-full px-3 py-1.5 font-bold text-xs">
             Amenities
           </span> */}
         </div>
         </div>
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.4532901848715!2d77.29449597617707!3d28.345142197072125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbabf2c14fb7%3A0x37144daf877d0287!2sGokulam%20by%20Sarvome!5e0!3m2!1sen!2sin!4v1761129674298!5m2!1sen!2sin" width="100%" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-[#922e30] rounded-lg p-3 flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1e3a5f] font-bold text-lg mb-1">{location.distance}</p>
                  <p className="text-gray-800 text-sm leading-tight">{location.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   
    </section>
  )
}
