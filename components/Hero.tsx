import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 100 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
        this.color = `rgba(6, 182, 212, ${Math.random() * 0.5 + 0.3})`;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (!ctx) return;
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                             + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                if (distance < (canvas.width/7) * (canvas.height/7)) {
                    opacityValue = 1 - (distance/20000);
                    ctx.strokeStyle = `rgba(217, 70, 239, ${opacityValue * 0.3})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    canvas.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center bg-transparent py-24 md:py-40 overflow-hidden">
       <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50"></canvas>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)'}}>
          Charan Sai Kondilla
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500" style={{ textShadow: '0 0 15px rgba(103, 232, 249, 0.5)'}}>
          Innovating with AI & Digital Solutions
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
          I build intelligent automation systems and digital experiences that empower businesses. From advanced AI chatbots to comprehensive social media strategies, I'm here to elevate your digital presence.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="w-full sm:w-auto inline-block bg-slate-100 text-slate-900 font-semibold py-3 px-8 rounded-lg shadow-lg shadow-white/10 hover:bg-white transform hover:-translate-y-1 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer"
            >
              View My Work
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;