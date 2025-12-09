'use client';
import { useState } from 'react';

export function Gallery() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const galleryImages = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-16f643c6e53c?q=80&w=800&auto=format&fit=crop",
  ];

  const highlights = [
    { title: "Vastu‑friendly Layouts", desc: "Bright, well‑ventilated rooms" },
    { title: "Dedicated Parking", desc: "Covered car park with gated access" },
    { title: "Premium Doors & Windows", desc: "UPVC/Aluminium with glass railings" },
    { title: "Branded Fittings", desc: "Electrical & sanitary by reputed brands" },
    { title: "Elevator", desc: "Lift access for all floors" },
    { title: "Secured Gated Community", desc: "Controlled access & CCTV‑ready" },
  ];
  return (
    <section className="py-14">
      <div className="container mx-auto px-5 max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5">
        <div>
          <div className="flex items-end justify-between mb-5.5">
            <h2 className="text-[28px] m-0">Project Overview</h2>
            {/* <span className="inline-flex items-center gap-2 bg-[#fde7e8] text-[#922e30] rounded-full px-3 py-1.5 font-bold text-xs">
              Actual & Representative*
            </span> */}
          </div>
          <div
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setVideoLoaded(true)}
          >
            {!videoLoaded && (
              <>
                <img
                  src="/3bhk-builder-floor-faridabad-2/thumbnail.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 68 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-[#FF0000]"
                      d="M66.52 7.14c-.78-2.9-3.06-5.18-5.96-5.96C55.86.6 34 0.6 34 0.6s-21.86 0-26.56.58c-2.9.78-5.18 3.06-5.96 5.96C1 12.84 1 24 1 24s0 11.16.48 16.86c.78 2.9 3.06 5.18 5.96 5.96 4.7.58 26.56.58 26.56.58s21.86 0 26.56-.58c2.9-.78 5.18-3.06 5.96-5.96.48-5.7.48-16.86.48-16.86s0-11.16-.48-16.86z"
                    />
                    <path
                      className="fill-white"
                      d="M45 24 27 14v20l18-10z"
                    />
                  </svg>
                </div>
              </>
            )}
            {videoLoaded && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NQTxZjFtztg?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
          </div>

        </div>
        <div>
          <div className="flex items-end justify-between mb-5.5">
            <h2 className="text-[28px] m-0">Highlights & Inclusions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white border border-[#eef2f7] p-4 rounded-2xl">
                <strong className="block mb-1.5 text-base">{highlight.title}</strong>
                <span className="text-[#64748b] text-sm">{highlight.desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-4.5">
            <a
              href="#lead-form"
              className="inline-block px-4 py-3.5 rounded-[14px] bg-[#922e30] text-white font-bold hover:bg-[#7d2729] transition-colors"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
