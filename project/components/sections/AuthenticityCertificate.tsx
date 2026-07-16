"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthenticityCertificate() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#7B1F2A]/10 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#f6d4c1]/60 blur-[90px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#7B1F2A]/15 bg-white/70 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
            
            {/* LEFT: Certificate & Coin Images */}
            <div className="lg:col-span-5 p-6 sm:p-8 md:p-12 flex flex-col gap-6 items-center justify-center bg-gradient-to-b lg:bg-gradient-to-r from-[#fffcfb] to-[#fcf5f1]">
              
              {/* Main Certificate Image */}
              <div className="relative group w-full aspect-square max-w-[360px] md:max-w-[400px] overflow-hidden rounded-2xl border border-[#7B1F2A]/10 bg-white shadow-lg flex items-center justify-center">
                <Image
                  src="/certificate/certificate.png"
                  alt="Silver Coin Certificate of Authenticity"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* TWO SILVER COINS SUB-SECTION */}
              <div className="w-full max-w-[360px] md:max-w-[400px]">
                <p 
                  className="text-[11px] uppercase tracking-wider text-[#8C3B46] mb-2 font-semibold text-center lg:text-left" 
                  style={{ fontFamily: "Inter" }}
                >
                  Featured Silver Coins
                </p>
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Coin 1 Image Container */}
                  <div className="relative aspect-square rounded-xl border border-[#7B1F2A]/10 bg-white shadow-sm overflow-hidden group/coin">
                    <Image
                      src="/coins/om.png"
                      alt="Silver Coin Front View"
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-contain p-3 transition-transform duration-500 group-hover/coin:scale-110"
                    />
                  </div>

                  {/* Coin 2 Image Container */}
                  <div className="relative aspect-square rounded-xl border border-[#7B1F2A]/10 bg-white shadow-sm overflow-hidden group/coin">
                    <Image
                      src="/coins/swastik.png"
                      alt="Silver Coin Back View"
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-contain p-3 transition-transform duration-500 group-hover/coin:scale-110"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT: Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
              <span
                className="tracking-[0.3em] sm:tracking-[0.45em] uppercase text-[10px] sm:text-xs text-[#8C3B46] mb-3 font-semibold"
                style={{ fontFamily: "Inter" }}
              >
                Authenticity Guaranteed
              </span>

              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl lg:text-6xl text-[#5A1420] font-semibold leading-[1.15] mb-6">
                Silver Coin
                <br className="hidden sm:inline" />
                Certificate
              </h2>

              <p className="font-['Inter'] text-[#6B4A4A] leading-relaxed text-sm sm:text-[15px] mb-8">
                Every silver coin is manufactured using advanced refining
                technology to ensure exceptional purity, lasting brilliance,
                and superior craftsmanship. Each piece undergoes stringent
                quality checks before reaching you.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#7B1F2A] text-white flex items-center justify-center text-lg shadow-md">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#5A1420] font-semibold">
                      999.9 Pure Silver
                    </h4>
                    <p className="text-[#7b6666] font-['Inter'] text-xs sm:text-sm mt-1">
                      Crafted with certified 999.9 fine silver to deliver
                      unmatched purity and premium quality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#7B1F2A] text-white flex items-center justify-center text-lg shadow-md">
                    ★
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#5A1420] font-semibold">
                      BIS Hallmarked
                    </h4>
                    <p className="text-[#7b6666] font-['Inter'] text-xs sm:text-sm mt-1">
                      Certified for authenticity and purity in accordance with
                      BIS hallmark standards.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#7B1F2A] text-white flex items-center justify-center text-lg shadow-md">
                    ♾
                  </div>
                  <div>
                    <h4 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#5A1420] font-semibold">
                      100% Buyback Assurance
                    </h4>
                    <p className="text-[#7b6666] font-['Inter'] text-xs sm:text-sm mt-1">
                      Every certified silver coin comes with a complete
                      buyback assurance for your peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#7B1F2A]/20" />
                <span
                  className="text-[#7B1F2A] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[10px] sm:text-xs font-medium"
                  style={{ fontFamily: "Inter" }}
                >
                  Crafted with Trust
                </span>
                <div className="h-px flex-1 bg-[#7B1F2A]/20" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}