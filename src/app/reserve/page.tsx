"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ReservePage() {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfs7QxXHjTI_KjYq9RFkMyy_IZB-1HdDq6WZazBoKwJQhR0uA/viewform?usp=dialog";

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=2071&auto=format&fit=crop"
            alt="Reserve background"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">RESERVE</span>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-text mt-6">
              Book Your Appointment
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Reservation Button Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mincho text-base md:text-lg leading-loose text-text/70 mb-10">
            ご予約は下記ボタンよりお願いいたします。
          </p>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 bg-primary text-white font-serif text-sm tracking-[0.2em] transition-all duration-500 hover:bg-primary-dark"
          >
            予約する
          </a>
        </motion.div>
      </section>

      {/* Atelier Information Section */}
      <section className="py-16 md:py-24 px-6 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-xl md:text-2xl tracking-[0.1em] text-text">
              Atelier Information
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Left Column */}
            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-xs tracking-[0.2em] text-text/60 mb-3">ADDRESS</p>
                  <p className="font-mincho text-sm text-text leading-relaxed">
                    〒530-0011
                    <br />
                    WeWork LINKS UMEDA
                    <br />
                    大阪府大阪市北区大深町1-1
                    <br />
                    ヨドバシ梅田タワー 8F
                    <br />
                    <span className="text-text/60 text-xs mt-2 block">
                      阪急電鉄「大阪梅田駅」徒歩5分
                    </span>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-xs tracking-[0.2em] text-text/60 mb-3">PHONE</p>
                  <p className="font-mincho text-sm text-text">090-3357-2070</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-xs tracking-[0.2em] text-text/60 mb-3">EMAIL</p>
                  <p className="font-mincho text-sm text-text">k.ochi@edge-hub.net</p>
                </div>
              </div>
            </div>

            {/* Right Column - Hours */}
            <div className="flex items-start gap-4">
              <Clock className="text-primary mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
              <div className="flex-1">
                <p className="font-serif text-xs tracking-[0.2em] text-text/60 mb-4">HOURS</p>

                {/* Location 1 */}
                <div className="mb-6">
                  <p className="font-mincho text-sm text-text font-medium mb-2">
                    ① 大阪梅田 採寸会場
                  </p>
                  <p className="font-mincho text-xs text-text/60 mb-1">
                    （WeWork LINKS UMEDA）
                  </p>
                  <p className="font-mincho text-sm text-text">
                    9:00 〜 18:00
                  </p>
                  <p className="font-mincho text-xs text-text/50">
                    定休日：土曜日・日曜日
                  </p>
                </div>

                {/* Location 2 */}
                <div className="mb-6">
                  <p className="font-mincho text-sm text-text font-medium mb-2">
                    ② 宝塚 採寸会場
                  </p>
                  <p className="font-mincho text-sm text-text">
                    12:00 〜 24:00
                  </p>
                  <p className="font-mincho text-xs text-text/50">
                    定休日無し
                  </p>
                </div>

                {/* Location 3 */}
                <div>
                  <p className="font-mincho text-sm text-text font-medium mb-2">
                    ③ 全国出張採寸
                  </p>
                  <p className="font-mincho text-sm text-text/70 leading-relaxed">
                    出張採寸につきましては、お時間はご相談に応じて柔軟に対応しております。
                    <br />
                    早朝・夜間なども含め、ご希望がございましたらお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <blockquote className="font-mincho text-lg md:text-xl leading-relaxed text-text/80 tracking-wider">
            あなたの「わがまま」を、
            <br />
            お聞かせください。
          </blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-[1px] bg-primary mx-auto mt-8"
          />
        </motion.div>
      </section>
    </>
  );
}
