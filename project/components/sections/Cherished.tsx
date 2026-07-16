// import React from 'react'
// import pic from "/assets/heritage.jpg"
// import Image from 'next/image'
// const Cherished = () => {
//   return (
//     <div className='bg-[#F9CDB4] h-screen flex justify-center items-start gap-40 p-40'>
//         <div className='text-[#420E12] w-[50%]'>
//             <div>
//                 <h1 className='text-5xl font-bold'>Crafted with Values</h1>
//                 <h1 className='text-5xl font-bold'>Cherished for generations.</h1>
//                 <p>
//                     For over seven decades, SJ has been committed to excellence, honesty and artistry. Every piece we create is a reflection of our promise — Timeless elegance. Crafted for eternity.
//                 </p>
//             </div>
//         </div>
//         <div className='w-[50%]'>
//   <Image 
//     className='w-full h-auto' 
//     src="/assets/heritage.jpg" 
//     alt='random'
//     width={800}
//     height={500}
//     priority={false}
//   />
// </div>
//     </div>
//   )
// }

// export default Cherished

// import React from 'react';
// import Image from 'next/image';

// const Cherished = () => {
//   return (
//     <div className="bg-[#F9CDB4] min-h-screen  font-['Cormorant_Garamond'] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-6 sm:px-12 lg:px-20 py-12 lg:py-20">
//       {/* Text Section */}
//       <div className='text-[#420E12] w-full lg:w-1/2 space-y-4 lg:space-y-6'>
//         <div>
//           <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight'>
//             Crafted with Values
//           </h1>
//           <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight mt-2'>
//             Cherished for generations.
//           </h1>
//         </div>
        
//         <p className='text-sm sm:text-base lg:text-lg leading-relaxed text-[#420E12]/80 max-w-xl'>
//           For over seven decades, SJ has been committed to excellence, honesty and artistry. 
//           Every piece we create is a reflection of our promise — Timeless elegance. 
//           Crafted for eternity.
//         </p>
        
//         {/* Optional CTA Button */}
//         {/* <button className='mt-4 px-6 py-2 bg-[#420E12] text-[#F9CDB4] rounded-full hover:bg-[#5a1a20] transition-colors duration-300'>
//           Discover Our Legacy
//         </button> */}
//       </div>

//       {/* Image Section */}
//       <div className='w-full lg:w-1/2 flex justify-center items-center'>
      
//         <div className='relative w-full max-w-md lg:max-w-lg xl:max-w-full'>
//           <Image 
//             src="/assets/heritage.jpg" 
//             alt='Heritage jewelry collection - timeless elegance crafted for eternity'
//             width={800}
//             height={500}
//             priority={true}
//             className='w-full h-auto  shadow-2xl'
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cherished;

import React from 'react';
import Image from 'next/image';

const Cherished = () => {
  return (
    <div 
      className="relative bg-[#F9CDB4] min-h-screen font-['Cormorant_Garamond'] flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 px-6 sm:px-12 lg:px-20 py-12 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={
        { backgroundImage: "url('/assets/abt3bg.png')" ,
    
        }
       
      
      }
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-[#F9CDB4]/70"></div>
      
      {/* Content - add relative positioning */}
      <div className="relative z-10 w-full lg:w-1/2 space-y-4 lg:space-y-6">
        {/* ... rest of your content remains the same ... */}
        <div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-[#420E12]'>
            Crafted with Values
          </h1>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight mt-2 text-[#420E12]'>
            Cherished for generations.
          </h1>
        </div>
        
        <p className='text-xl sm:text-base lg:text-lg leading-relaxed text-[#420E12]/80 max-w-xl'>
          For over seven decades, SJ has been committed to excellence, honesty and artistry. 
          Every piece we create is a reflection of our promise — Timeless elegance. 
          Crafted for eternity.
        </p>
      </div>

      {/* Image Section */}
      <div className='relative z-10 w-full lg:w-1/2 flex justify-center items-center'>
        <div className='relative w-full max-w-md lg:max-w-lg xl:max-w-full'>
          <Image 
            src="/assets/shop.jpeg" 
            alt='Heritage jewelry collection - timeless elegance crafted for eternity'
            width={800}
            height={500}
            priority={true}
            className='w-full h-auto shadow-2xl'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>
      </div>
    </div>
  );
};

export default Cherished;