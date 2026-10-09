
"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
};

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      {/* Project preview — remains inside the card */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Enlarge ${alt}`}
        aria-haspopup="dialog"
        className="group/image relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[#182018] shadow-lg"
      >
        <img
          src={src}
          alt={alt}
          width={1200}
          height={750}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="h-auto w-full transition-transform duration-700 group-hover/image:scale-105 motion-reduce:transition-none"
        />

        <span className="absolute bottom-4 right-4 rounded-full bg-[#182018]/85 px-4 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
          Click to expand ↗
        </span>
      </button>

      {/* Expanded image — rendered outside the card */}
      {isOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              ref={closeRef}
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close preview"
              className="absolute right-5 top-5 z-10 cursor-pointer rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-sm text-white transition hover:bg-white/30"
            >
              ✕ Close
            </button>

            {/* Full image */}
            <div
              className="relative flex max-h-[90vh] max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={src}
                alt={alt}
                width={1600}
                height={1000}
                sizes="90vw"
                className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
