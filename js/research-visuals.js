/**
 * Research Visuals - Topology Network
 * Creates an interactive canvas background representing structural dynamics
 */

class TopologyNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.mouseX = 0;
        this.mouseY = 0;

        // Config based on screen size
        this.nodeCount = window.innerWidth < 768 ? 30 : 60;
        this.connectionDistance = window.innerWidth < 768 ? 100 : 150;
        this.mouseDistance = 250;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        });
    }

    init() {
        this.resize();
        this.createNodes();
    }

    resize() {
        this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.canvas.height = this.canvas.parentElement.offsetHeight;
        this.nodeCount = window.innerWidth < 768 ? 30 : 60;
        // Re-create nodes on resize to prevent clustering
        if (this.nodes.length === 0) this.createNodes();
    }

    createNodes() {
        this.nodes = [];
        for (let i = 0; i < this.nodeCount; i++) {
            this.nodes.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4, // Velocity
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1,
                // Cluster tendency
                homeX: Math.random() * this.canvas.width,
                homeY: Math.random() * this.canvas.height
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw nodes
        this.nodes.forEach(node => {
            // Move
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

            // Mouse interaction (repulsion/attraction)
            const dx = this.mouseX - node.x;
            const dy = this.mouseY - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.mouseDistance) {
                const force = (this.mouseDistance - dist) / this.mouseDistance;
                // Subtle repulsion
                node.x -= (dx / dist) * force * 0.5;
                node.y -= (dy / dist) * force * 0.5;
            }

            // Draw node
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            this.ctx.fill();
        });

        // Draw connections
        this.nodes.forEach((nodeA, idx) => {
            this.nodes.slice(idx + 1).forEach(nodeB => {
                const dx = nodeA.x - nodeB.x;
                const dy = nodeA.y - nodeB.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(nodeA.x, nodeA.y);
                    this.ctx.lineTo(nodeB.x, nodeB.y);
                    const opacity = 1 - (dist / this.connectionDistance);
                    this.ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.08})`; // Very subtle
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Generate abstract SVG patterns for cards
function generatePattern(seed) {
    const patterns = [
        // Grid
        `background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px; opacity: 0.05;`,
        // Dots
        `background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px; opacity: 0.1;`,
        // Diagonal
        `background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%); background-size: 10px 10px; opacity: 0.03;`,
        // Organic Curves (CSS radial gradient trick)
        `background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.05) 55%, transparent 55%); background-size: 40px 40px;`
    ];
    return patterns[seed.length % patterns.length]; // Simple deterministic hash
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
    new TopologyNetwork('topology-canvas');
});
