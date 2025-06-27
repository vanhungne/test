import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: "Daily anti-acne cream with Tretinoin",
    description: "A multi-purpose cream that fights breakouts while keeping skin youthful.",
    image: "/images/1.jpg",
    background: "bg-white"
  },
  {
    id: 2,
    name: "Magic eye kit",
    description: "Super charged active retinol cream that fights off stubborn eye bags 24/7.",
    image: "/images/2.jpg",
    background: "bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100"
  },
  {
    id: 3,
    name: "Multi-peptide soothing moisturizer",
    description: "An excellent source of antioxidants to sooth your skin. Made from waterlily extracts.",
    image: "/images/3.jpg",
    background: "bg-white"
  },
  {
    id: 4,
    name: "Refreshing complete vitamin C Nectar serum",
    description: "Protect and rejuvenate your skin with our most potent vitamin C serum yet.",
    image: "/images/4.jpg",
    background: "bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100"
  },
  {
    id: 5,
    name: "Hydrating facial cleanser",
    description: "Gentle, pH-balanced cleanser that removes impurities without stripping natural oils.",
    image: "/images/5.jpg",
    background: "bg-white"
  },
  {
    id: 6,
    name: "Brightening face mask",
    description: "Weekly treatment mask infused with vitamin C and niacinamide for radiant skin.",
    image: "/images/6.jpg",
    background: "bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100"
  },
  {
    id: 7,
    name: "Overnight repair serum",
    description: "Intensive night treatment with peptides and ceramides to restore skin barrier.",
    image: "/images/7.jpg",
    background: "bg-white"
  }
]

const ProductCarousel = () => {
  const constraintsRef = useRef(null)

  return (
    <section className="products-section py-4 sm:py-6 md:py-8" aria-labelledby="products-heading">
      <h2 id="products-heading" className="sr-only">Our Products</h2>
      <div 
        className="products-container mx-auto overflow-hidden" 
        style={{ maxWidth: '1360px' }}
        ref={constraintsRef}
      >
        <motion.div
          className="products-grid flex gap-4 sm:gap-6 pl-4 sm:pl-6 lg:pl-8 pr-0"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragTransition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            restDelta: 0.01
          }}
          whileDrag={{ 
            scale: 0.98,
            gap: '2rem',
            cursor: 'grabbing'
          }}
          style={{
            cursor: 'grab',
            willChange: 'transform'
          }}
          role="list"
        >
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductCarousel