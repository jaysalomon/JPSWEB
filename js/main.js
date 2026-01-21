// Data Source (Filtered from Manifest or Fallback)
const papersData = (window.siteManifest && window.siteManifest.papers) ? window.siteManifest.papers : [];

// Video Data Source
const videosData = (window.siteManifest && window.siteManifest.videos) ? window.siteManifest.videos : [];


// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Renders
    renderPapers();
    initVideoCarousel(); // NEW: Setup video carousel

    // 2. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 3. Setup Navigation
    setupNavigation();

    // 4. Setup Mobile Menu
    setupMobileMenu();

    // 5. Setup Rotator
    setupRotator();

    // 6. Handle Hash on Load
    handleHashLoad();
});

// --- VIDEO CAROUSEL LOGIC ---
function initVideoCarousel() {
    const mainPlayer = document.getElementById('main-video-player');
    const mainTitle = document.getElementById('main-video-title');
    const mainCat = document.getElementById('main-video-cat');
    const thumbList = document.getElementById('video-thumbs-list');

    if (!mainPlayer || !thumbList) return;

    // Function to load video
    const loadVideo = (index) => {
        const vid = videosData[index];

        // Direct src assignment avoids 'source' tag issues
        mainPlayer.src = vid.src;
        mainPlayer.load();

        if (mainTitle) mainTitle.textContent = vid.title;
        if (mainCat) mainCat.textContent = vid.category;

        // Update thumbnails UI
        document.querySelectorAll('.video-thumb').forEach((el, idx) => {
            if (idx === index) el.classList.add('active');
            else el.classList.remove('active');
        });
    };

    // Generate Thumbnails
    thumbList.innerHTML = videosData.map((vid, idx) => `
        <div class="video-thumb p-4 flex items-center justify-between group rounded-md cursor-pointer" onclick="switchVideo(${idx})">
            <div>
                <h5 class="font-serif text-sm group-hover:text-black text-gray-700">${vid.title}</h5>
                <span class="text-[10px] uppercase tracking-wider text-gray-400">${vid.category}</span>
            </div>
            <i data-lucide="play" class="w-4 h-4 text-gray-300 group-hover:text-black transition-colors ${idx === 0 ? 'text-black' : ''}"></i>
        </div>
    `).join('');

    // Expose switch function globally for onclick
    window.switchVideo = (index) => {
        loadVideo(index);
        if (window.lucide && window.lucide.createIcons) {
            lucide.createIcons();
        }
    };

    // Load first video initially if data exists
    if (videosData.length > 0) {
        loadVideo(0);
    } else {
        // Fallback if no videos found
        if (mainTitle) mainTitle.textContent = "No videos available";
        if (mainCat) mainCat.textContent = "Please check assets/videos folder";
    }
}


function renderPapers() {
    const papersListEl = document.getElementById('papers-list');
    if (papersListEl) {
        papersListEl.innerHTML = papersData.map(p => `
            <article class="group cursor-pointer">
                <div class="flex flex-col md:flex-row gap-4 md:items-baseline">
                    <h3 class="text-xl font-semibold group-hover:underline decoration-1 underline-offset-4">${p.title}</h3>
                    <span class="text-xs text-gray-500 uppercase tracking-wider border border-gray-200 px-2 py-1 rounded">${p.tag}</span>
                    <span class="text-xs text-gray-400">${p.year}</span>
                </div>
                <p class="mt-3 text-gray-600 max-w-2xl">${p.desc}</p>
                <a href="${p.link}" class="inline-flex items-center text-sm font-medium text-black mt-4 hover:opacity-70">
                    Read Paper <i data-lucide="arrow-up-right" class="w-4 h-4 ml-1"></i>
                </a>
            </article>
        `).join('');
    }
}

function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.classList.contains('mobile-link')) {
                const mobileMenu = document.getElementById('mobile-menu');
                const menuBtn = document.getElementById('mobile-menu-btn');
                if (mobileMenu) mobileMenu.classList.add('hidden');
                if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
            }

            if (document.getElementById('view-home').classList.contains('hidden-view')) {
                const homeView = document.getElementById('view-home');
                const chapterView = document.getElementById('view-chapter');

                chapterView.classList.add('hidden-view');
                chapterView.classList.remove('flex');
                homeView.classList.remove('hidden-view');
                homeView.classList.add('flex');
                document.body.classList.remove('reading-mode');
            }

            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
                history.replaceState(null, null, targetId);
            }
        });
    });
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function setupRotator() {
    const rotatorEl = document.getElementById('paper-rotator');
    const titleEl = document.getElementById('paper-title');
    const descEl = document.getElementById('paper-desc');

    if (!rotatorEl || !titleEl || !descEl) return;

    const rotatablePapers = papersData.length > 0 ? papersData.slice(0, 5) : [
        { title: "The Engineer’s Paradox", desc: "Why instrumented systems fail to explain the emergent whole." },
        { title: "Cognition as Topology", desc: "Substrate-independent intelligence and equivalent structures." },
        { title: "Energy Thrift", desc: "Why capability is downstream of constraints in design space." },
        { title: "Narrative Architecture", desc: "How stories compress reality to steer complex systems." }
    ];

    let paperIndex = 0;

    setInterval(() => {
        const homeView = document.getElementById('view-home');
        if (homeView && homeView.classList.contains('hidden-view')) return;

        rotatorEl.style.opacity = '0';

        setTimeout(() => {
            paperIndex = (paperIndex + 1) % rotatablePapers.length;
            titleEl.textContent = rotatablePapers[paperIndex].title;
            descEl.textContent = rotatablePapers[paperIndex].desc;
            rotatorEl.style.opacity = '1';
        }, 700);
    }, 5000);
}

function handleHashLoad() {
    if (location.hash) {
        const homeView = document.getElementById('view-home');
        if (homeView && !homeView.classList.contains('hidden-view')) {
            const target = document.querySelector(location.hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'auto' });
                }, 100);
            }
        }
    }
}

window.toggleView = function (viewName) {
    const homeView = document.getElementById('view-home');
    const chapterView = document.getElementById('view-chapter');

    if (viewName === 'chapter') {
        homeView.classList.add('hidden-view');
        homeView.classList.remove('flex');
        chapterView.classList.remove('hidden-view');
        chapterView.classList.add('flex');
        document.body.classList.add('reading-mode');
        window.scrollTo(0, 0);
    } else {
        chapterView.classList.add('hidden-view');
        chapterView.classList.remove('flex');
        homeView.classList.remove('hidden-view');
        homeView.classList.add('flex');
        document.body.classList.remove('reading-mode');
    }
};
