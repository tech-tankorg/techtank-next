import React from 'react'
import FishCanvas from "@/components/ui/fish-canvas"
import PreviousButton from "@/components/ui/PreviousButton"

export default function NotFound() {
  return (
    <main
      className={`relative min-h-dvh`}
    >
      {/* Canvas */}
      <FishCanvas />

      {/* UI overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <h1 className="text-[16rem] leading-[0.85] tracking-[-0.04em]">
          404
        </h1>
        <p className="font-mono mt-6 uppercase tracking-[0.22em] text-[0.7rem]">
          Page not found
        </p>
        <p className="mt-3 uppercase tracking-[0.18em] text-[0.6rem] animate-pulse">
          move your cursor to reveal
        </p>
        <PreviousButton />
      </div>


    </main>
  )
}
