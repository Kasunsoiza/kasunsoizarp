import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Sparkles, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export function Home() {
  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Europin CV Maker',
      description: 'Create professional, ATS-friendly CVs in minutes. Free online resume builder with multiple templates.',
      url: 'https://yourusername.github.io/europin-cv-maker',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Multiple professional templates',
        'ATS-friendly resume formats',
        'Real-time preview',
        'PDF export',
        'No registration required',
      ],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Professional Templates',
      description: 'Choose from 8 beautifully designed templates crafted by experts.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'ATS-Friendly',
      description: 'Our ATS template ensures your CV passes applicant tracking systems.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Easy',
      description: 'Build your CV in minutes with our intuitive interface.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'PDF Export',
      description: 'Download your CV as a high-quality PDF ready for submission.',
    },
  ];

  const templates = [
    { name: 'Modern', color: 'bg-blue-500', desc: 'Clean & Professional' },
    { name: 'Classic', color: 'bg-amber-500', desc: 'Timeless Elegance' },
    { name: 'ATS', color: 'bg-gray-700', desc: 'ATS Optimized' },
    { name: 'Onyx', color: 'bg-black', desc: 'Bold & Minimal' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F7F6]">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4169E1] rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Europin
              </span>
            </div>
            <Link
              to="/builder"
              className="bg-[#4169E1] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#3158d0] transition-colors flex items-center gap-2"
            >
              Create CV
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#4169E1]/10 text-[#4169E1] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Free Professional CV Builder
              </div>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Create Your{' '}
                <span className="text-[#4169E1]">Professional CV</span>{' '}
                in Minutes
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Build an ATS-friendly resume that gets you noticed. Choose from multiple 
                professional templates and export as PDF instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/builder"
                  className="bg-[#4169E1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3158d0] transition-all hover:shadow-lg hover:shadow-[#4169E1]/25 flex items-center justify-center gap-2"
                >
                  Start Building Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4169E1]" />
                  No signup required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4169E1]" />
                  100% free
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#4169E1]" />
                  PDF export
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[210/297] bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex gap-4 mb-6">
                      <div className="w-20 h-20 bg-[#4169E1] rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-300 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="h-4 bg-gray-800 rounded w-1/3 mb-3"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded w-full"></div>
                        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#4169E1] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Live Preview
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Why Choose Europin?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to create a professional CV that stands out from the crowd.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#4169E1]/10 rounded-xl flex items-center justify-center text-[#4169E1] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-[#F6F7F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Professional Templates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from 8 expertly designed templates. Each one optimized for different industries and roles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`${template.color} h-32 rounded-lg mb-4 flex items-center justify-center`}>
                  <FileText className="w-12 h-12 text-white/50" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#4169E1] transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-500">{template.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 text-[#4169E1] font-semibold hover:underline"
            >
              View all 8 templates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#4169E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to Build Your CV?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have created professional CVs with Europin. 
            It's free, fast, and easy.
          </p>
          <Link
            to="/builder"
            className="inline-flex items-center gap-2 bg-white text-[#4169E1] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#4169E1] rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Europin
              </span>
            </div>
            <div className="text-sm">
              © {new Date().getFullYear()} Europin CV Maker. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/builder" className="hover:text-white transition-colors">Builder</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
