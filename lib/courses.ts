// ============================================================
// FILE LOCATION: seekhowithrua-seo/lib/courses.ts
// STEP 1: Inside the "lib" folder (same level as "app"), CREATE "courses.ts"
// STEP 2: Paste this entire file content inside courses.ts
// NOTE: This file contains ALL course data for all 6 courses.
//       To add a new course: add a new export and add it to ALL_COURSES object.
// ============================================================

// lib/courses.ts
// Central data store for all courses

export interface Topic { id: string; title: string; topics: string[] }
export interface Module { id: string; title: string; icon: string; color: string; chapters: Topic[] }
export interface CourseData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  color: string;
  icon: string;
  modules: Module[];
}

// ─── GAME DEVELOPMENT ────────────────────────────────────────────────────────
export const GAME_DEV: CourseData = {
  slug: "game-development",
  title: "Game Development",
  description: "Master game development with Unity, Three.js, WebGL and Phaser. Build 2D games, 3D worlds and educational games.",
  keywords: ["game development course india", "unity course india", "threejs tutorial", "learn game dev india", "game development hindi"],
  color: "#f59e0b",
  icon: "🎮",
  modules: [
    { id: "m1", title: "Game Dev Fundamentals", icon: "🎯", color: "#f59e0b", chapters: [
      { id: "m1c1", title: "Introduction to Game Development", topics: ["Game loop concept", "2D vs 3D games", "Game engines overview", "Setting up dev environment"] },
      { id: "m1c2", title: "Game Math Basics", topics: ["Vectors & coordinates", "Trigonometry for games", "Physics basics", "Collision math"] },
      { id: "m1c3", title: "Game Design Principles", topics: ["Core gameplay loop", "Player motivation", "Level design basics", "Game feel & juice"] },
      { id: "m1c4", title: "Input & Controls", topics: ["Keyboard input", "Mouse/touch input", "Gamepad support", "Input mapping systems"] },
      { id: "m1c5", title: "Game States & Scenes", topics: ["State machines", "Scene management", "Loading screens", "Game flow design"] },
    ]},
    { id: "m2", title: "Three.js & WebGL", icon: "🌐", color: "#06b6d4", chapters: [
      { id: "m2c1", title: "Three.js Setup", topics: ["Scene, Camera, Renderer", "WebGL basics", "Lights & shadows", "Materials & textures"] },
      { id: "m2c2", title: "3D Models & Animation", topics: ["GLB/GLTF loading", "Mixamo animations", "Animation mixer", "Skeleton rigging"] },
      { id: "m2c3", title: "Physics in Three.js", topics: ["Cannon.js physics", "Rigid bodies", "Collision detection", "Raycasting"] },
      { id: "m2c4", title: "Shader Programming", topics: ["Vertex shaders", "Fragment shaders", "GLSL basics", "Custom materials"] },
      { id: "m2c5", title: "Browser Game Project", topics: ["Character controller", "Camera follow", "Collectibles system", "Score & UI"] },
    ]},
    { id: "m3", title: "Unity Fundamentals", icon: "⚙️", color: "#1D9E75", chapters: [
      { id: "m3c1", title: "Unity Interface & Setup", topics: ["Unity Hub & editor", "Project structure", "Scene view basics", "Inspector panel"] },
      { id: "m3c2", title: "C# for Unity", topics: ["C# basics", "MonoBehaviour", "Start() & Update()", "Coroutines"] },
      { id: "m3c3", title: "Unity Physics", topics: ["Rigidbody component", "Colliders", "Physics materials", "Joints & constraints"] },
      { id: "m3c4", title: "Unity 2D Games", topics: ["Tilemap system", "2D sprites & animation", "2D physics", "Platformer mechanics"] },
      { id: "m3c5", title: "Unity 3D Games", topics: ["3D movement", "First person controller", "Third person camera", "NavMesh pathfinding"] },
    ]},
    { id: "m4", title: "Phaser.js (2D Browser Games)", icon: "🕹️", color: "#ec4899", chapters: [
      { id: "m4c1", title: "Phaser Setup", topics: ["Game config", "Scene lifecycle", "Asset preloading", "Phaser arcade physics"] },
      { id: "m4c2", title: "Sprites & Animation", topics: ["Sprite sheets", "Animations", "Tilemaps", "Camera scrolling"] },
      { id: "m4c3", title: "Game Mechanics", topics: ["Platformer physics", "Shooter mechanics", "Puzzle logic", "Enemy AI basics"] },
      { id: "m4c4", title: "Educational Quiz Game", topics: ["Quiz game design", "Question database", "Score system", "Progress tracking"] },
      { id: "m4c5", title: "Deploy & Publish", topics: ["Build for web", "Itch.io publishing", "Mobile with Cordova", "Performance optimization"] },
    ]},
    { id: "m5", title: "Advanced Game Dev", icon: "🚀", color: "#7c3aed", chapters: [
      { id: "m5c1", title: "Multiplayer Basics", topics: ["WebSocket for games", "Colyseus.js", "State synchronization", "Lag compensation"] },
      { id: "m5c2", title: "Game AI", topics: ["Finite state machines", "A* pathfinding", "Behavior trees", "Decision making"] },
      { id: "m5c3", title: "Game Audio", topics: ["Howler.js", "Spatial audio", "Music & SFX", "Audio pooling"] },
      { id: "m5c4", title: "Monetization", topics: ["In-app purchases", "Ad integration", "Premium vs free", "Game analytics"] },
      { id: "m5c5", title: "Capstone: Full Game", topics: ["Game design doc", "Full implementation", "Play testing", "Launch checklist"] },
    ]},
  ],
};

