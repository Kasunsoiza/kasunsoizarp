# Europin CV Maker

A free, professional CV builder with ATS-friendly templates. Create and download your resume in minutes.

![Europin CV Maker](https://yourusername.github.io/europin-cv-maker/og-image.png)

## Features

- **8 Professional Templates**: Modern, Classic, ATS-Friendly, Onyx, Pikachu, Glalie, Gengar, and Leafish
- **ATS-Optimized**: Special ATS template ensures your CV passes applicant tracking systems
- **Real-time Preview**: See changes instantly as you edit
- **PDF Export**: Download your CV as a high-quality PDF
- **No Signup Required**: Start building immediately
- **100% Free**: No hidden costs or premium features

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3.4
- React Router DOM
- React to Print
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/europin-cv-maker.git
cd europin-cv-maker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deploying to GitHub Pages

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `europin-cv-maker`
2. Make it public
3. Don't initialize with a README (we already have one)

### 2. Update Configuration

Before deploying, update the following files with your GitHub username:

**vite.config.ts:**
```typescript
base: '/europin-cv-maker/', // This should match your repository name
```

**index.html:**
Update all instances of `yourusername` with your actual GitHub username:
- Canonical URL
- Open Graph URL
- Twitter URL
- Image URLs

**src/App.tsx:**
```typescript
<BrowserRouter basename="/europin-cv-maker">
```

### 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/europin-cv-maker.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select **GitHub Actions**

### 5. Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 6. Commit and Push the Workflow

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push
```

GitHub Actions will automatically build and deploy your site. You can monitor the progress in the **Actions** tab of your repository.

### 7. Access Your Live Site

Once deployed, your site will be available at:
```
https://yourusername.github.io/europin-cv-maker/
```

## Project Structure

```
src/
├── components/      # UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
│   ├── Home.tsx    # Landing page
│   └── Builder.tsx # CV builder page
├── templates/      # CV templates
│   ├── ModernTemplate.tsx
│   ├── ClassicTemplate.tsx
│   ├── ATSTemplate.tsx
│   ├── OnyxTemplate.tsx
│   ├── PikachuTemplate.tsx
│   ├── GlalieTemplate.tsx
│   ├── GengarTemplate.tsx
│   └── LeafishTemplate.tsx
├── types/          # TypeScript types
│   └── cv.ts
├── App.tsx         # Main app component
├── index.css       # Global styles
└── main.tsx        # Entry point
```

## Customization

### Changing the Primary Color

The primary color (Royal Blue #4169E1) is defined in `src/index.css`. To change it:

1. Update CSS variables in `:root`
2. Update Tailwind config if needed
3. Update the theme-color meta tag in `index.html`

### Adding a New Template

1. Create a new file in `src/templates/`
2. Export the template component
3. Add the template to `src/types/cv.ts`
4. Import and add to the template switch in `src/pages/Builder.tsx`

## SEO

The application includes comprehensive SEO optimizations:

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- Semantic HTML

Update the URLs in `index.html` with your actual domain before deploying.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you found this project helpful, please consider giving it a star on GitHub!

---

Built with ❤️ by Europin
