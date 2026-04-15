/**
 * LMS Integration Module
 * Handles LMS redirects and course navigation
 */

(function() {
  'use strict';

  const LMS_BASE_URL = 'https://lms.seekhowithrua.com';
  const APP_BASE_URL = 'https://app.seekhowithrua.com';
  const GAMING_URL = 'https://gaming.seekhowithrua.com';
  const ANIMATION_URL = 'https://animationlab.seekhowithrua.com';
  const VCR_URL = 'https://app.seekhowithrua.com/live-voice';

  /**
   * Initialize LMS module
   */
  function init() {
    setupNavigationHandlers();
  }

  /**
   * Setup click handlers for navigation
   */
  function setupNavigationHandlers() {
    // Studies/LMS links
    document.querySelectorAll('[data-lms-link]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const path = el.getAttribute('data-lms-path') || '';
        redirectToLMS(path);
      });
    });

    // Platform/App links
    document.querySelectorAll('[data-app-link]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const path = el.getAttribute('data-app-path') || '';
        redirectToApp(path);
      });
    });

    // Gaming links
    document.querySelectorAll('[data-gaming-link]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        redirectToGaming();
      });
    });

    // Animation links
    document.querySelectorAll('[data-animation-link]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        redirectToAnimation();
      });
    });

    // VCR links
    document.querySelectorAll('[data-vcr-link]').forEach(function(el) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        redirectToVCR();
      });
    });
  }

  /**
   * Redirect to LMS
   */
  function redirectToLMS(path) {
    const user = window.CosmosAuth ? window.CosmosAuth.getUser() : null;
    let url = LMS_BASE_URL;
    
    if (path) {
      url += '/' + path.replace(/^\//, '');
    }
    
    // Append auth token if available
    if (user && user.token) {
      url += (url.indexOf('?') > -1 ? '&' : '?') + 'token=' + encodeURIComponent(user.token);
    }
    
    window.location.href = url;
  }

  /**
   * Redirect to App/Platform
   */
  function redirectToApp(path) {
    const user = window.CosmosAuth ? window.CosmosAuth.getUser() : null;
    let url = APP_BASE_URL;
    
    if (path) {
      url += '/' + path.replace(/^\//, '');
    }
    
    // Append auth token if available
    if (user && user.token) {
      url += (url.indexOf('?') > -1 ? '&' : '?') + 'token=' + encodeURIComponent(user.token);
    }
    
    window.location.href = url;
  }

  /**
   * Redirect to Gaming
   */
  function redirectToGaming() {
    window.location.href = GAMING_URL;
  }

  /**
   * Redirect to Animation
   */
  function redirectToAnimation() {
    window.location.href = ANIMATION_URL;
  }

  /**
   * Redirect to VCR (Voice Chat Rooms)
   */
  function redirectToVCR() {
    window.location.href = VCR_URL;
  }

  /**
   * Navigate to course
   */
  function goToCourse(courseSlug) {
    if (!courseSlug) {
      redirectToLMS('courses');
      return;
    }
    redirectToLMS('course/' + courseSlug);
  }

  /**
   * Navigate to specific feature
   */
  function goToFeature(feature) {
    const featureMap = {
      'gaming': redirectToGaming,
      'vcr': redirectToVCR,
      'voice': redirectToVCR,
      'animation': redirectToAnimation,
      'ai': function() { redirectToApp('ai-assistant'); },
      'platform': redirectToApp,
      'lms': redirectToLMS,
      'studies': redirectToLMS
    };

    const handler = featureMap[feature.toLowerCase()];
    if (handler) {
      handler();
    } else {
      redirectToApp(feature);
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global API
  window.CosmosLMS = {
    init: init,
    goToCourse: goToCourse,
    goToFeature: goToFeature,
    redirectToLMS: redirectToLMS,
    redirectToApp: redirectToApp,
    redirectToGaming: redirectToGaming,
    redirectToAnimation: redirectToAnimation,
    redirectToVCR: redirectToVCR,
    LMS_BASE_URL: LMS_BASE_URL,
    APP_BASE_URL: APP_BASE_URL,
    GAMING_URL: GAMING_URL,
    ANIMATION_URL: ANIMATION_URL,
    VCR_URL: VCR_URL
  };

})();