// ─── FULL STACK ───────────────────────────────────────────────────────────────
export const FULL_STACK: CourseData = {
  slug: "full-stack-development",
  title: "Full Stack Development",
  description: "Build complete web applications with React, Next.js, Django and PostgreSQL. From frontend to backend to deployment.",
  keywords: ["full stack development course india", "react django course", "nextjs course india", "web developer course india"],
  color: "#1D9E75",
  icon: "💻",
  modules: [
    { id: "m1", title: "HTML, CSS & JavaScript", icon: "🌐", color: "#1D9E75", chapters: [
      { id: "m1c1", title: "HTML5 Fundamentals", topics: ["Semantic HTML", "Forms & validation", "Accessibility", "HTML5 APIs"] },
      { id: "m1c2", title: "CSS3 & Modern Layouts", topics: ["Flexbox mastery", "CSS Grid", "Animations & transitions", "CSS variables"] },
      { id: "m1c3", title: "JavaScript ES6+", topics: ["Arrow functions", "Promises & async/await", "Destructuring", "Modules"] },
      { id: "m1c4", title: "DOM Manipulation", topics: ["Query selectors", "Event listeners", "Dynamic content", "Local storage"] },
      { id: "m1c5", title: "Responsive Design", topics: ["Media queries", "Mobile first", "Tailwind CSS", "Design systems"] },
    ]},
    { id: "m2", title: "React.js", icon: "⚛️", color: "#61dafb", chapters: [
      { id: "m2c1", title: "React Fundamentals", topics: ["JSX syntax", "Components & props", "State management", "Event handling"] },
      { id: "m2c2", title: "React Hooks", topics: ["useState & useEffect", "useContext", "useRef & useMemo", "Custom hooks"] },
      { id: "m2c3", title: "React Router", topics: ["Route setup", "Dynamic routes", "Protected routes", "Navigation"] },
      { id: "m2c4", title: "State Management", topics: ["Context API", "Redux Toolkit", "Zustand", "React Query"] },
      { id: "m2c5", title: "React Project", topics: ["E-commerce UI", "Authentication flow", "API integration", "Performance optimization"] },
    ]},
    { id: "m3", title: "Next.js", icon: "▲", color: "#fff", chapters: [
      { id: "m3c1", title: "Next.js App Router", topics: ["File-based routing", "Layouts & templates", "Server components", "Client components"] },
      { id: "m3c2", title: "Data Fetching", topics: ["Server-side fetching", "Static generation", "ISR", "Streaming"] },
      { id: "m3c3", title: "Next.js SEO", topics: ["Metadata API", "OpenGraph", "Sitemap & robots", "Core Web Vitals"] },
      { id: "m3c4", title: "API Routes", topics: ["Route handlers", "Middleware", "Authentication", "Edge functions"] },
      { id: "m3c5", title: "Deployment", topics: ["Vercel deployment", "Environment variables", "CI/CD", "Performance monitoring"] },
    ]},
    { id: "m4", title: "Django Backend", icon: "🐍", color: "#092e20", chapters: [
      { id: "m4c1", title: "Django Fundamentals", topics: ["Models & ORM", "Views & URLs", "Templates", "Admin panel"] },
      { id: "m4c2", title: "Django REST Framework", topics: ["Serializers", "ViewSets", "Authentication", "Permissions"] },
      { id: "m4c3", title: "Database Design", topics: ["PostgreSQL setup", "Migrations", "Relationships", "Query optimization"] },
      { id: "m4c4", title: "Auth & Security", topics: ["JWT authentication", "CORS setup", "Rate limiting", "Security best practices"] },
      { id: "m4c5", title: "Deploy Django", topics: ["Render deployment", "Environment config", "Static files", "Monitoring"] },
    ]},
    { id: "m5", title: "Capstone Projects", icon: "🏆", color: "#f59e0b", chapters: [
      { id: "m5c1", title: "EdTech Platform", topics: ["Course management", "Video system", "Progress tracking", "Payment integration"] },
      { id: "m5c2", title: "E-Commerce App", topics: ["Product catalog", "Cart & checkout", "Order management", "Admin dashboard"] },
      { id: "m5c3", title: "Social Media App", topics: ["User profiles", "Posts & feeds", "Real-time chat", "Notifications"] },
      { id: "m5c4", title: "SaaS Dashboard", topics: ["Multi-tenant setup", "Analytics", "Subscription billing", "API docs"] },
      { id: "m5c5", title: "Portfolio & Career", topics: ["Portfolio website", "GitHub profile", "LinkedIn optimization", "Job applications"] },
    ]},
  ],
};

