'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, CheckCircle, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'

const HeroSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email signup
    console.log('Email signup:', email)
  }

  const features = [
    'AI-Powered Automation',
    'Advanced Analytics',
    'Drag & Drop Builder',
    'A/B Testing'
  ]

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: TrendingUp, value: '98%', label: 'Delivery Rate' },
    { icon: Zap, value: '5x', label: 'Better ROI' },
  ]

  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                #1 Email Marketing Platform
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Email Marketing with
                <span className="text-primary-600 block">AI-Powered Tools</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Send personalized campaigns that convert. Automate your workflows, 
                analyze performance, and grow your business with our advanced email marketing platform.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Start Free Trial
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </form>

            <p className="text-sm text-gray-500">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                {/* Mock Email Campaign */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Dashboard</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">24.5%</div>
                      <div className="text-xs text-gray-500">Open Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">8.2%</div>
                      <div className="text-xs text-gray-500">Click Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">$12.4K</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>
                </div>

                {/* Mock Email Preview */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium">Your Brand</div>
                        <div className="text-xs text-gray-500">Weekly Newsletter</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">2 min ago</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded"></div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white p-4 rounded-full shadow-lg transition-all duration-200 group">
                    <Play className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection