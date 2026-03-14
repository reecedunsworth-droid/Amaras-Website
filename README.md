 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..d54bd778b07d833221c5934638074df4366fb07a
--- /dev/null
+++ b/README.md
@@ -0,0 +1,58 @@
+# Healthy Creations by Amara
+
+A simple, clean, and modern static portfolio website for a dietitian to showcase food creations and recipes.
+
+This project was generated using **Codex** and is built with:
+- HTML
+- CSS
+- Vanilla JavaScript
+
+## Features
+
+- Hero section with a welcoming title and subtitle
+- About section with dietitian bio
+- Food gallery with card-based recipe layout
+- Recipe spotlight section with ingredients and instructions
+- Interactive random healthy meal idea generator
+- Contact/social placeholder section
+- Responsive design for desktop, tablet, and mobile
+
+## Run Locally
+
+Because this is a static website, you can open `index.html` directly in your browser.
+
+You can also run a local server:
+
+```bash
+python -m http.server 8000
+```
+
+Then visit `http://localhost:8000`.
+
+## Deploy to GitHub Pages
+
+1. Push this project to a GitHub repository.
+2. In the repository, go to **Settings** → **Pages**.
+3. Under **Build and deployment**, choose:
+   - **Source**: Deploy from a branch
+   - **Branch**: `main` (or your default branch), folder `/root`
+4. Save settings and wait for deployment.
+5. GitHub will provide a live URL for your site.
+
+## How to Add New Recipes and Images
+
+1. Open `index.html`.
+2. Find the `Food Gallery` section and duplicate one `<article class="recipe-card">...</article>` block.
+3. Update:
+   - Image URL in the `<img src="...">`
+   - `alt` text for accessibility
+   - Recipe title in `<h3>`
+   - Description in `<p>`
+   - Nutrition tag in `<span class="tag">`
+4. Save and refresh the page.
+
+## Customize the Meal Idea Generator
+
+1. Open `script.js`.
+2. Add or edit items in the `mealIdeas` array.
+3. Save and refresh to see updated random ideas.
 
EOF
)
