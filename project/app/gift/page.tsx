"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Gift,
  Package,
  Truck,
  ArrowRight,
  Phone,
} from "lucide-react";
import GoldSilverCollection2 from "./GoldSilverCollection2";

/* ----------------------------- Motion presets ---------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.1 },
  }),
};

/* --------------------------------- Page ---------------------------------- */

export default function CorporateGiftingPage() {
  return (
    <main className="bg-light">
      <HeroBanner />
      <Banner/>
      <GoldSilverCollection />
      <GoldSilverCollection2/>
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
}

/* ------------------------------- 1. Hero ---------------------------------- */

function HeroBanner() {
  return (
    <section className="relative overflow-hidden border-b border-luxury">
      {/* Royal background wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--theme-primary)) 0%, hsl(355 45% 22%) 45%, hsl(var(--theme-primary)) 100%)",
        }}
      />
       <Image
    src="/gift/banner2.png"
    alt=""
    fill
    priority
    className="object-cover object-center opacity-35"
  />
      {/* Decorative gold motifs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-20 float-animation"
        style={{ background: "hsl(var(--theme-gold))", filter: "blur(60px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full opacity-10"
        style={{ background: "hsl(var(--theme-gold))", filter: "blur(90px)" }}
      />
      <svg
        className="pointer-events-none absolute top-10 right-10 h-20 w-20 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="46" stroke="hsl(var(--theme-gold))" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="34" stroke="hsl(var(--theme-gold))" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-white"
        >
          <motion.span
  custom={0}
  variants={fadeUp}
  className="script-font mb-3 block text-2xl text-white md:text-[hsl(var(--theme-gold))]"
>
  For your most valued relationships
</motion.span>

          <motion.h1
            custom={1}
            style={{ color: "hsl(var(--theme-primary))" }}
            variants={fadeUp}
            className="text-4xl text- leading-tight md:text-6xl font-bold"
          >
            Premium Corporate
            <br />
            Gifting
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-5 max-w-xl text-[#FFF9F5] text-lg font-light md:text-xl"
            style={{ fontFamily: "Cormorant Garamond, serif", }}
            
          >
            Gold &amp; Silver Coins for Corporate Celebrations, Employee
            Rewards &amp; Client Appreciation.
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
                style={{fontFamily: "Cormorant Garamond, serif" }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-[#FFF9F5] md:text-base"
          >
            Celebrate business milestones with elegant gold and silver coins
            crafted to leave a lasting impression. Perfect for festive
            gifting, employee recognition, client appreciation and corporate
            events.
          </motion.p>

          {/* <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              className="group inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-gold transition-transform duration-300 hover:-translate-y-0.5 rounded-none"
              style={{ background: "hsl(var(--theme-gold))" }}
            >
              Request Bulk Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
           
          </motion.div> */}
          {/* <motion.div >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative overflow-hidden mt-3 group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg"
                          style={{
                            fontFamily: "'Cinzel', serif",
                            background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
                            border: '1px solid rgba(218,165,32,0.3)',
                          }}
                        >
                    
                        
                          <span className="relative z-10">REQUEST A QUOTE</span>
                     
                          <span
                            className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                            style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                          />
                        </motion.button>
                      </motion.div> */}
                      <motion.div>
  <motion.a
    href="https://wa.me/919873818283"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className="relative overflow-hidden mt-3 group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg inline-block"
    style={{
      fontFamily: "'Cinzel', serif",
      background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
      border: '1px solid rgba(218,165,32,0.3)',
    }}
  >
    <span className="relative z-10">REQUEST A QUOTE</span>

    <span
      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
      style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
    />
  </motion.a>
</motion.div>
        </motion.div>

        {/* Right: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="float-animation relative aspect-[4/5] overflow-hidden rounded-2xl shadow-luxury-xl">
            <Image
              src="/gift/coins.png"
              alt="Gold and silver coins arranged in luxury gift boxes"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating accent card */}
          <div className="glass absolute -bottom-6 -left-6 hidden rounded-xl px-5 py-4 shadow-luxury-lg sm:block">
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "hsl(var(--theme-primary))" }}
            >
              BIS Hallmarked
            </p>
            <p className="text-lg font-medium" style={{ color: "hsl(var(--theme-primary))" }}>
              24K Gold &amp; 999 Silver
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- 2. Gold & Silver ------------------------------ */

type CollectionCard = {
  title: string;
  tagline: string;
  image: string;
  features: string[];
};

const collections: CollectionCard[] = [
  {
    title: "Gold Coins",
    tagline: "Timeless. Pure. Treasured.",
    image: "/gift/do.png",
    features: [
      "24K Pure Gold Coins",
      "BIS Hallmarked",
      "Multiple Weight Options",
      "Premium Gift Packaging",
    ],
  },
  {
    title: "Silver Coins",
    tagline: "Classic. Elegant. Versatile.",
    image: "/gift/silver.png",
    features: [
      "999 Fine Silver Coins",
      "Religious & Corporate Designs",
      "Elegant Packaging",
      "Bulk Orders Available",
    ],
  },
];

function GoldSilverCollection() {
  return (
    <section className="bg-light px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="script-font text-xl text-accent">Our Craft</span>
          <h2 className="mt-2 text-3xl text-primary md:text-4xl">
            The Gold &amp; Silver Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={fadeUp}
              className="group overflow-hidden rounded-2xl border-luxury bg-card shadow-luxury transition-shadow duration-500 hover:shadow-luxury-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} arranged for corporate gifting`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="script-font text-lg text-white/90">
                    {item.tagline}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl text-primary">{item.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {item.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "hsl(var(--theme-gold))" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ----------------------------- 3. Why Choose Us ---------------------------- */

const reasons = [
  {
    icon: ShieldCheck,
    title: "BIS Hallmarked Quality",
    desc: "Every coin is certified for purity, so every gift carries genuine trust.",
  },
  {
    icon: Gift,
    title: "Premium Packaging",
    desc: "Elegant boxes and finishes designed to make every unboxing memorable.",
  },
  {
    icon: Package,
    title: "Bulk Corporate Orders",
    desc: "Tailored quantities and customisation for teams, clients and events.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    desc: "Secure, insured shipping to your office or directly to recipients.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-card px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <span className="script-font text-xl text-accent">Why Choose Us</span>
          <h2 className="mt-2 text-3xl text-primary md:text-4xl">
            Crafted for Corporate Trust
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                variants={fadeUp}
                className="rounded-xl border-luxury bg-light p-7 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-luxury"
              >
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "hsl(var(--theme-overlay))" }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: "hsl(var(--theme-gold))" }}
                  />
                </div>
                <h3 className="text-lg text-primary">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {r.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- 4. CTA ----------------------------------- */

function CallToAction() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      <div
        className="absolute inset-0 -z-10 gradient-gold"
        style={{ opacity: 0.94 }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-20"
        style={{ background: "hsl(var(--theme-primary))", filter: "blur(70px)" }}
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2
          className="text-3xl md:text-4xl"
          style={{ color: "hsl(var(--theme-primary))" }}
        >
          Looking for Premium Corporate Gifts?
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl text-base leading-relaxed"
          style={{ color: "hsl(345 38% 22% / 0.85)" }}
        >
          Let&apos;s help you create memorable gifting experiences with
          elegant gold and silver coins.
        </p>

       {/* <motion.div >
                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.97 }}
                       className="relative overflow-hidden mt-5  group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg"
                       style={{
                         fontFamily: "'Cinzel', serif",
                         background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
                         border: '1px solid rgba(218,165,32,0.3)',
                       }}
                     >
                 
                     
                       <span className="relative z-10">BOOK AN APPOINTMENT</span>
                  
                       <span
                         className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
                         style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
                       />
                     </motion.button>
                   </motion.div> */}
                   <motion.div>
  <motion.a
    href="https://wa.me/919873818283"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className="relative overflow-hidden mt-5 group px-9 py-3.5 text-[#f9dbcb] tracking-[0.2em] uppercase text-xs transition-all duration-400 shadow-lg inline-block"
    style={{
      fontFamily: "'Cinzel', serif",
      background: 'linear-gradient(135deg, #7B1F2A 0%, #9B3040 100%)',
      border: '1px solid rgba(218,165,32,0.3)',
    }}
  >
    <span className="relative z-10">BOOK AN APPOINTMENT</span>

    <span
      className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"
      style={{ background: 'linear-gradient(135deg, #290102 0%, #7B1F2A 100%)' }}
    />
  </motion.a>
</motion.div>
      </motion.div>
    </section>
  );
}


 function Banner() {
  return (
    <section className="relative w-full h-screen">
      {/* Desktop Banner */}
      <Image
        src="/coins/images/silver_coin_banner.png"
        alt="Desktop Banner"
        fill
        priority
        className="hidden md:block object-cover"
      />

      {/* Mobile Banner */}
      <Image
        src="/coins/images/silver_coin_banner_mobile.png"
        alt="Mobile Banner"
        fill
        priority
        className="block md:hidden object-cover"
      />
    </section>
  );
}