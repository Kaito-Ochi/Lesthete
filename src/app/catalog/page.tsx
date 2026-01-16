"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const catalogItems = [
  {
    id: 1,
    image: "/catalog-1.png",
    title: "Classic Elegance",
  },
  {
    id: 2,
    image: "/catalog-2.png",
    title: "Sophisticated Style",
  },
  {
    id: 3,
    image: "/catalog-3.png",
    title: "Timeless Craftsmanship",
  },
  {
    id: 4,
    image: "/catalog-4.png",
    title: "Refined Luxury",
  },
  {
    id: 5,
    image: "/catalog-5.png",
    title: "Modern Sophistication",
  },
  {
    id: 6,
    image: "/catalog-6.png",
    title: "Elegant Details",
  },
  {
    id: 7,
    image: "/catalog-7.png",
    title: "Distinguished Style",
  },
];

export default function CatalogPage() {
  const [selectedImage, setSelectedImage] = useState<typeof catalogItems[0] | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">CATALOG</span>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-text mt-6 mb-8">
              Style Gallery
            </h1>
            <p className="font-mincho text-sm md:text-base text-text/70">
              私たちが手がけた、それぞれの物語。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Section - Vertical Layout */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            {catalogItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-full cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-text/0 group-hover:bg-text/20 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-text/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50"
              aria-label="Close"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl h-[80vh] md:h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-text/80 to-transparent">
                <span className="font-serif text-xl md:text-2xl tracking-wider text-white">
                  {selectedImage.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fabrics Section */}
      <section className="py-20 md:py-32 bg-ivory overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">FABRICS</span>
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text mt-4 mb-8">
              World&apos;s Finest Mills
            </h2>
            <p className="font-mincho text-sm md:text-base text-text/70 mb-12">
              世界最高峰のミルから厳選した生地をご用意しております。
            </p>
          </motion.div>
        </div>

        {/* Logo Slider */}
        <div className="relative w-full">
          <div className="flex animate-logo-scroll">
            {/* First set of logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div
                key={`logo-1-${num}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              >
                <Image
                  src={`/logos/brand-${num}.png`}
                  alt={`Brand ${num}`}
                  width={180}
                  height={90}
                  className="h-[72px] md:h-[104px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div
                key={`logo-2-${num}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
              >
                <Image
                  src={`/logos/brand-${num}.png`}
                  alt={`Brand ${num}`}
                  width={180}
                  height={90}
                  className="h-[72px] md:h-[104px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
