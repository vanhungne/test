import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="hero-heading">
      <div className="hero-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 id="hero-heading" className="hero-title text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-tight max-w-2xl">
          Quality ingredients. Real results.
        </h2>
        <a href="#all-products" className="view-all-link link-underline text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">
          View All Products
        </a>
      </div>
    </section>
  )
}

export default Hero