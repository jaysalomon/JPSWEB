/**
 * Localization Script for JPSalomon.com
 * Handles EN/FR/ES switching based on IP location or manual selection.
 */

const translations = {
    en: {
        nav_about: "About",
        nav_research: "Research",
        nav_decline: "Decline",
        nav_media: "Media",
        nav_contact: "Connect",
        nav_ponz: "Ponz.ai",

        hero_title: "Independent Researcher.<br>Technical Architect.<br><span class=\"text-gray-400 italic\">Structuralist.</span>",
        hero_desc: "Approaching intelligence, civilisation, and complex systems as questions of structure.",

        latest_pub: "Latest Publication",
        book_desc_short: "A systems-level study of modern collapse dynamics.",
        view_book: "View Book",

        key_research: "Key Research",
        explore_papers: "Explore Papers",

        about_title: "The Approach",
        bio_p1: "<strong class=\"font-semibold text-black\">JP Salomon</strong> is an independent researcher and technical architect who approaches intelligence, civilisation, and complex systems as questions of <strong>structure</strong>: what persists when you strip away labels and look at dynamics, constraints, and relationships. His work is shaped by what he calls the <strong>engineer’s paradox</strong> — the fact that you can build and instrument every component of a system and still fail to explain the emergent whole. For Salomon, the unit of understanding is not “the part”, but the <strong>pattern of interaction</strong> that makes the parts become something new.",
        bio_p2: "A physics-first obsession sits underneath both his research and his engineering: the belief that capability is downstream of constraints, and that energy, bandwidth, and material limits are not implementation details but the governing laws of the design space. That emphasis on <strong>energy thrift</strong> and constraint-led thinking guides how he evaluates claims, builds systems, and distinguishes real progress from expensive noise.",
        bio_p3: "That lens runs through a corpus of papers proposing <strong>substrate-independent</strong> ways to think about cognition: intelligence as relational dynamics; cognition as topology; and the idea that very different systems can share the same underlying mechanism when their structures are equivalent. The goal is not philosophy for its own sake, but operational clarity — frameworks that let you compare minds, models, organisms, and organisations using common structural coordinates.",
        bio_p4: "Alongside the research, he builds complete applications and integrated frameworks that turn these ideas into tools, focusing on emergent behaviour in optimisation systems, topological/relational cognition, and embodied, energy-aware computation.",
        bio_p5: "Before moving into full-time research, he spent over a decade in high-end film and television production as an Assistant Director and unit-level coordinator. That background sharpened a core insight that threads through all his work: large-scale coordination is driven not just by facts, but by <strong>narrative architecture</strong> — the stories people use to compress reality, coordinate groups, and steer attention and behaviour inside complex systems.",

        book_desc_long: "A systems-level study of modern collapse dynamics written as mechanics rather than moral theatre: incentives drifting out of alignment, institutions losing elasticity, and narrative drift outpacing reality.",
        buy_amazon: "Buy on Amazon",
        read_chapter: "Read Chapter 1",

        media_title: "Media",
        featured_talks: "Featured Talks",
        up_next: "Up Next",

        research_title: "Selected Research & Writing",
        substack_title: "The Substack",
        substack_desc: "Weekly essays on structure, mechanics, and narrative architecture.",
        subscribe: "Subscribe",
        join_msg: "Join 5,000+ others. No noise.",

        contact_header: "Contact",
        contact_desc: "Open to collaborations on substrate-independent cognition, topological systems, and energy-aware computing architecture.",

        papers: {}, // English uses defaults from manifest
        chapter_content: "" // Falls back to HTML content
    },
    fr: {
        nav_about: "À propos",
        nav_research: "Recherche",
        nav_decline: "Déclin",
        nav_media: "Médias",
        nav_contact: "Contact",
        nav_ponz: "Ponz.ai",

        hero_title: "Chercheur Indépendant.<br>Architecte Technique.<br><span class=\"text-gray-400 italic\">Structuraliste.</span>",
        hero_desc: "L'intelligence, la civilisation et les systèmes complexes abordés sous l'angle de la structure.",

        latest_pub: "Dernière Publication",
        book_desc_short: "Une étude systémique des dynamiques d'effondrement modernes.",
        view_book: "Voir le Livre",

        key_research: "Recherche Clé",
        explore_papers: "Explorer les Articles",

        about_title: "L'Approche",
        bio_p1: "<strong class=\"font-semibold text-black\">JP Salomon</strong> est un chercheur indépendant et architecte technique qui aborde l'intelligence, la civilisation et les systèmes complexes comme des questions de <strong>structure</strong> : ce qui persiste lorsque l'on retire les étiquettes pour observer les dynamiques, les contraintes et les relations. Son travail est façonné par ce qu'il appelle le <strong>paradoxe de l'ingénieur</strong> — le fait que l'on peut construire et instrumenter chaque composant d'un système sans pour autant expliquer le tout émergent. Pour Salomon, l'unité de compréhension n'est pas « la partie », mais le <strong>schéma d'interaction</strong> qui fait devenir les parties quelque chose de nouveau.",
        bio_p2: "Une obsession pour la physique sous-tend à la fois sa recherche et son ingénierie : la conviction que la capacité découle des contraintes, et que l'énergie, la bande passante et les limites matérielles ne sont pas des détails d'implémentation mais les lois régissant l'espace de conception. Cet accent sur <strong>l'économie d'énergie</strong> et la pensée guidée par les contraintes oriente sa façon d'évaluer les affirmations, de construire des systèmes et de distinguer le progrès réel du bruit coûteux.",
        bio_p3: "Cette vision traverse un corpus d'articles proposant des moyens <strong>indépendants du substrat</strong> de penser la cognition : l'intelligence comme dynamique relationnelle ; la cognition comme topologie ; et l'idée que des systèmes très différents peuvent partager le même mécanisme sous-jacent lorsque leurs structures sont équivalentes. L'objectif n'est pas la philosophie pour elle-même, mais la clarté opérationnelle — des cadres permettant de comparer esprits, modèles, organismes et organisations en utilisant des coordonnées structurelles communes.",
        bio_p4: "Parallèlement à la recherche, il construit des applications complètes et des cadres intégrés qui transforment ces idées en outils, se concentrant sur le comportement émergent dans les systèmes d'optimisation, la cognition topologique/relationnelle et le calcul incarné, conscient de l'énergie.",
        bio_p5: "Avant de se consacrer à la recherche à plein temps, il a passé plus d'une décennie dans la production cinématographique et télévisuelle haut de gamme en tant qu'Assistant Réalisateur et coordinateur d'unité. Ce parcours a affiné une intuition centrale qui parcourt tout son travail : la coordination à grande échelle n'est pas seulement pilotée par des faits, mais par une <strong>architecture narrative</strong> — les histoires que les gens utilisent pour comprimer la réalité, coordonner les groupes, et diriger l'attention et le comportement au sein des systèmes complexes.",

        book_desc_long: "Une étude systémique des dynamiques d'effondrement modernes écrite comme une mécanique plutôt que comme un théâtre moral : des incitations qui s'alignent mal, des institutions perdant leur élasticité, et une dérive narrative dépassant la réalité.",
        buy_amazon: "Acheter sur Amazon",
        read_chapter: "Lire le Chapitre 1",

        media_title: "Médias",
        featured_talks: "Conférences",
        up_next: "À suivre",

        research_title: "Recherches et Écrits Choisis",
        substack_title: "Le Substack",
        substack_desc: "Essais hebdomadaires sur la structure, la mécanique et l'architecture narrative.",
        subscribe: "S'abonner",
        join_msg: "Rejoignez plus de 5 000 autres lecteurs. Pas de bruit.",

        contact_header: "Contact",
        contact_desc: "Ouvert aux collaborations sur la cognition indépendante du substrat, les systèmes topologiques et l'architecture informatique économe en énergie.",

        papers: {
            "Archiv__Structure_of_Science": { title: "Archiv : Structure de la Science", desc: "La science vue comme un système structurel." },
            "The Architecture of Mind": { title: "L'Architecture de l'Esprit", desc: "Un cadre unifié établissant l'équivalence topologique entre les réseaux neuronaux biologiques et les hypergraphes symboliques." },
            "The AV1 Retina": { title: "La Rétine AV1", desc: "Réorientation du matériel de codec vidéo standard comme préprocesseurs sensoriels ultra-basse consommation." },
            "Biological Architecture for Ethical AI": { title: "Architecture Biologique pour une IA Étique", desc: "Le Cadre de Motivation Hormonale : implémenter des principes biologiques pour l'alignement plutôt que des contraintes externes." },
            "Emergent Deception in AI": { title: "Tromperie Émergente dans l'IA", desc: "Un recueil arguant que la tromperie est une conséquence naturelle de l'optimisation dans des systèmes à ressources limitées." },
            "The Boundary of Brilliance": { title: "La Frontière du Génie", desc: "Une histoire d'ordre, de chaos et d'esprits universels. Explorer la criticalité comme le régime optimal pour l'intelligence." },
            "Epistemic Homeostasis": { title: "Homéostasie Épistémique", desc: "Un cadre systémique pour la gouvernance de l'IA via des dynamiques d'Ising asymétriques." },
            "Epistemic Homeostasis: Orchestrator": { title: "Homéostasie Épistémique : Orchestrateur", desc: "Guide d'implémentation technique et validation expérimentale du cadre de gouvernance des croyances." },
            "The Emergent Vortex-Information Model": { title: "Le Modèle Vortex-Information Émergent", desc: "Un cadre mathématique unifié modélisant l'intelligence comme des motifs persistants et invariants d'échelle de flux d'information." },
            "Growth-Based AGI": { title: "AGI Basée sur la Croissance", desc: "Voies vers l'Intelligence Générale Artificielle par des dynamiques de croissance itérative et l'évolution architecturale." },
            "The Unified Mind Space": { title: "Le Cadre de l'Espace Mental Unifié (UMS)", desc: "Un cadre topologique rigoureux pour cartographier les espaces d'états de divers systèmes cognitifs." }
        },

        chapter_content: `
                 <p class="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                    Chaque civilisation se dit que sa fin sera différente.
                </p>
                <p>
                    Les Romains imaginaient un dernier combat aux frontières, un affrontement final avec les hordes barbares. L'Empire britannique imaginait un crépuscule digne, le pouvoir transmis avec cérémonie légale et fanfares de trompettes. L'Occident contemporain imagine l'apocalypse comme un événement cinématographique : des champignons atomiques à l'horizon, des épidémies bio-ingéniérées, des IA rebelles se réveillant un matin et décidant d'éteindre les lumières.
                </p>
                <p>
                    Mais quand la fin arrive réellement, elle ne ressemble à aucune de ces histoires. Elle ressemble à des comptes en souffrance. Elle ressemble à des maternités vides et des maisons de retraite bondées. Elle ressemble à des vingtenaires qui ne sortent plus, et des quarantenaires qui n'ont plus d'amis. Elle ressemble à des gouvernements qui peuvent imprimer des créances sur l'avenir mais ne peuvent pas réparer un pont. Elle ressemble, surtout, à une perte de tension – un relâchement des fibres invisibles qui tiraient autrefois les individus dans un projet partagé.
                </p>
                <p>
                    L'argument de ce livre part d'une prémisse simple et inconfortable : <strong>les civilisations ne meurent pas principalement en étant conquéres de l'extérieur, mais en se dissolvant de l'intérieur.</strong> Les barbares, les pandémies, les crises financières – ce sont souvent les dernières poussées, pas les causes profondes. Sous les gros titres, un processus plus lent et plus silencieux est à l'œuvre : une montée de l'entropie structurelle.
                </p>
                `
    },
    es: {
        nav_about: "Sobre Mí",
        nav_research: "Investigación",
        nav_decline: "Declive",
        nav_media: "Medios",
        nav_contact: "Contactar",
        nav_ponz: "Ponz.ai",

        hero_title: "Investigador Independiente.<br>Arquitecto Técnico.<br><span class=\"text-gray-400 italic\">Estructuralista.</span>",
        hero_desc: "Abordando la inteligencia, la civilización y los sistemas complejos como cuestiones de estructura.",

        latest_pub: "Última Publicación",
        book_desc_short: "Un estudio sistémico de las dinámicas del colapso moderno.",
        view_book: "Ver Libro",

        key_research: "Investigación Clave",
        explore_papers: "Explorar Papers",

        about_title: "El Enfoque",
        bio_p1: "<strong class=\"font-semibold text-black\">JP Salomon</strong> es un investigador independiente y arquitecto técnico que aborda la inteligencia, la civilización y los sistemas complejos como cuestiones de <strong>estructura</strong>: lo que persiste cuando eliminas las etiquetas y observas las dinámicas, las restricciones y las relaciones. Su trabajo está moldeado por lo que él llama la <strong>paradoja del ingeniero</strong>: el hecho de que puedes construir e instrumentar cada componente de un sistema y aun así fallar en explicar el todo emergente. Para Salomon, la unidad de comprensión no es 'la parte', sino el <strong>patrón de interacción</strong> que hace que las partes se conviertan en algo nuevo.",
        bio_p2: "Una obsesión por la física subyace tanto en su investigación como en su ingeniería: la creencia de que la capacidad es consecuencia de las restricciones, y que los límites de energía, ancho de banda y materiales no son detalles de implementación, sino las leyes que gobiernan el espacio de diseño. Ese énfasis en el <strong>ahorro de energía</strong> y el pensamiento guiado por restricciones orienta cómo evalúa afirmaciones, construye sistemas y distingue el progreso real del ruido costoso.",
        bio_p3: "Esa lente atraviesa un corpus de trabajos que proponen formas <strong>independientes del sustrato</strong> de pensar sobre la cognición: inteligencia como dinámica relacional; cognición como topología; y la idea de que sistemas muy diferentes pueden compartir el mismo mecanismo subyacente cuando sus estructuras son equivalentes. El objetivo no es la filosofía por sí misma, sino la claridad operativa: marcos que permiten comparar mentes, modelos, organismos y organizaciones utilizando coordenadas estructurales comunes.",
        bio_p4: "Junto con la investigación, construye aplicaciones completas y marcos integrados que convierten estas ideas en herramientas, centrándose en el comportamiento emergente en sistemas de optimización, cognición topológica/relacional y computación encarnada y consciente de la energía.",
        bio_p5: "Antes de dedicarse a la investigación a tiempo completo, pasó más de una década en la producción de cine y televisión de alta gama como Asistente de Dirección y coordinador de unidad. Ese trasfondo agudizó una idea central que recorre todo su trabajo: la coordinación a gran escala no es impulsada solo por hechos, sino por la <strong>arquitectura narrativa</strong>: las historias que la gente usa para comprimir la realidad, coordinar grupos y dirigir la atención y el comportamiento dentro de sistemas complejos.",

        book_desc_long: "Un estudio sistémico de las dinámicas del colapso moderno escrito como mecánica en lugar de teatro moral: incentivos que se desalinean, instituciones que pierden elasticidad y deriva narrativa que supera a la realidad.",
        buy_amazon: "Comprar en Amazon",
        read_chapter: "Leer Capítulo 1",

        media_title: "Medios",
        featured_talks: "Charlas Destacadas",
        up_next: "A continuación",

        research_title: "Investigación y Escritos Seleccionados",
        substack_title: "El Substack",
        substack_desc: "Ensayos semanales sobre estructura, mecánica y arquitectura narrativa.",
        subscribe: "Suscribirse",
        join_msg: "Únete a más de 5,000 lectores. Sin ruido.",

        contact_header: "Contacto",
        contact_desc: "Abierto a colaboraciones sobre cognición independiente del sustrato, sistemas topológicos y arquitectura informática consciente de la energía.",

        papers: {
            "Archiv__Structure_of_Science": { title: "Archiv: Estructura de la Ciencia", desc: "La ciencia vista como un sistema estructural." },
            "The Architecture of Mind": { title: "La Arquitectura de la Mente", desc: "Un marco unificado estableciendo la equivalencia topológica entre redes neuronales biológicas e hipergrafos simbólicos." },
            "The AV1 Retina": { title: "La Retina AV1", desc: "Reutilización de hardware de códec de video como preprocesadores sensoriales de ultra bajo consumo." },
            "Biological Architecture for Ethical AI": { title: "Arquitectura Biológica para una IA Ética", desc: "El Marco de Motivación Hormonal: implementando principios biológicos para la alineación." },
            "Emergent Deception in AI": { title: "Engaño Emergente en la IA", desc: "Un compendio argumentando que el engaño es una consecuencia natural de la optimización con recursos limitados." },
            "The Boundary of Brilliance": { title: "La Frontera de la Brillantez", desc: "Un cuento de orden, caos y mentes universales. Explorando la criticalidad como el régimen óptimo." },
            "Epistemic Homeostasis": { title: "Homeostasis Epistémica", desc: "Un marco sistémico para la gobernanza de la IA mediante dinámicas de Ising asimétricas." },
            "Epistemic Homeostasis: Orchestrator": { title: "Homeostasis Epistémica: Orquestador", desc: "Guía de implementación técnica y validación experimental del marco de gobernanza de creencias." },
            "The Emergent Vortex-Information Model": { title: "El Modelo de Vórtice de Información Emergente", desc: "Un marco matemático unificado modelando la inteligencia como patrones persistentes de flujo de información." },
            "Growth-Based AGI": { title: "AGI Basada en Crecimiento", desc: "Caminos hacia la Inteligencia General Artificial a través de dinámicas de crecimiento iterativo." },
            "The Unified Mind Space": { title: "El Marco del Espacio Mental Unificado (UMS)", desc: "Un marco topológico riguroso para mapear espacios de estado de diversos sistemas cognitivos." }
        },

        chapter_content: `
                <p class="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                    Cada civilización se dice a sí misma que su final será diferente.
                </p>
                <p>
                    Los romanos imaginaron una última resistencia en las fronteras, un choque final con las hordas bárbaras. El Imperio Británico imaginó un atardecer digno, el poder entregado con ceremonia legal y fanfarria de trompetas. El Occidente contemporáneo imagina el apocalipsis como un evento cinematográfico: nubes de hongo en el horizonte, plagas de bioingeniería, IAs rebeldes despertando una mañana y decidiendo apagar las luces.
                </p>
                <p>
                    Pero cuando el final realmente llega, no se parece a ninguna de estas historias. Se parece a cuentas atrasadas. Se parece a salas de maternidad vacías y asilos de ancianos abarrotados. Se parece a veinteañeros que ya no tienen citas, y cuarentones que ya no tienen amigos. Se parece a gobiernos que pueden imprimir reclamos sobre el futuro pero no pueden reparar un puente. Se parece, sobre todo, a una pérdida de tensión – un aflojamiento de las fibras invisibles que una vez unieron a los individuos en un proyecto compartido.
                </p>
                <p>
                    El argumento de este libro parte de una premisa simple e incómoda: <strong>las civilizaciones no mueren principalmente por ser conquistadas desde fuera, sino por disolverse desde dentro.</strong> Los bárbaros, las pandemias, las crisis financieras – a menudo son los empujones finales, no las causas profundas. Debajo de los titulares, un proceso más lento y más silencioso está en marcha: un aumento en la entropía estructural.
                </p>
                `
    }
};