// ─── PYTHON ───────────────────────────────────────────────────────────────────
export const PYTHON: CourseData = {
  slug: "python-programming-course",
  title: "Python Programming",
  description: "Master Python from zero to advanced. Automation, APIs, web scraping, OOP, and real-world projects.",
  keywords: ["python course india", "learn python hindi", "python programming beginners", "python automation course india"],
  color: "#ec4899",
  icon: "🐍",
  modules: [
    { id: "m1", title: "Python Basics", icon: "🐣", color: "#ec4899", chapters: [
      { id: "m1c1", title: "Getting Started", topics: ["Python installation", "IDLE & VS Code", "First program", "print() & input()"] },
      { id: "m1c2", title: "Variables & Data Types", topics: ["int, float, str, bool", "Type conversion", "Variable naming", "Constants"] },
      { id: "m1c3", title: "Operators", topics: ["Arithmetic operators", "Comparison operators", "Logical operators", "Assignment operators"] },
      { id: "m1c4", title: "Control Flow", topics: ["if / elif / else", "Nested conditions", "Ternary expressions", "match statement"] },
      { id: "m1c5", title: "Loops", topics: ["for loops", "while loops", "break & continue", "List comprehensions"] },
    ]},
    { id: "m2", title: "Data Structures", icon: "📦", color: "#7c3aed", chapters: [
      { id: "m2c1", title: "Strings", topics: ["String methods", "f-strings", "String slicing", "String formatting"] },
      { id: "m2c2", title: "Lists", topics: ["List operations", "List methods", "Sorting", "List comprehensions"] },
      { id: "m2c3", title: "Tuples & Sets", topics: ["Tuple immutability", "Set operations", "Union & intersection", "Frozen sets"] },
      { id: "m2c4", title: "Dictionaries", topics: ["Dict methods", "Nested dicts", "defaultdict", "Counter"] },
      { id: "m2c5", title: "Functions", topics: ["def keyword", "Parameters", "*args & **kwargs", "Lambda functions"] },
    ]},
    { id: "m3", title: "OOP in Python", icon: "🏗️", color: "#1D9E75", chapters: [
      { id: "m3c1", title: "Classes & Objects", topics: ["class keyword", "__init__ method", "Instance vs class vars", "self keyword"] },
      { id: "m3c2", title: "Inheritance", topics: ["Single inheritance", "Multiple inheritance", "super() function", "Method resolution order"] },
      { id: "m3c3", title: "Polymorphism", topics: ["Method overriding", "Duck typing", "Abstract classes", "Interfaces pattern"] },
      { id: "m3c4", title: "Special Methods", topics: ["__str__ & __repr__", "__len__ & __iter__", "Operator overloading", "Context managers"] },
      { id: "m3c5", title: "Modules & Packages", topics: ["import system", "Creating packages", "__init__.py", "Virtual environments"] },
    ]},
    { id: "m4", title: "Python in Practice", icon: "🔧", color: "#f59e0b", chapters: [
      { id: "m4c1", title: "File I/O", topics: ["open() function", "Reading & writing", "CSV files", "JSON handling"] },
      { id: "m4c2", title: "Error Handling", topics: ["try/except/finally", "Custom exceptions", "raise statement", "Logging"] },
      { id: "m4c3", title: "Regular Expressions", topics: ["re module", "Pattern matching", "Groups & capture", "Search & replace"] },
      { id: "m4c4", title: "Web Scraping", topics: ["requests library", "BeautifulSoup", "Selenium basics", "Scraping ethics"] },
      { id: "m4c5", title: "Automation", topics: ["OS module", "Subprocess", "Schedule tasks", "GUI automation"] },
    ]},
    { id: "m5", title: "APIs & Projects", icon: "🚀", color: "#06b6d4", chapters: [
      { id: "m5c1", title: "REST APIs with FastAPI", topics: ["FastAPI setup", "Endpoints", "Pydantic models", "Async support"] },
      { id: "m5c2", title: "Working with APIs", topics: ["requests library", "Authentication", "Rate limiting", "Pagination"] },
      { id: "m5c3", title: "Database with Python", topics: ["SQLite with Python", "SQLAlchemy basics", "CRUD operations", "Migrations"] },
      { id: "m5c4", title: "Testing in Python", topics: ["unittest module", "pytest", "Mocking", "TDD basics"] },
      { id: "m5c5", title: "Capstone Projects", topics: ["Weather CLI app", "URL shortener API", "Expense tracker", "Portfolio project"] },
    ]},
  ],
};

