'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Inline SVG icons
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="9 12 12 15 16 10"/>
  </svg>
);

const MessageCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 3v4"/><path d="M19 5h4"/><path d="M5 17v4"/><path d="M5 21h4"/><path d="M19 21h-4"/>
  </svg>
);

interface WelcomeData {
  product: string;
  whatsappLink: string;
  title: string;
  description: string;
  features: string[];
}

const productConfig: Record<string, WelcomeData> = {
  mindtraining: {
    product: 'Mind Training & NLP Program',
    whatsappLink: 'https://chat.whatsapp.com/KQRzMMRDwXK21Tppvo7XPj',
    title: 'Welcome to Mind Training! 🧠',
    description: 'Your 21-Day Memory Transformation Journey Starts Now',
    features: [
      'Hypnotherapy for Deep Healing',
      'Quantum Physics & Placebo Effect',
      'Law of Attraction Mastery',
      'WMSC Memory Championship Training',
      'Day 1 Baseline Memory Test',
      '200 Numbers/Words in 21 Days'
    ]
  },
  bundle: {
    product: 'Complete Bundle Pack',
    whatsappLink: 'https://chat.whatsapp.com/DNYOtb2ul6a3eC7jjz3fiP',
    title: 'Welcome to SeekhoWithRua! 🎉',
    description: 'Your 7-Track Tech + Mind Mastery Bundle',
    features: [
      'AI & Machine Learning Track',
      'Full Stack Development',
      'Data Science & Analytics',
      'Mobile App Development',
      'IoT & Robotics',
      'Game Development',
      'Mind Training & NLP (Bonus!)'
    ]
  }
};

export default function WelcomePage() {
  const [data, setData] = useState<WelcomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check URL parameters for product type
    const params = new URLSearchParams(window.location.search);
    const product = params.get('product') || 'bundle';
    
    const welcomeData = productConfig[product] || productConfig.bundle;
    setData(welcomeData);
    setLoading(false);

    // Store enrollment data in localStorage for tracking
    const enrollment = {
      product: welcomeData.product,
      joinedAt: new Date().toISOString(),
      whatsappJoined: false
    };
    localStorage.setItem('seekhowithrua_enrollment', JSON.stringify(enrollment));
  }, []);

  const handleWhatsAppJoin = () => {
    // Mark WhatsApp as joined
    const enrollment = JSON.parse(localStorage.getItem('seekhowithrua_enrollment') || '{}');
    enrollment.whatsappJoined = true;
    enrollment.whatsappJoinedAt = new Date().toISOString();
    localStorage.setItem('seekhowithrua_enrollment', JSON.stringify(enrollment));
    
    // Open WhatsApp in new tab
    if (data?.whatsappLink) {
      window.open(data.whatsappLink, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border-b border-green-500/20">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 mb-6">
            <CheckCircleIcon className="w-10 h-10 text-green-400" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Welcome to the SeekhoWithRua family. Your journey to mastery begins now.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Product Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <SparklesIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold uppercase tracking-wide text-sm">
                You&apos;re Enrolled In
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {data.title}
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              {data.description}
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-4">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA Section */}
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircleIcon className="w-8 h-8 text-green-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Join Our Exclusive WhatsApp Community
            </h3>
            <p className="text-gray-400 text-center max-w-xl mx-auto mb-8">
              Connect with fellow learners, get instant support from mentors, and stay updated with course announcements. This is a private community - your information stays confidential.
            </p>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleWhatsAppJoin}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                <MessageCircleIcon className="w-5 h-5" />
                Join WhatsApp Community
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              
              <p className="text-sm text-gray-500">
                👥 Private group • No spam • Mentor support
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">What&apos;s Next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-white font-semibold">Join WhatsApp Community</h4>
                  <p className="text-gray-400 text-sm">Connect with your batchmates and mentors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-white font-semibold">Check Your Email</h4>
                  <p className="text-gray-400 text-sm">Login credentials and course access link sent to your email</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-white font-semibold">Start Learning</h4>
                  <p className="text-gray-400 text-sm">Access your dashboard at app.seekhowithrua.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Need help? Contact us directly
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/918826776018" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircleIcon className="w-5 h-5" />
                WhatsApp: +91 88267 76018
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="mailto:seekhowithrua@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                seekhowithrua@gmail.com
              </a>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <Link 
              href="https://app.seekhowithrua.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Go to Dashboard
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
