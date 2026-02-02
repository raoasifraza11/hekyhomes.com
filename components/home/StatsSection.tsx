'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, Mail, DollarSign, Globe, Zap } from 'lucide-react'

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Users',
      description: 'Businesses trust EmailVerse',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Mail,
      value: '2.5B+',
      label: 'Emails Sent',
      description: 'Messages delivered monthly',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      value: '98.5%',
      label: 'Delivery Rate',
      description: 'Industry-leading deliverability',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: DollarSign,
      value: '$125M+',
      label: 'Revenue Generated',
      description: 'For our customers',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Globe,
      value: '180+',
      label: 'Countries',
      description: 'Global reach and compliance',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Zap,
      value: '5x',
      label: 'Better ROI',
      description: 'Compared to traditional methods',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ]

  const achievements = [
    {
      title: 'Industry Recognition',
      items: [
        'Best Email Marketing Platform 2024',
        'Top Rated on G2 & Capterra',
        'SOC 2 Type II Certified',
        'GDPR & CAN-SPAM Compliant'
      ]
    },
    {
      title: 'Customer Success',
      items: [
        '4.8/5 Average Rating',
        '95% Customer Retention',
        '24/7 Expert Support',
        '99.9% Uptime SLA'
      ]
    }
  ]

  return (
    <section id="stats-section" className="section-padding bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their email marketing 
            and achieved remarkable results with EmailVerse.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-xl p-8 text-center transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${stat.bgColor} p-4 rounded-full inline-block mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">{achievement.title}</h3>
              <div className="space-y-4">
                {achievement.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial today and see why businesses choose EmailVerse.
            </p>
            <a 
              href="https://calendly.com/emailverse/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg inline-block text-center"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection