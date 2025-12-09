import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-primary border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/3bhk-builder-floor-faridabad-2/gokulam.png"
              alt="Gokulam Layout Plan"
              className="rounded-2xl border md:w-40 w-25"
              style={{ borderColor: 'transparent' }}
            />
          </Link>
          <a
            href="#lead-form"
            className="px-4 md:py-2.5 py-2.5 rounded-xl bg-[#922e30] text-white font-semibold shadow-[0_8px_20px_rgba(146,46,48,.25)] hover:bg-[#7d2729] transition-colors"
          >
            Unlock Contact Details
          </a>
        </div>
      </div>
    </header>
  )
}
