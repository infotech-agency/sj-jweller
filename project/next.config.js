// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   eslint: {
// //     ignoreDuringBuilds: true,
// //   },
// //   images: { unoptimized: true },
// // };

// // module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // Ignore TypeScript errors during production build
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   images: {
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;