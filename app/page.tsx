"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyGokulam } from "@/components/why-gokulam"
import { Gallery } from "@/components/gallery"
import { LayoutPlan } from "@/components/layout-plan"
import { Amenities } from "@/components/amenities"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
// import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import ProjectGallery from "@/components/projectGallery"

export default function Home() {
  const [showCookies, setShowCookies] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setTimeout(() => setShowCookies(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowCookies(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowCookies(false)
  }

  const handleClose = () => {
    setShowCookies(false)
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectGallery />
        <WhyGokulam />
        <Gallery />
        <LayoutPlan />
        <Amenities />
        <FAQ />
        <FinalCTA />
      </main>
      <StickyCTA />

      {/* COOKIES CONSENT BAR */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#922e30] text-white">
          <div className="w-full md:max-w-6xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Left Section */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield flex-shrink-0"
                style={{ color: "white" }}
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <p className="text-sm text-white">
                We use cookies to enhance your audit experience.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-1.5 rounded text-sm font-semibold transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "1.5px solid #101113",
                }}
              >
                Decline
              </button>

              <button
                onClick={handleAccept}
                className="px-4 py-1.5 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#922e30",
                  color: "white",
                  border: "1.5px solid white",
                }}
              >
                Accept
              </button>

              <button
                onClick={handleClose}
                className="p-1 transition-opacity hover:opacity-60"
                aria-label="Close"
                style={{ color: "white" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
