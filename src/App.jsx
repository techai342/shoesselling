import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import AnimatedSection from './components/AnimatedSection'

function App() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      description: "Premium running shoes with air cushioning"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      description: "Boost technology for maximum comfort"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: "$119.99",
      image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400",
      description: "Retro style with modern comfort"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  )
}

export default App
