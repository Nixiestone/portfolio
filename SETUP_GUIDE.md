# Portfolio Setup Guide

Complete guide to set up and deploy your professional portfolio.

## Prerequisites

- Git installed
- GitHub account
- Text editor (VS Code recommended)
- Web browser
- 30 minutes of time

## Step 1: Repository Setup

### Create GitHub Repository

1. Go to GitHub.com
2. Click "New repository"
3. Repository name: `nixiestone.github.io` (for personal domain) or `portfolio`
4. Description: "Professional portfolio showcasing DevOps and Quantitative Trading expertise"
5. **Important**: Keep repository **Private** if you don't want it public
6. Do NOT initialize with README
7. Click "Create repository"

### Clone and Setup

```bash
# Navigate to where you want the portfolio
cd ~/projects

# Clone the repository
git clone https://github.com/nixiestone/portfolio.git
cd portfolio

# Copy all portfolio files here
# (index.html, styles.css, script.js, README.md, etc.)

# Create .github/workflows directory
mkdir -p .github/workflows

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional portfolio with dark mode and blog"

# Push to GitHub
git push -u origin main
```

## Step 2: Enable GitHub Pages

### Configure GitHub Pages

1. Go to repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in left sidebar
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. Save

### Verify Workflow

1. Go to "Actions" tab
2. You should see "Deploy Portfolio to GitHub Pages" workflow
3. Wait for green checkmark (1-2 minutes)
4. Your site will be live at `https://nixiestone.github.io/portfolio/`

## Step 3: Customize Content

### Update Resume

Edit `script.js`, find `resumeContent`:

```javascript
const resumeContent = `YOUR NAME
Your Title

YOUR INFORMATION HERE...`;
```

### Update Projects

Edit `script.js`, find `projects` array:

```javascript
const projects = [
    {
        title: "Your Project",
        category: "Category",
        description: "Description...",
        tech: ["Tech1", "Tech2"],
        metrics: ["Metric1"],
        github: "https://github.com/...",
        live: null,
        highlights: ["Highlight 1"]
    }
];
```

### Update Blog Posts

Edit `script.js`, find `blogPosts` array:

```javascript
const blogPosts = [
    {
        title: "Your Post Title",
        date: "2025-01-20",
        readTime: "10 min read",
        excerpt: "Description...",
        link: "https://medium.com/..."
    }
];
```

### Update Skills

Edit `script.js`, find `skills` object:

```javascript
const skills = {
    "Category Name": [
        { name: "Skill Name", level: 85 }
    ]
};
```

### Update Personal Information

Edit `index.html`:

1. Change navigation links
2. Update social media URLs
3. Update email address
4. Update phone number
5. Update hero section text
6. Update about section content

## Step 4: Test Locally

### Using Python

```bash
# Navigate to portfolio directory
cd portfolio

# Start server
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Using Node

```bash
# Install http-server globally
npm install -g http-server

# Start server
http-server

# Open browser to http://localhost:8080
```

### Using VS Code

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Step 5: Test Features

### Dark Mode
- Click theme toggle button (top-right)
- Verify theme switches
- Reload page - theme should persist
- Check localStorage in DevTools

### Resume Download
- Click "Download Resume" in navigation
- Click "Download Resume" in hero section
- Verify `Blessing_Omoregie_Resume.txt` downloads
- Open file and verify content

### Blog Section
- Scroll to blog section
- Verify posts display correctly
- Click "Read More" links
- Check external links open in new tab

### Responsive Design
- Test on mobile device
- Use Chrome DevTools device emulation
- Test all breakpoints:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+

### Navigation
- Test all navigation links
- Verify smooth scroll
- Test mobile menu toggle
- Check external links

## Step 6: Deploy Updates

### Make Changes

```bash
# Edit files
nano index.html
nano styles.css
nano script.js

# Test locally
python -m http.server 8000

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: add new project and blog post"

