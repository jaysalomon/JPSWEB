import json
import re
import os
import sys
import subprocess

# 1. READ MANIFEST via Node.js (Handles JS syntax, comments, trailing commas)
def load_manifest():
    node_script = """
    const fs = require('fs');
    global.window = {}; 
    const content = fs.readFileSync('js/manifest.js', 'utf8');
    // Simple eval based loading (manifest assigns to window.siteManifest)
    eval(content);
    console.log(JSON.stringify(window.siteManifest));
    """
    
    try:
        result = subprocess.run(
            ['node', '-e', node_script], 
            capture_output=True, 
            text=True, 
            encoding='utf-8',
            check=True
        )
        return json.loads(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Node Error: {e.stderr}")
        sys.exit(1)
    except json.JSONDecodeError as e:
        print(f"JSON Parse Error from Node output: {e}")
        sys.exit(1)

# 2. TEMPLATE
TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | JP Salomon</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .serif { font-family: 'Playfair Display', serif; }

        .tech-bg {
            background-color: #0f172a;
            background-image: 
                linear-gradient(#1e293b 1px, transparent 1px),
                linear-gradient(90deg, #1e293b 1px, transparent 1px);
            background-size: 40px 40px;
        }
        
        .fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    </style>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 tech-bg pb-20">

    <nav class="absolute top-6 left-6 z-50">
        <a href="research.html" class="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Research
        </a>
    </nav>

    <header class="relative pt-24 pb-32 px-6 text-center">
        <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium tracking-wider uppercase">
            {{TAG}} • {{YEAR}}
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {{TITLE}}
        </h1>
        <p class="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            {{DESC}}
        </p>
    </header>

    <main class="max-w-5xl mx-auto px-6 -mt-10 relative z-20 space-y-24">
        <section class="bg-slate-900/90 backdrop-blur border border-slate-700 p-8 md:p-12 rounded-lg shadow-2xl">
            <h2 class="text-3xl font-serif text-white mb-6">Abstract</h2>
            <p class="text-slate-300 leading-loose text-lg">
                {{DESC}} This work investigates the core dynamics of {{TAG}}, aiming to resolve persistent inconsistencies in current computational models. By applying a rigorous topological lens, we demonstrate that system behavior is not random but governed by predictable invariants.
            </p>
            <div class="mt-8 pt-8 border-t border-slate-800 flex gap-4">
                 <a href="{{PDF_LINK}}" target="_blank" class="px-6 py-3 bg-white text-slate-900 font-bold rounded hover:bg-slate-200 transition-colors flex items-center gap-2">
                    <i data-lucide="file-text" class="w-4 h-4"></i> Read Full Paper
                 </a>
            </div>
        </section>

        <section class="grid md:grid-cols-3 gap-6">
            <div class="p-6 bg-slate-900/50 border border-slate-800 rounded">
                <i data-lucide="layers" class="text-indigo-400 w-8 h-8 mb-4"></i>
                <h3 class="text-xl text-white mb-2">Structure</h3>
                <p class="text-slate-400 text-sm">Defining the manifold geometry underlying the observed phenomena.</p>
            </div>
            <div class="p-6 bg-slate-900/50 border border-slate-800 rounded">
                <i data-lucide="git-branch" class="text-purple-400 w-8 h-8 mb-4"></i>
                <h3 class="text-xl text-white mb-2">Dynamics</h3>
                <p class="text-slate-400 text-sm">Scale-free information propagation and emergent attractor states.</p>
            </div>
            <div class="p-6 bg-slate-900/50 border border-slate-800 rounded">
                <i data-lucide="cpu" class="text-teal-400 w-8 h-8 mb-4"></i>
                <h3 class="text-xl text-white mb-2">Synthesis</h3>
                <p class="text-slate-400 text-sm">Integrating biological constraints with silicon scalability.</p>
            </div>
        </section>
    </main>

    <script>lucide.createIcons();</script>
</body>
</html>
"""

# 3. GENERATOR
def generate_slug(title):
    return title.lower().replace(' ', '_').replace(':', '').replace('-', '_').replace('(', '').replace(')', '') + '.html'

def main():
    data = load_manifest()
    
    # Check for empty papers (safety)
    papers = data.get('papers', [])
    if not papers:
        print("Warning: No papers found in manifest.")
        return

    updated_papers = []
    
    for p in papers:
        # If UMS, keep existing link
        if "The Unified Mind Space" in p['title']:
            p['site_link'] = "UMS.html"
            updated_papers.append(p)
            print(f"Skipped UMS (kept custom)")
            continue
            
        slug = generate_slug(p['title'])
        
        # Write HTML
        html = TEMPLATE.replace('{{TITLE}}', p['title']) \
                       .replace('{{DESC}}', p['desc']) \
                       .replace('{{YEAR}}', p['year']) \
                       .replace('{{TAG}}', p['tag'] if 'tag' in p else 'Research') \
                       .replace('{{PDF_LINK}}', p['link'])
        
        try:
            with open(slug, 'w', encoding='utf-8') as f:
                f.write(html)
            print(f"Generated {slug}")
        except Exception as e:
            print(f"Failed to write {slug}: {e}")
        
        p['site_link'] = slug
        updated_papers.append(p)

    # 4. WRITE MANIFEST BACK
    data['papers'] = updated_papers
    js_content = f"// Auto-generated by update_site_manifest.ps1\n// Do not edit manually. Run the script to update.\n\nwindow.siteManifest = {json.dumps(data, indent=4)};\n"
    
    with open('js/manifest.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("Manifest updated successfully.")

if __name__ == "__main__":
    main()
