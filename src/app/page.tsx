"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative dvh-100 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="L'ESTHÈTE Bespoke Tailoring"
            fill
            priority
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          {/* Subtle Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-text/40 via-transparent to-transparent" />
        </div>

        {/* Subtitle - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-12 md:bottom-16 left-6 md:left-12 z-10"
        >
          <p className="font-serif text-xs md:text-sm tracking-[0.3em] text-white/90 drop-shadow-lg">
            Private Tailoring for the Noble Whim
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 right-6 md:right-12 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="font-serif text-[10px] tracking-[0.3em] mb-2">SCROLL</span>
            <ChevronDown size={16} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-xl md:text-2xl tracking-[0.2em] text-primary mb-8 md:mb-12">
              L&apos;ESTHÈTE
            </h2>
            <p className="font-mincho text-base md:text-lg leading-loose text-text/80">
              L&apos;ESTHÈTE（レステート）は、<br className="hidden md:inline" />
              「美を追求する者」を意味するフランス語。
            </p>
            <p className="font-mincho text-base md:text-lg leading-loose text-text/80 mt-6">
              教養と遊び心を持つ大人たちのために、<br className="hidden md:inline" />
              正統な美学と自由な発想が交わる一着をお仕立てします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-0">
        <div className="grid md:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[70vh] md:h-[80vh]"
          >
            <Image
              src="/craftsmanship.png"
              alt="Craftsmanship - Bespoke suit"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center p-8 md:p-16 bg-ivory"
          >
            <div className="max-w-md">
              <span className="font-serif text-7xl md:text-8xl text-primary/20">01</span>
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.15em] text-text mt-4 mb-6">
                Craftsmanship
              </h3>
              <p className="font-mincho text-sm md:text-base leading-loose text-text/70">
                イタリア・ナポリ仕立ての伝統と、<br />
                日本の繊細な感性が融合。<br />
                一針一針に宿る、職人の誇り。
              </p>
              <Link
                href="/flow"
                className="inline-block mt-8 font-serif text-sm tracking-[0.15em] text-primary link-underline"
              >
                VIEW FLOW →
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center p-8 md:p-16 bg-white order-2 md:order-1"
          >
            <div className="max-w-md">
              <span className="font-serif text-7xl md:text-8xl text-primary/20">02</span>
              <h3 className="font-serif text-xl md:text-2xl tracking-[0.15em] text-text mt-4 mb-6">
                Materials
              </h3>
              <p className="font-mincho text-sm md:text-base leading-loose text-text/70">
                世界最高峰のミルから取り寄せた生地。<br />
                Loro Piana、Zegna、Scabal...。<br />
                素材の物語が、あなたを彩る。
              </p>
              <Link
                href="/catalog"
                className="inline-block mt-8 font-serif text-sm tracking-[0.15em] text-primary link-underline"
              >
                VIEW CATALOG →
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[70vh] md:h-[80vh] order-1 md:order-2"
          >
            <Image
              src="/materials.png"
              alt="Materials - Premium suit"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-40 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="font-mincho text-lg md:text-2xl lg:text-3xl leading-relaxed text-text/80 tracking-wider">
            <span className="text-primary text-4xl md:text-5xl leading-none">&ldquo;</span>
            <p className="mt-4">
              トレンドにも、ルールにも、<br className="md:hidden" />もう縛られない。
            </p>
            <p className="mt-4">
              世界で一番<span className="text-primary">&ldquo;わがまま&rdquo;</span>な一着を。
            </p>
          </blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-[1px] bg-primary mx-auto mt-12"
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/begin-story.png"
            alt="Begin Your Story"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.15em] text-text mb-6">
            Begin Your Story
          </h2>
          <p className="font-mincho text-sm md:text-base text-text/70 mb-10">
            あなただけの物語を、始めませんか。
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-serif text-sm tracking-[0.2em] transition-all duration-500 hover:bg-primary-dark"
          >
            RESERVE NOW
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-text text-white/80">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl tracking-[0.2em] mb-8">L&apos;ESTHÈTE</p>
          <p className="font-serif text-xs tracking-[0.3em] mb-8 text-white/50">
            Private Tailoring for the Noble Whim
          </p>
          <div className="flex justify-center space-x-8 mb-12">
            {["TOP", "ABOUT US", "FLOW", "CATALOG", "RESERVE"].map((item) => (
              <Link
                key={item}
                href={item === "TOP" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("about-us", "about")}`}
                className="font-serif text-xs tracking-[0.15em] text-white/60 hover:text-white transition-colors min-h-0 min-w-0"
              >
                {item}
              </Link>
            ))}
          </div>
          <p className="font-serif text-[10px] tracking-wider text-white/30">
            © 2026 L&apos;ESTHÈTE. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