// ─── IoT & ROBOTICS ───────────────────────────────────────────────────────────
export const IOT: CourseData = {
  slug: "iot-robotics",
  title: "IoT & Robotics",
  description: "Build smart devices with Arduino, Raspberry Pi, sensors and MQTT. Learn embedded systems and robotics from scratch.",
  keywords: ["iot course india", "arduino tutorial hindi", "raspberry pi course india", "robotics course india", "embedded systems course"],
  color: "#06b6d4",
  icon: "⚙️",
  modules: [
    { id: "m1", title: "Electronics Fundamentals", icon: "⚡", color: "#06b6d4", chapters: [
      { id: "m1c1", title: "Basic Electronics", topics: ["Voltage, current, resistance", "Ohm's law", "Circuit basics", "Breadboard usage"] },
      { id: "m1c2", title: "Electronic Components", topics: ["Resistors & capacitors", "LEDs & diodes", "Transistors", "Relays"] },
      { id: "m1c3", title: "Digital vs Analog", topics: ["Binary logic", "Digital signals", "Analog signals", "ADC & DAC"] },
      { id: "m1c4", title: "Power Systems", topics: ["Batteries & power supply", "Voltage regulators", "Current protection", "Safe practices"] },
      { id: "m1c5", title: "Soldering & PCB", topics: ["Soldering basics", "PCB design intro", "Circuit testing", "Multimeter usage"] },
    ]},
    { id: "m2", title: "Arduino Programming", icon: "🤖", color: "#00979D", chapters: [
      { id: "m2c1", title: "Arduino Setup", topics: ["Arduino Uno/Nano", "IDE installation", "First sketch", "Upload & debug"] },
      { id: "m2c2", title: "Digital I/O", topics: ["pinMode()", "digitalWrite()", "digitalRead()", "LED blink projects"] },
      { id: "m2c3", title: "Analog I/O", topics: ["analogRead()", "analogWrite()", "PWM signals", "Sensor reading"] },
      { id: "m2c4", title: "Sensors", topics: ["Temperature sensors", "Ultrasonic sensors", "IR sensors", "Light sensors"] },
      { id: "m2c5", title: "Motors & Actuators", topics: ["DC motors", "Servo motors", "Stepper motors", "Motor drivers"] },
    ]},
    { id: "m3", title: "Raspberry Pi", icon: "🍓", color: "#c51a4a", chapters: [
      { id: "m3c1", title: "Raspberry Pi Setup", topics: ["OS installation", "SSH setup", "GPIO basics", "Python on Pi"] },
      { id: "m3c2", title: "GPIO Programming", topics: ["GPIO library", "Digital output", "Digital input", "Interrupts"] },
      { id: "m3c3", title: "Camera Module", topics: ["Pi camera setup", "Image capture", "Video recording", "OpenCV basics"] },
      { id: "m3c4", title: "Networking on Pi", topics: ["WiFi setup", "Static IP", "SSH tunneling", "Remote access"] },
      { id: "m3c5", title: "Pi Projects", topics: ["Home automation", "Security camera", "Weather station", "Voice assistant"] },
    ]},
    { id: "m4", title: "IoT Connectivity", icon: "📡", color: "#f59e0b", chapters: [
      { id: "m4c1", title: "WiFi & ESP8266/ESP32", topics: ["ESP32 setup", "WiFi connection", "Web server on ESP", "OTA updates"] },
      { id: "m4c2", title: "MQTT Protocol", topics: ["MQTT concepts", "Mosquitto broker", "Publish & subscribe", "QoS levels"] },
      { id: "m4c3", title: "Cloud IoT Platforms", topics: ["AWS IoT Core", "Firebase for IoT", "ThingSpeak", "Blynk platform"] },
      { id: "m4c4", title: "Bluetooth & BLE", topics: ["HC-05 module", "BLE on ESP32", "Android app control", "BLE scanning"] },
      { id: "m4c5", title: "LoRa & Long Range", topics: ["LoRa modules", "LoRaWAN protocol", "TTN network", "Range testing"] },
    ]},
    { id: "m5", title: "Robotics Projects", icon: "🦾", color: "#ec4899", chapters: [
      { id: "m5c1", title: "Robot Chassis", topics: ["Chassis types", "Wheel selection", "Frame assembly", "Weight distribution"] },
      { id: "m5c2", title: "Line Following Robot", topics: ["IR sensor array", "PID control", "Motor control", "Track calibration"] },
      { id: "m5c3", title: "Obstacle Avoidance", topics: ["Ultrasonic array", "Decision algorithm", "Servo scanning", "Maze solving"] },
      { id: "m5c4", title: "Robotic Arm", topics: ["Servo kinematics", "Inverse kinematics", "Gripper control", "Pick & place"] },
      { id: "m5c5", title: "Capstone: Smart Home", topics: ["Sensor network", "MQTT dashboard", "Mobile control app", "Automation rules"] },
    ]},
  ],
};

