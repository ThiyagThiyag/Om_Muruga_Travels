import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  { image: '/assets/images/image-48.jpeg' },
  { image: '/assets/images/image-1.jpeg' },
  { image: '/assets/images/image-44.jpeg' },
  { image: '/assets/images/image-7.jpeg' },
  { image: '/assets/images/image-43.jpeg' },
  { image: '/assets/images/image-6.jpeg' },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 }
    }
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  })
};

export default function AboutGallery() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const imageIndex = Math.abs(page % galleryImages.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Subtle auto-play when not dragging or hovering
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page, isHovered]);

  const currentImage = galleryImages[imageIndex];

  return (
    <section className="max-w-7xl mx-auto mb-14 sm:mb-24">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#c59b27] font-bold block mb-1.5">
          Real Moments
        </span>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-[#0a2540] tracking-tight">
          Photo Gallery
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
          Take a visual tour through our scenic cottages, treehouses, open lawns, and peaceful hill surroundings.
        </p>
      </div>

      {/* Full Width Swiper Slider Card */}
      <div 
        className="relative w-full h-[360px] xs:h-[420px] sm:h-[500px] md:h-[560px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 select-none border border-slate-200/80"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Single Full-Width Image with Framer Motion Drag */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -8000 || offset.x < -60) {
                paginate(1);
              } else if (swipe > 8000 || offset.x > 60) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Background Full Width Image */}
            <img
              src={currentImage.image}
              alt="Gallery view"
              className="w-full h-full object-cover pointer-events-none"
              draggable="false"
            />

            {/* Subtle Natural Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>

            {/* Top Indicator Bar */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/50 backdrop-blur-md text-white/90 border border-white/20">
                {imageIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-[#c59b27] text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-[#c59b27] shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none"
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={() => paginate(1)}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-[#c59b27] text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-[#c59b27] shadow-xl hover:scale-105 active:scale-95 transition-all focus:outline-none"
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
