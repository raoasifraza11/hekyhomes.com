'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react'

const CTASection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email signup
    console.log('Email signup:', email)
  }

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in under 5 minutes'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer success team'
    },
    {
      icon: Shield,
      title: 'No Risk',
      description: '14-day free trial, cancel anytime'
    }
  ]

  const features = [
    'Unlimited email sends',
    'Advanced automation',
    'Real-time analytics',
    'A/B testing tools',
    'Mobile-responsive templates',
    'API access & integrations'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4 mr-2" />
                Start Your Free Trial Today
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Transform Your Email Marketing?
              </h2>
              
              <p className="text-xl opacity-90 leading-relaxed">
                Join over 50,000 businesses that trust EmailVerse to deliver 
                exceptional email campaigns and drive real results.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 p-3 rounded-full inline-block mb-3">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm opacity-80">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Signup Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
              <p className="text-gray-600">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Work Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size
                </label>
                <select
                  id="size"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by leading companies worldwide
              </p>
              <div className="flex items-center justify-center space-x-6 opacity-60">
                <div className="text-xs font-semibold">MICROSOFT</div>
                <div className="text-xs font-semibold">SHOPIFY</div>
                <div className="text-xs font-semibold">AIRBNB</div>
                <div className="text-xs font-semibold">UBER</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-80">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2.5B+</div>
              <div className="text-sm opacity-80">Emails Sent</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98.5%</div>
              <div className="text-sm opacity-80">Delivery Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-80">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection