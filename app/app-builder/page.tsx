// App Builder SEO Page - Free Alternative to FlutterFlow
export const metadata = {
  title: "App Builder India 2026 | Free FlutterFlow Alternative | SeekhoWithRua",
  description: "Build mobile apps visually 100% FREE. Better than FlutterFlow. Drag-drop UI builder that exports to React Native. 50+ components, live preview, data binding.",
  keywords: "App Builder India, FlutterFlow alternative free, React Native builder, mobile app builder India, no-code app development",
};

export default function AppBuilderPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a1a2a 0%, #0a2a3a 100%)', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>📱</div>
        <h1 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', background: 'linear-gradient(135deg, #00d4ff, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          App Builder
        </h1>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 30px' }}>
          Better than FlutterFlow. 100% FREE. Build mobile apps visually and export to React Native.
        </p>
        <a href="https://app.seekhowithrua.com/builder-tools" style={{ display: 'inline-block', padding: '16px 40px', background: 'linear-gradient(135deg, #00d4ff, #06b6d4)', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
          Build Your App Free →
        </a>
      </section>

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {[
            { icon: '🎨', title: 'Visual Designer', desc: 'Drag-drop interface for building UIs' },
            { icon: '📱', title: 'React Native Export', desc: 'Export clean code, no lock-in' },
            { icon: '🧩', title: '50+ Components', desc: 'Buttons, forms, lists, maps, charts' },
            { icon: '🔗', title: 'Data Binding', desc: 'Connect to APIs visually' },
            { icon: '👁️', title: 'Live Preview', desc: 'See changes in real-time' },
            { icon: '📦', title: 'Templates', desc: 'E-commerce, social, learning apps' }
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
        <a href="https://app.seekhowithrua.com/builder-tools" style={{ display: 'inline-block', padding: '16px 40px', background: 'linear-gradient(135deg, #00d4ff, #06b6d4)', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
          Launch App Builder →
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication",name:"App Builder by SeekhoWithRua",applicationCategory:"DeveloperApplication",operatingSystem:"Web",offers:{"@type":"Offer",price:"0",priceCurrency:"INR"}})}} />
    </main>
  );
}