// ─── AI COURSE ────────────────────────────────────────────────────────────────
export const AI_COURSE: CourseData = {
  slug: "ai-course",
  title: "AI & Machine Learning",
  description: "Master AI from fundamentals to production. LLMs, neural networks, computer vision, NLP, RAG systems and MLOps.",
  keywords: ["ai course india", "machine learning course hindi", "llm course india", "artificial intelligence india", "deep learning course"],
  color: "#00d4ff",
  icon: "🤖",
  modules: [
    { id: "m1", title: "AI Fundamentals", icon: "🧠", color: "#00d4ff", chapters: [
      { id: "m1c1", title: "What is AI?", topics: ["AI vs ML vs DL", "History of AI", "AI applications", "AI ethics"] },
      { id: "m1c2", title: "Python for AI", topics: ["NumPy mastery", "Pandas for data", "Matplotlib viz", "Jupyter notebooks"] },
      { id: "m1c3", title: "Mathematics for AI", topics: ["Linear algebra", "Probability & stats", "Calculus intuition", "Optimization"] },
      { id: "m1c4", title: "Data Preprocessing", topics: ["Data cleaning", "Feature engineering", "Normalization", "Train/test split"] },
      { id: "m1c5", title: "ML Algorithms Overview", topics: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Evaluation metrics"] },
    ]},
    { id: "m2", title: "Classical ML", icon: "📊", color: "#7c3aed", chapters: [
      { id: "m2c1", title: "Regression", topics: ["Linear regression", "Polynomial regression", "Ridge & Lasso", "R² score"] },
      { id: "m2c2", title: "Classification", topics: ["Logistic regression", "Decision trees", "Random forests", "SVM"] },
      { id: "m2c3", title: "Clustering", topics: ["K-Means", "DBSCAN", "Hierarchical clustering", "Silhouette score"] },
      { id: "m2c4", title: "Model Evaluation", topics: ["Confusion matrix", "ROC-AUC", "Cross-validation", "Hyperparameter tuning"] },
      { id: "m2c5", title: "Scikit-learn Pipeline", topics: ["Pipeline API", "ColumnTransformer", "GridSearchCV", "Model persistence"] },
    ]},
    { id: "m3", title: "Deep Learning", icon: "🔮", color: "#ec4899", chapters: [
      { id: "m3c1", title: "Neural Networks", topics: ["Perceptron", "Backpropagation", "Activation functions", "Loss functions"] },
      { id: "m3c2", title: "PyTorch", topics: ["Tensors", "Autograd", "nn.Module", "Training loop"] },
      { id: "m3c3", title: "CNNs", topics: ["Convolution operation", "Pooling layers", "ResNet & VGG", "Transfer learning"] },
      { id: "m3c4", title: "RNNs & LSTMs", topics: ["Sequence modeling", "LSTM gates", "Bidirectional", "Time series DL"] },
      { id: "m3c5", title: "Transformers", topics: ["Attention mechanism", "BERT & GPT", "Fine-tuning", "Prompt engineering"] },
    ]},
    { id: "m4", title: "LLMs & Generative AI", icon: "💬", color: "#1D9E75", chapters: [
      { id: "m4c1", title: "LLM Fundamentals", topics: ["How LLMs work", "GPT architecture", "Tokenization", "Inference basics"] },
      { id: "m4c2", title: "Prompt Engineering", topics: ["Zero-shot prompting", "Few-shot prompting", "Chain of thought", "System prompts"] },
      { id: "m4c3", title: "RAG Systems", topics: ["Vector databases", "Embeddings", "Retrieval pipeline", "LangChain basics"] },
      { id: "m4c4", title: "Fine-tuning LLMs", topics: ["LoRA & QLoRA", "PEFT methods", "Training data prep", "Evaluation"] },
      { id: "m4c5", title: "AI Agents", topics: ["Agent architecture", "Tool calling", "Memory systems", "Multi-agent"] },
    ]},
    { id: "m5", title: "MLOps & Production AI", icon: "🚀", color: "#f59e0b", chapters: [
      { id: "m5c1", title: "Model Serving", topics: ["FastAPI for ML", "ONNX runtime", "TorchServe", "Batch inference"] },
      { id: "m5c2", title: "MLflow", topics: ["Experiment tracking", "Model registry", "Model versioning", "Serving"] },
      { id: "m5c3", title: "Docker for AI", topics: ["Containerizing models", "GPU Docker", "Multi-stage builds", "Registry"] },
      { id: "m5c4", title: "Monitoring", topics: ["Data drift detection", "Model drift", "Evidently AI", "Alerting"] },
      { id: "m5c5", title: "AI Project End-to-End", topics: ["Problem framing", "Data pipeline", "Model training", "Production deploy"] },
    ]},
  ],
};

// ─── WEB DEVELOPMENT ─────────────────────────────────────────────────────────
export const WEB_DEV: CourseData = {
  slug: "web-development-course",
  title: "Web Development",
  description: "Learn modern web development from HTML basics to advanced JavaScript, React, and deploying real websites.",
  keywords: ["web development course india", "html css javascript course", "react course india", "frontend developer india"],
  color: "#84cc16",
  icon: "🌐",
  modules: [
    { id: "m1", title: "HTML & CSS Foundations", icon: "📄", color: "#84cc16", chapters: [
      { id: "m1c1", title: "HTML Basics", topics: ["Document structure", "Headings & paragraphs", "Links & images", "Lists & tables"] },
      { id: "m1c2", title: "HTML Forms", topics: ["Input types", "Form validation", "Select & checkbox", "Form submission"] },
      { id: "m1c3", title: "CSS Fundamentals", topics: ["Selectors", "Box model", "Colors & fonts", "Cascade & specificity"] },
      { id: "m1c4", title: "CSS Layouts", topics: ["Flexbox", "CSS Grid", "Positioning", "Z-index & overflow"] },
      { id: "m1c5", title: "Responsive Design", topics: ["Media queries", "Mobile-first", "Viewport units", "Responsive images"] },
    ]},
    { id: "m2", title: "JavaScript", icon: "⚡", color: "#f59e0b", chapters: [
      { id: "m2c1", title: "JS Fundamentals", topics: ["Variables & types", "Functions", "Arrays & objects", "Control flow"] },
      { id: "m2c2", title: "DOM Manipulation", topics: ["Query selectors", "Event listeners", "Creating elements", "classList API"] },
      { id: "m2c3", title: "ES6+ Features", topics: ["Arrow functions", "Destructuring", "Spread operator", "Template literals"] },
      { id: "m2c4", title: "Async JavaScript", topics: ["Callbacks", "Promises", "async/await", "Fetch API"] },
      { id: "m2c5", title: "JS Projects", topics: ["To-do app", "Weather app", "Quiz game", "Calculator"] },
    ]},
    { id: "m3", title: "CSS Advanced", icon: "🎨", color: "#06b6d4", chapters: [
      { id: "m3c1", title: "CSS Animations", topics: ["Transitions", "Keyframe animations", "Transform", "Animation timing"] },
      { id: "m3c2", title: "Tailwind CSS", topics: ["Utility classes", "Responsive utilities", "Dark mode", "Custom config"] },
      { id: "m3c3", title: "CSS Variables", topics: ["Custom properties", "Theming", "Dynamic styles", "Design tokens"] },
      { id: "m3c4", title: "CSS Preprocessors", topics: ["SASS basics", "Nesting", "Mixins", "Variables"] },
      { id: "m3c5", title: "Design Systems", topics: ["Component library", "Typography scale", "Color systems", "Spacing system"] },
    ]},
    { id: "m4", title: "React Basics", icon: "⚛️", color: "#61dafb", chapters: [
      { id: "m4c1", title: "React Introduction", topics: ["What is React?", "JSX syntax", "Create React App", "Component basics"] },
      { id: "m4c2", title: "Components & Props", topics: ["Function components", "Props", "Children", "Component composition"] },
      { id: "m4c3", title: "State & Events", topics: ["useState hook", "Event handlers", "Controlled inputs", "Lifting state"] },
      { id: "m4c4", title: "useEffect & APIs", topics: ["useEffect hook", "Fetch in React", "Loading states", "Error handling"] },
      { id: "m4c5", title: "React Project", topics: ["Blog app", "Movie search", "GitHub profile viewer", "Deploy to Vercel"] },
    ]},
    { id: "m5", title: "Tools & Deployment", icon: "🛠️", color: "#ec4899", chapters: [
      { id: "m5c1", title: "Git & GitHub", topics: ["Git basics", "Branching", "Pull requests", "GitHub Pages"] },
      { id: "m5c2", title: "NPM & Build Tools", topics: ["npm basics", "Webpack intro", "Vite setup", "Package.json"] },
      { id: "m5c3", title: "Deployment", topics: ["Vercel", "Netlify", "GitHub Actions", "Custom domains"] },
      { id: "m5c4", title: "Web Performance", topics: ["Lighthouse audit", "Image optimization", "Lazy loading", "Core Web Vitals"] },
      { id: "m5c5", title: "Capstone Website", topics: ["Portfolio site", "Multi-page app", "Dark mode", "PWA basics"] },
    ]},
  ],
  
};


export const ALL_COURSES: Record<string, CourseData> = {
  "game-development": GAME_DEV,
  "full-stack-development": FULL_STACK,
  "python-programming-course": PYTHON,
  "iot-robotics": IOT,
  "ai-course": AI_COURSE,
  "web-development-course": WEB_DEV,
};
