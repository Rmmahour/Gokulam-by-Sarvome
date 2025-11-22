export function WhyGokulam() {
  const reasons = [
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="1.6" />
          <path d="M7 8V6a5 5 0 0 1 10 0v2" strokeWidth="1.6" />
        </svg>
      ),
      title: "Secured Gated Community",
      subtitle: "Controlled access & CCTV‑ready",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 21s7-6.16 7-11A7 7 0 1 0 5 10c0 4.84 7 11 7 11Z" strokeWidth="1.6" />
          <circle cx="12" cy="10" r="3" strokeWidth="1.6" />
        </svg>
      ),
      title: "Prime Location",
      subtitle: "Metro, schools & markets",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M2 20c4-8 16-8 20 0" strokeWidth="1.6" />
          <path d="M6 20c2-4 10-4 12 0" strokeWidth="1.6" />
          <path d="M4 20V9l4-3 4 3v11" strokeWidth="1.6" />
        </svg>
      ),
      title: "Lush Green Environment",
      subtitle: "Calm, breathable surroundings",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 17l6-6 4 4 7-7" strokeWidth="1.6" />
          <path d="M3 21h18" strokeWidth="1.6" />
        </svg>
      ),
      title: "High Returns",
      subtitle: "Attractive end‑user demand",
    },
    {
      icon: (
           <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M20,7.3l-5.8-4.5c-1.3-1-3-1-4.3,0l-5.8,4.5c-.9.7-1.4,1.7-1.4,2.8v8.3c0,1.9,1.6,3.5,3.5,3.5h11.6c1.9,0,3.5-1.6,3.5-3.5v-8.3c0-1.1-.5-2.1-1.4-2.8ZM17.8,20.5H6.2c-1.2,0-2.1-.9-2.1-2.1v-8.3c0-.7.3-1.3.8-1.7l5.8-4.5c.4-.3.8-.4,1.3-.4s.9.1,1.3.4l5.8,4.5c.5.4.8,1,.8,1.7v8.3c0,1.2-.9,2.1-2.1,2.1Z"/>
  <path d="M12,8.1c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3,5.3-2.4,5.3-5.3-2.4-5.3-5.3-5.3ZM12,17.3c-2.1,0-3.9-1.7-3.9-3.9s1.7-3.9,3.9-3.9,3.9,1.7,3.9,3.9-1.7,3.9-3.9,3.9Z"/>
  <path d="M13,11.8l-1.6,1.5-.4-.6c-.2-.3-.7-.4-1-.2-.3.2-.4.7-.2,1l.9,1.3c.1.2.3.3.5.3,0,0,0,0,0,0,.2,0,.4,0,.5-.2l2.2-2.1c.3-.3.3-.7,0-1-.3-.3-.7-.3-1,0Z"/>
</svg>
       
      ),
      title: "RERA Approved Property",
      subtitle: "RERA Certified Assurance",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M20,7.3l-5.8-4.5c-1.3-1-3-1-4.3,0l-5.8,4.5c-.9.7-1.4,1.7-1.4,2.8v8.3c0,1.9,1.6,3.5,3.5,3.5h11.6c1.9,0,3.5-1.6,3.5-3.5v-8.3c0-1.1-.5-2.1-1.4-2.8ZM17.8,20.5H6.2c-1.2,0-2.1-.9-2.1-2.1v-8.3c0-.7.3-1.3.8-1.7l5.8-4.5c.4-.3.8-.4,1.3-.4s.9.1,1.3.4l5.8,4.5c.5.4.8,1,.8,1.7v8.3c0,1.2-.9,2.1-2.1,2.1Z"/>
  <path d="M16.7,14.3c.4,0,.7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7h-5.6c-.4-.8-1.2-1.3-2.1-1.3s-2.3,1.1-2.3,2.3,1.1,2.3,2.3,2.3,2.1-.9,2.3-2h2.7v.7c0,.4.3.7.7.7s.7-.3.7-.7v-.7h.7v.7c0,.4.3.7.7.7ZM9,13.7c-.6,0-1-.5-1-1s.5-1,1-1,1,.5,1,1-.5,1-1,1Z"/>
</svg>
     
      ),
      title: "Ready To Move In Property",
      subtitle: "Instant Possession Property",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M4 13h16v6H4z" strokeWidth="1.6" />
          <path d="M8 13V7h8v6" strokeWidth="1.6" />
          <path d="M12 9v2" strokeWidth="1.6" />
        </svg>
      ),
      title: "Power Backup Provision",
      subtitle: "Uninterrupted living",
    },
    {
      icon: (
        <svg className="w-9 h-9 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 21s7-6.16 7-11A7 7 0 1 0 5 10c0 4.84 7 11 7 11Z" strokeWidth="1.6" />
          <circle cx="12" cy="10" r="3" strokeWidth="1.6" />
        </svg>
      ),
      title: "Sector-55, Faridabad",
      subtitle: "Well-connected neighbourhood",
    },
  ]

  return (
    <section className="py-14 bg-[#922e30] text-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="flex items-end justify-between mb-5.5">
          <h2 className="text-[28px] m-0 text-white">
            Overview  
          </h2>
          <span className="inline-flex items-center gap-2 bg-white text-[#922e30] rounded-full px-3 py-1.5 font-bold text-xs">
            Top Reasons
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="border-2 border-white/60 rounded-[18px] p-5.5 flex flex-col items-center justify-center text-center gap-2 bg-white/[0.04] transition-all duration-200 hover:bg-white hover:text-[#922e30] hover:shadow-[0_10px_24px_rgba(0,0,0,.18)] hover:-translate-y-0.5"
            >
              {reason.icon}
              <strong className="text-lg">{reason.title}</strong>
              <span className="text-xs tracking-wide opacity-90">{reason.subtitle}</span>
            </div>
          ))}
        </div>
        <div className="mt-5.5 text-center">
          <a
            href="#lead-form"
            className="inline-block px-4 py-3.5 rounded-[14px] bg-white text-[#922e30] font-bold hover:bg-gray-50 transition-colors"
          >
            Enquire Now
          </a>
        </div>
        {/* <p className="text-[#ffe2e3] text-xs mt-2.5 text-center">
          *Subject to release. All images/items are representative; verify exact details with our sales team.
        </p> */}
      </div>
    </section>
  )
}
