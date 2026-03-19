// ============================================================
// FILE LOCATION: seekhowithrua-seo/app/game-development/page.tsx
// ACTION: REPLACE existing page.tsx inside app/game-development/
// ============================================================

import type { Metadata } from "next";
import CoursePageTemplate from "@/components/CoursePageTemplate";

export const metadata: Metadata = {
  title: "Game Development Course India | Unity, Three.js, WebGL, Phaser | SeekhowithRua",
  description: "Learn Game Development with Unity, Three.js, WebGL and Phaser. Build 2D games, 3D worlds and browser games from scratch. Best game dev course India 2025.",
  keywords: ["game development course india", "unity course india", "threejs tutorial", "learn game dev india", "game development hindi", "phaser js course", "webgl tutorial india"],
  alternates: { canonical: "https://seekhowithrua.com/game-development" },
  openGraph: {
    title: "Game Development Course | SeekhowithRua",
    description: "Master Unity, Three.js, WebGL and Phaser game development.",
    url: "https://seekhowithrua.com/game-development",
    type: "website",
  },
};

const COURSE = {
  slug: "game-development",
  title: "Game Development",
  description: "Master game development with Unity, Three.js, WebGL and Phaser. Build 2D games, 3D worlds, browser games and educational games from scratch.",
  keywords: ["game development course india", "unity course india", "threejs tutorial", "learn game dev india"],
  color: "#f59e0b",
  icon: "🎮",
  modules: [
    {
      id: "m1", title: "Game Dev Fundamentals", icon: "🎯", color: "#f59e0b",
      chapters: [
        { id: "m1c1", title: "Introduction to Game Development", topics: ["Game loop concept", "2D vs 3D games", "Game engines overview", "Setting up dev environment"] },
        { id: "m1c2", title: "Game Math Basics", topics: ["Vectors & coordinates", "Trigonometry for games", "Physics basics", "Collision math"] },
        { id: "m1c3", title: "Game Design Principles", topics: ["Core gameplay loop", "Player motivation", "Level design basics", "Game feel & juice"] },
        { id: "m1c4", title: "Input & Controls", topics: ["Keyboard input", "Mouse/touch input", "Gamepad support", "Input mapping systems"] },
        { id: "m1c5", title: "Game States & Scenes", topics: ["State machines", "Scene management", "Loading screens", "Game flow design"] },
      ]
    },
    {
      id: "m2", title: "Three.js & WebGL", icon: "🌐", color: "#06b6d4",
      chapters: [
        { id: "m2c1", title: "Three.js Setup", topics: ["Scene, Camera, Renderer", "WebGL basics", "Lights & shadows", "Materials & textures"] },
        { id: "m2c2", title: "3D Models & Animation", topics: ["GLB/GLTF loading", "Mixamo animations", "Animation mixer", "Skeleton rigging"] },
        { id: "m2c3", title: "Physics in Three.js", topics: ["Cannon.js physics", "Rigid bodies", "Collision detection", "Raycasting"] },
        { id: "m2c4", title: "Shader Programming", topics: ["Vertex shaders", "Fragment shaders", "GLSL basics", "Custom materials"] },
        { id: "m2c5", title: "Browser Game Project", topics: ["Character controller", "Camera follow", "Collectibles system", "Score & UI"] },
      ]
    },
    {
      id: "m3", title: "Unity Fundamentals", icon: "⚙️", color: "#1D9E75",
      chapters: [
        { id: "m3c1", title: "Unity Interface & Setup", topics: ["Unity Hub & editor", "Project structure", "Scene view basics", "Inspector panel"] },
        { id: "m3c2", title: "C# for Unity", topics: ["C# basics", "MonoBehaviour", "Start() & Update()", "Coroutines"] },
        { id: "m3c3", title: "Unity Physics", topics: ["Rigidbody component", "Colliders", "Physics materials", "Joints & constraints"] },
        { id: "m3c4", title: "Unity 2D Games", topics: ["Tilemap system", "2D sprites & animation", "2D physics", "Platformer mechanics"] },
        { id: "m3c5", title: "Unity 3D Games", topics: ["3D movement", "First person controller", "Third person camera", "NavMesh pathfinding"] },
      ]
    },
    {
      id: "m4", title: "Phaser.js (2D Browser Games)", icon: "🕹️", color: "#ec4899",
      chapters: [
        { id: "m4c1", title: "Phaser Setup", topics: ["Game config", "Scene lifecycle", "Asset preloading", "Phaser arcade physics"] },
        { id: "m4c2", title: "Sprites & Animation", topics: ["Sprite sheets", "Animations", "Tilemaps", "Camera scrolling"] },
        { id: "m4c3", title: "Game Mechanics", topics: ["Platformer physics", "Shooter mechanics", "Puzzle logic", "Enemy AI basics"] },
        { id: "m4c4", title: "Educational Quiz Game", topics: ["Quiz game design", "Question database", "Score system", "Progress tracking"] },
        { id: "m4c5", title: "Deploy & Publish", topics: ["Build for web", "Itch.io publishing", "Mobile with Cordova", "Performance optimization"] },
      ]
    },
    {
      id: "m5", title: "Advanced Game Dev", icon: "🚀", color: "#7c3aed",
      chapters: [
        { id: "m5c1", title: "Multiplayer Basics", topics: ["WebSocket for games", "Colyseus.js", "State synchronization", "Lag compensation"] },
        { id: "m5c2", title: "Game AI", topics: ["Finite state machines", "A* pathfinding", "Behavior trees", "Decision making"] },
        { id: "m5c3", title: "Game Audio", topics: ["Howler.js", "Spatial audio", "Music & SFX", "Audio pooling"] },
        { id: "m5c4", title: "Monetization", topics: ["In-app purchases", "Ad integration", "Premium vs free", "Game analytics"] },
        { id: "m5c5", title: "Capstone: Full Game", topics: ["Game design doc", "Full implementation", "Play testing", "Launch checklist"] },
      ]
    },
  ],
};

export default function GameDevPage() {
  return <CoursePageTemplate course={COURSE} />;
}