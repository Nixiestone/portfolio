# Deployment Guide - Portfolio Website

Complete guide for deploying your portfolio to GitHub Pages with automated CI/CD.

## Prerequisites

- Git installed on your machine
- GitHub account
- Basic command line knowledge
- Text editor (VS Code recommended)

## Quick Start (5 minutes)

### 1. Create GitHub Repository

```bash
# Navigate to your portfolio folder
cd path/to/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Professional portfolio website"
```

### 2. Create Remote Repository

Go to GitHub.com and:
1. Click the '+' icon in top right
2. Select 'New repository'
3. Repository name: `portfolio` or `nixiestone.github.io`
4. Description: "Professional portfolio showcasing DevOps and Quant Trading expertise"
5. Public repository
6. Do NOT initialize with README (we already have one)
7. Click 'Create repository'

### 3. Push to GitHub

```bash
# Add remote (replace nixiestone with your username)
git remote add origin https://github.com/nixiestone/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click 'Settings'
3. Scroll to 'Pages' in left sidebar
4. Under 'Source':
   - Branch: `main`
   - Folder: `/ (root)`
5. Click 'Save'

### 5. Wait for Deployment

- GitHub will build and deploy your site
- This takes 1-5 minutes
- Your site will be live at: `https://nixiestone.github.io/portfolio/`

### 6. Visit Your Live Site

Open: `https://yourusername.github.io/portfolio/`

Done! Your portfolio is now live.

## Custom Domain Setup (Optional)

### Option A: Use username.github.io as primary

If your repository is named `nixiestone.github.io`:
- Site automatically available at: `https://nixiestone.github.io`
- No extra configuration needed

### Option B: Custom Domain

If you own a domain (e.g., `blessingomoregie.com`):

#### Step 1: Add CNAME file

Create a file named `CNAME` in your repository root:

```bash
echo "www.yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

#### Step 2: Configure DNS

Go to your domain registrar and add:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: nixiestone.github.io
TTL: 3600
```

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### Step 3: Update GitHub Settings

1. Go to repository Settings > Pages
2. Under 'Custom domain', enter: `www.yourdomain.com`
3. Wait for DNS check (can take 24-48 hours)
4. Enable 'Enforce HTTPS' once DNS propagates

## Automated Deployment Workflow

Every time you push to `main`, GitHub automatically:
1. Detects changes
2. Builds the site
3. Deploys to GitHub Pages
4. Updates live site

### Making Updates

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Update: describe your changes"
git push

# Site updates automatically in 1-5 minutes
```

## Alternative Deployment Options

### Netlify Deployment

**Advantages**: Faster builds, better analytics, form handling

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify init

# Follow prompts:
# - Create new site
# - Build command: (leave empty)
# - Publish directory: . (current directory)

# Deploy
netlify deploy --prod
```

**Continuous Deployment**:
1. Connect GitHub repository on Netlify dashboard
2. Every push to main deploys automatically
3. Preview deployments for pull requests

### Vercel Deployment

**Advantages**: Fast global CDN, zero configuration

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts and confirm

# Production deployment
vercel --prod
```

**Continuous Deployment**:
1. Import GitHub repository on Vercel dashboard
2. Automatic deployments on every push
3. Preview URLs for branches

### Cloudflare Pages

**Advantages**: Global CDN, DDoS protection, free SSL

1. Go to Cloudflare Pages dashboard
2. Connect GitHub account
3. Select repository
4. Configure:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy

### Traditional Web Hosting (cPanel)

If you have traditional web hosting:

```bash
# Build is already done (no build step needed)
# Simply upload files via FTP/SFTP:

# Using FileZilla, Cyberduck, or command line:
sftp user@yourhost.com
put -r * /public_html/
```

## Environment-Specific Configurations

### Development

```bash
# Local development server
python -m http.server 8000
# Visit: http://localhost:8000

# Or use VS Code Live Server extension
# Or Node's http-server:
npx http-server
```

### Staging (Optional)

Create a `develop` branch for staging:

```bash
# Create develop branch
git checkout -b develop
git push -u origin develop

