export function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-[#cbd5e1] py-10 mt-10">
      <div className="container mx-auto px-5 max-w-[1200px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-5">
        <div>
          <h3 className="mt-0 mb-3 text-white">Gokulam by Sarvome</h3>
          <p className="mb-3">
            Premium 3BHK Builder Floors. Images are for representation. Specifications and availability are subject to
            change without prior notice. T&amp;C apply.
          </p>
          <p>
            Official website:{" "}
            <a
              href="https://sarvome.com/builder-floors/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#fda4af] hover:underline"
            >
              sarvome.com/builder-floors
            </a>
          </p>
        </div>
        <div>
          <h4 className="m-0 mb-2 text-white">Contact</h4>
          <p className="mb-3">
            Call:{" "}
            <a href="tel:+911234567890" className="text-[#fda4af] hover:underline">
              +91-12345-67890
            </a>
            <br />
            Email:{" "}
            <a href="mailto:sales@sarvome.com" className="text-[#fda4af] hover:underline">
              sales@sarvome.com
            </a>
          </p>
          <p className="text-xs text-[#94a3b8]">
            Privacy: We never sell your data. By submitting the form, you agree to be contacted by Sarvome or its
            channel partners.
          </p>
        </div>
      </div>
    </footer>
  )
}
