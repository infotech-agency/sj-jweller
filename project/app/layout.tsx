import Navigation from '@/components/Navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import FooterSection from '@/components/FooterSection';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soni Jewellery - Luxury Handcrafted Jewelry',
  description:
    'Discover timeless elegance with Soni Jewellery. Luxury handcrafted jewelry featuring rings, necklaces, bracelets, and earrings. Premium quality, authentic craftsmanship since 2008.',
  keywords:
    'luxury jewelry, handcrafted jewelry, rings, necklaces, bracelets, earrings, premium jewelry',
  authors: [{ name: 'Soni Jewellery' }],
  openGraph: {
    type: 'website',
    url: 'https://sonijewellery.com',
    title: 'Soni Jewellery - Luxury Handcrafted Jewelry',
    description: 'Discover timeless elegance with Soni Jewellery',
    images: [
      {
        url: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
        width: 1200,
        height: 630,
        alt: 'Soni Jewellery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soni Jewellery - Luxury Handcrafted Jewelry',
    description: 'Discover timeless elegance with Soni Jewellery',
    images: [
      'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#b44b2c" />
      </head>
      <body className={inter.className}>
        <Navigation/>
        {children}
         <FooterSection/>
        </body>
       
    </html>
  );
}