# In GitHub Pages settings:
# Deploy from 'develop' branch for staging
# Use subdomain: staging.yourdomain.com
```

### Production

Main branch is production:
```bash
# Only merge to main when ready for production
git checkout main
git merge develop
git push
```

## Troubleshooting

### Site Not Loading

**Check 1**: Wait 5-10 minutes after first deployment

**Check 2**: Verify GitHub Pages is enabled
- Settings > Pages > Source should show `main` branch

**Check 3**: Check for build errors
- Go to Actions tab
- Look for failed builds

**Check 4**: Verify file paths
- All paths should be relative
- No absolute paths like `/css/style.css`

### 404 Error

**Solution**: Check repository name
- If repo is `portfolio`, site is at `username.github.io/portfolio/`
- If repo is `username.github.io`, site is at `username.github.io`

### Custom Domain Not Working

**Check 1**: DNS propagation (can take 24-48 hours)
```bash
# Check DNS records
nslookup www.yourdomain.com

# Should return GitHub's IP addresses
```

**Check 2**: CNAME file exists in repository root

**Check 3**: GitHub Pages shows 'DNS check successful'

### Styles Not Loading

**Issue**: CSS not loading after deployment

**Solution**: Check file paths in HTML
```html
<!-- Correct (relative path) -->
<link rel="stylesheet" href="styles.css">

<!-- Incorrect (absolute path) -->
<link rel="stylesheet" href="/styles.css">
```

### JavaScript Not Working

**Check**: Browser console for errors
- Press F12 to open DevTools
- Check Console tab for errors
- Verify script.js is loading

## Performance Optimization

### Before Deployment

1. **Minify CSS** (optional for small sites):
```bash
# Using online tool or:
npm install -g cssnano-cli
cssnano styles.css styles.min.css
```

2. **Minify JavaScript** (optional):
```bash
npm install -g terser
terser script.js -o script.min.js -c -m
```

3. **Optimize Images** (when you add them):
```bash
# Use tools like:
# - TinyPNG (online)
# - ImageOptim (Mac)
# - Squoosh (web app)
```

### After Deployment

**Test with Google Lighthouse**:
1. Open site in Chrome
2. F12 > Lighthouse tab
3. Generate report
4. Aim for 90+ in all categories

**Test on Mobile**:
- Use Chrome DevTools device emulation
- Test on real devices
- Check different screen sizes

## Monitoring and Analytics

### Google Analytics Setup

1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### GitHub Traffic Stats

View in repository:
- Insights > Traffic
- See views, clones, referrers

## Security Best Practices

### HTTPS

- Always enabled on GitHub Pages
- Enforced for custom domains
- No configuration needed

### Content Security

```html
<!-- Add security headers (in meta tags) -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

### Regular Updates

```bash
# Keep dependencies updated
# Check for security advisories
# Monitor GitHub security alerts
```

## Backup Strategy

### Automatic Backups

GitHub acts as backup:
- Every commit is saved
- Full version history
- Can restore any previous version

### Local Backup

```bash
# Clone to another location
cd ~/backups
git clone https://github.com/nixiestone/portfolio.git portfolio-backup

# Update periodically
cd portfolio-backup
git pull
```

## Continuous Integration (Advanced)

### Add GitHub Actions

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Validate HTML
      run: |
        npm install -g html-validator-cli
        html-validator --file=index.html
    
    - name: Check links
      run: |
        npm install -g broken-link-checker
        blc http://localhost:8000 -ro
```

## Deployment Checklist

Before going live:

- [ ] All links work (internal and external)
- [ ] Mobile responsive on all devices
- [ ] Images optimized (when added)
- [ ] Meta tags updated with your info
- [ ] Contact information is correct
- [ ] GitHub/LinkedIn/Email links work
- [ ] No console errors
- [ ] Lighthouse score 90+ on all metrics
- [ ] Cross-browser tested
- [ ] Grammar and spelling checked
- [ ] Analytics configured (if using)
- [ ] Custom domain configured (if using)
- [ ] SSL certificate active (automatic on GitHub Pages)

## Maintenance Schedule

### Weekly
- Check analytics
- Monitor for errors
- Respond to messages

### Monthly
- Update projects section
- Add new skills
- Check for broken links

### Quarterly
- Major content updates
- Design refinements
- Performance audit

## Getting Help

If you encounter issues:

1. **GitHub Pages Documentation**
   - https://docs.github.com/pages

2. **GitHub Community**
   - https://github.community

3. **Stack Overflow**
   - Tag: github-pages

4. **Check Status**
   - https://www.githubstatus.com

## Next Steps

After deployment:

1. Share your portfolio URL
2. Add to LinkedIn profile
3. Include in email signature
4. Submit to job applications
5. Share on social media
6. Get feedback from peers
7. Iterate and improve

---

Deployment success means your work is visible to the world. Keep it updated and maintain it well.

Good luck with your portfolio!

---

**Need help?** Open an issue on GitHub or reach out via email.