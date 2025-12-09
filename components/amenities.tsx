import { Hospital, TrainFront, School, Store, Building2, Car } from "lucide-react"

export function Amenities() {
  const locations = [
    { distance: "1 min", name: " HSVP Fully Developed Sector-55", icon: Building2 },
    { distance: "5 minutes", name: "Ballabgarh Metro Station", icon: TrainFront },
    { distance: "2 minutes.", name: "Delhi Mathura Road", icon: Car },
    { distance: "10 min", name: "Govt. Hospital", icon: Hospital },
    { distance: "1 min ", name: "Govt. Model School", icon: School },
    { distance: "2 min", name: "HSVP Market", icon: Store },
   
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
                  <location.icon className="w-8 h-8 text-white" />
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
