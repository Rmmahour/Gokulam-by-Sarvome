export function LocationBand() {
  return (
    <section className="py-14 bg-[#f5f1e8]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="bg-gradient-to-r from-[#922e30] to-[#671f21] text-white rounded-[20px] p-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="m-0 text-[22px] mb-2">Quality • Location • Value</h3>
            <div className="opacity-90">
              Limited inventory with lift & parking, smart layouts, and excellent city connectivity — an ideal upgrade
              for end-users.
            </div>
          </div>
          <a
            href="#lead-form"
            className="px-4 py-3.5 rounded-[14px] bg-white text-[#922e30] font-bold hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Book a Site Visit
          </a>
        </div>
      </div>
    </section>
  )
}
