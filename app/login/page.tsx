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

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams?.get("redirect") || null;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
      
      // Store user data
      localStorage.setItem("cosmos_user", JSON.stringify(data));
      localStorage.setItem("cosmos_auth_token", data.token || data.access_token || "");
      window.dispatchEvent(new Event("storage"));
      
      // If redirect URL is provided (cross-domain), redirect with token
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

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="logo-icon">S</div>
          <span>SeekhowithRua</span>
        </div>
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-sub">Login to continue learning</p>
        {error && <div className="auth-error">⚠️ {error}</div>}
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
        <p className="auth-switch">Don't have an account? <Link href="/signup">Sign Up Free</Link></p>
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
      `}</style>
    </Suspense>
  );
}