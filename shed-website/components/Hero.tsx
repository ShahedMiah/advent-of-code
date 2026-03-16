"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ["#f59e0b", "#d97706", "#ef4444", "#b45309"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-900/20 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Decorative shed SVG */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <svg width="400" height="350" viewBox="0 0 400 350" fill="none">
          {/* Shed body */}
          <rect x="50" y="150" width="300" height="180" fill="#8B5E3C" stroke="#D97706" strokeWidth="2"/>
          {/* Roof */}
          <polygon points="20,150 200,30 380,150" fill="#6B4226" stroke="#D97706" strokeWidth="2"/>
          {/* Door */}
          <rect x="155" y="240" width="90" height="90" rx="4" fill="#5C3D1E" stroke="#D97706" strokeWidth="2"/>
          <circle cx="230" cy="290" r="5" fill="#D97706"/>
          {/* Windows */}
          <rect x="80" y="185" width="70" height="60" rx="4" fill="#1a1a1a" stroke="#D97706" strokeWidth="2"/>
          <line x1="115" y1="185" x2="115" y2="245" stroke="#D97706" strokeWidth="1"/>
          <line x1="80" y1="215" x2="150" y2="215" stroke="#D97706" strokeWidth="1"/>
          <rect x="250" y="185" width="70" height="60" rx="4" fill="#1a1a1a" stroke="#D97706" strokeWidth="2"/>
          <line x1="285" y1="185" x2="285" y2="245" stroke="#D97706" strokeWidth="1"/>
          <line x1="250" y1="215" x2="320" y2="215" stroke="#D97706" strokeWidth="1"/>
          {/* Wood planks */}
          <line x1="50" y1="200" x2="350" y2="200" stroke="#A0714F" strokeWidth="1" opacity="0.5"/>
          <line x1="50" y1="250" x2="50" y2="250" stroke="#A0714F" strokeWidth="1" opacity="0.5"/>
          <line x1="50" y1="270" x2="350" y2="270" stroke="#A0714F" strokeWidth="1" opacity="0.5"/>
          <line x1="50" y1="310" x2="350" y2="310" stroke="#A0714F" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-yellow-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          Complete DIY Build Guide
        </div>

        <h1 className="animate-fade-in-up text-5xl md:text-7xl font-black mb-6 leading-tight">
          Build Your
          <br />
          <span className="text-gradient">Dream Shed</span>
        </h1>

        <p className="animate-fade-in-up text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          From foundation to roof — a complete step-by-step guide to crafting
          a beautiful, durable shed that will last for decades.
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#steps"
            className="group bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 animate-pulse-glow"
          >
            Start Building
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
          <a
            href="#materials"
            className="glass border border-white/20 hover:border-yellow-500/50 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105"
          >
            View Materials
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10", unit: "Steps", label: "Simple steps" },
            { value: "2-3", unit: "Days", label: "To complete" },
            { value: "$800", unit: "+", label: "Starting budget" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4">
              <div className="text-2xl font-black text-yellow-400">
                {stat.value}
                <span className="text-lg text-yellow-600">{stat.unit}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-yellow-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
