"use client";
import { useState, useEffect, useRef } from "react";
// import { Metadata } from "next";

// // ============================================================
// // SEO METADATA
// // ============================================================
// export const metadata: Metadata = {
//   title: "Mobile App Development Course with React Native & Expo | Seekho With Rua",
//   description:
//     "Learn Mobile App Development with React Native and Expo. Build iOS and Android apps from scratch. 10 modules, 100+ chapters, real projects. Best mobile development course online.",
//   keywords: [
//     "mobile app development course",
//     "react native course",
//     "expo course",
//     "iOS development course",
//     "android development course",
//     "react native tutorial",
//     "mobile development bootcamp",
//     "cross platform app development",
//     "react native expo tutorial",
//     "mobile app development certification",
//   ],
//   alternates: { canonical: "https://seekhowithrua.com/mobile-app-development" },
//   openGraph: {
//     title: "Mobile App Development Course | Seekho With Rua",
//     description:
//       "Learn React Native and Expo to build iOS and Android apps with real-world projects.",
//     url: "https://seekhowithrua.com/mobile-app-development",
//     type: "website",
//   },
// };

// ============================================================
// FULL SYLLABUS — 10 modules × 10-12 chapters
// ============================================================
const SYLLABUS = [
  {
    id: "m1",
    module: "Module 1: Mobile Development Fundamentals",
    icon: "📱",
    color: "#22d3ee",
    chapters: [
      {
        id: "m1c1",
        title: "Introduction to Mobile Development",
        topics: [
          "Native vs Cross-Platform",
          "iOS vs Android Architecture",
          "App Store & Play Store Overview",
          "Development Environment Setup",
        ],
      },
      {
        id: "m1c2",
        title: "JavaScript & ES6+ Essentials",
        topics: [
          "Arrow Functions & Destructuring",
          "Spread & Rest Operators",
          "Async/Await & Promises",
          "Modules & Imports",
        ],
      },
      {
        id: "m1c3",
        title: "React Fundamentals",
        topics: [
          "JSX Syntax",
          "Components & Props",
          "State & Lifecycle",
          "Event Handling",
        ],
      },
      {
        id: "m1c4",
        title: "React Hooks Deep Dive",
        topics: [
          "useState & useEffect",
          "useContext & useRef",
          "useMemo & useCallback",
          "Custom Hooks",
        ],
      },
      {
        id: "m1c5",
        title: "TypeScript for Mobile",
        topics: [
          "Types & Interfaces",
          "Generics",
          "Type Guards",
          "TypeScript with React Native",
        ],
      },
      {
        id: "m1c6",
        title: "Node.js & npm Basics",
        topics: [
          "Node.js Runtime",
          "npm & yarn",
          "package.json",
          "Managing Dependencies",
        ],
      },
      {
        id: "m1c7",
        title: "Version Control with Git",
        topics: [
          "Git Init & Commits",
          "Branching Strategies",
          "GitHub Flow",
          "Collaboration Workflows",
        ],
      },
      {
        id: "m1c8",
        title: "Mobile UI/UX Principles",
        topics: [
          "Material Design Guidelines",
          "Human Interface Guidelines",
          "Accessibility in Mobile",
          "Responsive Layouts",
        ],
      },
      {
        id: "m1c9",
        title: "Debugging Mobile Apps",
        topics: [
          "React Native Debugger",
          "Flipper Tool",
          "Console Logs & Breakpoints",
          "Performance Profiling",
        ],
      },
      {
        id: "m1c10",
        title: "Project: First Mobile App",
        topics: [
          "Setting Up Project",
          "Building a Counter App",
          "Styling with StyleSheet",
          "Running on Device/Emulator",
        ],
      },
    ],
  },
  {
    id: "m2",
    module: "Module 2: React Native Core",
    icon: "⚛️",
    color: "#61dafb",
    chapters: [
      {
        id: "m2c1",
        title: "React Native Architecture",
        topics: [
          "Bridge Architecture",
          "New Architecture (Fabric & JSI)",
          "JavaScript Thread",
          "Native Thread Communication",
        ],
      },
      {
        id: "m2c2",
        title: "Core Components",
        topics: [
          "View, Text, Image",
          "TextInput & Button",
          "ScrollView & FlatList",
          "SectionList",
        ],
      },
      {
        id: "m2c3",
        title: "Styling in React Native",
        topics: [
          "StyleSheet API",
          "Flexbox Layout",
          "Platform-Specific Styles",
          "Dynamic Styling",
        ],
      },
      {
        id: "m2c4",
        title: "Handling User Input",
        topics: [
          "TextInput Props",
          "Form Handling",
          "Keyboard Avoiding View",
          "Input Validation",
        ],
      },
      {
        id: "m2c5",
        title: "Lists & Performance",
        topics: [
          "FlatList Optimization",
          "keyExtractor",
          "Pagination & Infinite Scroll",
          "VirtualizedList",
        ],
      },
      {
        id: "m2c6",
        title: "Images & Media",
        topics: [
          "Local & Remote Images",
          "Image Resizing Modes",
          "React Native Fast Image",
          "Video with expo-av",
        ],
      },
      {
        id: "m2c7",
        title: "Touchable Components",
        topics: [
          "TouchableOpacity",
          "TouchableHighlight",
          "Pressable Component",
          "Gesture Responder System",
        ],
      },
      {
        id: "m2c8",
        title: "Platform APIs",
        topics: [
          "Platform.OS",
          "Platform.select()",
          "Platform-Specific Files",
          "Dimensions API",
        ],
      },
      {
        id: "m2c9",
        title: "Safe Area & Status Bar",
        topics: [
          "SafeAreaView",
          "react-native-safe-area-context",
          "StatusBar Component",
          "Notch Handling",
        ],
      },
      {
        id: "m2c10",
        title: "Project: UI Components Library",
        topics: [
          "Button Components",
          "Card Components",
          "Modal Components",
          "Custom Input Fields",
        ],
      },
    ],
  },
  {
    id: "m3",
    module: "Module 3: Expo Framework",
    icon: "🚀",
    color: "#a855f7",
    chapters: [
      {
        id: "m3c1",
        title: "Expo Introduction & Setup",
        topics: [
          "Expo CLI Installation",
          "Expo Go App",
          "Managed vs Bare Workflow",
          "expo-doctor & diagnostics",
        ],
      },
      {
        id: "m3c2",
        title: "Expo Router (File-Based Navigation)",
        topics: [
          "File-Based Routing",
          "Layouts & Stacks",
          "Dynamic Routes",
          "Tabs & Drawers",
        ],
      },
      {
        id: "m3c3",
        title: "Expo SDK APIs",
        topics: [
          "expo-camera",
          "expo-location",
          "expo-notifications",
          "expo-sensors",
        ],
      },
      {
        id: "m3c4",
        title: "Expo FileSystem & Storage",
        topics: [
          "expo-file-system",
          "expo-secure-store",
          "AsyncStorage",
          "expo-sqlite",
        ],
      },
      {
        id: "m3c5",
        title: "Expo Media & Assets",
        topics: [
          "expo-image-picker",
          "expo-media-library",
          "expo-av (Audio/Video)",
          "expo-font",
        ],
      },
      {
        id: "m3c6",
        title: "Expo Updates & OTA",
        topics: [
          "OTA Updates with expo-updates",
          "Update Channels",
          "Rollback Strategy",
          "Version Management",
        ],
      },
      {
        id: "m3c7",
        title: "EAS Build",
        topics: [
          "EAS CLI Setup",
          "Build Profiles",
          "Building for iOS & Android",
          "Submitting to Stores",
        ],
      },
      {
        id: "m3c8",
        title: "Expo & Third-Party Libraries",
        topics: [
          "Installing Native Modules",
          "expo install vs npm install",
          "Compatibility Checks",
          "Bare Workflow Migration",
        ],
      },
      {
        id: "m3c9",
        title: "Expo Web Support",
        topics: [
          "Universal Apps",
          "Metro Bundler for Web",
          "Platform Detection",
          "Web-Specific Overrides",
        ],
      },
      {
        id: "m3c10",
        title: "Project: Camera & Location App",
        topics: [
          "Camera Permission Handling",
          "Photo Capture & Save",
          "GPS Location Tracking",
          "Map Display",
        ],
      },
    ],
  },
  {
    id: "m4",
    module: "Module 4: Navigation & Routing",
    icon: "🧭",
    color: "#f59e0b",
    chapters: [
      {
        id: "m4c1",
        title: "React Navigation Setup",
        topics: [
          "Installation & Configuration",
          "NavigationContainer",
          "Navigation Ref",
          "Linking Config",
        ],
      },
      {
        id: "m4c2",
        title: "Stack Navigation",
        topics: [
          "createNativeStackNavigator",
          "Push, Pop, Replace",
          "Screen Options",
          "Header Customization",
        ],
      },
      {
        id: "m4c3",
        title: "Tab Navigation",
        topics: [
          "Bottom Tab Navigator",
          "Tab Icons & Badges",
          "Custom Tab Bar",
          "Material Top Tabs",
        ],
      },
      {
        id: "m4c4",
        title: "Drawer Navigation",
        topics: [
          "Drawer Navigator Setup",
          "Custom Drawer Content",
          "Drawer Gestures",
          "Nested Drawers",
        ],
      },
      {
        id: "m4c5",
        title: "Nested Navigation",
        topics: [
          "Nesting Navigators",
          "Accessing Parent Navigation",
          "Tab Inside Stack",
          "Stack Inside Drawer",
        ],
      },
      {
        id: "m4c6",
        title: "Passing Data Between Screens",
        topics: [
          "Route Params",
          "Navigation State",
          "Global State for Navigation",
          "Deep Linking",
        ],
      },
      {
        id: "m4c7",
        title: "Authentication Flow",
        topics: [
          "Auth Stack vs App Stack",
          "Protected Routes",
          "Token Persistence",
          "Auto Login",
        ],
      },
      {
        id: "m4c8",
        title: "Modal & Overlay Navigation",
        topics: [
          "Modal Screens",
          "Transparent Modal",
          "Bottom Sheet Navigation",
          "Alert & Dialog Patterns",
        ],
      },
      {
        id: "m4c9",
        title: "Navigation Performance",
        topics: [
          "Lazy Loading Screens",
          "Screen Freeze Prevention",
          "Navigation Events",
          "useFocusEffect",
        ],
      },
      {
        id: "m4c10",
        title: "Project: Multi-Screen App",
        topics: [
          "E-Commerce Navigation Flow",
          "Tab + Stack Combination",
          "Cart Screen",
          "Auth Guard Implementation",
        ],
      },
    ],
  },
  {
    id: "m5",
    module: "Module 5: State Management",
    icon: "🗂️",
    color: "#ef4444",
    chapters: [
      {
        id: "m5c1",
        title: "Context API",
        topics: [
          "createContext",
          "Provider Pattern",
          "useContext Hook",
          "Context Performance",
        ],
      },
      {
        id: "m5c2",
        title: "Redux Toolkit",
        topics: [
          "Store Setup",
          "createSlice",
          "useSelector & useDispatch",
          "Async Thunks",
        ],
      },
      {
        id: "m5c3",
        title: "Redux Persist",
        topics: [
          "Persisting Store",
          "AsyncStorage Integration",
          "Whitelist & Blacklist",
          "Rehydration",
        ],
      },
      {
        id: "m5c4",
        title: "Zustand",
        topics: [
          "Zustand Setup",
          "Creating Stores",
          "Selectors & Actions",
          "Zustand with AsyncStorage",
        ],
      },
      {
        id: "m5c5",
        title: "React Query (TanStack Query)",
        topics: [
          "QueryClient Setup",
          "useQuery & useMutation",
          "Caching & Stale Time",
          "Infinite Queries",
        ],
      },
      {
        id: "m5c6",
        title: "Jotai & Recoil",
        topics: [
          "Atomic State Model",
          "Atoms & Selectors",
          "Derived State",
          "Async Atoms",
        ],
      },
      {
        id: "m5c7",
        title: "Local Storage Patterns",
        topics: [
          "AsyncStorage Deep Dive",
          "MMKV Storage",
          "WatermelonDB",
          "Realm Database",
        ],
      },
      {
        id: "m5c8",
        title: "State Architecture Patterns",
        topics: [
          "Flux Pattern",
          "Unidirectional Data Flow",
          "Separation of Concerns",
          "State Colocation",
        ],
      },
      {
        id: "m5c9",
        title: "Offline-First Apps",
        topics: [
          "NetInfo API",
          "Optimistic Updates",
          "Sync Strategies",
          "Conflict Resolution",
        ],
      },
      {
        id: "m5c10",
        title: "Project: Todo App with Redux",
        topics: [
          "Redux Store Setup",
          "CRUD Operations",
          "Filter & Search State",
          "Persisted Todos",
        ],
      },
    ],
  },
  {
    id: "m6",
    module: "Module 6: Networking & APIs",
    icon: "🌐",
    color: "#10b981",
    chapters: [
      {
        id: "m6c1",
        title: "Fetch API & Axios",
        topics: [
          "fetch() Basics",
          "Axios Setup",
          "Interceptors",
          "Error Handling",
        ],
      },
      {
        id: "m6c2",
        title: "REST API Integration",
        topics: [
          "GET, POST, PUT, DELETE",
          "Headers & Auth Tokens",
          "Pagination",
          "File Upload",
        ],
      },
      {
        id: "m6c3",
        title: "GraphQL in Mobile",
        topics: [
          "Apollo Client Setup",
          "Queries & Mutations",
          "Subscriptions",
          "Apollo Cache",
        ],
      },
      {
        id: "m6c4",
        title: "WebSockets & Real-Time",
        topics: [
          "WebSocket API",
          "Socket.io Client",
          "Real-time Chat",
          "Live Notifications",
        ],
      },
      {
        id: "m6c5",
        title: "Authentication APIs",
        topics: [
          "JWT Token Flow",
          "Refresh Token Strategy",
          "OAuth2 Integration",
          "Biometric Auth",
        ],
      },
      {
        id: "m6c6",
        title: "Firebase Integration",
        topics: [
          "Firebase Setup",
          "Firestore CRUD",
          "Firebase Auth",
          "Firebase Storage",
        ],
      },
      {
        id: "m6c7",
        title: "Supabase Integration",
        topics: [
          "Supabase Setup",
          "Realtime Subscriptions",
          "Row Level Security",
          "Supabase Auth",
        ],
      },
      {
        id: "m6c8",
        title: "API Security",
        topics: [
          "Certificate Pinning",
          "API Key Storage",
          "Request Signing",
          "Rate Limiting Handling",
        ],
      },
      {
        id: "m6c9",
        title: "Caching Strategies",
        topics: [
          "Cache-First Strategy",
          "Network-First Strategy",
          "SWR Pattern",
          "Background Sync",
        ],
      },
      {
        id: "m6c10",
        title: "Project: News App with API",
        topics: [
          "News API Integration",
          "Infinite Scroll",
          "Offline Caching",
          "Article Detail Screen",
        ],
      },
    ],
  },
  {
    id: "m7",
    module: "Module 7: Animations & Gestures",
    icon: "✨",
    color: "#ec4899",
    chapters: [
      {
        id: "m7c1",
        title: "Animated API",
        topics: [
          "Animated.Value",
          "timing, spring, decay",
          "Animated.View",
          "Interpolation",
        ],
      },
      {
        id: "m7c2",
        title: "Reanimated 2",
        topics: [
          "useSharedValue",
          "useAnimatedStyle",
          "withTiming & withSpring",
          "Worklets",
        ],
      },
      {
        id: "m7c3",
        title: "Gesture Handler",
        topics: [
          "GestureDetector",
          "Pan Gesture",
          "Pinch & Rotation",
          "Tap & Long Press",
        ],
      },
      {
        id: "m7c4",
        title: "Layout Animations",
        topics: [
          "Layout Transition",
          "Entering & Exiting Animations",
          "LayoutAnimationConfig",
          "Shared Element Transitions",
        ],
      },
      {
        id: "m7c5",
        title: "Lottie Animations",
        topics: [
          "lottie-react-native Setup",
          "Playing JSON Animations",
          "Animation Events",
          "Custom Lottie Files",
        ],
      },
      {
        id: "m7c6",
        title: "Skia with React Native",
        topics: [
          "@shopify/react-native-skia",
          "Canvas Drawing",
          "Paths & Shapes",
          "Skia Animations",
        ],
      },
      {
        id: "m7c7",
        title: "Swipe & Drag Interactions",
        topics: [
          "Swipeable Rows",
          "Drag and Drop",
          "Sortable Lists",
          "Card Swipe (Tinder Style)",
        ],
      },
      {
        id: "m7c8",
        title: "Scroll Animations",
        topics: [
          "Sticky Headers",
          "Parallax Effects",
          "Collapsible Header",
          "Scroll-Driven Animations",
        ],
      },
      {
        id: "m7c9",
        title: "Haptic Feedback",
        topics: [
          "expo-haptics",
          "Impact Feedback",
          "Notification Feedback",
          "Selection Feedback",
        ],
      },
      {
        id: "m7c10",
        title: "Project: Animated Onboarding",
        topics: [
          "Swipeable Onboarding Slides",
          "Progress Indicator",
          "Lottie Welcome Animation",
          "Spring Transitions",
        ],
      },
    ],
  },
  {
    id: "m8",
    module: "Module 8: Device Features & Native Modules",
    icon: "📡",
    color: "#8b5cf6",
    chapters: [
      {
        id: "m8c1",
        title: "Camera & Photos",
        topics: [
          "expo-camera API",
          "react-native-vision-camera",
          "Photo Capture",
          "Video Recording",
        ],
      },
      {
        id: "m8c2",
        title: "Location & Maps",
        topics: [
          "expo-location",
          "react-native-maps",
          "Geofencing",
          "Directions API",
        ],
      },
      {
        id: "m8c3",
        title: "Push Notifications",
        topics: [
          "expo-notifications",
          "FCM & APNs Setup",
          "Local Notifications",
          "Notification Channels",
        ],
      },
      {
        id: "m8c4",
        title: "Biometrics & Security",
        topics: [
          "expo-local-authentication",
          "Face ID & Touch ID",
          "Secure Storage",
          "App Lock Pattern",
        ],
      },
      {
        id: "m8c5",
        title: "Sensors",
        topics: [
          "Accelerometer",
          "Gyroscope",
          "Barometer",
          "Magnetometer",
        ],
      },
      {
        id: "m8c6",
        title: "Bluetooth & NFC",
        topics: [
          "react-native-ble-plx",
          "BLE Scanning & Connecting",
          "NFC Reading",
          "IoT Device Communication",
        ],
      },
      {
        id: "m8c7",
        title: "In-App Purchases",
        topics: [
          "react-native-iap",
          "Subscription Setup",
          "Receipt Validation",
          "Restore Purchases",
        ],
      },
      {
        id: "m8c8",
        title: "Background Tasks",
        topics: [
          "expo-background-fetch",
          "expo-task-manager",
          "Background Location",
          "Background Sync",
        ],
      },
      {
        id: "m8c9",
        title: "Writing Native Modules",
        topics: [
          "Native Module Architecture",
          "iOS: Swift Module",
          "Android: Kotlin Module",
          "Bridging to JavaScript",
        ],
      },
      {
        id: "m8c10",
        title: "Project: Fitness Tracker App",
        topics: [
          "Pedometer via Sensors",
          "GPS Route Tracking",
          "Local Notifications",
          "Charts for Activity",
        ],
      },
    ],
  },
  {
    id: "m9",
    module: "Module 9: Testing & Performance",
    icon: "🧪",
    color: "#f97316",
    chapters: [
      {
        id: "m9c1",
        title: "Unit Testing with Jest",
        topics: [
          "Jest Setup",
          "Writing Test Cases",
          "Mocking Modules",
          "Snapshot Testing",
        ],
      },
      {
        id: "m9c2",
        title: "React Native Testing Library",
        topics: [
          "render & fireEvent",
          "Querying Elements",
          "Async Testing",
          "User Event Testing",
        ],
      },
      {
        id: "m9c3",
        title: "E2E Testing with Detox",
        topics: [
          "Detox Setup",
          "Writing E2E Tests",
          "Running on Device",
          "CI Integration",
        ],
      },
      {
        id: "m9c4",
        title: "Performance Optimization",
        topics: [
          "React.memo & useMemo",
          "Avoiding Re-renders",
          "Hermes Engine",
          "RAM Bundles",
        ],
      },
      {
        id: "m9c5",
        title: "Profiling & Debugging",
        topics: [
          "Flipper Performance Plugin",
          "Systrace",
          "JS Thread Profiling",
          "Memory Leaks",
        ],
      },
      {
        id: "m9c6",
        title: "App Size Optimization",
        topics: [
          "Bundle Analyzer",
          "Code Splitting",
          "ProGuard for Android",
          "Bitcode for iOS",
        ],
      },
      {
        id: "m9c7",
        title: "Accessibility Testing",
        topics: [
          "VoiceOver & TalkBack",
          "accessibilityLabel",
          "Focus Management",
          "Color Contrast Testing",
        ],
      },
      {
        id: "m9c8",
        title: "Crash Reporting",
        topics: [
          "Sentry Setup",
          "Firebase Crashlytics",
          "Error Boundaries",
          "Log Reporting",
        ],
      },
      {
        id: "m9c9",
        title: "Analytics",
        topics: [
          "Firebase Analytics",
          "Mixpanel Integration",
          "User Event Tracking",
          "Funnel Analysis",
        ],
      },
      {
        id: "m9c10",
        title: "CI/CD for Mobile",
        topics: [
          "GitHub Actions for RN",
          "EAS Build CI",
          "Automated Testing Pipeline",
          "Fastlane Basics",
        ],
      },
    ],
  },
  {
    id: "m10",
    module: "Module 10: Deployment & Capstone",
    icon: "🏆",
    color: "#fbbf24",
    chapters: [
      {
        id: "m10c1",
        title: "App Store Deployment (iOS)",
        topics: [
          "Apple Developer Account",
          "Certificates & Provisioning",
          "TestFlight",
          "App Store Review Guidelines",
        ],
      },
      {
        id: "m10c2",
        title: "Play Store Deployment (Android)",
        topics: [
          "Google Play Console",
          "Signing Keystore",
          "Internal Testing Track",
          "Production Release",
        ],
      },
      {
        id: "m10c3",
        title: "EAS Submit",
        topics: [
          "EAS Submit CLI",
          "Automated Submissions",
          "Release Channels",
          "App Version Management",
        ],
      },
      {
        id: "m10c4",
        title: "App Monetization",
        topics: [
          "In-App Purchases",
          "Subscription Model",
          "Ads with AdMob",
          "Freemium Strategy",
        ],
      },
      {
        id: "m10c5",
        title: "Capstone: Social Media App",
        topics: [
          "Auth + Profile",
          "Feed with Infinite Scroll",
          "Image Upload",
          "Real-time Likes & Comments",
        ],
      },
      {
        id: "m10c6",
        title: "Capstone: E-Commerce App",
        topics: [
          "Product Catalog",
          "Cart & Checkout",
          "Payment Integration",
          "Order Tracking",
        ],
      },
      {
        id: "m10c7",
        title: "Capstone: Chat Application",
        topics: [
          "Firebase Realtime DB",
          "One-to-One Messaging",
          "Group Chats",
          "Push Notifications",
        ],
      },
      {
        id: "m10c8",
        title: "Portfolio & GitHub",
        topics: [
          "Project README",
          "App Screenshots",
          "Demo Video",
          "App Store Links",
        ],
      },
      {
        id: "m10c9",
        title: "Career in Mobile Development",
        topics: [
          "Job Roles & Salaries",
          "Interview Prep",
          "Freelancing",
          "Contributing to Open Source",
        ],
      },
      {
        id: "m10c10",
        title: "What's Next in Mobile",
        topics: [
          "React Native New Architecture",
          "Flutter vs RN 2025",
          "AR/VR in Mobile",
          "AI in Mobile Apps",
        ],
      },
    ],
  },
];

