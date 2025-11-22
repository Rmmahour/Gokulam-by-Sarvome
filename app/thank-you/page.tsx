import Image from "next/image"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-primary border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                         <img
  src="/3bhk-builder-floor-faridabad/gokulam.png"
  alt="Gokulam Layout Plan"
  className="rounded-2xl border w-full"
  style={{ width: '25%', borderColor: 'transparent' }}
/>
            </Link>
            <Link
              href="/"
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-lg bg-primary-foreground text-primary font-semibold text-sm md:text-base hover:bg-secondary transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="thankyou_main flex-1 flex items-center justify-center py-12 md:py-20 px-4">
        <div className="w-full max-w-2xl">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 text-center border border-border/50">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="thankyou-check w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-accent-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Thank You for Your Interest!
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto text-balance">
              We've received your request and our team is already reviewing your requirements. You'll hear from us
              within 24 hours.
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="px-8 py-3 text-primary-foreground font-semibold rounded-lg hover:bg-accent transition-colors duration-200 text-center shadow-md hover:shadow-lg"
              >
                Back to Home
              </Link>
             
            </div>

            {/* Contact Info */}
            <p className="text-sm text-muted-foreground">
              Need immediate assistance?{" "}
              <a href="tel:+919355485555" className="thankyou-check-now font-semibold text-accent hover:underline transition-colors">
                Call us at +91 9355485555
              </a>
            </p>
          </div>

        
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 md:py-8 mt-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
         
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2025 Gokulam by Sarvome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