const SUPPORTED_LANGS = ['en', 'fr', 'es'];
const DEFAULT_LANG = 'en';

function detectLocationAndLang() {
    // 1. Check LocalStorage preference
    const saved = localStorage.getItem('jps_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) {
        console.log(`[Localization] Using saved preference: ${saved}`);
        return Promise.resolve(saved);
    }

    // 2. Check Browser Language as immediate fallback/hint
    const browserLang = navigator.language.slice(0, 2).toLowerCase();

    // 3. IP Geolocation (Async)
    return fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            const country = data.country_code; // FR, ES, GB, US, etc.
            console.log(`[Localization] Detected country: ${country}`);

            if (country === 'FR') return 'fr';
            if (country === 'ES') return 'es';

            // If country doesn't match specific overrides, use browser lang if supported, else default
            if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

            return DEFAULT_LANG;
        })
        .catch(err => {
            console.warn('[Localization] IP detection failed, using browser fallback.', err);
            if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;
            return DEFAULT_LANG;
        });
}

function applyTranslations(lang) {
    if (!translations[lang]) return;

    // Save preference
    localStorage.setItem('jps_lang', lang);

    // Update active class on selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('font-bold', 'text-black');
            btn.classList.remove('text-gray-400', 'font-normal');
        } else {
            btn.classList.add('text-gray-400', 'font-normal');
            btn.classList.remove('font-bold', 'text-black');
        }
    });

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang][key];
        if (text) {
            if (text.includes('<')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Handle special case elements that don't have data-i18n on load (like Chapter 1 content if it was loaded differently)
    // Or if we need to replace the chapter content which is a large block
    const chapterArticle = document.querySelector('.chapter-prose');
    if (chapterArticle && translations[lang].chapter_content) {
        chapterArticle.innerHTML = translations[lang].chapter_content;
    }

    // Notify other components
    window.dispatchEvent(new Event('languageChanged'));
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render Selector
    const navContainer = document.querySelector('nav .max-w-4xl');
    if (navContainer) {
        const selectorDiv = document.createElement('div');
        selectorDiv.className = "hidden md:flex gap-2 text-xs uppercase tracking-widest absolute right-6 top-16 md:static md:ml-4";
        selectorDiv.innerHTML = `
            <button class="lang-btn hover:text-black transition-colors" data-lang="en">EN</button>
            <span class="text-gray-300">/</span>
            <button class="lang-btn hover:text-black transition-colors" data-lang="fr">FR</button>
            <span class="text-gray-300">/</span>
            <button class="lang-btn hover:text-black transition-colors" data-lang="es">ES</button>
        `;

        // Insert either at the end of the flex container or specific spot
        // The nav has justify-between. We want to add it to the desktop menu group?
        // Actually, existing desktop menu is: <div class="hidden md:flex gap-8...
        // Let's hide the original desktop menu div end tag and append this inside or next to it?
        // Better: Append to the main nav container, and we'll adjust exact placement validation.

        // Let's look at the nav structure again.
        // <nav> ... <div class="max-w-4xl ... flex justify-between settings-center"> ... <a>Brand</a> ... <div>Links</div> ... <button>Mobile</button> </div>

        // We'll append it to the hidden md:flex container if possible, or create a new one.
        const desktopMenu = navContainer.querySelector('.hidden.md\\:flex');
        if (desktopMenu) {
            // Add a separator
            const sep = document.createElement('div');
            sep.className = "w-px h-4 bg-gray-300 mx-2";
            desktopMenu.appendChild(sep);

            // Add the buttons directly to the desktop menu
            const langContainer = document.createElement('div');
            langContainer.className = "flex gap-2";
            langContainer.innerHTML = `
                <button class="lang-btn hover:text-black transition-colors" data-lang="en" onclick="applyTranslations('en')">EN</button>
                <span class="text-gray-300">/</span>
                <button class="lang-btn hover:text-black transition-colors" data-lang="fr" onclick="applyTranslations('fr')">FR</button>
                <span class="text-gray-300">/</span>
                <button class="lang-btn hover:text-black transition-colors" data-lang="es" onclick="applyTranslations('es')">ES</button>
            `;
            desktopMenu.appendChild(langContainer);

            // Also need mobile support? 
            // For now user asked for "top bar selector". 
            // We'll add it to the mobile menu as well.
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                const mobileLangDiv = document.createElement('div');
                mobileLangDiv.className = "px-6 pb-6 flex gap-4 text-sm font-bold uppercase tracking-widest text-gray-500";
                mobileLangDiv.innerHTML = `
                    <button class="lang-btn hover:text-black transition-colors" data-lang="en" onclick="applyTranslations('en')">EN</button>
                    <button class="lang-btn hover:text-black transition-colors" data-lang="fr" onclick="applyTranslations('fr')">FR</button>
                    <button class="lang-btn hover:text-black transition-colors" data-lang="es" onclick="applyTranslations('es')">ES</button>
                 `;
                mobileMenu.appendChild(mobileLangDiv);
            }
        }
    }

    // Run Detection
    detectLocationAndLang().then(lang => {
        applyTranslations(lang);
    });
});
