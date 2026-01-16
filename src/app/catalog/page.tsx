"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
    category: "Classic",
    title: "Navy Business",
    height: "tall",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
    category: "Business",
    title: "Charcoal Gray",
    height: "normal",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=2074&auto=format&fit=crop",
    category: "Formal",
    title: "Black Tie",
    height: "normal",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2065&auto=format&fit=crop",
    category: "Casual",
    title: "Italian Linen",
    height: "tall",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=2071&auto=format&fit=crop",
    category: "Fabric",
    title: "Premium Wool",
    height: "normal",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2080&auto=format&fit=crop",
    category: "Details",
    title: "Hand Stitching",
    height: "tall",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2071&auto=format&fit=crop",
    category: "Atelier",
    title: "Our Space",
    height: "normal",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2187&auto=format&fit=crop",
    category: "Classic",
    title: "Double Breasted",
    height: "normal",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2080&auto=format&fit=crop",
    category: "Business",
    title: "Modern Fit",
    height: "tall",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
    category: "Consultation",
    title: "First Meeting",
    height: "normal",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=2065&auto=format&fit=crop",
    category: "Fabric",
    title: "Cashmere Blend",
    height: "normal",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2235&auto=format&fit=crop",
    category: "Casual",
    title: "Weekend Style",
    height: "tall",
  },
];

const categories = ["All", "Classic", "Business", "Formal", "Casual", "Fabric", "Details"];

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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

      {/* Category Filter */}
      <section className="py-8 px-6 bg-background sticky top-20 z-30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 font-serif text-xs tracking-[0.15em] transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-transparent text-text/60 hover:text-primary"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-8 md:py-16 px-4 md:px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-4 md:mb-6 break-inside-avoid"
                >
                  <div
                    onClick={() => setSelectedImage(item)}
                    className="relative group cursor-pointer overflow-hidden"
                  >
                    <div
                      className={`relative ${
                        item.height === "tall" ? "h-[400px] md:h-[500px]" : "h-[280px] md:h-[350px]"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-text/0 group-hover:bg-text/40 transition-all duration-500" />

                      {/* Content on hover */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="font-serif text-xs tracking-[0.3em] text-white/80 mb-2">
                          {item.category.toUpperCase()}
                        </span>
                        <span className="font-serif text-lg md:text-xl tracking-wider text-white">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              className="relative w-full max-w-4xl h-[70vh] md:h-[80vh]"
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
                <span className="font-serif text-xs tracking-[0.3em] text-white/60 block mb-2">
                  {selectedImage.category.toUpperCase()}
                </span>
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
