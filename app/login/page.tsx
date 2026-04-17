// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/login/page.tsx
// STEP 1: Inside "app" folder, CREATE a new folder called "login"
// STEP 2: Inside "login" folder, CREATE a file called "page.tsx"
// STEP 3: Paste this entire file content inside page.tsx
// ============================================================

"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams?.get("redirect") || null;
  const isMobileRedirect = redirectUrl?.includes("://");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // If user is already logged in and redirect URL is present, redirect back immediately
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('cosmos_token');
      const userData = localStorage.getItem('cosmos_user');
      const redirect = searchParams?.get('redirect');
      
      if (token && userData && redirect) {
        // User already logged in, redirect back with token
        const user = encodeURIComponent(userData);
        window.location.href = `${redirect}?token=${token}&user=${user}`;
      }
    }
  }, [searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://api.seekhowithrua.com/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.detail || "Login failed");
      
      // Store user data (use cosmos_token for cross-domain SSO compatibility)
      localStorage.setItem("cosmos_user", JSON.stringify(data));
      localStorage.setItem("cosmos_token", data.token || data.access_token || "");
      window.dispatchEvent(new Event("storage"));
      
      // If redirect URL is provided (cross-domain or mobile deep link), redirect with token
      if (redirectUrl && isClient) {
        const userData = encodeURIComponent(JSON.stringify(data));
        const token = data.token || data.access_token || "";
        window.location.href = `${redirectUrl}?token=${token}&user=${userData}`;
        return;
      }
      
      // Otherwise, redirect to home
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google login with redirect
  const handleGoogleLogin = () => {
    const apiRedirect = redirectUrl 
      ? `https://api.seekhowithrua.com/api/auth/google/callback/?redirect_uri=${encodeURIComponent(redirectUrl)}`
      : "https://api.seekhowithrua.com/api/auth/google/callback/";
    
    window.location.href = `https://api.seekhowithrua.com/api/auth/google/?redirect_uri=${encodeURIComponent(apiRedirect)}`;
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">S</div>
          <span>SeekhowithRua</span>
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-sub">Login to continue learning</p>
        {isMobileRedirect && (
          <div className="auth-info">📱 Mobile App Login</div>
        )}
        {error && <div className="auth-error">⚠️ {error}</div>}
        
        {/* Google Login Button */}
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="google-btn"
          disabled={loading}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <div className="divider"><span>or</span></div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="field">
            <label>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "⏳ Logging in..." : "Login →"}
          </button>
        </form>
        <p className="auth-switch">Don't have an account? <Link href={redirectUrl ? `/signup?redirect=${encodeURIComponent(redirectUrl)}` : "/signup"}>Sign Up Free</Link></p>
        <p className="auth-switch" style={{ marginTop: 8 }}><Link href="/">← Back to Home</Link></p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-icon">S</div>
            <span>SeekhowithRua</span>
          </div>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-sub">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .auth-page{min-height:100vh;background:#04040f;display:flex;align-items:center;justify-content:center;padding:20px;font-family:'JetBrains Mono',monospace}
        .auth-card{width:100%;max-width:420px;background:rgba(10,10,30,0.95);border:1px solid rgba(124,58,237,0.3);border-radius:16px;padding:40px;backdrop-filter:blur(20px)}
        .auth-logo{display:flex;align-items:center;gap:10px;margin-bottom:28px;justify-content:center}
        .logo-icon{width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#00d4ff);display:flex;align-items:center;justify-content:center;font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:700;color:#fff}
        .auth-logo span{font-family:'Rajdhani',sans-serif;font-size:16px;font-weight:700;color:#fff}
        .auth-title{font-family:'Rajdhani',sans-serif;font-size:26px;font-weight:700;color:#fff;text-align:center;margin-bottom:6px}
        .auth-sub{font-size:12px;color:rgba(255,255,255,0.4);text-align:center;margin-bottom:28px}
        .auth-error{background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:10px 14px;font-size:12px;color:#ef4444;margin-bottom:20px}
        .auth-form{display:flex;flex-direction:column;gap:16px}
        .field{display:flex;flex-direction:column;gap:6px}
        .field label{font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:1px;text-transform:uppercase}
        .field input{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:8px;padding:12px 14px;color:#fff;font-size:13px;font-family:'JetBrains Mono',monospace;outline:none;transition:border-color 0.2s}
        .field input:focus{border-color:#7c3aed}
        .field input::placeholder{color:rgba(255,255,255,0.2)}
        .auth-btn{padding:13px;border:none;border-radius:8px;background:linear-gradient(135deg,#7c3aed,#00d4ff);color:#fff;font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;cursor:pointer;transition:opacity 0.2s;margin-top:4px}
        .auth-btn:disabled{opacity:0.6;cursor:not-allowed}
        .auth-btn:not(:disabled):hover{opacity:0.85}
        .auth-switch{text-align:center;font-size:12px;color:rgba(255,255,255,0.4);margin-top:20px}
        .auth-switch a{color:#7c3aed;text-decoration:none}
        .auth-info{background:rgba(124,58,237,0.1);border:1px solid rgba(124,58,237,0.3);border-radius:8px;padding:10px 14px;font-size:12px;color:#a78bfa;margin-bottom:20px;text-align:center}
        .google-btn{width:100%;padding:13px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;background:rgba(255,255,255,0.05);color:#fff;font-family:'JetBrains Mono',monospace;font-size:14px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:16px}
        .google-btn:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.3)}
        .google-btn:disabled{opacity:0.6;cursor:not-allowed}
        .divider{display:flex;align-items:center;margin:16px 0;color:rgba(255,255,255,0.3);font-size:12px}
        .divider::before,.divider::after{content:'';flex:1;height:1px;background:rgba(255,255,255,0.1)}
        .divider span{padding:0 12px}
      `}</style>
    </Suspense>
  );
}