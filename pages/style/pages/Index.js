import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [featuredSellers, setFeaturedSellers] = useState([])

  useEffect(() => {
    // Simulate real-time data
    setActiveUsers(Math.floor(Math.random() * 100) + 50)
    setFeaturedSellers([
      { id: 1, name: "Ada's Jewelry", category: "Accessories", rating: 4.9, products: 45 },
      { id: 2, name: "Tech Hub Lagos", category: "Electronics", rating: 4.8, products: 32 },
      { id: 3, name: "Bella Fashion", category: "Clothing", rating: 4.7, products: 67 }
    ])
  }, [])

  return (
    <>
      <Head>
        <title>NaijaMarket - Connect Nigerian Entrepreneurs with Perfect Customers</title>
        <meta name="description" content="The marketplace that solves the audience reach problem for Nigerian entrepreneurs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-naija-green">🇳🇬 NaijaMarket</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{activeUsers} sellers online</span>
                </div>
                
                <button className="bg-naija-green text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stop Struggling to Find
              <span className="block text-yellow-300">Perfect Customers</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Nigeria's smartest marketplace connects entrepreneurs with customers 
              who actually want what you're selling. From Lagos to Kano, from jewelry to tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
                🚀 Start Selling Today (FREE)
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                👀 See How It Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Active Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">₦2.5M+</div>
                <div className="text-sm">Monthly Sales</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15,000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Problem Every Nigerian Entrepreneur Faces
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                You have amazing products, but finding the RIGHT customers feels impossible in today's crowded market.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Saturation</h3>
                <p className="text-gray-600">
                  "Everyone is selling jewelry/fashion/tech. How do I stand out?"
                </p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wasted Ad Spend</h3>
                <p className="text-gray-600">
                  "I spend on Facebook/Instagram ads but get the wrong audience"
                </p>
              </div>
              
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Time Wasted</h3>
                <p className="text-gray-600">
                  "Hours posting in groups, but still no serious buyers"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Solution: Smart Interest Matching
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We connect you with customers who are already looking for exactly what you sell.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-4">Smart Customer Matching</h3>
                <p className="text-gray-600 mb-4">
                  Our algorithm connects you with buyers who love your specific product category
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Interest-based targeting</li>
                  <li>✓ Location preferences</li>
                  <li>✓ Budget matching</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-4">Social Media Integration</h3>
                <p className="text-gray-600 mb-4">
                  Share your custom store link across WhatsApp, Instagram, and Facebook
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ WhatsApp Status sharing</li>
                  <li>✓ Instagram Story links</li>
                  <li>✓ Facebook post integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg card-hover">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Analytics</h3>
                <p className="text-gray-600 mb-4">
                  See which social platforms bring you the most customers
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>✓ Traffic source tracking</li>
                  <li>✓ Conversion analytics</li>
                  <li>✓ Peak activity insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sellers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Success Stories from Nigerian Entrepreneurs
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredSellers.map((seller) => (
                <div key={seller.id} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{seller.name}</h3>
                    <div className="flex items-center">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600 ml-1">{seller.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{seller.category}</p>
                  <p className="text-sm text-gray-500">{seller.products} products listed</p>
                  <button className="mt-4 w-full bg-naija-green text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    View Store
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect Customers?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ Nigerian entrepreneurs who've solved their customer reach problem
            </p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">🎉 Launch Special - FREE Forever</h3>
              <ul className="text-left max-w-md mx-auto space-y-2">
                <li>✓ Custom branded store page</li>
                <li>✓ Social media integration</li>
                <li>✓ Customer messaging system</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Payment processing (Paystack)</li>
              </ul>
            </div>

            <button className="bg-yellow-400 text-gray-900 px-12 py-4 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg">
              🚀 Create My Store Now (FREE)
            </button>
            
            <p className="text-sm mt-4 opacity-70">
              No credit card required • Setup in 5 minutes • Start selling today
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">🇳🇬 NaijaMarket</h3>
                <p className="text-gray-400 text-sm">
                  Connecting Nigerian entrepreneurs with their perfect customers since 2024.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">For Sellers</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Create Store</li>
                  <li>List Products</li>
                  <li>Analytics</li>
                  <li>Success Stories</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">For Buyers</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Browse Products</li>
                  <li>Find Local Sellers</li>
                  <li>Safe Payments</li>
                  <li>Customer Support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>?? hello@naijamarket.com</li>
                  <li>📱 WhatsApp Support</li>
                  <li>🐦 @NaijaMarket</li>
                  <li>📍 Lagos, Nigeria</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 NaijaMarket. Built with ❤️ for Nigerian entrepreneurs.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
