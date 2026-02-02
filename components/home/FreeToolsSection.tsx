'use client'

import { useState } from 'react'
import { 
  Mail, 
  FileText, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Download,
  Eye,
  Clock
} from 'lucide-react'

const FreeToolsSection = () => {
  const [activeTool, setActiveool] = useState(0)

  const tools = [
    {
      id: 0,
      name: 'Email Template Builder',
      description: 'Create stunning email templates with our drag-and-drop builder',
      icon: Mail,
      color: 'bg-blue-500',
      features: ['Drag & Drop Interface', 'Mobile Responsive', '100+ Templates', 'Custom Branding'],
      demo: {
        title: 'Build Your Template',
        content: 'Design professional emails in minutes with our intuitive builder.'
      }
    },
    {
      id: 1,
      name: 'Subject Line Analyzer',
      description: 'Optimize your subject lines for maximum open rates',
      icon: FileText,
      color: 'bg-green-500',
      features: ['AI-Powered Analysis', 'Spam Score Check', 'A/B Test Suggestions', 'Performance Prediction'],
      demo: {
        title: 'Analyze Subject Lines',
        content: 'Get instant feedback on your subject line effectiveness.'
      }
    },
    {
      id: 2,
      name: 'Audience Segmentation',
      description: 'Segment your audience for targeted campaigns',
      icon: Target,
      color: 'bg-purple-500',
      features: ['Smart Segmentation', 'Behavioral Targeting', 'Custom Filters', 'Real-time Updates'],
      demo: {
        title: 'Segment Your Audience',
        content: 'Create precise audience segments for better targeting.'
      }
    },
    {
      id: 3,
      name: 'Performance Analytics',
      description: 'Track and analyze your email campaign performance',
      icon: BarChart3,
      color: 'bg-orange-500',
      features: ['Real-time Metrics', 'Custom Reports', 'ROI Tracking', 'Competitor Analysis'],
      demo: {
        title: 'Track Performance',
        content: 'Monitor your campaigns with detailed analytics and insights.'
      }
    }
  ]

  const stats = [
    { label: 'Templates Created', value: '50K+', icon: Mail },
    { label: 'Subject Lines Analyzed', value: '100K+', icon: FileText },
    { label: 'Campaigns Optimized', value: '25K+', icon: Target },
    { label: 'Reports Generated', value: '75K+', icon: BarChart3 }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4 mr-2" />
            Free Tools & Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Tools to Boost Your Email Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our suite of free tools designed to help you create, optimize, and analyze 
            your email campaigns for maximum impact.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Tools List */}
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={tool.id}
                className={`card p-6 cursor-pointer transition-all duration-300 ${
                  activeool === index ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-lg'
                }`}
                onClick={() => setActiveool(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${tool.color} p-3 rounded-lg`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                      <span>Try Free Tool</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tool Demo */}
          <div className="card p-8">
            <div className="text-center mb-6">
              <div className={`${tools[activeool].color} p-4 rounded-full inline-block mb-4`}>
                {tools[activeool].icon && <tools[activeool].icon className="h-8 w-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tools[activeool].demo.title}
              </h3>
              <p className="text-gray-600">{tools[activeool].demo.content}</p>
            </div>

            {/* Mock Interface */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">EmailVerse Tool</div>
                </div>
                
                <div className="bg-white rounded p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-primary-600 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary flex-1">
                <Eye className="h-4 w-4 mr-2" />
                Try Now
              </button>
              <button className="btn-secondary">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Thousands of Marketers
            </h3>
            <p className="text-gray-600">
              See how our free tools are making a difference
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-3 rounded-full inline-block mb-3">
                  <stat.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeToolsSection