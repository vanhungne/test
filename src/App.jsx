import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'

function App() {
  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <Header />
      <main role="main">
        <Hero />
        <ProductCarousel />
      </main>
    </div>
  )
}

export default App