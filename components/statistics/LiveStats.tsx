'use client'

import { useEffect, useState } from 'react'
import { Activity, Mail, Users, TrendingUp, Zap, Globe, Target, BarChart3 } from 'lucide-react'

const LiveStats = () => {
  const [stats, setStats] = useState({
    emailsSent: 2547832156,
    activeUsers: 52847,
    campaignsActive: 1247,
    deliveryRate: 98.5,
    openRate: 45.2,
    clickRate: 12.8,
    conversionRate: 8.4,
    revenue: 2847392
  })

  const [chartData, setChartData] = useState([
    { time: '00:00', emails: 45000, opens: 20250, clicks: 5760 },
    { time: '04:00', emails: 52000, opens: 23400, clicks: 6656 },
    { time: '08:00', emails: 78000, opens: 35100, clicks: 9984 },
    { time: '12:00', emails: 95000, opens: 42750, clicks: 12160 },
    { time: '16:00', emails: 87000, opens: 39150, clicks: 11136 },
    { time: '20:00', emails: 65000, opens: 29250, clicks: 8320 }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        emailsSent: prev.emailsSent + Math.floor(Math.random() * 100) + 50,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 2,
        campaignsActive: prev.campaignsActive + Math.floor(Math.random() * 5) - 2,
        deliveryRate: Math.max(97, Math.min(99.9, prev.deliveryRate + (Math.random() - 0.5) * 0.3)),
        openRate: Math.max(40, Math.min(50, prev.openRate + (Math.random() - 0.5) * 0.5)),
        clickRate: Math.max(10, Math.min(15, prev.clickRate + (Math.random() - 0.5) * 0.3)),
        conversionRate: Math.max(6, Math.min(12, prev.conversionRate + (Math.random() - 0.5) * 0.2)),
        revenue: prev.revenue + Math.floor(Math.random() * 1000) + 200
      }))

      // Update chart data
      setChartData(prev => {
        const newData = [...prev]
        const lastPoint = newData[newData.length - 1]
        const newEmails = Math.floor(Math.random() * 20000) + 60000
        const newOpens = Math.floor(newEmails * 0.45)
        const newClicks = Math.floor(newOpens * 0.28)
        
        newData.push({
          time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          emails: newEmails,
          opens: newOpens,
          clicks: newClicks
        })
        
        return newData.slice(-6) // Keep only last 6 points
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const liveMetrics = [
    {
      icon: Mail,
      label: 'Emails Sent Today',
      value: stats.emailsSent.toLocaleString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      gradient: 'from-blue-500 to-blue-600',
      trend: '+2.3%',
      chart: 'emails'
    },
    {
      icon: Users,
      label: 'Active Users',
      value: stats.activeUsers.toLocaleString(),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradient: 'from-green-500 to-green-600',
      trend: '+1.8%',
      chart: 'users'
    },
    {
      icon: Target,
      label: 'Open Rate',
      value: `${stats.openRate.toFixed(1)}%`,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradient: 'from-purple-500 to-purple-600',
      trend: '+0.8%',
      chart: 'opens'
    },
    {
      icon: TrendingUp,
      label: 'Revenue Today',
      value: `$${(stats.revenue / 1000).toFixed(0)}K`,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      gradient: 'from-orange-500 to-orange-600',
      trend: '+5.2%',
      chart: 'revenue'
    }
  ]

  const performanceMetrics = [
    { label: 'Delivery Rate', value: stats.deliveryRate.toFixed(1), unit: '%', color: 'text-green-600', max: 100 },
    { label: 'Click Rate', value: stats.clickRate.toFixed(1), unit: '%', color: 'text-blue-600', max: 20 },
    { label: 'Conversion Rate', value: stats.conversionRate.toFixed(1), unit: '%', color: 'text-purple-600', max: 15 },
    { label: 'Active Campaigns', value: stats.campaignsActive.toString(), unit: '', color: 'text-orange-600', max: 2000 }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <h2 className="text-4xl font-bold text-gray-900">Live Platform Statistics</h2>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse animation-delay-500"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time data from our platform with interactive charts, updated every few seconds
          </p>
        </div>

        {/* Live Stats Grid with Mini Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {liveMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className={`${metric.bgColor} p-4 rounded-2xl pulse-glow`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">LIVE</span>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2 font-mono">
                {metric.value}
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                {metric.label}
              </div>
              
              {/* Mini Chart */}
              <div className="h-12 mb-4">
                <div className="flex items-end justify-between h-full space-x-1">
                  {chartData.slice(-6).map((point, i) => {
                    const height = metric.chart === 'emails' ? (point.emails / 100000) * 100 :
                                  metric.chart === 'opens' ? (point.opens / 50000) * 100 :
                                  metric.chart === 'clicks' ? (point.clicks / 15000) * 100 :
                                  Math.random() * 100
                    return (
                      <div
                        key={i}
                        className={`bg-gradient-to-t ${metric.gradient} rounded-t opacity-70 hover:opacity-100 transition-all duration-300 animate-pulse`}
                        style={{ height: `${Math.min(height, 100)}%`, width: '12px' }}
                      />
                    )
                  })}
                </div>
              </div>
              
              <div className={`bg-gradient-to-r ${metric.gradient} text-white px-3 py-1 rounded-full text-xs font-medium inline-block`}>
                {metric.trend} from yesterday
              </div>
            </div>
          ))}
        </div>

        {/* Performance Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Real-time Performance Meters */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <BarChart3 className="h-6 w-6 text-primary-600" />
              <span>Performance Meters</span>
            </h3>
            
            <div className="space-y-8">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className={`text-lg font-bold ${metric.color}`}>
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${
                        metric.color.includes('green') ? 'from-green-500 to-green-600' :
                        metric.color.includes('blue') ? 'from-blue-500 to-blue-600' :
                        metric.color.includes('purple') ? 'from-purple-500 to-purple-600' :
                        'from-orange-500 to-orange-600'
                      } h-3 rounded-full transition-all duration-1000 animate-pulse`}
                      style={{ width: `${(parseFloat(metric.value) / metric.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <Activity className="h-6 w-6 text-primary-600" />
              <span>Live Activity Feed</span>
            </h3>
            
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {[
                { time: '2 seconds ago', action: 'Campaign "Holiday Sale" sent to 15,247 subscribers', type: 'campaign', icon: Mail },
                { time: '8 seconds ago', action: 'New user registered from United States', type: 'user', icon: Users },
                { time: '15 seconds ago', action: 'A/B test completed with 23.4% open rate improvement', type: 'test', icon: TrendingUp },
                { time: '32 seconds ago', action: 'Automation workflow triggered for 847 contacts', type: 'automation', icon: Zap },
                { time: '45 seconds ago', action: 'Template "Modern Newsletter" downloaded 156 times', type: 'template', icon: Globe },
                { time: '1 minute ago', action: 'Revenue milestone: $50K reached this month', type: 'revenue', icon: Target }
              ].map((activity, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-fade-in-up animation-delay-${index * 100}`}>
                  <div className={`p-2 rounded-lg ${
                    activity.type === 'campaign' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'user' ? 'bg-green-100 text-green-600' :
                    activity.type === 'test' ? 'bg-purple-100 text-purple-600' :
                    activity.type === 'automation' ? 'bg-orange-100 text-orange-600' :
                    activity.type === 'template' ? 'bg-indigo-100 text-indigo-600' :
                    'bg-pink-100 text-pink-600'
                  }`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">{activity.action}</div>
                    <div className="text-xs text-gray-500">{activity.time}</div>
                  </div>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    activity.type === 'campaign' ? 'bg-blue-500' :
                    activity.type === 'user' ? 'bg-green-500' :
                    activity.type === 'test' ? 'bg-purple-500' :
                    activity.type === 'automation' ? 'bg-orange-500' :
                    activity.type === 'template' ? 'bg-indigo-500' :
                    'bg-pink-500'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Activity Map Placeholder */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Global Email Activity</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">🌍</div>
              <div className="text-xl font-bold">180+ Countries</div>
              <div className="text-gray-300">Worldwide Reach</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">⚡</div>
              <div className="text-xl font-bold">1M+ /hour</div>
              <div className="text-gray-300">Send Speed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">🎯</div>
              <div className="text-xl font-bold">25 Languages</div>
              <div className="text-gray-300">Localization</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-400">🚀</div>
              <div className="text-xl font-bold">99.98%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveStats