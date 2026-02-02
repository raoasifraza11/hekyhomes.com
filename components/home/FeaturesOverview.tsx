import { 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const FeaturesOverview = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Smart workflows that adapt to your audience behavior and optimize send times automatically.',
      benefits: ['Smart Send Times', 'Behavioral Triggers', 'Auto-Optimization']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into campaign performance with real-time tracking and predictive analytics.',
      benefits: ['Real-time Tracking', 'Predictive Insights', 'ROI Analysis']
    },
    {
      icon: Users,
      title: 'Audience Segmentation',
      description: 'Create precise audience segments based on behavior, demographics, and engagement.',
      benefits: ['Smart Segmentation', 'Dynamic Lists', 'Behavioral Targeting']
    },
    {
      icon: Shield,
      title: 'Deliverability Optimization',
      description: 'Ensure your emails reach the inbox with our advanced deliverability tools.',
      benefits: ['Spam Testing', 'Domain Authentication', 'Reputation Monitoring']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Beautiful, responsive templates that look perfect on any device.',
      benefits: ['Responsive Templates', 'Mobile Preview', 'Touch-Friendly']
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Stay compliant with GDPR, CAN-SPAM, and other international regulations.',
      benefits: ['GDPR Compliant', 'Global Standards', 'Privacy Protection']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need 
            to create, send, and optimize email campaigns that drive results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 group hover:shadow-xl transition-all duration-300">
              <div className="bg-primary-100 p-3 rounded-lg inline-block mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Email Marketing?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using EmailVerse to grow their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesOverview