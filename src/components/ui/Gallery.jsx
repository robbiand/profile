import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// Horizontal screenshot strip; clicking a screenshot opens it larger in a native <dialog>
// (Esc, focus trap, and backdrop come for free).
const Gallery = ({ images, label }) => {
  const [index, setIndex] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
  }, [index])

  const step = (delta) => setIndex((i) => (i + delta + images.length) % images.length)

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') step(-1)
    if (event.key === 'ArrowRight') step(1)
  }

  const current = index !== null ? images[index] : null

  return (
    <>
      <div
        className="mt-5 flex snap-x gap-3 overflow-x-auto pb-2"
        role="region"
        aria-label={`${label} screenshots`}
        tabIndex={0}
      >
        {images.map(({ src, width, height, alt }, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className="shrink-0 snap-start cursor-zoom-in rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            aria-label={`Enlarge: ${alt}`}
          >
            <img
              src={src}
              width={width}
              height={height}
              alt={alt}
              loading="lazy"
              className="h-64 w-auto rounded-lg border border-line sm:h-80"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setIndex(null)}
        onClick={(event) => event.target === dialogRef.current && setIndex(null)}
        onKeyDown={onKeyDown}
        className="m-auto max-w-[95vw] bg-transparent p-0 backdrop:bg-black/80"
        aria-label={current?.alt}
      >
        {current && (
          <div className="relative flex flex-col items-center gap-3">
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[80vh] w-auto max-w-[95vw] rounded-lg bg-surface"
            />
            <p className="text-sm text-white">{current.alt}</p>

            <button
              type="button"
              onClick={() => setIndex(null)}
              className="absolute right-2 top-2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  )
}

export default Gallery
