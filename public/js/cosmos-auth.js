/**
 * Cosmos Auth - User Authentication Module
 * Handles login state, user data, and welcome messaging
 */

(function() {
  'use strict';

  const AUTH_KEY = 'cosmos_user';
  const TOKEN_KEY = 'cosmos_token';

  // User state
  let currentUser = null;
  let authCallbacks = [];

  /**
   * Initialize auth system
   */
  function init() {
    loadUser();
    setupEventListeners();
    notifyListeners();
  }

  /**
   * Load user from localStorage
   */
  function loadUser() {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      if (stored) {
        currentUser = JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading user:', e);
      currentUser = null;
    }
  }

  /**
   * Save user to localStorage
   */
  function saveUser(user) {
    try {
      if (user) {
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_KEY);
      }
      currentUser = user;
      notifyListeners();
    } catch (e) {
      console.error('Error saving user:', e);
    }
  }

  /**
   * Setup event listeners
   */
  function setupEventListeners() {
    // Listen for storage changes (cross-tab sync)
    window.addEventListener('storage', function(e) {
      if (e.key === AUTH_KEY) {
        loadUser();
        notifyListeners();
      }
    });

    // Check for redirect from app.seekhowithrua.com
    checkRedirectParams();
  }

  /**
   * Check URL params for login redirect
   */
  function checkRedirectParams() {
    const params = new URLSearchParams(window.location.search);
    const userData = params.get('user');
    const token = params.get('token');

    if (userData) {
      try {
        const user = JSON.parse(decodeURIComponent(userData));
        saveUser(user);
        if (token) {
          localStorage.setItem(TOKEN_KEY, token);
        }
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
  }

  /**
   * Notify all registered listeners
   */
  function notifyListeners() {
    authCallbacks.forEach(function(callback) {
      try {
        callback(currentUser);
      } catch (e) {
        console.error('Auth callback error:', e);
      }
    });
  }

  /**
   * Subscribe to auth changes
   */
  function onAuthChange(callback) {
    authCallbacks.push(callback);
    // Immediately call with current state
    callback(currentUser);
    
    // Return unsubscribe function
    return function() {
      const index = authCallbacks.indexOf(callback);
      if (index > -1) {
        authCallbacks.splice(index, 1);
      }
    };
  }

  /**
   * Get current user
   */
  function getUser() {
    return currentUser;
  }

  /**
   * Check if user is logged in
   */
  function isLoggedIn() {
    return !!currentUser;
  }

  /**
   * Get display name for user
   */
  function getDisplayName() {
    if (!currentUser) return '';
    return currentUser.profile?.name || 
           currentUser.name || 
           currentUser.email?.split('@')[0] || 
           'User';
  }

  /**
   * Login redirect to app.seekhowithrua.com
   */
  function login(redirectUrl) {
    const returnUrl = redirectUrl || window.location.href;
    const loginUrl = 'https://app.seekhowithrua.com/login?redirect=' + encodeURIComponent(returnUrl);
    window.location.href = loginUrl;
  }

  /**
   * Logout user
   */
  function logout() {
    saveUser(null);
    localStorage.removeItem(TOKEN_KEY);
    window.dispatchEvent(new Event('storage'));
  }

  /**
   * Update welcome message in navbar
   */
  function updateWelcomeMessage() {
    const welcomeEl = document.querySelector('.nv-welcome');
    const userNameEl = document.querySelector('.nv-user-name');
    
    if (welcomeEl) {
      if (currentUser) {
        const name = getDisplayName();
        welcomeEl.innerHTML = '👋 Welcome, <strong>' + escapeHtml(name) + '</strong>';
        welcomeEl.style.display = 'flex';
      } else {
        welcomeEl.style.display = 'none';
      }
    }

    if (userNameEl) {
      userNameEl.textContent = getDisplayName();
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global API
  window.CosmosAuth = {
    init: init,
    login: login,
    logout: logout,
    getUser: getUser,
    isLoggedIn: isLoggedIn,
    getDisplayName: getDisplayName,
    onAuthChange: onAuthChange,
    updateWelcomeMessage: updateWelcomeMessage
  };

})();
