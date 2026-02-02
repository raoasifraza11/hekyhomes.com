'use client'

import { useEffect, useState } from 'react'
import { BarChart3, TrendingUp, Users, Globe, Zap, Mail, Target, Award } from 'lucide-react'

const StatsHero = () => {
  const [animatedValues, setAnimatedValues] = useState({
    users: 0,
    emails: 0,
    delivery: 0,
    countries: 0
  })

  const targetValues = {
    users: 50000,
    emails: 2500000000,
    delivery: 98.5,
    countries: 180
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        users: Math.floor(targetValues.users * progress),
        emails: Math.floor(targetValues.emails * progress),
        delivery: Math.floor(targetValues.delivery * progress * 10) / 10,
        countries: Math.floor(targetValues.countries * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setAnimatedValues(targetValues)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const keyStats = [
    {
      icon: Users,
      value: `${animatedValues.users.toLocaleString()}+`,
      label: 'Active Users',
      change: '+12%',
      period: 'this month',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Mail,
      value: `${(animatedValues.emails / 1000000000).toFixed(1)}B+`,
      label: 'Emails Sent',
      change: '+18%',
      period: 'this quarter',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Target,
      value: `${animatedValues.delivery}%`,
      label: 'Delivery Rate',
      change: '+2.1%',
      period: 'vs industry avg',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Globe,
      value: `${animatedValues.countries}+`,
      label: 'Countries',
      change: '+5',
      period: 'new this year',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ]

  const achievements = [
    { icon: Award, label: 'Industry Leader', value: '#1 Platform' },
    { icon: Zap, label: 'Performance', value: '99.98% Uptime' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300% YoY' }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/20 to-primary-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary-100/10 to-accent-100/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-800 rounded-full text-sm font-medium mb-8 animate-bounce">
            <BarChart3 className="h-4 w-4 mr-3 animate-pulse" />
            Real-Time Analytics & Insights
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="text-gray-900">Email Marketing</span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-800 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              Statistics & Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Explore comprehensive email marketing statistics, industry benchmarks, 
            and performance insights with interactive charts and real-time data visualization.
          </p>
        </div>

        {/* Animated Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {keyStats.map((stat, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${(index + 3) * 200} border border-gray-100`}>
              <div className={`${stat.bgColor} p-4 rounded-2xl inline-block mb-6 pulse-glow`}>
                <stat.icon className={`h-8 w-8 ${stat.iconColor}`} />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-3 font-mono">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-gray-700 mb-4">
                {stat.label}
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <div className={`bg-gradient-to-r ${stat.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {stat.change}
                </div>
                <span className="text-sm text-gray-500">{stat.period}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Highlights with Charts */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-gray-100 animate-fade-in-up animation-delay-1000">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Platform Performance Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-white">45.2%</div>
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-blue-200 animate-ping opacity-20"></div>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Average Open Rate</div>
              <div className="text-sm text-gray-600 mb-2">15% above industry average</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-white">12.8%</div>
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-green-200 animate-ping opacity-20 animation-delay-200"></div>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Average Click Rate</div>
              <div className="text-sm text-gray-600 mb-2">22% above industry average</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full animate-pulse animation-delay-200" style={{width: '78%'}}></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl font-bold text-white">8.4%</div>
                </div>
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-purple-200 animate-ping opacity-20 animation-delay-400"></div>
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">Average Conversion Rate</div>
              <div className="text-sm text-gray-600 mb-2">35% above industry average</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full animate-pulse animation-delay-400" style={{width: '92%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-1200">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary-400" />
              <div className="text-2xl font-bold mb-2">{achievement.value}</div>
              <div className="text-gray-300">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsHero