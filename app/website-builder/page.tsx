// Website Builder SEO Page - Free Alternative to Webflow
export const metadata = {
  title: "Website Builder India 2026 | Free Webflow Alternative | SeekhoWithRua",
  description: "Build professional websites 100% FREE. Better than Webflow. Next.js export, SEO-optimized templates, UPI integration. 50+ templates for Indian market.",
  keywords: "Website Builder India, Webflow alternative free, Next.js builder, SEO website builder India, free website builder",
};

export default function WebsiteBuilderPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a2a1a 0%, #1a3a2a 100%)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🌐</div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Website Builder
        </h1>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 30px' }}>
          Better than Webflow. 100% FREE. Next.js export with SEO optimization and UPI integration.
        </p>
        <a href="https://app.seekhowithrua.com/builder-tools" style={{ display: 'inline-block', padding: '16px 40px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
          Build Your Website Free →
        </a>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { icon: '🚀', title: 'Next.js Export', desc: 'Clean, fast, SEO-optimized code' },
            { icon: '📊', title: 'SEO Auto-Optimizer', desc: '90+ Lighthouse score guaranteed' },
            { icon: '🎨', title: '50+ Templates', desc: 'Indian market focused designs' },
            { icon: '💳', title: 'UPI Integration', desc: 'Built-in Indian payments' },
            { icon: '⚡', title: 'One-Click Deploy', desc: 'Vercel integration included' },
            { icon: '🔓', title: 'Export Anytime', desc: 'Own your code, no lock-in' }
          ].map((f, i) => (
            <div key={i} style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'rgba(0,0,0,0.3)' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Start Building Today</h2>
        <a href="https://app.seekhowithrua.com/builder-tools" style={{ display: 'inline-block', padding: '16px 40px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
          Launch Website Builder →
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"Website Builder by SeekhoWithRua",applicationCategory:"DeveloperApplication",operatingSystem:"Web",offers:{"@type":"Offer",price:"0",priceCurrency:"INR"}})}} />
    </main>
  );
}
