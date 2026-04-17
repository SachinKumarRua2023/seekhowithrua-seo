"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function MobileLoginRedirect() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get redirect_uri from query params (passed by mobile app)
    const redirectUri = searchParams?.get("redirect_uri") || "";
    
    // Redirect to main login page with redirect parameter
    // This will handle the login and redirect back to the app
    const loginUrl = `/login?redirect=${encodeURIComponent(redirectUri)}`;
    window.location.href = loginUrl;
  }, [searchParams]);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#04040f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
        <h1>Opening Login...</h1>
        <p style={{ color: "rgba(255,255,255,0.5)" }}>Please wait</p>
      </div>
    </div>
  );
}

export default function MobileLoginPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "100vh",
        background: "#04040f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
      }}>
        <div>Loading...</div>
      </div>
    }>
      <MobileLoginRedirect />
    </Suspense>
  );
}