// ============================================================
// QUIZ POOLS — 15 MCQ per chapter
// ============================================================
const QUIZ_POOLS: Record<string, { q: string; opts: string[]; ans: number }[]> = {
  m1: [
    { q: "What is the main advantage of cross-platform development?", opts: ["Better performance", "Write once, run on iOS & Android", "Access to all native APIs", "Smaller app size"], ans: 1 },
    { q: "Which language does React Native primarily use?", opts: ["Swift", "Kotlin", "JavaScript/TypeScript", "Dart"], ans: 2 },
    { q: "What does JSX stand for?", opts: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"], ans: 0 },
    { q: "Which hook is used for side effects in React?", opts: ["useState", "useEffect", "useRef", "useMemo"], ans: 1 },
    { q: "What does `npm install` do?", opts: ["Creates a project", "Installs dependencies", "Runs the app", "Builds the app"], ans: 1 },
    { q: "What is the purpose of TypeScript in mobile development?", opts: ["Faster runtime", "Static type checking", "Better animations", "Native APIs"], ans: 1 },
    { q: "Which command initializes a new Git repository?", opts: ["git start", "git init", "git create", "git new"], ans: 1 },
    { q: "What is Material Design?", opts: ["Apple's design system", "Google's design system", "Facebook's design system", "Microsoft's design system"], ans: 1 },
    { q: "What does `useState` return?", opts: ["A value only", "A setter only", "A value and a setter function", "A reducer"], ans: 2 },
    { q: "What is Flexbox used for in React Native?", opts: ["Network requests", "Animations", "Layout management", "State management"], ans: 2 },
    { q: "Which tool is used to debug React Native apps?", opts: ["Chrome DevTools only", "Flipper", "Postman", "Xcode only"], ans: 1 },
    { q: "What is the default package manager for Expo projects?", opts: ["yarn", "npm", "pnpm", "bun"], ans: 1 },
    { q: "What is a custom hook in React?", opts: ["A built-in React API", "A function starting with 'use' that uses other hooks", "A class component method", "A lifecycle method"], ans: 1 },
    { q: "What does `useMemo` optimize?", opts: ["Network calls", "Expensive calculations (memoized)", "State updates", "Component mounting"], ans: 1 },
    { q: "Which file defines project dependencies in Node.js?", opts: ["index.js", "app.json", "package.json", "config.js"], ans: 2 },
  ],
  m2: [
    { q: "What is the React Native Bridge?", opts: ["A UI component", "Communication layer between JS and Native threads", "A navigation library", "An animation API"], ans: 1 },
    { q: "Which component is used for scrollable lists in RN?", opts: ["ScrollView", "FlatList", "Both depending on use case", "ListView"], ans: 2 },
    { q: "What does StyleSheet.create() do?", opts: ["Creates animations", "Optimizes style objects", "Generates CSS", "Creates themes"], ans: 1 },
    { q: "What is the default flex direction in React Native?", opts: ["row", "column", "row-reverse", "column-reverse"], ans: 1 },
    { q: "Which component avoids keyboard overlap?", opts: ["SafeAreaView", "KeyboardAvoidingView", "ScrollView", "View"], ans: 1 },
    { q: "What prop does FlatList require for performance?", opts: ["style", "keyExtractor", "onPress", "color"], ans: 1 },
    { q: "Which component wraps the root of a RN app for safe area?", opts: ["View", "SafeAreaView", "Container", "Screen"], ans: 1 },
    { q: "What does Platform.OS return on Android?", opts: ["'android'", "'Android'", "'droid'", "0"], ans: 0 },
    { q: "How do you add a border radius in React Native StyleSheet?", opts: ["border-radius: 10", "borderRadius: 10", "radius: 10", "corner: 10"], ans: 1 },
    { q: "What is Pressable used for?", opts: ["Text display", "Handling press interactions", "Layout", "Navigation"], ans: 1 },
    { q: "Which prop makes a TextInput multiline?", opts: ["rows={3}", "multiline={true}", "type='textarea'", "lines={3}"], ans: 1 },
    { q: "What does the `resizeMode` prop control in Image?", opts: ["Image border", "How image fills its container", "Image opacity", "Image rotation"], ans: 1 },
    { q: "Which component renders a non-scrollable view?", opts: ["ScrollView", "FlatList", "View", "SafeAreaView"], ans: 2 },
    { q: "How do you access screen dimensions?", opts: ["window.innerWidth", "Dimensions.get('window')", "Screen.width", "useWindowSize()"], ans: 1 },
    { q: "What is the new RN architecture replacing the Bridge with?", opts: ["WebAssembly", "JSI (JavaScript Interface)", "Native Script", "Turbo Bridge"], ans: 1 },
  ],
  m3: [
    { q: "What is Expo Go?", opts: ["A code editor", "A mobile app to test Expo projects without building", "A deployment tool", "A simulator"], ans: 1 },
    { q: "What is Expo's managed workflow?", opts: ["Full native control", "Expo manages native build complexity", "Manual native setup", "No JavaScript"], ans: 1 },
    { q: "What is Expo Router based on?", opts: ["Manual route config", "File-based routing (like Next.js)", "URL hash routing", "Redux-based routing"], ans: 1 },
    { q: "Which Expo API is used for push notifications?", opts: ["expo-push", "expo-notifications", "expo-alerts", "expo-messaging"], ans: 1 },
    { q: "What does OTA stand for in Expo Updates?", opts: ["On-Time Access", "Over-The-Air", "Offline Transfer API", "Open Type App"], ans: 1 },
    { q: "Which tool builds production apps in Expo?", opts: ["expo build", "EAS Build", "expo compile", "Xcode only"], ans: 1 },
    { q: "What is expo-secure-store used for?", opts: ["Image storage", "Securely storing key-value pairs", "File downloads", "Database"], ans: 1 },
    { q: "Which expo package handles the camera?", opts: ["expo-media", "expo-camera", "expo-photo", "expo-capture"], ans: 1 },
    { q: "What does `expo install` do differently from `npm install`?", opts: ["Same thing", "Installs Expo-compatible package versions", "Only installs dev dependencies", "Checks for updates"], ans: 1 },
    { q: "What is the entry file for Expo Router apps?", opts: ["index.js", "app/(tabs)/index.tsx", "app/index.tsx", "src/App.tsx"], ans: 2 },
    { q: "What is expo-av used for?", opts: ["Animation", "Audio and Video playback", "AR/VR", "Ads"], ans: 1 },
    { q: "How do you add a custom font in Expo?", opts: ["import directly", "expo-font with useFonts()", "Google Fonts URL", "StyleSheet fonts"], ans: 1 },
    { q: "What does EAS stand for?", opts: ["Expo App Studio", "Expo Application Services", "Expo Android Setup", "Enterprise App System"], ans: 1 },
    { q: "Which Expo package accesses device location?", opts: ["expo-gps", "expo-location", "expo-geo", "expo-coords"], ans: 1 },
    { q: "What is the bare workflow in Expo?", opts: ["No native code access", "Full native code access with Expo tools", "Web-only apps", "Managed by Expo completely"], ans: 1 },
  ],
  m4: [
    { q: "What wraps all navigators in React Navigation?", opts: ["AppNavigator", "NavigationContainer", "StackNavigator", "NavigationWrapper"], ans: 1 },
    { q: "Which navigator creates a stack with header?", opts: ["createBottomTabNavigator", "createNativeStackNavigator", "createDrawerNavigator", "createMaterialNavigator"], ans: 1 },
    { q: "How do you navigate to a screen named 'Home'?", opts: ["navigation.go('Home')", "navigation.navigate('Home')", "router.push('Home')", "this.props.navigate('Home')"], ans: 1 },
    { q: "How do you pass params to a screen?", opts: ["navigation.navigate('Screen', params)", "navigation.navigate('Screen', { key: value })", "navigation.push('Screen', data)", "navigation.send('Screen', data)"], ans: 1 },
    { q: "Which hook gives access to navigation object?", opts: ["useRouter", "useNavigation", "useNavigate", "useHistory"], ans: 1 },
    { q: "Which hook reads route params?", opts: ["useParams", "useRoute", "useScreen", "useNavParams"], ans: 1 },
    { q: "What is useFocusEffect used for?", opts: ["Focus text input", "Run code when screen comes into focus", "Animate on focus", "Navigate on focus"], ans: 1 },
    { q: "How do you go back to the previous screen?", opts: ["navigation.back()", "navigation.pop()", "navigation.goBack()", "navigation.previous()"], ans: 2 },
    { q: "Which tab navigator shows tabs at the bottom?", opts: ["createTopTabNavigator", "createBottomTabNavigator", "createMaterialTopTabNavigator", "createTabNavigator"], ans: 1 },
    { q: "What is deep linking in mobile apps?", opts: ["Database queries", "Opening specific screen via URL/URI", "Background processes", "API calls"], ans: 1 },
    { q: "What does `navigation.replace()` do?", opts: ["Goes back", "Replaces current screen without adding to stack", "Adds new screen", "Reloads screen"], ans: 1 },
    { q: "Which package provides gesture-based drawer navigation?", opts: ["@react-navigation/stack", "@react-navigation/drawer", "@react-navigation/bottom-tabs", "@react-navigation/native"], ans: 1 },
    { q: "What does `headerShown: false` do in screen options?", opts: ["Hides the tab bar", "Hides the navigation header", "Makes header transparent", "Hides the back button"], ans: 1 },
    { q: "What is a modal screen in React Navigation?", opts: ["A popup component", "A screen presented from the bottom", "A fullscreen overlay", "An alert dialog"], ans: 1 },
    { q: "How do you lazy load screens in React Navigation?", opts: ["import() syntax", "lazy prop in navigator", "React.lazy with Suspense", "Dynamic imports in route config"], ans: 1 },
  ],
  m5: [
    { q: "What is the purpose of Redux in React Native?", opts: ["Handle animations", "Centralized state management", "Network requests", "Navigation"], ans: 1 },
    { q: "What does createSlice() do in Redux Toolkit?", opts: ["Creates a database", "Creates reducers and actions together", "Creates a new screen", "Creates middleware"], ans: 1 },
    { q: "What hook reads Redux state in a component?", opts: ["useStore", "useRedux", "useSelector", "useGetState"], ans: 2 },
    { q: "What hook dispatches Redux actions?", opts: ["useAction", "useDispatch", "useStore", "useReduxAction"], ans: 1 },
    { q: "What is Zustand?", opts: ["A testing library", "A lightweight state management library", "A navigation library", "A styling library"], ans: 1 },
    { q: "What does React Query's useQuery hook do?", opts: ["Updates state", "Fetches and caches server data", "Dispatches actions", "Handles navigation"], ans: 1 },
    { q: "What is AsyncStorage used for?", opts: ["Network requests", "Persisting data locally on device", "Sending push notifications", "Playing audio"], ans: 1 },
    { q: "What does Redux Persist do?", opts: ["Adds animations to Redux", "Saves Redux store to AsyncStorage", "Creates Redux actions", "Syncs Redux to server"], ans: 1 },
    { q: "What is optimistic updating?", opts: ["Updating UI before server confirms", "Updating UI after server confirms", "Delaying updates", "Batching updates"], ans: 0 },
    { q: "Which storage library is faster than AsyncStorage in RN?", opts: ["SQLite", "MMKV", "Realm", "WatermelonDB"], ans: 1 },
    { q: "What is the Context API used for?", opts: ["Routing", "Sharing state without prop drilling", "Animations", "Storage"], ans: 1 },
    { q: "What is an async thunk in Redux Toolkit?", opts: ["A synchronous action", "A function for async operations returning Redux actions", "A middleware", "A reducer"], ans: 1 },
    { q: "What does NetInfo API detect?", opts: ["App version", "Network connectivity status", "Device model", "Battery level"], ans: 1 },
    { q: "What is the Flux pattern?", opts: ["A CSS framework", "Unidirectional data flow architecture", "A testing pattern", "An animation technique"], ans: 1 },
    { q: "What is state colocation?", opts: ["Putting all state in Redux", "Keeping state as close to where it's used as possible", "Global state only", "Server-side state"], ans: 1 },
  ],
  m6: [
    { q: "What does Axios provide over fetch()?", opts: ["Better performance", "Interceptors, auto JSON parsing, error handling", "Native support", "WebSocket support"], ans: 1 },
    { q: "What HTTP method is used to create a resource?", opts: ["GET", "PUT", "POST", "DELETE"], ans: 2 },
    { q: "What is a GraphQL mutation?", opts: ["A query for reading data", "An operation that modifies data", "A subscription event", "A schema definition"], ans: 1 },
    { q: "What is JWT used for?", opts: ["Storing images", "Authentication tokens", "Database queries", "WebSocket connections"], ans: 1 },
    { q: "What is WebSocket used for?", opts: ["REST API calls", "Real-time bidirectional communication", "File uploads", "Image caching"], ans: 1 },
    { q: "Which Firebase service stores structured data?", opts: ["Firebase Storage", "Firestore", "Firebase Hosting", "Firebase Auth"], ans: 1 },
    { q: "What is a refresh token?", opts: ["UI refresh trigger", "Token to obtain new access tokens", "Page reload token", "Cache refresh command"], ans: 1 },
    { q: "What is certificate pinning?", opts: ["UI styling", "Security technique to prevent MITM attacks", "API versioning", "Cache invalidation"], ans: 1 },
    { q: "What does SWR stand for in caching?", opts: ["Sync While Revalidating", "Stale-While-Revalidate", "State With Redux", "Sync Web Request"], ans: 1 },
    { q: "What is Supabase?", opts: ["A React component", "Open-source Firebase alternative", "A testing tool", "A navigation library"], ans: 1 },
    { q: "What does an Axios interceptor do?", opts: ["Blocks all requests", "Intercepts requests/responses for processing", "Caches responses", "Logs to console only"], ans: 1 },
    { q: "What is pagination in API calls?", opts: ["Page transitions", "Loading data in chunks/pages", "URL routing", "User authentication"], ans: 1 },
    { q: "What is row level security in Supabase?", opts: ["Row styling", "Database access control per row/user", "Table sorting", "Data migration"], ans: 1 },
    { q: "What does Apollo Client cache?", opts: ["Images only", "GraphQL query results", "User preferences", "Navigation state"], ans: 1 },
    { q: "What is OAuth2 used for?", opts: ["Encrypting data", "Third-party authorization (Sign in with Google etc.)", "API rate limiting", "WebSocket auth"], ans: 1 },
  ],
  m7: [
    { q: "What is Reanimated 2's main advantage over Animated API?", opts: ["Easier API", "Runs animations on UI thread (native performance)", "More animation types", "No setup needed"], ans: 1 },
    { q: "What does useSharedValue do in Reanimated?", opts: ["Creates React state", "Creates a value shared between JS and UI thread", "Creates a constant", "Creates Redux state"], ans: 1 },
    { q: "What is a worklet in Reanimated?", opts: ["A UI component", "A function that runs on the UI thread", "A gesture handler", "An animation preset"], ans: 1 },
    { q: "What does Lottie use for animations?", opts: ["GIF files", "JSON animation files from Adobe After Effects", "CSS animations", "SVG paths"], ans: 1 },
    { q: "What does interpolation do in Animated API?", opts: ["Creates new animations", "Maps input range to output range", "Delays animations", "Loops animations"], ans: 1 },
    { q: "Which package handles complex gestures in React Native?", opts: ["react-native-gestures", "react-native-gesture-handler", "expo-gestures", "rn-touch"], ans: 1 },
    { q: "What is a Pan Gesture?", opts: ["Camera pan", "Drag/swipe gesture tracking finger movement", "Pinch gesture", "Tap gesture"], ans: 1 },
    { q: "What does Animated.spring() create?", opts: ["Delay animation", "Physics-based spring animation", "Fade animation", "Rotate animation"], ans: 1 },
    { q: "What is haptic feedback?", opts: ["Visual feedback", "Tactile vibration feedback from device", "Sound feedback", "Color change feedback"], ans: 1 },
    { q: "What does useAnimatedStyle return?", opts: ["A static style object", "An animated style object that updates on UI thread", "A React state", "A StyleSheet"], ans: 1 },
    { q: "What is a shared element transition?", opts: ["Sharing styles", "Smooth animation of element between screens", "Shared Redux state", "Common component"], ans: 1 },
    { q: "What is React Native Skia?", opts: ["A state manager", "High-performance 2D graphics library", "A camera library", "A navigation tool"], ans: 1 },
    { q: "What does withTiming() do in Reanimated?", opts: ["Creates spring animation", "Creates duration-based animation", "Creates bounce animation", "Creates loop animation"], ans: 1 },
    { q: "What is a sticky header?", opts: ["A fixed navigation bar", "Header that stays visible while scrolling content", "Modal header", "Tab bar label"], ans: 1 },
    { q: "What does expo-haptics provide?", opts: ["Haptic sound effects", "Vibration/haptic feedback API", "Touch gesture detection", "Force touch support"], ans: 1 },
  ],
  m8: [
    { q: "Which package provides advanced camera features in RN?", opts: ["expo-camera only", "react-native-vision-camera", "rn-camera", "native-camera"], ans: 1 },
    { q: "What is expo-location used for?", opts: ["File location on device", "GPS and device location services", "Server location", "URL routing"], ans: 1 },
    { q: "What are APNs?", opts: ["Android Push Notifications", "Apple Push Notification service", "App Package Names", "API Protocol Names"], ans: 1 },
    { q: "What is Face ID used for?", opts: ["Photo filters", "Biometric authentication on iOS", "AR features", "Video calls"], ans: 1 },
    { q: "What does an accelerometer measure?", opts: ["Magnetic field", "Screen brightness", "Device acceleration and gravity", "GPS position"], ans: 2 },
    { q: "What is BLE?", opts: ["Basic Layout Engine", "Bluetooth Low Energy", "Browser Language Extension", "Binary Location Encoding"], ans: 1 },
    { q: "What does react-native-iap provide?", opts: ["In-App Performance", "In-App Purchases functionality", "Image Asset Processing", "Interface Automation Protocol"], ans: 1 },
    { q: "What is expo-task-manager used for?", opts: ["Todo list app", "Running background tasks and services", "Performance monitoring", "Unit testing"], ans: 1 },
    { q: "What is a native module in React Native?", opts: ["A JavaScript module", "A module with platform-native code bridged to JS", "An Expo SDK", "A Redux module"], ans: 1 },
    { q: "What is geofencing?", opts: ["Data encryption", "Triggering actions when device enters/exits a GPS boundary", "Network firewall", "Content filtering"], ans: 1 },
    { q: "Which package integrates Google Maps in React Native?", opts: ["react-native-google-maps", "react-native-maps", "expo-maps", "react-maps-native"], ans: 1 },
    { q: "What does expo-secure-store use internally on iOS?", opts: ["AsyncStorage", "Keychain Services", "UserDefaults", "SQLite"], ans: 1 },
    { q: "What is background fetch?", opts: ["Fetching in development", "Periodically running code when app is in background", "Lazy loading images", "API retry logic"], ans: 1 },
    { q: "What language is used to write iOS native modules?", opts: ["Java or Kotlin", "Swift or Objective-C", "C++ only", "Ruby"], ans: 1 },
    { q: "What language is used to write Android native modules?", opts: ["Swift", "Kotlin or Java", "Go", "Rust"], ans: 1 },
  ],
  m9: [
    { q: "What is Jest used for?", opts: ["UI rendering", "JavaScript unit testing", "Animation testing", "E2E testing"], ans: 1 },
    { q: "What does snapshot testing do?", opts: ["Takes device screenshots", "Compares component output to saved snapshot", "Tests camera functionality", "Records user interactions"], ans: 1 },
    { q: "What is Detox used for?", opts: ["Unit testing", "End-to-End testing on real devices/simulators", "Component testing", "API testing"], ans: 1 },
    { q: "What does React.memo do?", opts: ["Memoizes values", "Prevents re-render if props unchanged", "Caches API calls", "Optimizes animations"], ans: 1 },
    { q: "What is the Hermes engine?", opts: ["A design tool", "Optimized JavaScript engine for React Native by Meta", "A testing framework", "A deployment tool"], ans: 1 },
    { q: "What causes memory leaks in React Native?", opts: ["Too many screens", "Uncleared subscriptions/event listeners on unmount", "Large images", "Redux usage"], ans: 1 },
    { q: "What does ProGuard do for Android apps?", opts: ["Adds animations", "Shrinks, optimizes, and obfuscates Java bytecode", "Generates icons", "Creates screenshots"], ans: 1 },
    { q: "What is Sentry used for in mobile apps?", opts: ["UI testing", "Error and crash monitoring/reporting", "Performance animations", "CI/CD pipelines"], ans: 1 },
    { q: "What does `accessibilityLabel` provide?", opts: ["UI label styling", "Text read by screen readers for accessibility", "SEO metadata", "Analytics tag"], ans: 1 },
    { q: "What is Fastlane?", opts: ["A fast navigation library", "Automation tool for building, testing, and deploying apps", "A performance profiler", "A crash reporter"], ans: 1 },
    { q: "What does useMemo optimize?", opts: ["API calls", "Expensive computations by memoizing results", "Component mounting", "Navigation"], ans: 1 },
    { q: "What is EAS Build used for in CI?", opts: ["Local development", "Cloud-based app builds for iOS and Android", "Unit tests", "E2E tests"], ans: 1 },
    { q: "What does Firebase Analytics track?", opts: ["Server logs", "User behavior and events in the app", "Code coverage", "API response times"], ans: 1 },
    { q: "What is an error boundary in React?", opts: ["A try-catch block", "A React component that catches JS errors in the tree", "A Redux middleware", "A network error handler"], ans: 1 },
    { q: "What does the Bundle Analyzer show?", opts: ["Network requests", "Size breakdown of JavaScript bundle", "Memory usage", "CPU usage"], ans: 1 },
  ],
  m10: [
    { q: "What is TestFlight used for?", opts: ["Android testing", "Beta testing iOS apps before App Store release", "Unit testing", "Performance testing"], ans: 1 },
    { q: "What is a keystore in Android development?", opts: ["A Redux store", "A file containing cryptographic keys to sign APKs", "A key-value storage", "An API key file"], ans: 1 },
    { q: "What does EAS Submit do?", opts: ["Runs tests", "Automates submission to App Store and Play Store", "Builds the app", "Deploys to web"], ans: 1 },
    { q: "What is AdMob?", opts: ["A chat SDK", "Google's mobile advertising platform", "A payment gateway", "An analytics tool"], ans: 1 },
    { q: "What is a provisioning profile in iOS?", opts: ["App configuration file", "File linking app, developer, and devices for signing", "User profile screen", "API configuration"], ans: 1 },
    { q: "What is a freemium model?", opts: ["All features free", "Free basic features with paid premium features", "Free trial then paid", "Enterprise only pricing"], ans: 1 },
    { q: "What does the Google Play Console allow?", opts: ["iOS app publishing", "Managing Android app releases, stats, and reviews", "Cross-platform builds", "Game development"], ans: 1 },
    { q: "What is JSI in the new React Native architecture?", opts: ["JavaScript Interface — direct native access without Bridge", "JavaScript Injection", "JSON State Interface", "Java Script Interop"], ans: 0 },
    { q: "What makes a good app Store listing?", opts: ["Complex description", "Clear title, keywords, screenshots, and description", "Many screenshots", "Long description only"], ans: 1 },
    { q: "What is in-app subscription?", opts: ["Newsletter signup", "Recurring payments for premium features", "One-time purchase", "Free upgrade"], ans: 1 },
    { q: "What does a release channel in Expo OTA do?", opts: ["Sets app color theme", "Targets specific groups (staging, production) for updates", "Manages releases on Play Store", "Controls network channels"], ans: 1 },
    { q: "What is Flutter's main language?", opts: ["JavaScript", "Dart", "Swift", "Kotlin"], ans: 1 },
    { q: "What is AR in mobile apps?", opts: ["Automated Routing", "Augmented Reality — overlaying digital content on real world", "Advanced Rendering", "API Request"], ans: 1 },
    { q: "What does contributing to open source do for your career?", opts: ["Nothing", "Builds portfolio, reputation, and networking", "Replaces job experience", "Only useful for senior devs"], ans: 1 },
    { q: "What is the new RN architecture's Fabric renderer?", opts: ["A texture library", "New rendering system working on UI thread", "A font renderer", "A canvas API"], ans: 1 },
  ],
};

const getQuizzes = (moduleId: string) =>
  (QUIZ_POOLS[moduleId] || QUIZ_POOLS["m1"]).map((q, i) => ({ ...q, id: `${moduleId}_q${i}` }));

// ============================================================
// PYODIDE RUNNER (JS terminal for React Native code samples)
// ============================================================
let pyodideInstance: any = null;
let pyodideLoading = false;
let pyodideCallbacks: { resolve: (v: any) => void; reject: (e: any) => void }[] = [];

const loadPyodide = () =>
  new Promise<any>((resolve, reject) => {
    if (pyodideInstance) { resolve(pyodideInstance); return; }
    pyodideCallbacks.push({ resolve, reject });
    if (pyodideLoading) return;
    pyodideLoading = true;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
    script.onload = async () => {
      try {
        const py = await (window as any).loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/" });
        pyodideInstance = py;
        pyodideCallbacks.forEach((cb) => cb.resolve(py));
      } catch (e) { pyodideCallbacks.forEach((cb) => cb.reject(e)); }
    };
    script.onerror = (e) => pyodideCallbacks.forEach((cb) => cb.reject(e));
    document.head.appendChild(script);
  });

const runPython = async (code: string) => {
  const py = await loadPyodide();
  await py.runPythonAsync(`import sys\nfrom io import StringIO\n_stdout = StringIO()\nsys.stdout = _stdout`);
  try {
    await py.runPythonAsync(code);
    const out = await py.runPythonAsync(`sys.stdout.getvalue()`);
    return { out: out.toString().trim(), err: null };
  } catch (e: any) {
    return { out: null, err: e.message };
  } finally {
    await py.runPythonAsync(`sys.stdout = sys.__stdout__`);
  }
};

// ============================================================
// THREE.JS BACKGROUND
// ============================================================
const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let animId: number;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      const THREE = (window as any).THREE;
      const W = mount.clientWidth, H = mount.clientHeight;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mount.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
      camera.position.z = 60;
      // Particles
      const geo = new THREE.BufferGeometry();
      const N = 1200;
      const pos = new Float32Array(N * 3);
      for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 200;
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ size: 0.6, color: 0x61dafb, transparent: true, opacity: 0.55 });
      scene.add(new THREE.Points(geo, mat));
      // Lines
      const linesGeo = new THREE.BufferGeometry();
      const lp: number[] = [];
      for (let i = 0; i < 50; i++) {
        lp.push((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 80);
        lp.push((Math.random() - 0.5) * 120, (Math.random() - 0.5) * 120, (Math.random() - 0.5) * 80);
      }
      linesGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(lp), 3));
      scene.add(new THREE.LineSegments(linesGeo, new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.12 })));
      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.003;
        scene.rotation.y = t * 0.08;
        scene.rotation.x = Math.sin(t * 0.06) * 0.08;
        mat.opacity = 0.35 + Math.sin(t) * 0.2;
        renderer.render(scene, camera);
      };
      animate();
      const onResize = () => {
        const w = mount.clientWidth, h = mount.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener("resize", onResize);
      (mount as any)._cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      };
    };
    document.head.appendChild(script);
    return () => { (mount as any)._cleanup?.(); };
  }, []);
  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
};

