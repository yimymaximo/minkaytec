import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configuration
        const particleCount = 60; // Number of nodes
        const connectionDistance = 150; // Max distance to connect
        const mouseDistance = 200; // Interaction radius

        let mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow velocity
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update(w: number, h: number) {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = 'rgba(100, 200, 255, 0.8)'; // Light blue glow
                context.shadowBlur = 10;
                context.shadowColor = 'rgba(100, 200, 255, 0.5)';
                context.fill();
                context.shadowBlur = 0; // Reset shadow for lines
            }
        }

        const init = () => {
            particles = [];
            const { width, height } = canvas;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(width, height));
            }
        };

        const animate = () => {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw background gradient (optional, can be done in CSS)
            // ctx.fillStyle = '#0a0a1a'; 
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle, index) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);

                // Connect particles
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = particle.x - p2.x;
                    const dy = particle.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / connectionDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse (optional interaction)
                /*
                const dx = particle.x - mouse.x;
                const dy = particle.y - mouse.y;
                const distMouse = Math.sqrt(dx * dx + dy * dy);
                if (distMouse < mouseDistance) {
                     ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 255, 200, ${1 - distMouse / mouseDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
                */
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                init();
            }
        };

        /*
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        */

        window.addEventListener('resize', handleResize);
        // canvas.addEventListener('mousemove', handleMouseMove);

        handleResize(); // Initial sizing
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            // canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }} // Dark blue gradient fallback
        />
    );
};

export default NetworkBackground;
