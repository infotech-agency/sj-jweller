'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Eye, X } from 'lucide-react';

/* --------------------------------- Types ----------------------------------- */

type FilterKey = 'all' | 'rings' | 'necklace' | 'bangles' | 'earrings';

interface FilterItem {
  key: FilterKey;
  title: string;
  imageUrl: string;
}

interface Product {
  id: number;
  title: string;
  category: Exclude<FilterKey, 'all'>;
  imageUrl: string;
  price: string;
}

/* --------------------------------- Data ------------------------------------ */

/**
 * PLACEHOLDER IMAGES — replace every imageUrl below with your own product photos.
 * Suggested folder structure in your /public directory:
 *   public/images/collection/filters/   -> filter thumbnail images
 *   public/images/collection/products/  -> product grid images
 */

const PLACEHOLDER_IMG = '/images/collection/placeholder.jpg';

const filterItems: FilterItem[] = [
  {
    key: 'rings',
    title: 'Rings',
    imageUrl: 'https://media.istockphoto.com/id/157185375/photo/three-diamonds-set-in-a-white-gold-ring-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AGUN2NdvrdIuKTm9ai8s4ZMQS0oDe2_qqQnhUNFTFhY=', // TODO: replace with rings filter thumbnail
  },
  {
    key: 'necklace',
    title: 'Necklace',
    imageUrl: 'https://www.darjewellery.com/product_image/s1200__aHR0cHM6Ly9tZWRpYS5kYXJqZXdlbGxlcnkuaW4vcHJvZHVjdF9pbWFnZXMvczEyMDBfXzE3MTYyMDc2MDQ5MTAuanBn', // TODO: replace with necklace filter thumbnail
  },
  {
    key: 'bangles',
    title: 'Bangles',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2xlfGVufDB8fDB8fHww', // TODO: replace with bracelet filter thumbnail
  },
  {
    key: 'earrings',
    title: 'Earrings',
    imageUrl: 'https://media.istockphoto.com/id/1145185972/photo/pair-of-emerald-earrings-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rsjDhlUeccYv7J7kpy44PnuDTAT5PqlauW7Vdixuxkk=', // TODO: replace with earrings filter thumbnail
  },
];

const products: Product[] = [
  {
    id: 1,
    title: 'Aurelia Statement Ring',
    category: 'rings',
    price: '₹48,500',
    imageUrl: 'https://www.zoya.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe7dade9d/images/ZOYA/hi-res/ZLFL24FAGAA34.jpg?sw=480&sh=480', // TODO: replace
  },
  {
    id: 2,
    title: 'Royal Heritage Necklace',
    category: 'necklace',
    price: '₹1,82,000',
    imageUrl: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/371/1779535342_0aea252b06942c27a88c.webp', // TODO: replace
  },

  {
    id: 4,
    title: 'Ivory Pearl Drop Earrings',
    category: 'earrings',
    price: '₹24,400',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_yJQPtyGDjhxZ8yFCTRODhgXfTnooU0bxw&s', // TODO: replace
  },
  {
    id: 5,
    title: 'Regal Cocktail Ring',
    category: 'rings',
    price: '₹56,200',
    imageUrl: 'https://www.ayaani.in/cdn/shop/files/imgi_7_SS2_15_301020251218248902589.webp?v=1775303290&width=533', // TODO: replace
  },
  {
    id: 6,
    title: 'Antique Choker Necklace',
    category: 'necklace',
    price: '₹2,14,500',
    imageUrl: 'https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/resize-w:960/oIWL5m2UP-Kundala-Velai-22-Karat-Gold-Long-Necklace.jpeg', // TODO: replace
  },

  {
    id: 8,
    title: 'Moonlit Drop Earrings',
    category: 'earrings',
    price: '₹28,700',
    imageUrl: 'https://rubans.in/cdn/shop/files/RW04ED412290-Model-2.jpg?v=1770111279&width=610', // TODO: replace
  },
];

/* ------------------------------- Premium Fonts ------------------------------ */

const PremiumFonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

    @keyframes shimmer-gold {
      0% {
        background-position: -200% center;
      }
      100% {
        background-position: 200% center;
      }
    }

    .shimmer-gold {
      background: linear-gradient(
        90deg,
        #d4af37 0%,
        #ffd700 40%,
        #fff8dc 50%,
        #ffd700 60%,
        #d4af37 100%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer-gold 3s linear infinite;
    }
  `}</style>
);

/* --------------------------------- Component -------------------------------- */

export const CollectionFilterSection: React.FC<{ backgroundImageUrl?: string }> = ({
  backgroundImageUrl = '/assets/refined_dark_red_silk_banner.png',
}) => {
  const headingRef = React.useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const [active, setActive] = useState<FilterKey>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const visibleProducts = useMemo(() => {
    if (active === 'all') return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PremiumFonts />

      <section
        className="relative w-full bg-black bg-cover bg-center bg-no-repeat py-14 md:py-20"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        {/* Dark overlay so text and cards stay readable over the image */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Wrap all existing content so it sits above the overlay */}
        <div className="relative z-10">
          {/* ---------------- Compact Heading ---------------- */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: -20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full px-4"
          >
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <div className="h-px w-8 md:w-14 bg-gradient-to-r from-transparent to-amber-500/60" />
              <div className="w-1 h-1 rotate-45 bg-amber-500" />
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
              <div className="w-1 h-1 rotate-45 bg-amber-500" />
              <div className="h-px w-8 md:w-14 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>

            <h2
              className="text-center font-['Playfair_Display'] font-bold
                         text-2xl sm:text-3xl md:text-4xl tracking-wider
                         shimmer-gold drop-shadow-2xl"
            >
              THE COLLECTIONS
            </h2>

            <p
              className="text-center font-['Cinzel'] text-amber-400/80
                         text-[10px] md:text-xs tracking-[0.25em] uppercase mt-2
                         font-light"
            >
              Timeless Elegance • Exquisite Craftsmanship
            </p>
          </motion.div>

          {/* ---------------- Mini Filter Cards ---------------- */}
          <div className="w-full flex justify-center mt-8 md:mt-10 px-4">
            <div className="flex flex-wrap justify-center gap-3.5 md:gap-5 max-w-3xl">
              {/* All filter */}
              <FilterCard
                title="All"
                imageUrl="https://media.istockphoto.com/id/494833184/photo/shiny-gold-and-silver-jewelery.jpg?s=612x612&w=0&k=20&c=IyxoyEJuKNpTkiuoFMsw4wJT9fI-r0MkLJ0JxOrcg44=" // TODO: replace with an image representing the full collection
                isActive={active === 'all'}
                onClick={() => setActive('all')}
              />
              {filterItems.map((item) => (
                <FilterCard
                  key={item.key}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  isActive={active === item.key}
                  onClick={() => setActive(item.key)}
                />
              ))}
            </div>
          </div>

          {/* ---------------- Product Grid ---------------- */}
          <div className="w-full flex justify-center pt-10 md:pt-14 px-4 sm:px-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 max-w-7xl w-full items-start"
              >
                {visibleProducts.map((p, index) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative w-full
                               h-[280px] sm:h-[340px] md:h-[400px]
                               overflow-hidden rounded-2xl
                               border border-amber-500/30 cursor-pointer
                               transition-all duration-500 hover:shadow-2xl
                               hover:shadow-amber-500/30 hover:border-amber-500/80
                               backdrop-blur-sm"
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.dataset.fallback) return;
                        target.dataset.fallback = 'true';
                        target.src = PLACEHOLDER_IMG;
                        target.onerror = null;
                      }}
                      className="w-full h-full object-cover transition-transform
                                 duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                                 from-black/80 via-black/30 to-transparent
                                 opacity-70 group-hover:opacity-90
                                 transition-all duration-500"
                    />

                    {/* Golden hover wash */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t
                                 from-amber-500/40 via-amber-500/10 to-transparent
                                 opacity-0 group-hover:opacity-100
                                 transition-all duration-500"
                    />

                    {/* Corner decorations */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500/0 group-hover:border-amber-500/60 transition-all duration-500" />

                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 translate-x-1 translate-y-1
                                 rounded-full px-2.5 py-1 text-[9px] font-medium
                                 uppercase tracking-widest text-black bg-amber-400/90
                                 shadow-md"
                    >
                      {p.category}
                    </span>

                    {/* Quick view */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(p);
                        }}
                        className="flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-black bg-amber-400/95 shadow-lg hover:bg-amber-300 transition-colors"
                      >
                        <Eye className="h-3 w-3" />
                        Quick View
                      </button>
                    </div>

                    {/* Title section */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 bg-gradient-to-t from-black/85 to-transparent">
                      <h3
                        className="text-white text-base md:text-lg tracking-[0.12em] uppercase
                                   font-['Cinzel'] font-semibold text-center
                                   group-hover:text-amber-400 transition-all duration-500"
                      >
                        {p.title}
                      </h3>
                      <div className="flex items-center justify-center gap-2 mt-1.5">
                        <span className="text-amber-400 text-sm font-medium font-['Cormorant_Garamond']">
                          {p.price}
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-amber-400/80 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {visibleProducts.length === 0 && (
            <p className="text-center text-amber-400/70 py-16 font-['Cormorant_Garamond']">
              No pieces found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ---------------- Quick View Modal ---------------- */}
      <AnimatePresence>
        {quickViewProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setQuickViewProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-0 bg-black border border-amber-500/40 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 border border-amber-500/40 flex items-center justify-center text-amber-400 hover:bg-amber-500/20 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image */}
              <div className="h-64 sm:h-full">
                <img
                  src={quickViewProduct.imageUrl}
                  alt={quickViewProduct.title}
                  onError={(e) => {
                    e.currentTarget.src = PLACEHOLDER_IMG;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-amber-400/80 text-[10px] tracking-[0.25em] uppercase font-['Cinzel'] mb-2">
                  {quickViewProduct.category}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-['Cinzel'] font-semibold tracking-wide mb-3">
                  {quickViewProduct.title}
                </h3>
                <p className="text-amber-400 text-lg font-['Cormorant_Garamond'] mb-6">
                  {quickViewProduct.price}
                </p>
                <p className="text-white/60 text-sm font-['Cormorant_Garamond'] leading-relaxed mb-6">
                  Handcrafted with exceptional attention to detail, this piece embodies
                  timeless elegance and enduring craftsmanship.
                </p>
                <a
                  href={`https://wa.me/919873818283?text=${encodeURIComponent(
                    `Hi, I'd like to enquire about the ${quickViewProduct.title} (${quickViewProduct.price}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 text-black text-xs tracking-[0.2em] uppercase font-['Cinzel'] rounded-full hover:bg-amber-300 transition-colors"
                >
                  Enquire Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ----------------------------- Mini Filter Card ----------------------------- */

interface FilterCardProps {
  title: string;
  imageUrl?: string;
  isActive: boolean;
  onClick: () => void;
  fallbackGradient?: boolean;
}

const FilterCard: React.FC<FilterCardProps> = ({
  title,
  imageUrl,
  isActive,
  onClick,
  fallbackGradient,
}) => {
  return (
    <button onClick={onClick} className="group flex flex-col items-center gap-2 focus:outline-none">
      <span
        className={`relative block w-[72px] h-[88px] sm:w-20 sm:h-24 md:w-[92px] md:h-[110px]
                    overflow-hidden rounded-xl border transition-all duration-400
                    ${
                      isActive
                        ? 'border-amber-400 shadow-lg shadow-amber-500/40 scale-105'
                        : 'border-amber-500/25 opacity-80 group-hover:opacity-100 group-hover:border-amber-500/60 group-hover:scale-105'
                    }`}
      >
        {fallbackGradient ? (
          <span className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-black to-black" />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.img-fallback-gradient')) {
                const fallback = document.createElement('span');
                fallback.className =
                  'img-fallback-gradient absolute inset-0 bg-gradient-to-br from-amber-500/30 via-black to-black';
                parent.insertBefore(fallback, parent.firstChild);
              }
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}

        <span
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
            isActive
              ? 'from-black/70 via-black/10 to-transparent'
              : 'from-black/80 via-black/20 to-transparent'
          }`}
        />

        {isActive && (
          <motion.span
            layoutId="mini-filter-glow"
            className="absolute inset-0 rounded-xl"
            style={{ boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.55)' }}
          />
        )}
      </span>

      <span
        className={`text-[11px] md:text-xs font-['Cinzel'] tracking-[0.15em] uppercase transition-colors duration-300 ${
          isActive ? 'text-amber-400' : 'text-amber-200/60 group-hover:text-amber-300'
        }`}
      >
        {title}
      </span>

      {isActive && (
        <motion.span
          layoutId="mini-filter-underline"
          className="h-[2px] w-5 rounded-full bg-amber-400"
        />
      )}
    </button>
  );
};

export default CollectionFilterSection;