// ============================================================
// QUIZ MODAL
// ============================================================
interface Chapter { id: string; title: string; topics: string[] }
interface Module { id: string; module: string; icon: string; color: string; chapters: Chapter[] }

const QuizModal = ({ chapter, module, onClose }: { chapter: Chapter; module: Module; onClose: () => void }) => {
  const quizzes = getQuizzes(module.id);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState<"quiz" | "terminal">("quiz");
  const [code, setCode] = useState(`# Python Playground\n# Practice: ${chapter.title}\n\nprint("Hello, React Native world!")\n`);
  const [pyOut, setPyOut] = useState("");
  const [running, setRunning] = useState(false);
  const [pyReady, setPyReady] = useState(false);
  const [page, setPage] = useState(0);
  const PER = 5;

  useEffect(() => { loadPyodide().then(() => setPyReady(true)).catch(() => {}); }, []);

  const score = submitted ? quizzes.filter((q, i) => answers[i] === q.ans).length : 0;
  const pageQ = quizzes.slice(page * PER, (page + 1) * PER);

  const handleRun = async () => {
    setRunning(true);
    const r = await runPython(code);
    setPyOut(r.err ? `❌ Error:\n${r.err}` : r.out || "(no output)");
    setRunning(false);
  };

  return (
    <div className="qmo" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qmb">
        <div className="qmh">
          <div className="qmh-l">
            <span style={{ fontSize: 22 }}>📝</span>
            <div>
              <div className="qmh-t">{chapter.title}</div>
              <div className="qmh-s">15 Questions · Python Terminal</div>
            </div>
          </div>
          <div className="qmh-tabs">
            <button className={`qht ${tab === "quiz" ? "active" : ""}`} onClick={() => setTab("quiz")}>📝 Quiz</button>
            <button className={`qht ${tab === "terminal" ? "active" : ""}`} onClick={() => setTab("terminal")}>💻 Terminal</button>
          </div>
          <button className="qmx" onClick={onClose}>✕</button>
        </div>

        {tab === "quiz" ? (
          <div className="qmbd">
            {submitted && (
              <div className="qrb" style={{ borderColor: score >= 12 ? "#00ff88" : score >= 8 ? "#ffd43b" : "#ff6b6b", background: score >= 12 ? "rgba(0,255,136,0.08)" : score >= 8 ? "rgba(255,212,59,0.08)" : "rgba(255,107,107,0.08)" }}>
                <span>{score >= 12 ? "🏆" : score >= 8 ? "⭐" : "💪"}</span>
                <span>Score: {score}/15 — {score >= 12 ? "Excellent!" : score >= 8 ? "Good Job!" : "Keep Practicing!"}</span>
                <button className="rtb" onClick={() => { setAnswers({}); setSubmitted(false); setPage(0); }}>↺ Retry</button>
              </div>
            )}
            <div className="qpg">
              {[0, 1, 2].map((p) => (
                <button key={p} className={`qpgb ${page === p ? "active" : ""}`} style={page === p ? { borderColor: module.color, color: module.color } : {}} onClick={() => setPage(p)}>
                  Q{p * 5 + 1}–{(p + 1) * 5}
                </button>
              ))}
            </div>
            <div className="qql">
              {pageQ.map((q, li) => {
                const gi = page * PER + li;
                const sel = answers[gi];
                return (
                  <div key={q.id} className={`qqb ${submitted ? (sel === q.ans ? "qc" : "qw") : ""}`}>
                    <div className="qqn" style={{ color: module.color }}>Q{gi + 1}</div>
                    <div className="qqt">{q.q}</div>
                    <div className="qqo">
                      {q.opts.map((opt, oi) => (
                        <button
                          key={oi}
                          className={`qob ${sel === oi ? "sel" : ""} ${submitted && oi === q.ans ? "cor" : ""} ${submitted && sel === oi && oi !== q.ans ? "wrg" : ""}`}
                          onClick={() => !submitted && setAnswers((a) => ({ ...a, [gi]: oi }))}
                          disabled={submitted}
                        >
                          <span className="ol">{String.fromCharCode(65 + oi)}</span> {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {!submitted && (
              <button
                className="sqb"
                style={{ background: Object.keys(answers).length < 15 ? "rgba(255,255,255,0.1)" : `linear-gradient(135deg, ${module.color}, #a855f7)` }}
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < 15}
              >
                {Object.keys(answers).length < 15 ? `Answer all (${Object.keys(answers).length}/15)` : "✅ Submit Quiz"}
              </button>
            )}
          </div>
        ) : (
          <div className="trm">
            <div className="trmh">
              <span className="td r" /><span className="td y" /><span className="td g" />
              <span className="trt">🐍 Python Terminal {!pyReady && "— Loading..."}</span>
            </div>
            <textarea
              className="tre"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              onKeyDown={(e) => {
                if (e.key === "Tab") { e.preventDefault(); const s = e.currentTarget.selectionStart; setCode(code.substring(0, s) + "    " + code.substring(e.currentTarget.selectionEnd)); setTimeout(() => e.currentTarget.setSelectionRange(s + 4, s + 4), 0); }
              }}
            />
            <div className="trc">
              <button className="trr" onClick={handleRun} disabled={running || !pyReady}>{running ? "⏳ Running..." : "▶ Run"}</button>
              <button className="trcl" onClick={() => setCode(`# Practice: ${chapter.title}\n\n`)}>Clear</button>
            </div>
            {pyOut && (
              <div className="tro">
                <div className="troh">Output:</div>
                <pre className="trop">{pyOut}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// CHAPTER VIEW
// ============================================================
const ChapterView = ({ chapter, module, onBack, completed, onComplete }: { chapter: Chapter; module: Module; onBack: () => void; completed: boolean; onComplete: () => void }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  return (
    <div className="cv">
      {showQuiz && <QuizModal chapter={chapter} module={module} onClose={() => setShowQuiz(false)} />}
      <div className="cvh">
        <button className="bkb" onClick={onBack}>← Back</button>
        <div className="cvbc">
          <span style={{ color: module.color }}>{module.icon} {module.module.replace(/^Module \d+: /, "")}</span>
          <span> › </span>
          <span style={{ color: "white", fontWeight: 600 }}>{chapter.title}</span>
        </div>
        {!completed ? (
          <button className="mdb" onClick={onComplete}>✓ Mark Complete</button>
        ) : (
          <span className="dnb">✅ Done</span>
        )}
      </div>
      <div className="cva">
        <h1 className="cvh1" style={{ color: module.color }}>{chapter.title}</h1>
        <p className="cvd">Master <strong>{chapter.title}</strong> — a core component of {module.module.replace(/^Module \d+: /, "")}. Build real mobile app features with hands-on practice.</p>
        <div className="cvtg">
          {chapter.topics.map((t, i) => (
            <div key={i} className="cvtc" style={{ borderLeftColor: module.color }}>
              <span className="cvtn" style={{ color: module.color }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="cvtx">{t}</span>
            </div>
          ))}
        </div>
        <div className="cvcs">
          <div className="cvs"><h3>📱 What You'll Build</h3><p>In this chapter you'll learn <strong>{chapter.title}</strong> and apply it to build real React Native / Expo features. Topics covered: {chapter.topics.join(", ")}.</p></div>
          <div className="cvs"><h3>🎯 Learning Goals</h3><ul>{chapter.topics.map((t, i) => <li key={i}>✦ Implement <strong>{t}</strong> in a production React Native app</li>)}</ul></div>
          <div className="cvs"><h3>💡 Pro Tip</h3><p>After studying this chapter, use the Python Terminal in the quiz to experiment with logic patterns, then take the 15-question MCQ quiz to test your understanding before moving on.</p></div>
        </div>
        <div className="cvcta" style={{ borderColor: module.color }}>
          <div className="ccl">
            <div className="cci" style={{ background: `${module.color}22`, color: module.color }}>📝</div>
            <div>
              <div className="cct">Chapter Quiz — 15 Questions</div>
              <div className="ccs">MCQ + Python Terminal included</div>
            </div>
          </div>
          <button className="ctqb" style={{ background: `linear-gradient(135deg, ${module.color}, ${module.color}88)` }} onClick={() => setShowQuiz(true)}>Take Quiz →</button>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN PAGE
// ============================================================
export default function MobileAppDevelopmentPage() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ m1: true });
  const [search, setSearch] = useState("");

  const totalCh = SYLLABUS.reduce((a, m) => a + m.chapters.length, 0);
  const pct = Math.round((completed.size / totalCh) * 100);

  const curMod = activeModule ? SYLLABUS.find((m) => m.id === activeModule) ?? null : null;
  const curCh = curMod && activeChapter ? curMod.chapters.find((c) => c.id === activeChapter) ?? null : null;

  const filtered = search.trim()
    ? SYLLABUS.map((m) => ({ ...m, chapters: m.chapters.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()))) })).filter((m) => m.chapters.length > 0)
    : SYLLABUS;

  return (
    <>
      {/* SEO Hidden */}
      <div style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)" }} aria-hidden="false">
        <h1>Mobile App Development Course with React Native and Expo</h1>
        <p>Learn Mobile App Development with React Native and Expo. Build iOS and Android apps from scratch. Best mobile development course online 2025.</p>
        {SYLLABUS.map((m) => <div key={m.id}><h2>{m.module}</h2>{m.chapters.map((c) => <p key={c.id}>{c.title}: {c.topics.join(", ")}</p>)}</div>)}
        <a href="https://seekhowithrua.com/mobile-app-development">Mobile App Development Course</a>
      </div>

      <div className="dp">
        <div className="dbg"><ThreeBackground /></div>

        {/* Hero */}
        <header className="dh">
          <div className="dhb">📱 #1 React Native & Expo Course Online</div>
          <h1 className="dhh">Master <span className="dgt">Mobile App</span><br />Development</h1>
          <p className="dhs">React Native · Expo · iOS · Android · 10 Modules · 100+ Chapters · 1500 Quiz Questions</p>
          <div className="dhst">
            {[["10", "Modules"], ["100+", "Chapters"], ["1500", "Quizzes"], [`${pct}%`, "Progress"]].map(([v, l]) => (
              <div key={l} className="dhs-item">
                <span className="dhsv">{v}</span><span className="dhsl">{l}</span>
                {l !== "Progress" && <span className="dhsd" />}
              </div>
            ))}
          </div>
          <div className="dhp">
            <div className="dpb"><div className="dpf" style={{ width: `${pct}%` }} /></div>
            <span>{completed.size}/{totalCh} chapters completed</span>
          </div>
        </header>

        <div className="dl">
          {/* Sidebar */}
          <aside className="ds">
            <div className="dst">
              <div className="dsw">
                <span className="dsi">🔍</span>
                <input className="dsin" placeholder="Search chapters & topics..." value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
            <nav className="dsn" aria-label="Course Navigation">
              {filtered.map((mod) => {
                const done = mod.chapters.filter((c) => completed.has(c.id)).length;
                const exp = expanded[mod.id] ?? false;
                return (
                  <div key={mod.id} className="dmg">
                    <button
                      className={`dmb ${activeModule === mod.id ? "active" : ""}`}
                      style={activeModule === mod.id ? { color: mod.color, borderLeftColor: mod.color } : {}}
                      onClick={() => { setExpanded((p) => ({ ...p, [mod.id]: !p[mod.id] })); setActiveModule(mod.id); setActiveChapter(null); }}
                    >
                      <span className="dmi">{mod.icon}</span>
                      <span className="dmt">{mod.module}</span>
                      <span className="dmc">{done}/{mod.chapters.length}</span>
                      <span className="dma">{exp ? "▼" : "▶"}</span>
                    </button>
                    {exp && (
                      <div className="dcl">
                        {mod.chapters.map((ch, ci) => (
                          <button
                            key={ch.id}
                            className={`dcb ${activeChapter === ch.id ? "active" : ""} ${completed.has(ch.id) ? "dn" : ""}`}
                            style={activeChapter === ch.id ? { color: mod.color } : {}}
                            onClick={() => { setActiveModule(mod.id); setActiveChapter(ch.id); }}
                          >
                            <span className="dcn">{ci + 1}</span>
                            <span className="dct">{ch.title}</span>
                            {completed.has(ch.id) && <span className="dcc">✓</span>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Main */}
          <main className="dm" role="main">
            {curCh && curMod ? (
              <ChapterView chapter={curCh} module={curMod} onBack={() => setActiveChapter(null)} completed={completed.has(curCh.id)} onComplete={() => setCompleted((p) => { const s = new Set(p); s.add(curCh.id); return s; })} />
            ) : curMod ? (
              <div className="mo">
                <div className="moh" style={{ borderLeftColor: curMod.color }}>
                  <span style={{ fontSize: 44 }}>{curMod.icon}</span>
                  <div>
                    <h2 className="moht">{curMod.module}</h2>
                    <p className="mohs">{curMod.chapters.length} Chapters · {curMod.chapters.length * 15} Quiz Questions</p>
                  </div>
                </div>
                <div className="mocl">
                  {curMod.chapters.map((ch, ci) => (
                    <button key={ch.id} className={`mocc ${completed.has(ch.id) ? "dn" : ""}`} style={{ "--mc": curMod.color } as any} onClick={() => setActiveChapter(ch.id)}>
                      <div className="mocn" style={{ color: curMod.color }}>{String(ci + 1).padStart(2, "0")}</div>
                      <div className="mocd">
                        <div className="moct">{ch.title}</div>
                        <div className="mocp">{ch.topics.slice(0, 2).join(" · ")}{ch.topics.length > 2 ? " ..." : ""}</div>
                        <div className="mocm"><span>📝 15 questions</span><span>💻 Terminal</span>{completed.has(ch.id) && <span style={{ color: "#00ff88" }}>✅ Done</span>}</div>
                      </div>
                      <span style={{ color: curMod.color, fontSize: 20 }}>→</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="dw">
                <h2 className="dwh">Welcome to <span className="dgt">Mobile App Development</span></h2>
                <p className="dwp">Build iOS and Android apps with React Native and Expo. Select a module from the sidebar to begin.</p>
                <div className="dwg">
                  {SYLLABUS.map((mod) => (
                    <button key={mod.id} className="dwc" style={{ "--mc": mod.color, borderTopColor: mod.color } as any} onClick={() => { setActiveModule(mod.id); setExpanded((p) => ({ ...p, [mod.id]: true })); }}>
                      <span style={{ fontSize: 28 }}>{mod.icon}</span>
                      <span className="dwct">{mod.module.replace(/^Module \d+: /, "")}</span>
                      <span className="dwcc">{mod.chapters.length} chapters</span>
                    </button>
                  ))}
                </div>
                <div className="dwf">
                  {[["⚛️", "React Native & Expo", "Build real iOS & Android apps from scratch"], ["📝", "15 Quizzes / Chapter", "1500+ curated MCQ questions with instant feedback"], ["💻", "Python Terminal", "Practice coding in every chapter"], ["🚀", "Real Projects", "Social app, e-commerce, chat, fitness tracker"]].map(([ic, t, d]) => (
                    <div key={t} className="dwfi"><span style={{ fontSize: 26 }}>{ic}</span><strong>{t}</strong><span>{d}</span></div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>

        {/* SEO Footer */}
        <footer className="df">
          <div className="dfi">
            <h2>Complete Mobile App Development Course Curriculum</h2>
            <p>Seekho With Rua offers the best online React Native and Expo course covering mobile fundamentals, core components, navigation, state management, networking, animations, device features, testing, and app deployment to App Store and Play Store.</p>
            <div className="dfl">{SYLLABUS.map((m) => <div key={m.id}><strong>{m.module}</strong>{m.chapters.map((c) => <span key={c.id}> · {c.title}</span>)}</div>)}</div>
          </div>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        .dp{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:#070714;color:#e2e8f0;min-height:100vh;position:relative;overflow-x:hidden}
        .dbg{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0.45}
        /* HERO */
        .dh{position:relative;z-index:1;padding:80px 40px 56px;text-align:center;background:linear-gradient(180deg,rgba(7,7,20,0.95) 0%,rgba(7,7,20,0.5) 100%);border-bottom:1px solid rgba(255,255,255,0.06)}
        .dhb{display:inline-block;padding:6px 18px;border:1px solid rgba(97,218,251,0.4);border-radius:20px;background:rgba(97,218,251,0.08);color:#61dafb;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px}
        .dhh{font-size:clamp(30px,5vw,54px);font-weight:800;line-height:1.15;margin:0 0 14px;color:white}
        .dgt{background:linear-gradient(135deg,#61dafb,#a855f7,#ec4899);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .dhs{color:rgba(255,255,255,0.5);font-size:15px;margin:0 0 24px}
        .dhst{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:0;margin-bottom:20px}
        .dhs-item{display:flex;align-items:center;gap:0}
        .dhsv{font-size:26px;font-weight:800;color:white;padding:0 8px}
        .dhsl{font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.5px;padding-right:8px}
        .dhsd{width:1px;height:32px;background:rgba(255,255,255,0.1);margin:0 4px}
        .dhp{display:flex;align-items:center;justify-content:center;gap:12px;font-size:13px;color:rgba(255,255,255,0.4)}
        .dpb{width:180px;height:4px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden}
        .dpf{height:100%;background:linear-gradient(90deg,#61dafb,#a855f7);border-radius:2px;transition:width 0.5s}
        /* LAYOUT */
        .dl{position:relative;z-index:1;display:flex;min-height:calc(100vh - 280px)}
        /* SIDEBAR */
        .ds{width:310px;min-width:310px;flex-shrink:0;background:rgba(7,7,20,0.97);border-right:1px solid rgba(255,255,255,0.07);display:flex;flex-direction:column;position:sticky;top:0;max-height:100vh;overflow:hidden}
        .dst{padding:12px;border-bottom:1px solid rgba(255,255,255,0.06);flex-shrink:0}
        .dsw{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px}
        .dsi{font-size:14px;opacity:0.5}
        .dsin{flex:1;background:none;border:none;outline:none;color:white;font-size:13px;font-family:inherit}
        .dsin::placeholder{color:rgba(255,255,255,0.3)}
        .dsn{flex:1;overflow-y:auto;padding:6px 0}
        .dsn::-webkit-scrollbar{width:3px}
        .dsn::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .dmg{margin-bottom:2px}
        .dmb{width:100%;display:flex;align-items:center;gap:8px;padding:10px 14px;border:none;border-left:3px solid transparent;background:transparent;color:rgba(255,255,255,0.65);cursor:pointer;text-align:left;font-size:11px;font-weight:700;font-family:inherit;transition:all 0.2s}
        .dmb:hover{background:rgba(255,255,255,0.04);color:white}
        .dmb.active{background:rgba(255,255,255,0.05)}
        .dmi{font-size:16px;flex-shrink:0}
        .dmt{flex:1;font-size:11px;line-height:1.3}
        .dmc{font-size:10px;color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.06);padding:2px 6px;border-radius:10px;flex-shrink:0}
        .dma{font-size:9px;color:rgba(255,255,255,0.3);flex-shrink:0}
        .dcl{padding:0 0 4px 0}
        .dcb{width:100%;display:flex;align-items:center;gap:8px;padding:7px 14px 7px 28px;border:none;background:transparent;color:rgba(255,255,255,0.48);cursor:pointer;text-align:left;font-size:11px;font-family:inherit;transition:all 0.15s}
        .dcb:hover{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.8)}
        .dcb.active{background:rgba(255,255,255,0.06)}
        .dcb.dn{color:rgba(0,255,136,0.55)}
        .dcn{font-size:10px;color:rgba(255,255,255,0.2);width:18px;flex-shrink:0;font-family:'JetBrains Mono',monospace}
        .dct{flex:1}
        .dcc{color:#00ff88;font-size:10px}
        /* MAIN */
        .dm{flex:1;min-width:0;overflow-y:auto}
        /* WELCOME */
        .dw{padding:48px 40px}
        .dwh{font-size:30px;font-weight:800;color:white;margin:0 0 12px}
        .dwp{color:rgba(255,255,255,0.5);font-size:15px;line-height:1.6;max-width:580px;margin:0 0 36px}
        .dwg{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px;margin-bottom:44px}
        .dwc{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:18px;border:1px solid rgba(255,255,255,0.08);border-top:3px solid var(--mc);border-radius:12px;background:rgba(255,255,255,0.02);cursor:pointer;text-align:left;font-family:inherit;transition:all 0.2s}
        .dwc:hover{background:rgba(255,255,255,0.05);transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,0.3)}
        .dwct{font-size:13px;font-weight:700;color:white}
        .dwcc{font-size:11px;color:rgba(255,255,255,0.4)}
        .dwf{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px}
        .dwfi{display:flex;flex-direction:column;gap:6px;padding:18px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.02);font-size:13px;color:rgba(255,255,255,0.55)}
        .dwfi strong{color:white;font-size:14px}
        /* MODULE OVERVIEW */
        .mo{padding:32px 40px}
        .moh{display:flex;align-items:center;gap:16px;padding:22px;border:1px solid rgba(255,255,255,0.08);border-left:4px solid;border-radius:14px;background:rgba(255,255,255,0.02);margin-bottom:28px}
        .moht{font-size:20px;font-weight:700;color:white;margin:0 0 4px}
        .mohs{font-size:13px;color:rgba(255,255,255,0.4);margin:0}
        .mocl{display:flex;flex-direction:column;gap:8px}
        .mocc{display:flex;align-items:center;gap:16px;padding:14px 18px;border:1px solid rgba(255,255,255,0.07);border-radius:10px;background:rgba(255,255,255,0.02);cursor:pointer;text-align:left;font-family:inherit;transition:all 0.2s}
        .mocc:hover{background:rgba(255,255,255,0.05);border-color:var(--mc);transform:translateX(4px)}
        .mocc.dn{border-color:rgba(0,255,136,0.2)}
        .mocn{font-size:20px;font-weight:800;font-family:'JetBrains Mono',monospace;min-width:40px}
        .mocd{flex:1}
        .moct{font-size:14px;font-weight:600;color:white;margin-bottom:3px}
        .mocp{font-size:12px;color:rgba(255,255,255,0.38);margin-bottom:5px}
        .mocm{display:flex;gap:12px;font-size:11px;color:rgba(255,255,255,0.32)}
        /* CHAPTER VIEW */
        .cv{display:flex;flex-direction:column;height:100%}
        .cvh{display:flex;align-items:center;gap:14px;padding:14px 28px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(7,7,20,0.97);flex-shrink:0;flex-wrap:wrap}
        .bkb{padding:7px 16px;border:1px solid rgba(255,255,255,0.15);border-radius:7px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.7);cursor:pointer;font-size:13px;font-family:inherit;transition:all 0.2s}
        .bkb:hover{background:rgba(255,255,255,0.1);color:white}
        .cvbc{flex:1;font-size:13px;color:rgba(255,255,255,0.5)}
        .mdb{padding:7px 16px;border:1px solid rgba(0,255,136,0.3);border-radius:7px;background:rgba(0,255,136,0.07);color:#00ff88;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:all 0.2s}
        .mdb:hover{background:rgba(0,255,136,0.14)}
        .dnb{font-size:13px;color:#00ff88;padding:6px 14px;border:1px solid rgba(0,255,136,0.3);border-radius:7px;background:rgba(0,255,136,0.07)}
        .cva{flex:1;overflow-y:auto;padding:36px 40px}
        .cva::-webkit-scrollbar{width:3px}
        .cva::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .cvh1{font-size:30px;font-weight:800;margin:0 0 10px}
        .cvd{color:rgba(255,255,255,0.55);font-size:15px;line-height:1.6;margin:0 0 28px}
        .cvtg{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-bottom:32px}
        .cvtc{display:flex;align-items:center;gap:10px;padding:12px 14px;border:1px solid rgba(255,255,255,0.07);border-left:3px solid;border-radius:8px;background:rgba(255,255,255,0.02)}
        .cvtn{font-size:11px;font-family:'JetBrains Mono',monospace;font-weight:700;flex-shrink:0}
        .cvtx{font-size:13px;color:rgba(255,255,255,0.8)}
        .cvcs{display:flex;flex-direction:column;gap:20px;margin-bottom:32px}
        .cvs{padding:22px;border:1px solid rgba(255,255,255,0.07);border-radius:12px;background:rgba(255,255,255,0.02)}
        .cvs h3{font-size:15px;font-weight:700;color:white;margin:0 0 10px}
        .cvs p{color:rgba(255,255,255,0.6);line-height:1.7;margin:0;font-size:14px}
        .cvs ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:7px}
        .cvs ul li{color:rgba(255,255,255,0.6);font-size:14px}
        .cvs ul li strong{color:white}
        .cvcta{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px;border:2px solid;border-radius:14px;background:rgba(255,255,255,0.02);flex-wrap:wrap}
        .ccl{display:flex;align-items:center;gap:14px}
        .cci{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
        .cct{font-size:15px;font-weight:700;color:white}
        .ccs{font-size:12px;color:rgba(255,255,255,0.4);margin-top:2px}
        .ctqb{padding:11px 26px;border:none;border-radius:10px;color:white;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:all 0.2s;flex-shrink:0}
        .ctqb:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,0.4);opacity:0.9}
        /* QUIZ MODAL */
        .qmo{position:fixed;inset:0;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;z-index:10000;padding:20px;backdrop-filter:blur(8px)}
        .qmb{background:#0b0b1c;border:1px solid rgba(255,255,255,0.1);border-radius:16px;width:100%;max-width:780px;max-height:90vh;display:flex;flex-direction:column;box-shadow:0 30px 80px rgba(0,0,0,0.7);overflow:hidden;animation:mIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)}
        @keyframes mIn{from{opacity:0;transform:scale(0.93) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}
        .qmh{display:flex;align-items:center;gap:12px;padding:15px 20px;border-bottom:1px solid rgba(255,255,255,0.08);background:rgba(0,0,0,0.3);flex-shrink:0;flex-wrap:wrap}
        .qmh-l{display:flex;align-items:center;gap:10px;flex:1}
        .qmh-t{font-size:14px;font-weight:700;color:white}
        .qmh-s{font-size:11px;color:rgba(255,255,255,0.4)}
        .qmh-tabs{display:flex;gap:6px}
        .qht{padding:6px 14px;border:1px solid rgba(255,255,255,0.15);border-radius:7px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6);cursor:pointer;font-size:12px;font-weight:600;font-family:inherit;transition:all 0.2s}
        .qht.active{background:rgba(97,218,251,0.15);border-color:#61dafb;color:#61dafb}
        .qmx{background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;font-size:18px;flex-shrink:0}
        .qmx:hover{color:white}
        .qmbd{flex:1;overflow-y:auto;padding:18px;display:flex;flex-direction:column;gap:14px}
        .qmbd::-webkit-scrollbar{width:3px}
        .qmbd::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1)}
        .qrb{display:flex;align-items:center;gap:12px;padding:13px 16px;border:1px solid;border-radius:10px;font-size:14px;font-weight:700;color:white;flex-wrap:wrap}
        .rtb{margin-left:auto;padding:5px 14px;border:1px solid rgba(255,255,255,0.3);border-radius:7px;background:rgba(255,255,255,0.07);color:white;cursor:pointer;font-size:12px;font-family:inherit}
        .qpg{display:flex;gap:6px;flex-wrap:wrap}
        .qpgb{padding:5px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:6px;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.5);cursor:pointer;font-size:11px;font-family:inherit;transition:all 0.2s}
        .qpgb.active{border-color:#61dafb;color:#61dafb;background:rgba(97,218,251,0.1)}
        .qql{display:flex;flex-direction:column;gap:13px}
        .qqb{padding:15px;border:1px solid rgba(255,255,255,0.08);border-radius:10px;background:rgba(255,255,255,0.02);transition:border-color 0.3s}
        .qqb.qc{border-color:rgba(0,255,136,0.4);background:rgba(0,255,136,0.04)}
        .qqb.qw{border-color:rgba(255,107,107,0.4);background:rgba(255,107,107,0.04)}
        .qqn{font-size:10px;font-weight:700;font-family:'JetBrains Mono',monospace;margin-bottom:5px}
        .qqt{font-size:14px;color:white;font-weight:500;margin-bottom:11px;line-height:1.5}
        .qqo{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        @media(max-width:480px){.qqo{grid-template-columns:1fr}}
        .qob{display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid rgba(255,255,255,0.1);border-radius:7px;background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.7);cursor:pointer;font-size:12px;font-family:inherit;text-align:left;transition:all 0.15s}
        .qob:hover:not(:disabled){background:rgba(255,255,255,0.07);border-color:rgba(255,255,255,0.2);color:white}
        .qob.sel{border-color:#61dafb;background:rgba(97,218,251,0.1);color:#61dafb}
        .qob.cor{border-color:#00ff88!important;background:rgba(0,255,136,0.12)!important;color:#00ff88!important}
        .qob.wrg{border-color:#ff6b6b!important;background:rgba(255,107,107,0.1)!important;color:#ff6b6b!important}
        .qob:disabled{cursor:default}
        .ol{font-size:10px;font-weight:700;opacity:0.6;flex-shrink:0}
        .sqb{padding:13px;border:none;border-radius:10px;color:white;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:all 0.2s}
        .sqb:disabled{cursor:not-allowed;opacity:0.5}
        .sqb:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(97,218,251,0.3)}
        /* TERMINAL */
        .trm{flex:1;display:flex;flex-direction:column;overflow:hidden}
        .trmh{display:flex;align-items:center;gap:7px;padding:10px 16px;background:rgba(0,0,0,0.5);border-bottom:1px solid rgba(255,255,255,0.08);flex-shrink:0}
        .td{width:10px;height:10px;border-radius:50%;flex-shrink:0}
        .td.r{background:#ff5f57}.td.y{background:#febc2e}.td.g{background:#28c840}
        .trt{font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);flex:1;text-align:center;font-family:'JetBrains Mono',monospace}
        .tre{flex:1;min-height:240px;padding:16px;background:#090918;color:#e2e8f0;font-family:'JetBrains Mono',monospace;font-size:13px;line-height:1.6;border:none;outline:none;resize:vertical;tab-size:4}
        .trc{display:flex;gap:8px;padding:10px 16px;background:rgba(0,0,0,0.3);border-top:1px solid rgba(255,255,255,0.06)}
        .trr{padding:8px 20px;border:none;border-radius:7px;background:linear-gradient(135deg,#61dafb,#0891b2);color:#000;font-weight:700;font-size:13px;font-family:inherit;cursor:pointer;transition:all 0.2s}
        .trr:disabled{opacity:0.5;cursor:not-allowed}
        .trr:not(:disabled):hover{transform:translateY(-1px);box-shadow:0 4px 14px rgba(97,218,251,0.4)}
        .trcl{padding:8px 14px;border:1px solid rgba(255,255,255,0.15);border-radius:7px;background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.5);font-size:13px;font-family:inherit;cursor:pointer}
        .tro{background:#060612;border-top:1px solid rgba(255,255,255,0.08);max-height:180px;overflow-y:auto}
        .troh{padding:7px 16px;font-size:11px;color:rgba(255,255,255,0.4);font-family:'JetBrains Mono',monospace;border-bottom:1px solid rgba(255,255,255,0.05)}
        .trop{padding:12px 16px;font-family:'JetBrains Mono',monospace;font-size:13px;color:#61dafb;line-height:1.5;margin:0;white-space:pre-wrap}
        /* SEO FOOTER */
        .df{position:relative;z-index:1;padding:44px 40px;border-top:1px solid rgba(255,255,255,0.06);background:rgba(0,0,0,0.4)}
        .dfi{max-width:960px;margin:0 auto}
        .dfi h2{font-size:20px;font-weight:700;color:white;margin:0 0 10px}
        .dfi p{color:rgba(255,255,255,0.5);font-size:14px;line-height:1.7;margin:0 0 18px}
        .dfl{font-size:12px;color:rgba(255,255,255,0.32);line-height:2}
        .dfl strong{color:rgba(255,255,255,0.55)}
        /* RESPONSIVE */
        @media(max-width:768px){
          .dl{flex-direction:column}
          .ds{width:100%;min-width:unset;position:relative;max-height:260px}
          .dh{padding:44px 20px 28px}
          .mo,.dw,.cva{padding:22px 18px}
          .dwg{grid-template-columns:repeat(2,1fr)}
          .cvtg{grid-template-columns:1fr 1fr}
          .qmb{max-height:95vh}
        }
      `}</style>
    </>
  );
}