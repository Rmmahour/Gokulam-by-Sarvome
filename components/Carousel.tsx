import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })])

  return (
    <div className='sm:hidden block w-full'>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/3bhk-builder-floor-faridabad/1.webp" alt="Floor" className="object-cover w-full" />
          </div>
          <div className="embla__slide">
            <img src="/3bhk-builder-floor-faridabad/2.webp" alt="Floor" className="object-cover w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
