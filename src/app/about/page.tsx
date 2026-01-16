"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-dvh-100 flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2071&auto=format&fit=crop"
            alt="Italian architecture"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 py-24 md:py-32 max-w-5xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">ABOUT US</span>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-text mt-6">
              Our Philosophy
            </h1>
          </motion.div>

          {/* Main Poem/Text - Desktop: centered elegant layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center"
          >
            {/* First Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-mincho text-lg md:text-2xl lg:text-3xl leading-relaxed tracking-wider text-text"
            >
              トレンドにも、ルールにも、
              <br className="md:hidden" />
              <span className="md:inline hidden">　</span>
              もう縛られない。
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-12 h-[1px] bg-primary/40 mx-auto my-12 md:my-16"
            />

            {/* Second Part */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="font-mincho text-base md:text-xl lg:text-2xl leading-loose tracking-wider text-text/80">
                大切なのは、
              </p>
              <p className="font-mincho text-base md:text-xl lg:text-2xl leading-loose tracking-wider text-text/80">
                あなた自身が心から
                <br className="md:hidden" />
                <span className="text-primary">「美しい」</span>と思える物語を纏うこと。
              </p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="w-12 h-[1px] bg-primary/40 mx-auto my-12 md:my-16"
            />

            {/* Third Part */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="space-y-4 md:space-y-6"
            >
              <p className="font-mincho text-base md:text-xl lg:text-2xl leading-loose tracking-wider text-text/80">
                正統な美学をスパイスに、
              </p>
              <p className="font-mincho text-lg md:text-2xl lg:text-3xl leading-loose tracking-wider text-text">
                世界で一番
                <span className="text-primary font-medium">&ldquo;わがまま&rdquo;</span>
                な一着を。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">VALUES</span>
            <h2 className="font-serif text-2xl md:text-4xl tracking-[0.15em] text-text mt-6">
              What We Believe
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <span className="font-serif text-6xl md:text-7xl text-primary/20">01</span>
              <h3 className="font-serif text-lg md:text-xl tracking-[0.1em] text-text mt-4 mb-6">
                Heritage
              </h3>
              <p className="font-mincho text-sm leading-loose text-text/70">
                イタリア・ナポリの伝統仕立てを継承。<br />
                歴史に裏打ちされた技法が、<br />
                揺るぎない美しさを生み出す。
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <span className="font-serif text-6xl md:text-7xl text-primary/20">02</span>
              <h3 className="font-serif text-lg md:text-xl tracking-[0.1em] text-text mt-4 mb-6">
                Individuality
              </h3>
              <p className="font-mincho text-sm leading-loose text-text/70">
                あなたの「わがまま」こそが、<br />
                最高のデザインの源泉。<br />
                自分らしさを、一着に込めて。
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <span className="font-serif text-6xl md:text-7xl text-primary/20">03</span>
              <h3 className="font-serif text-lg md:text-xl tracking-[0.1em] text-text mt-4 mb-6">
                Excellence
              </h3>
              <p className="font-mincho text-sm leading-loose text-text/70">
                世界最高峰の生地と、<br />
                匠の技が織りなす至高の一着。<br />
                妥協なき美の追求。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative h-[60vh] md:h-[70vh]">
        <Image
          src="/art-of-being.png"
          alt="The Art of Being Yourself"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-text/30" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <p className="font-serif text-xl md:text-3xl lg:text-4xl tracking-[0.2em] text-white text-center px-6">
            The Art of Being Yourself
          </p>
        </motion.div>
      </section>

      {/* Atelier Section */}
      <section className="py-24 md:py-40 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/atelier.jpg"
                alt="Our atelier - WeWork LINKS UMEDA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:pl-8">
              <span className="font-serif text-xs tracking-[0.4em] text-primary">ATELIER</span>
              <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text mt-4 mb-8">
                Our Space
              </h2>
              <p className="font-mincho text-sm md:text-base leading-loose text-text/70 mb-6">
                静寂と洗練が調和するアトリエ。
                ここは、あなたの「わがまま」を形にする、
                特別な空間です。
              </p>
              <p className="font-mincho text-sm md:text-base leading-loose text-text/70">
                上質な生地に触れ、デザインを語り合い、
                世界に一つだけの一着が生まれる瞬間を、
                ゆっくりとお愉しみください。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Name Section */}
      <section className="py-24 md:py-32 px-6 bg-ivory">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-text mb-8">
            L&apos;ESTHÈTE
          </h2>
          <p className="font-mincho text-sm md:text-base leading-loose text-text/70 mb-4">
            レステート
          </p>
          <p className="font-mincho text-sm md:text-base leading-loose text-text/70">
            フランス語で「美を追求する者」「審美家」を意味する言葉。
            <br className="hidden md:inline" />
            真の美しさを知る大人たちのための、プライベートテーラー。
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-[1px] bg-primary mx-auto mt-12"
          />
        </motion.div>
      </section>
    </>
  );
}
