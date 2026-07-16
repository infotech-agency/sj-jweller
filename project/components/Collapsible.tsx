"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Eye } from "lucide-react";

/* ----------------------------- Motion presets ---------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* --------------------------------- Data ----------------------------------- */

type FilterKey = "all" | "gold" | "silver" | "rings" | "necklace";

const filters: { key: FilterKey; label: string; image: string }[] = [
  { key: "all", label: "All Pieces", image: "/images/collection/filter-all.jpg" },
  { key: "gold", label: "Gold", image: "/images/collection/filter-gold.jpg" },
  { key: "silver", label: "Silver", image: "/images/collection/filter-silver.jpg" },
  { key: "rings", label: "Rings", image: "/images/collection/filter-rings.jpg" },
  { key: "necklace", label: "Necklace", image: "/images/collection/filter-necklace.jpg" },
];

type Product = {
  id: string;
  name: string;
  category: Exclude<FilterKey, "all">[];
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: "p1",
    name: "Aurelia Gold Band Ring",
    category: ["gold", "rings"],
    price: "₹48,500",
    image: "/images/collection/gold-ring-1.jpg",
  },
  {
    id: "p2",
    name: "Royal Heritage Gold Necklace",
    category: ["gold", "necklace"],
    price: "₹1,82,000",
    image: "/images/collection/gold-necklace-1.jpg",
  },
  {
    id: "p3",
    name: "Lustre Silver Solitaire Ring",
    category: ["silver", "rings"],
    price: "₹12,900",
    image: "/images/collection/silver-ring-1.jpg",
  },
  {
    id: "p4",
    name: "Ivory Pearl Silver Necklace",
    category: ["silver", "necklace"],
    price: "₹24,400",
    image: "/images/collection/silver-necklace-1.jpg",
  },
  {
    id: "p5",
    name: "Regal Gold Cocktail Ring",
    category: ["gold", "rings"],
    price: "₹56,200",
    image: "/images/collection/gold-ring-2.jpg",
  },
  {
    id: "p6",
    name: "Antique Gold Choker Necklace",
    category: ["gold", "necklace"],
    price: "₹2,14,500",
    image: "/images/collection/gold-necklace-2.jpg",
  },
  {
    id: "p7",
    name: "Whisper Silver Band Ring",
    category: ["silver", "rings"],
    price: "₹9,800",
    image: "/images/collection/silver-ring-2.jpg",
  },
  {
    id: "p8",
    name: "Moonlit Silver Layered Necklace",
    category: ["silver", "necklace"],
    price: "₹28,700",
    image: "/images/collection/silver-necklace-2.jpg",
  },
];

/* -------------------------------- Component -------------------------------- */

export default function CollectionSection() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = useMemo(() => {
    if (active === "all") return products;
    return products.filter((p) => p.category.includes(active));
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-light px-6 py-20 lg:px-8">
      {/* subtle gold backdrop motifs to match hero language */}
      <div
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full opacity-[0.08]"
        style={{ background: "hsl(var(--theme-gold))", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-72 w-72 rounded-full opacity-[0.06]"
        style={{ background: "hsl(var(--theme-primary))", filter: "blur(90px)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <span className="script-font text-xl text-accent">
            Curated for You
          </span>
          <h2 className="mt-2 text-3xl text-primary md:text-4xl">
            Explore Our Collection
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
            Hand-picked gold and silver pieces, crafted with precision and
            designed to be treasured for generations.
          </p>
        </motion.div>

        {/* ---------------- Filter Pills with Images ---------------- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-14 flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {filters.map((f) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="group relative flex flex-col items-center gap-2.5 focus:outline-none"
              >
                <span
                  className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full transition-all duration-400 md:h-20 md:w-20 ${
                    isActive
                      ? "shadow-gold scale-105"
                      : "shadow-soft opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                  style={{
                    border: isActive
                      ? "2.5px solid hsl(var(--theme-gold))"
                      : "2px solid hsl(var(--theme-border))",
                  }}
                >
                  <Image
                    src={f.image}
                    alt={f.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, transparent 40%, hsl(var(--theme-primary) / 0.35))"
                        : "linear-gradient(180deg, transparent 50%, hsl(var(--theme-primary) / 0.45))",
                    }}
                  />
                  {isActive && (
                    <motion.span
                      layoutId="filter-ring"
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: "0 0 0 3px hsl(var(--theme-gold) / 0.35)",
                      }}
                    />
                  )}
                </span>

                <span
                  className={`text-xs font-medium tracking-wide transition-colors duration-300 md:text-sm ${
                    isActive ? "text-primary" : "text-muted"
                  }`}
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    color: isActive
                      ? "hsl(var(--theme-primary))"
                      : "hsl(var(--theme-muted))",
                  }}
                >
                  {f.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="filter-underline"
                    className="h-[2px] w-6 rounded-full"
                    style={{ background: "hsl(var(--theme-gold))" }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ---------------- Product Grid ---------------- */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-7 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group overflow-hidden rounded-2xl border-luxury bg-card shadow-soft transition-shadow duration-500 hover:shadow-luxury-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* hover quick-view */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <span
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white shadow-luxury backdrop-blur-sm"
                      style={{ background: "hsl(var(--theme-primary) / 0.85)" }}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Quick View
                    </span>
                  </div>

                  {/* category badge */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-white shadow-gold"
                    style={{ background: "hsl(var(--theme-gold) / 0.92)" }}
                  >
                    {p.category.includes("gold") ? "Gold" : "Silver"}
                  </span>
                </div>

                <div className="p-4 md:p-5">
                  <h3
                    className="text-base leading-snug text-primary md:text-lg"
                    style={{ fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {p.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className="text-sm font-medium md:text-base"
                      style={{ color: "hsl(var(--theme-gold))" }}
                    >
                      {p.price}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state, just in case */}
        {visible.length === 0 && (
          <p className="py-16 text-center text-muted">
            No pieces found in this category yet.
          </p>
        )}

        {/* View all button */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-14 text-center"
        >
          <button
            className="group inline-flex items-center gap-2 rounded-md border-luxury px-8 py-3.5 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:gradient-gold hover:text-white hover:shadow-gold"
          >
            View Full Collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}