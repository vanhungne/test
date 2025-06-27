import React from 'react'
import { motion } from 'framer-motion'

const ProductCard = ({ product, index }) => {
  return (
    <motion.article
      className={`product-card ${product.background} overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex-shrink-0`}
      style={{ width: '420px', height: '640px' }}
      role="listitem"
      whileHover={{ 
        scale: 1.02,
        transition: { 
          type: "spring", 
          damping: 20, 
          stiffness: 300 
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
    >
      <div className="product-image-wrapper relative overflow-hidden" style={{ height: '525px' }}>
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-full object-cover"
          loading="lazy"
          draggable="false"
          whileHover={{ 
            scale: 1.1,
            transition: { 
              type: "tween",
              ease: "easeOut",
              duration: 0.5
            }
          }}
        />
      </div>
      <div className="product-content p-4 sm:p-5">
        <h3 className="product-name text-base sm:text-lg font-medium text-gray-900 mb-2 leading-tight">
          {product.name}
        </h3>
        <p className="product-description text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.article>
  )
}

export default ProductCard