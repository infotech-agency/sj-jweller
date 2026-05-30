"use client"
import Image from 'next/image'
import React from 'react'

const RandomSection = () => {
  return (
    <div className='bg-[#420E12] min-h-screen w-full py-16 px-4 md:px-8 lg:px-16'>
      
      {/* Main Container with Heritage Border */}
      <div className='max-w-7xl mx-auto relative'>
        
        {/* Decorative Corner Borders */}
        <div className='absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-amber-500/80 rounded-tl-2xl'></div>
        <div className='absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-amber-500/80 rounded-tr-2xl'></div>
        <div className='absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-amber-500/80 rounded-bl-2xl'></div>
        <div className='absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-amber-500/80 rounded-br-2xl'></div>

        {/* Two Images Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16'>
          
          {/* Image 1 Card */}
          <div className='relative group'>
            {/* Golden Border Frame */}
            <div className='absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative bg-[#2A080C] p-3 rounded-lg'>
              <div className='relative overflow-hidden rounded-md'>
                <Image
                  src="/assets/grandfather.png"
                  height={300}
                  width={200}
                  alt="Grandfather heritage image"
                  className='w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-105'
                />
                {/* Vintage Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#420E12]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              
              {/* Image Name/Title Section */}
              <div className='mt-4 text-center space-y-2'>
                <h3 className='text-amber-400 text-xl md:text-2xl font-serif font-semibold tracking-wide'>
                  Grandfather's Legacy
                </h3>
                <div className='w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto'></div>
                <p className='text-amber-200/70 text-sm md:text-base font-light italic'>
                  "Keeper of ancient traditions"
                </p>
                <p className='text-amber-200/60 text-xs md:text-sm font-light px-2'>
                  A timeless portrait capturing the wisdom and heritage of generations past.
                </p>
              </div>
              
              {/* Decorative bottom border */}
              <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
            </div>
          </div>

          {/* Image 2 Card */}
          <div className='relative group'>
            {/* Golden Border Frame */}
            <div className='absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300'></div>
            <div className='relative bg-[#2A080C] p-3 rounded-lg'>
              <div className='relative overflow-hidden rounded-md'>
                <Image
                  src="/assets/grandfather.png"
                  height={500}
                  width={600}
                  alt="Heritage artifact"
                  className='w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-105'
                />
                {/* Vintage Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#420E12]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              
              {/* Image Name/Title Section */}
              <div className='mt-4 text-center space-y-2'>
                <h3 className='text-amber-400 text-xl md:text-2xl font-serif font-semibold tracking-wide'>
                  Sacred Artifacts
                </h3>
                <div className='w-12 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto'></div>
                <p className='text-amber-200/70 text-sm md:text-base font-light italic'>
                  "Echoes of the divine"
                </p>
                <p className='text-amber-200/60 text-xs md:text-sm font-light px-2'>
                  Ancient ceremonial pieces preserving the spiritual essence of our culture.
                </p>
              </div>
              
              {/* Decorative bottom border */}
              <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
            </div>
          </div>
        </div>

        {/* Main Text Section with Heritage Style */}
        <div className='relative max-w-3xl mx-auto text-center'>
          {/* Decorative top and bottom lines */}
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent'></div>
          
          {/* Ornamental dots */}
          <div className='flex justify-center gap-2 mb-6'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='w-1.5 h-1.5 rounded-full bg-amber-500/60'></div>
            ))}
          </div>
          
          {/* Main Text */}
          <div className='space-y-6 py-8'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-amber-400 tracking-wide'>
              Preserving Heritage
            </h2>
            
            <div className='w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto'></div>
            
            <p className='text-amber-200/80 text-base md:text-lg leading-relaxed font-light px-4'>
              Step into a world where tradition meets elegance. Our legacy spans generations, 
              celebrating the timeless beauty of craftsmanship and cultural richness. 
              Each piece tells a story of devotion, artistry, and heritage passed down 
              through ages.
            </p>
            
            <div className='w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto'></div>
            
            {/* Decorative Quote/Subtext */}
            <div className='italic text-amber-400/70 text-sm md:text-base font-serif'>
              "Where every corner whispers stories of the past"
            </div>
          </div>
          
          {/* Decorative bottom dots */}
          <div className='flex justify-center gap-2 mt-6'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='w-1.5 h-1.5 rounded-full bg-amber-500/60'></div>
            ))}
          </div>
        </div>

        {/* Additional Ornamental Details */}
        <div className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-8'>
          <div className='w-8 h-8 md:w-12 md:h-12 border border-amber-500/30 rotate-45'></div>
        </div>
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-8'>
          <div className='w-8 h-8 md:w-12 md:h-12 border border-amber-500/30 rotate-45'></div>
        </div>
      </div>
    </div>
  )
}

export default RandomSection