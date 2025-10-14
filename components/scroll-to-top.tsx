"use client"

import { ArrowRight } from "lucide-react"

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className="fixed bottom-8 right-8 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black/90 transition-colors"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowRight className="w-5 h-5 -rotate-90" />
    </button>
  )
}
