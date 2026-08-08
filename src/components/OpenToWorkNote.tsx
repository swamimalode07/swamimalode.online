"use client";

import { motion, useReducedMotion } from "motion/react";

const LINES = ["psst… i'm", "open to work"];
const CONTACT = '[data-section-label="Contact section"]';

const CURL =
  "M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343M144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707";
const HEAD =
  "M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73";

const OpenToWorkNote = () => {
  const reduceMotion = useReducedMotion();

  const goToContact = () =>
    document.querySelector(CONTACT)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });

  return (
    <button
      type="button"
      onClick={goToContact}
      aria-label="I'm open to work. Jump to contact."
      className="flex shrink-0 cursor-pointer items-center gap-0.5 self-center ml-1 mt-2 text-[#27272A] transition-colors duration-300 select-none hover:text-white/40 sm:gap-1 md:-ml-3 md:mt-0"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 323.057 323.057"
        fill="currentColor"
        aria-hidden="true"
        className="size-9 shrink-0 rotate-[190deg] sm:size-10 md:size-12"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
      >
        <path d={CURL} />
        <path d={HEAD} />
      </motion.svg>

      <motion.span
        className="-rotate-[14deg] text-left font-geist-mono text-[8px] leading-[1.5] tracking-wide sm:text-[9px] md:text-[11px]"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.85 }}
      >
        {LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </motion.span>
    </button>
  );
};

export default OpenToWorkNote;
