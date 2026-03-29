"use client";

import Link from "next/link";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  color: string;
  readTime: string;
}

interface BlogContentProps {
  posts: Post[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="bl-body">
      {/* Search Box */}
      <div className="bl-search-container">
        <div className="bl-search-box">
          <svg className="bl-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search blogs... (e.g., memory game, python, AI)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bl-search-input"
          />
          {searchQuery && (
            <button 
              className="bl-search-clear"
              onClick={() => setSearchQuery("")}
            >
              ×
            </button>
          )}
        </div>
        {searchQuery && (
          <div className="bl-search-results">
            {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} found
          </div>
        )}
      </div>

      {featuredPost ? (
        <>
          <div className="bl-lbl">✦ LATEST POST</div>
          <Link href={`/blog/${featuredPost.slug}`} className="bl-feat">
            <div className="bf-cat" style={{ color: featuredPost.color }}>{featuredPost.category}</div>
            <h2 className="bf-title">{featuredPost.title}</h2>
            <p className="bf-ex">{featuredPost.excerpt}</p>
            <div className="bf-meta">
              <span>{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
              <span className="bf-cta">Read Article →</span>
            </div>
          </Link>
        </>
      ) : (
        <div className="bl-no-results">
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <h3>No blogs found</h3>
          <p>Try searching with different keywords</p>
        </div>
      )}

      {remainingPosts.length > 0 && (
        <>
          <div className="bl-lbl" style={{ marginTop: 48 }}>ALL POSTS</div>
          <div className="bl-grid">
            {remainingPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="bl-card">
                <div className="bc-cat" style={{ color: p.color }}>{p.category}</div>
                <h3 className="bc-title">{p.title}</h3>
                <p className="bc-ex">{p.excerpt}</p>
                <div className="bc-meta">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="bl-cta">
        <div style={{ fontSize: 36, marginBottom: 14 }}>🚀</div>
        <h3 className="bl-cta-t">Learn with Master Rua</h3>
        <p className="bl-cta-s">
          New tutorial every day. Join 1000+ learners at SeekhowithRua.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://app.seekhowithrua.com" className="bl-cta-btn">
            Join Platform Free →
          </a>
          <a href="https://wa.me/918826776018" target="_blank" rel="noopener noreferrer" className="bl-cta-btn bl-cta-wa">
            💬 WhatsApp: 8826776018
          </a>
        </div>
        <p style={{ marginTop: 16, fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
          📧 seekhowithrua@gmail.com · 📺 youtube.com/@seekhowithrua_ · 📸 instagram.com/seekhowithrua_
        </p>
      </div>
    </div>
  );
}
