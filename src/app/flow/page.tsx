"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const flowSteps = [
  {
    number: "01",
    title: "Counseling",
    titleJa: "カウンセリング",
    description:
      "まずは、あなたのスタイルや理想のイメージをお聞かせください。どんなシーンで着たいか、どんな印象を与えたいか。遠慮なく「わがまま」をお話しください。",
    image: "/flow-counseling.jpg",
  },
  {
    number: "02",
    title: "Fabric Selection",
    titleJa: "生地選び",
    description:
      "Loro Piana、Zegna、Scabal など、世界最高峰のミルから厳選した生地をご用意。触感、光沢、ドレープ。五感で「運命の一枚」をお選びください。",
    image: "/flow-fabric.png",
  },
  {
    number: "03",
    title: "Lining Selection",
    titleJa: "裏地選び",
    description:
      "袖を通すたびに心躍る、こだわりの裏地。クラシックな無地から、遊び心のある柄まで。見えない部分にこそ、あなたらしさを。",
    image: "/flow-lining.png",
  },
  {
    number: "04",
    title: "Button Selection",
    titleJa: "ボタン選び",
    description:
      "水牛、ナット、貝。素材ひとつで印象が変わる、小さくも大切なディテール。手に触れるたびに感じる、上質な存在感を。",
    image: "/flow-button.jpg",
  },
  {
    number: "05",
    title: "Measurement",
    titleJa: "採寸",
    description:
      "20以上の箇所を精密に計測。身体のクセや姿勢まで考慮し、あなただけのパターンを作成します。この工程が、至高のフィット感を生み出します。",
    image: "/flow-measurement.jpg",
  },
  {
    number: "06",
    title: "Completion",
    titleJa: "完成・お渡し",
    description:
      "熟練の職人が丹精込めて仕上げた、世界に一着だけのスーツ。お渡しの瞬間、新しいあなたの物語が始まります。",
    image: "/flow-completion.png",
  },
];

export default function FlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">FLOW</span>
            <h1 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-text mt-6 mb-8">
              The Order Process
            </h1>
            <p className="font-mincho text-sm md:text-base text-text/70 max-w-xl mx-auto">
              一着のスーツが生まれるまでの、特別な旅。
              <br className="hidden md:inline" />
              すべての工程で、あなたの「わがまま」に寄り添います。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow Steps */}
      <section className="py-8 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32 ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[300px] md:h-[450px] overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Number Overlay */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8">
                  <span className="font-serif text-6xl md:text-8xl text-white/30 drop-shadow-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
              >
                <span className="font-serif text-5xl md:text-7xl text-primary/30">
                  {step.number}
                </span>
                <h2 className="font-serif text-xl md:text-3xl tracking-[0.1em] text-text mt-2 mb-2">
                  {step.title}
                </h2>
                <p className="font-mincho text-sm text-text/60 mb-6">
                  {step.titleJa}
                </p>
                <p className="font-mincho text-sm md:text-base leading-loose text-text/70">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Visual (Desktop only) */}
      <section className="hidden md:block py-24 bg-ivory">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">TIMELINE</span>
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text mt-4">
              Your Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-[1px] bg-primary/30" />

            {/* Steps */}
            <div className="flex justify-between relative">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center w-1/6"
                >
                  <div className="w-16 h-16 rounded-full bg-background border border-primary flex items-center justify-center mb-4">
                    <span className="font-serif text-lg text-primary">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-xs tracking-wider text-text mb-1">
                    {step.title}
                  </h3>
                  <p className="font-mincho text-[10px] text-text/50">{step.titleJa}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Duration Info */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-xs tracking-[0.4em] text-primary">DURATION</span>
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.1em] text-text mt-4 mb-8">
              制作期間
            </h2>
            <p className="font-mincho text-base md:text-lg leading-loose text-text/70">
              採寸日からお渡しまで、
              <br className="md:hidden" />
              <span className="text-primary font-medium">およそ1ヶ月〜1ヶ月半</span>を
              <br className="md:hidden" />
              見込んでおります。
            </p>
            <p className="font-mincho text-sm leading-loose text-text/50 mt-6">
              一針一針、丹精込めてお仕立ていたします。
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-16 h-[1px] bg-primary mx-auto mt-12"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-text mb-6">
            Ready to Start?
          </h2>
          <p className="font-mincho text-sm md:text-base text-text/70 mb-10">
            あなたの「わがまま」を、お聞かせください。
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white font-serif text-sm tracking-[0.2em] transition-all duration-500 hover:bg-primary-dark"
          >
            MAKE A RESERVATION
          </Link>
        </motion.div>
      </section>
    </>
  );
}
