import React, { useEffect, useRef, useState } from 'react';

// --- Icons (Internal SVG Definitions to avoid dependency errors) ---
// Replacing lucide-react imports with self-contained SVG components for maximum stability.

const IconBase = ({ size = 24, className = "", children }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const ArrowRight = (props) => (
  <IconBase {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconBase>
);

const Mail = (props) => (
  <IconBase {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconBase>
);

const Box = (props) => (
  <IconBase {...props}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22v-9" />
  </IconBase>
);

const Clock = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconBase>
);

const Camera = (props) => (
  <IconBase {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </IconBase>
);

const Gamepad2 = (props) => (
  <IconBase {...props}>
    <line x1="6" x2="10" y1="12" y2="12" />
    <line x1="8" x2="8" y1="10" y2="14" />
    <line x1="15" x2="15.01" y1="13" y2="13" />
    <line x1="18" x2="18.01" y1="11" y2="11" />
    <rect width="20" height="12" x="2" y="6" rx="2" />
  </IconBase>
);

const Code2 = (props) => (
  <IconBase {...props}>
    <path d="m18 16 4-4-4-4" />
    <path d="m6 8-4 4 4 4" />
    <path d="m14.5 4-5 16" />
  </IconBase>
);

const Layers = (props) => (
  <IconBase {...props}>
    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
  </IconBase>
);

const Cpu = (props) => (
  <IconBase {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </IconBase>
);

const Globe = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </IconBase>
);

const X = (props) => (
  <IconBase {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);

const CheckCircle2 = (props) => (
  <IconBase {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </IconBase>
);

const Sparkles = (props) => (
  <IconBase {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 5H5" />
  </IconBase>
);

const Zap = (props) => (
  <IconBase {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconBase>
);

const MapPin = (props) => (
  <IconBase {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);

// --- Three.js Particle System for Hero Section ---
const ParticleBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const particleCount = 100;
    const particles = [];
    const connectionDistance = 150;
    
    // Resize handling
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow flux movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.baseColor = 'rgba(99, 102, 241,'; // Indigo base
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges gently
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor} ${Math.random() * 0.5 + 0.2})`;
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw connections (Flux Web)
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.08)'; // Violet, very faint
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={mountRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
};

// --- Components ---

const NavBar = ({ onContactClick }) => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0C]/70 border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Simple geometric logo */}
        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full opacity-80" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white font-space">
          Star Flux <span className="text-white/40 font-light">Digital</span>
        </span>
      </div>
      <button 
        onClick={onContactClick}
        className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-all text-white flex items-center gap-2 group"
      >
        Contact Us
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <ParticleBackground />
    
    {/* Background Gradient Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium tracking-wider mb-8 uppercase animate-fade-in-up">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        Est. 2026
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 font-space animate-fade-in-up delay-100">
        Building the <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 animate-gradient-x">
          Digital Future
        </span>,
        <br />One Pixel at a Time.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
        We are a creative software studio crafting intuitive mobile applications, immersive games, and next-gen digital utilities. Where logic meets imagination.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 cursor-pointer"
        >
          View Our Work
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
      <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-2">
        <div className="w-1 h-2 bg-white/50 rounded-full" />
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section className="py-24 bg-[#0A0A0C] relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-space">
            Bridging the gap between <span className="text-indigo-400">Concept</span> and <span className="text-violet-400">Reality</span>.
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              At Star Flux Digital, we don't just write code; we solve problems. From complex board game mechanics to everyday productivity tools, our mission is to build software that feels natural, powerful, and indispensable.
            </p>
            <p>
              We leverage cutting-edge technologies like Flutter, Unity, and Unreal Engine 5 to bring ideas to life, ensuring that every interaction is smooth, responsive, and visually stunning.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white font-space">4+</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Core Technologies</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white font-space">Multi</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">Platform Focus</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Abstract Code Illustration */}
          <div className="relative z-10 bg-[#111113] rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-auto text-xs text-gray-600 font-mono">starflux_core.ts</span>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">01</span>
                <span className="text-indigo-400">class</span> <span className="text-yellow-200 ml-2">StarFlux</span> <span className="text-white">implements</span> <span className="text-yellow-200 ml-2">Innovation</span> <span className="text-white">{` {`}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">02</span>
                <span className="text-white ml-4">constructor(</span><span className="text-violet-400">vision</span><span className="text-white">, </span><span className="text-violet-400">tech</span><span className="text-white">) {` {`}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">03</span>
                <span className="text-indigo-400 ml-8">this</span><span className="text-white">.mission = </span><span className="text-green-400">'Build the Future'</span><span className="text-white">;</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">04</span>
                <span className="text-indigo-400 ml-8">this</span><span className="text-white">.quality = </span><span className="text-indigo-400">Infinity</span><span className="text-white">;</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">05</span>
                <span className="text-white ml-4">{`}`}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-8 text-right mr-4 select-none">06</span>
                <span className="text-white">...</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet-600/20 rounded-full blur-[60px]" />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-indigo-500/20 rounded-full animate-spin-slow" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-violet-500/20 rounded-full animate-reverse-spin" />
        </div>
      </div>
    </div>
  </section>
);

// --- Extended Projects Data with Details ---
const projectsData = [
  {
    id: 'boardkit',
    title: "BoardKit",
    category: "Tabletop Companion",
    desc: "A comprehensive utility suite for board game enthusiasts. Dice rollers, score trackers, and rule management in your pocket.",
    icon: Box,
    size: "large",
    accent: "indigo",
    features: [
      "Custom 3D Physics Engine for Dice",
      "Multi-user Score Sync via WebSocket",
      "Offline-first Rulebook Database",
      "Dark Mode Optimized for Late Night Gaming"
    ],
    status: "Live on App Store",
    tech: "Flutter / Firebase"
  },
  {
    id: 'fluxfocus',
    title: "FluxFocus",
    category: "Productivity & Flow",
    desc: "Minimalist tools designed to enhance personal efficiency and focus using Pomodoro techniques and ambient soundscapes.",
    icon: Clock,
    size: "small",
    accent: "emerald",
    features: [
      "Adaptive Focus Timer",
      "Generative Ambient Soundscapes",
      "Minimalist 'Zen' UI",
      "Daily Flow Analytics"
    ],
    status: "Beta Testing",
    tech: "React Native / Swift"
  },
  {
    id: 'aether',
    title: "Aether Lens",
    category: "AI-Powered Vision",
    desc: "Experimenting with visual computing and generative tech to bring AR utility to everyday scenarios.",
    icon: Camera,
    size: "small",
    accent: "violet",
    features: [
      "Real-time Object Recognition",
      "Neural Style Transfer",
      "AR Measurement Tools",
      "Edge Computing Optimization"
    ],
    status: "R&D Prototype",
    tech: "Python / TensorFlow Lite"
  },
  {
    id: 'nebula',
    title: "Project: Nebula",
    category: "Interactive Entertainment",
    desc: "Immersive mobile gaming experiences leveraging Unreal Engine 5 for high-fidelity graphics on handheld devices.",
    icon: Gamepad2,
    size: "medium",
    accent: "blue",
    features: [
      "High-Fidelity Ray Tracing on Mobile",
      "Cross-Platform Multiplayer",
      "Procedural Universe Generation",
      "Dynamic Storytelling Engine"
    ],
    status: "In Development",
    tech: "Unreal Engine 5 / C++"
  }
];

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0A0C]/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#111113] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-white/10">
        
        {/* Header Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-500/20 to-transparent pointer-events-none" />
        
        <div className="relative p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <h3 className="text-3xl font-bold text-white font-space mb-2">Contact Us</h3>
          <p className="text-gray-400 mb-8">Ready to start your next project? Let's talk.</p>

          <div className="space-y-4">
            {/* Address Card */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Office</h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  30 N Gould St Ste R<br />
                  Sheridan, WY 82801
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors group">
              <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1 group-hover:text-white group-hover:bg-indigo-600 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-lg">Email</h4>
                <a href="mailto:contact@starflux.digital" className="text-indigo-400 hover:text-indigo-300 text-base font-medium transition-colors">
                  contact@starflux.digital
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5">
             <p className="text-center text-gray-500 text-sm">
                We typically respond within 24 hours.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose, onRequestDemo }) => {
  if (!project) return null;

  const Icon = project.icon;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A0A0C]/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#111113] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 ring-1 ring-white/10">
        
        {/* Header Background Gradient */}
        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-${project.accent}-500/20 to-transparent pointer-events-none`} />
        
        <div className="relative p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          <div className="flex items-start gap-6 mb-8">
            <div className={`p-4 rounded-xl bg-white/5 border border-white/10 text-${project.accent}-400`}>
              <Icon size={40} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-bold text-white font-space">{project.title}</h3>
                <span className={`px-2 py-0.5 rounded text-xs font-medium border border-${project.accent}-500/30 bg-${project.accent}-500/10 text-${project.accent}-300 uppercase tracking-wider`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-lg">{project.category}</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 text-lg border-l-2 border-white/10 pl-4">
            {project.desc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <Sparkles size={16} className="text-yellow-500" /> Key Features
              </h4>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                    <CheckCircle2 size={16} className={`mt-0.5 text-${project.accent}-500 shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <Zap size={16} className="text-blue-500" /> Tech Stack
              </h4>
              <div className="flex items-center gap-2 text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                <Code2 size={18} />
                <span className="font-mono text-sm">{project.tech}</span>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/5">
                <button 
                  onClick={onRequestDemo}
                  className="w-full py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  Request Demo Access
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }) => {
  const Icon = project.icon;
  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-2 lg:col-span-1",
    large: "col-span-1 md:col-span-2",
  };

  const accentColors = {
    indigo: "group-hover:text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20",
    violet: "group-hover:text-violet-400 group-hover:bg-violet-500/10 group-hover:border-violet-500/20",
    emerald: "group-hover:text-emerald-400 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20",
    blue: "group-hover:text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20",
  };

  return (
    <div 
      onClick={() => onClick(project)}
      className={`${sizeClasses[project.size]} group relative bg-[#111113] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer overflow-hidden hover:border-white/10`}
    >
      <div className={`absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
        <div className="flex items-center gap-1 text-xs font-medium text-white/50 uppercase tracking-widest">
          View Details <ArrowRight size={14} />
        </div>
      </div>
      
      <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-white transition-all duration-300 ${accentColors[project.accent]}`}>
        <Icon size={28} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 font-space group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3 group-hover:text-gray-400 transition-colors">{project.category}</p>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${project.accent}-500/0 via-transparent to-${project.accent}-500/0 group-hover:to-${project.accent}-500/5 transition-all duration-500`} />
    </div>
  );
};

const Projects = ({ onRequestDemo }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">Featured Projects</h2>
          <p className="text-gray-400 max-w-xl">
            A glimpse into our ecosystem of digital products. Click on any project to explore its core features and technical architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          onRequestDemo={() => {
            setSelectedProject(null);
            setTimeout(onRequestDemo, 300);
          }}
        />
      )}
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "Flutter", icon: Layers },
    { name: "Unity", icon: Box },
    { name: "Unreal Engine 5", icon: Gamepad2 },
    { name: "Swift / Kotlin", icon: Code2 },
    { name: "Python", icon: Cpu },
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Powered By</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 group">
              <tech.icon size={32} className="text-white group-hover:text-indigo-400 transition-colors" />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-[#0A0A0C] pt-28 pb-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
      
      <div className="max-w-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-white rounded-full opacity-80" />
          </div>
          <span className="text-xl font-bold text-white font-space">Star Flux Digital</span>
        </div>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Crafting the unseen logic that powers the visible world.
        </p>
        <p className="text-gray-600 text-sm">
          © 2026 Star Flux Digital LLC. All rights reserved.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <h4 className="text-white text-xl font-bold font-space">Contact Info</h4>
        
        <div className="flex items-start gap-4 group">
          <div className="mt-1 p-2 bg-white/5 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
             <MapPin size={24} />
          </div>
          <div>
             <span className="block text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Office Address</span>
             <address className="not-italic text-gray-300 text-lg leading-relaxed">
               30 N Gould St Ste R<br />
               Sheridan, WY 82801
             </address>
          </div>
        </div>

        <div className="flex items-start gap-4 group">
          <div className="mt-1 p-2 bg-white/5 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <span className="block text-gray-500 text-sm uppercase tracking-wider font-semibold mb-1">Get in Touch</span>
            <a href="mailto:contact@starflux.digital" className="text-white text-lg hover:text-indigo-400 transition-colors font-medium">
              contact@starflux.digital
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // --- SEO Metadata Injection ---
  useEffect(() => {
    document.title = "Star Flux Digital | Building the Digital Future";
    const metaName = "description";
    const metaContent = "Star Flux Digital LLC is a creative software studio crafting intuitive mobile applications and digital utilities. Based in Wyoming, USA.";
    let metaTag = document.querySelector(`meta[name="${metaName}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = metaName;
      document.head.appendChild(metaTag);
    }
    metaTag.content = metaContent;
  }, []);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="bg-[#0A0A0C] min-h-screen text-gray-300 font-inter selection:bg-indigo-500/30 selection:text-white">
      {/* Global Font Injection for Preview Environment */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }

        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
      `}</style>

      <NavBar onContactClick={openContactModal} />
      <Hero />
      <Mission />
      <Projects onRequestDemo={openContactModal} />
      <TechStack />
      <Footer />

      {/* Contact Modal */}
      {isContactModalOpen && <ContactModal onClose={closeContactModal} />}
    </div>
  );
};

export default App;