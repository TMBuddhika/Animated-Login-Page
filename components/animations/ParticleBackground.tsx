import React, { useEffect, useRef } from 'react';
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    // Particle properties
    const particleCount = 100;
    const particles: Particle[] = [];
    const colors = ['#3B82F6', '#6366F1', '#8B5CF6', '#1E40AF'];
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5
        }
      });
    }
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        // Draw connections
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2));
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };
    animate();
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />;
};
// TypeScript interface for particles
interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
}
export default ParticleBackground;