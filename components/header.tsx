export function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-[#e2e8f0] z-40">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <nav className="flex items-center justify-between py-1">
          <div className="flex gap-2.5 items-center">
            {/* <div className="w-9 h-9 rounded-[10px] bg-[#922e30] grid place-items-center text-white font-extrabold">
              S
            </div> */}
            <div>
              <img
                src="/3bhk-builder-floor-faridabad-2/gokulam.png"
                alt="Gokulam Layout Plan"
                className="rounded-2xl border w-[10%] md:w-[20%]"
                style={{ borderColor: 'transparent' }}
              />

              {/* <strong className="block">Sarvome</strong>
              <small className="text-[#64748b] text-sm">Gokulam — 3BHK Builder Floors</small> */}
            </div>
          </div>
          <a
            href="#lead-form"
            className="px-4 md:py-2.5 py-2.5 rounded-xl bg-[#922e30] text-white font-semibold shadow-[0_8px_20px_rgba(146,46,48,.25)] hover:bg-[#7d2729] transition-colors"
          >
            Unlock Contact Details
          </a>
        </nav>
      </div>
    </header>
  )
}