# Push to GitHub
git push origin main
```

### Verify Deployment

1. Go to GitHub repository
2. Click "Actions" tab
3. Watch workflow run
4. Wait for green checkmark
5. Visit live site (refresh with Ctrl+Shift+R)

## Step 7: Custom Domain (Optional)

### If Using Custom Domain

1. Purchase domain from registrar
2. Create `CNAME` file in repository root:
   ```
   yourdomain.com
   ```

3. Configure DNS at registrar:
   ```
   Type: CNAME
   Name: www
   Value: nixiestone.github.io
   TTL: 3600
   ```

4. In GitHub Settings > Pages:
   - Custom domain: `www.yourdomain.com`
   - Wait for DNS check
   - Enable "Enforce HTTPS"

5. Wait 24-48 hours for DNS propagation

## Step 8: Monitoring and Maintenance

### Weekly Tasks

- Check GitHub Actions for failed deployments
- Update blog section with new posts
- Respond to any contact form submissions
- Monitor site performance

### Monthly Tasks

- Add new projects
- Update skills section
- Check for broken links
- Review analytics (if added)
- Update resume content

### Quarterly Tasks

- Major content refresh
- Design updates
- Performance optimization
- SEO audit
- Accessibility review

## Troubleshooting

### Site Not Loading

**Problem**: 404 error when visiting site

**Solutions**:
1. Check GitHub Actions completed successfully
2. Verify Pages is set to "GitHub Actions" source
3. Wait 5-10 minutes after first deployment
4. Check repository name matches URL

### Dark Mode Not Working

**Problem**: Theme doesn't persist

**Solutions**:
1. Check browser supports localStorage
2. Clear browser cache and cookies
3. Check JavaScript console for errors
4. Verify script.js is loading

### Resume Download Fails

**Problem**: Download button doesn't work

**Solutions**:
1. Check JavaScript console for errors
2. Disable pop-up blocker
3. Try different browser
4. Verify resumeContent variable is defined

### GitHub Actions Failing

**Problem**: Deployment workflow fails

**Solutions**:
1. Check Actions tab for error details
2. Verify workflow file syntax
3. Check repository permissions
4. Re-run failed workflow
5. Check GitHub status page

### Changes Not Appearing

**Problem**: Updates don't show on live site

**Solutions**:
1. Wait 2-5 minutes after push
2. Hard refresh (Ctrl+Shift+R)
3. Clear browser cache
4. Check Actions completed
5. Try incognito mode

## Tips and Best Practices

### Content

- Keep resume updated monthly
- Add new projects as you build them
- Write blog posts regularly
- Use high-quality screenshots
- Maintain consistent tone

### Code

- Test locally before pushing
- Write descriptive commit messages
- Keep code clean and commented
- Follow naming conventions
- Validate HTML/CSS

### Performance

- Optimize images before adding
- Minimize large files
- Test on slow connections
- Check mobile performance
- Monitor load times

### SEO

- Update meta tags
- Use semantic HTML
- Add alt text to images
- Create sitemap
- Submit to search engines

## File Checklist

Before deploying, verify you have:

- [ ] index.html
- [ ] styles.css
- [ ] script.js
- [ ] README.md
- [ ] DEPLOYMENT.md
- [ ] PROJECT_STRUCTURE.md
- [ ] SETUP_GUIDE.md (this file)
- [ ] .gitignore
- [ ] .github/workflows/deploy.yml

## Content Checklist

Verify you've customized:

- [ ] Personal information in HTML
- [ ] Resume content in JavaScript
- [ ] Projects data
- [ ] Blog posts data
- [ ] Skills data
- [ ] Social media links
- [ ] Email address
- [ ] About section text

## Testing Checklist

Before going live:

- [ ] All navigation links work
- [ ] Dark mode toggles and persists
- [ ] Resume downloads correctly
- [ ] Blog posts display
- [ ] Mobile responsive
- [ ] No console errors
- [ ] External links open in new tab
- [ ] Smooth scroll works
- [ ] Forms work (if added)
- [ ] Images load (if added)

## Success Criteria

Your portfolio is ready when:

- [ ] Site loads without errors
- [ ] All features work as expected
- [ ] Content is accurate and up-to-date
- [ ] Responsive on all devices
- [ ] GitHub Actions deploys successfully
- [ ] No broken links
- [ ] Performance is good (Lighthouse 90+)
- [ ] You're proud to share it

## Next Steps

After deployment:

1. Add portfolio URL to LinkedIn
2. Include in email signature
3. Share on social media
4. Add to job applications
5. Add to GitHub profile README
6. Submit to job boards
7. Get feedback from peers

## Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)
- [Can I Use](https://caniuse.com)

## Support

Need help? Contact:
- Email: omoregieblessing52@gmail.com
- GitHub: Open an issue in the repository

---

Good luck with your portfolio! Remember to keep it updated and maintain it regularly.