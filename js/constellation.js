/**
 * Cognitive Constellation - Force-Directed Graph Engine
 * Renders papers as nodes in a physics simulation.
 */

class ConstellationGraph {
    constructor(canvasId, papers) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.papers = papers;
        this.nodes = [];
        this.edges = [];

        // Physics Params
        this.params = {
            repulsion: 1000,
            springLength: 180,
            springStrength: 0.05,
            damping: 0.9,
            centerForce: 0.02,
            minVelocity: 0.01
        };

        // State
        this.draggedNode = null;
        this.hoveredNode = null;
        this.pan = { x: 0, y: 0 };
        this.scale = 1;
        this.isDragging = false;
        this.lastMouse = { x: 0, y: 0 };

        this.init();
    }

    init() {
        this.resize();
        this.createGraph();
        this.bindEvents();
        this.animate();

        // Initial center
        this.pan.x = this.canvas.width / 2;
        this.pan.y = this.canvas.height / 2;
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createGraph() {
        // 1. Create Nodes
        this.nodes = this.papers.map((p, i) => ({
            id: i,
            data: p,
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            vx: 0,
            vy: 0,
            radius: 40 + (p.desc.length > 50 ? 5 : 0), // Slight size variation
            color: this.getTagColor(p.tag)
        }));

        // 2. Create Edges (Connect by Tag)
        // O(N^2) represents the "all-to-all" potential, filtered by shared concepts
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const a = this.nodes[i];
                const b = this.nodes[j];

                // Strength logic: Same tag = strong connection
                if (a.data.tag === b.data.tag) {
                    this.edges.push({ source: a, target: b, strength: 1 });
                }
            }
        }
    }

    getTagColor(tag) {
        const t = tag.toLowerCase();
        if (t.includes('safety')) return '#fecaca'; // Red-200
        if (t.includes('intelligence')) return '#bfdbfe'; // Blue-200
        if (t.includes('complexity')) return '#e9d5ff'; // Purple-200
        if (t.includes('architecture')) return '#e2e8f0'; // Slate-200
        if (t.includes('alignment')) return '#fde68a'; // Amber-200
        return '#f3f4f6';
    }

    updatePhysics() {
        // 1. Repulsion (Nodes push apart)
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];

            // Center gravity (keeps them on screen)
            node.vx += (-node.x * this.params.centerForce * 0.1);
            node.vy += (-node.y * this.params.centerForce * 0.1);

            for (let j = i + 1; j < this.nodes.length; j++) {
                const other = this.nodes[j];
                let dx = node.x - other.x;
                let dy = node.y - other.y;
                let dist = Math.sqrt(dx * dx + dy * dy) || 1;

                if (dist < 500) { // Optimization horizon
                    const force = this.params.repulsion / (dist * dist);
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;

                    node.vx += fx;
                    node.vy += fy;
                    other.vx -= fx;
                    other.vy -= fy;
                }
            }
        }

        // 2. Springs (Edges pull together)
        this.edges.forEach(edge => {
            const dx = edge.target.x - edge.source.x;
            const dy = edge.target.y - edge.source.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            const displacement = dist - this.params.springLength;
            const force = displacement * this.params.springStrength * edge.strength;

            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            edge.source.vx += fx;
            edge.source.vy += fy;
            edge.target.vx -= fx;
            edge.target.vy -= fy;
        });

        // 3. Move
        this.nodes.forEach(node => {
            if (node === this.draggedNode) return; // Mouse holds it

            node.vx *= this.params.damping;
            node.vy *= this.params.damping;
            node.x += node.vx;
            node.y += node.vy;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.save();
        this.ctx.translate(this.pan.x, this.pan.y);
        this.ctx.scale(this.scale, this.scale);

        // Draw Edges
        this.edges.forEach(edge => {
            const isRelatedToHover = this.hoveredNode && (edge.source === this.hoveredNode || edge.target === this.hoveredNode);
            this.ctx.beginPath();
            this.ctx.moveTo(edge.source.x, edge.source.y);
            this.ctx.lineTo(edge.target.x, edge.target.y);
            this.ctx.strokeStyle = isRelatedToHover ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)';
            this.ctx.lineWidth = isRelatedToHover ? 2 : 1;
            this.ctx.stroke();
        });

        // Draw Nodes
        this.nodes.forEach(node => {
            const isHovered = node === this.hoveredNode;

            // Abstract Shape (Circle container)
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = node.color; // Base tag color
            this.ctx.fill();
            this.ctx.strokeStyle = isHovered ? '#000' : 'rgba(0,0,0,0.1)';
            this.ctx.lineWidth = isHovered ? 2 : 1;
            this.ctx.stroke();

            // Label (Title)
            this.ctx.fillStyle = '#1a1a1a';
            this.ctx.font = isHovered ? '600 14px "Playfair Display", serif' : '500 12px "Playfair Display", serif';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';

            // Wrap text logic approx
            const words = node.data.title.split(' ');
            let line = '';
            let lineY = node.y - (words.length > 3 ? 10 : 0);

            if (isHovered || this.scale > 0.8) { // Only show text if close enough or hovered
                this.ctx.fillText(node.data.title.substring(0, 20) + (node.data.title.length > 20 ? '...' : ''), node.x, node.y);
            }

            // Tag Pill (only on hover)
            if (isHovered) {
                const tagW = this.ctx.measureText(node.data.tag).width + 20;
                this.ctx.fillStyle = '#000';
                this.ctx.roundRect(node.x - tagW / 2, node.y + node.radius + 10, tagW, 20, 10);
                this.ctx.fill();
                this.ctx.fillStyle = '#fff';
                this.ctx.font = '10px Inter, sans-serif';
                this.ctx.fillText(node.data.tag.toUpperCase(), node.x, node.y + node.radius + 20);
            }
        });

        this.ctx.restore();
    }

    animate() {
        this.updatePhysics();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    // Interaction Handlers
    getScreenPos(node) {
        return {
            x: (node.x * this.scale) + this.pan.x,
            y: (node.y * this.scale) + this.pan.y
        };
    }

    getCanvasPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left - this.pan.x) / this.scale,
            y: (e.clientY - rect.top - this.pan.y) / this.scale
        };
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());

        this.canvas.addEventListener('mousedown', (e) => {
            const pos = this.getCanvasPos(e);
            const clickedNode = this.nodes.find(n => {
                const dx = n.x - pos.x;
                const dy = n.y - pos.y;
                return Math.sqrt(dx * dx + dy * dy) < n.radius;
            });

            if (clickedNode) {
                this.draggedNode = clickedNode;
                this.isDragging = true;
            } else {
                this.isDragging = true; // Panning
            }
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });

        window.addEventListener('mousemove', (e) => {
            const pos = this.getCanvasPos(e);

            // Hover check
            this.hoveredNode = this.nodes.find(n => {
                const dx = n.x - pos.x;
                const dy = n.y - pos.y;
                return Math.sqrt(dx * dx + dy * dy) < n.radius;
            });
            this.canvas.style.cursor = this.hoveredNode ? 'pointer' : (this.isDragging ? 'grabbing' : 'grab');

            if (this.isDragging) {
                const dx = e.clientX - this.lastMouse.x;
                const dy = e.clientY - this.lastMouse.y;

                if (this.draggedNode) {
                    this.draggedNode.x += dx / this.scale;
                    this.draggedNode.y += dy / this.scale;
                    // Wake up physics
                    this.nodes.forEach(n => { n.vx += (Math.random() - 0.5) * 0.1; });
                } else {
                    this.pan.x += dx;
                    this.pan.y += dy;
                }
                this.lastMouse = { x: e.clientX, y: e.clientY };
            }
        });

        window.addEventListener('mouseup', (e) => {
            // Click detection (small movement)
            if (this.draggedNode) {
                const dist = Math.abs(e.clientX - this.lastMouse.x) + Math.abs(e.clientY - this.lastMouse.y);
                // Open Reader if it was a click, not a drag
                if (dist < 5 && window.openReader) {
                    window.openReader(this.draggedNode.data.link, this.draggedNode.data.title);
                }
            }
            this.isDragging = false;
            this.draggedNode = null;
        });

        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const ZOOM_SPEED = 0.001;
            const delta = -e.deltaY * ZOOM_SPEED;
            const newScale = Math.min(Math.max(0.2, this.scale + delta), 2);
            this.scale = newScale;
        }, { passive: false });
    }
}
