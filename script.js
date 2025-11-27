// Portfolio JavaScript - Blessing Omoregie
// Professional portfolio with dark mode, blog, and PDF resume download

// Projects Data
const projects = [
    {
        title: "Nixie's Gold Trading Bot",
        category: "Quantitative Trading",
        description: "Sophisticated algorithmic trading system for gold (XAU/USD) combining technical analysis, smart money concepts, and machine learning for high-probability trade identification.",
        tech: ["Python", "MetaTrader 5", "XGBoost", "AWS", "Telegram API", "Pandas"],
        metrics: ["65-75% win rate", "1.5:1 min R:R", "Multi-timeframe analysis", "ML signal filtering"],
        github: "https://github.com/nixiestone/nixie-gold-bot",
        live: null,
        highlights: [
            "6-factor confluence system for signal generation",
            "Automated AWS deployment with health monitoring",
            "Multi-user Telegram broadcasting system",
            "Comprehensive backtesting framework"
        ]
    },
    {
        title: "Gradific CI/CD & Monitoring Platform",
        category: "DevOps & Cloud",
        description: "Production-grade DevOps infrastructure for Gradific with automated CI/CD pipelines, comprehensive monitoring, DORA metrics tracking, and real-time alerting system achieving 99.9% uptime.",
        tech: ["GitHub Actions", "Prometheus", "Grafana", "Nginx", "Alertmanager", "Node Exporter", "Blackbox Exporter", "Slack API"],
        metrics: ["99.9% uptime", "40% faster deployments", "50% more frequent releases", "35% faster incident resolution"],
        github: "https://github.com/Nixiestone/Prograde-Frontend",
        live: null,
        highlights: [
            "Multi-environment CI/CD workflows (dev, staging, production)",
            "Custom DORA metrics dashboard improving team efficiency by 30%",
            "Real-time Slack alerting identifying 80%+ issues proactively",
            "Vercel to self-hosted migration reducing costs by 25%"
        ]
    },
    {
        title: "Container Isolation System (Docker Alternative)",
        category: "Systems Engineering",
        description: "Built lightweight container-like environment from scratch using Linux namespaces, cgroups, and chroot, demonstrating deep understanding of containerization internals without Docker.",
        tech: ["Linux Namespaces", "cgroups", "chroot", "Bash", "systemd", "seccomp"],
        metrics: ["Process isolation", "Resource limiting", "Network isolation", "Security hardening"],
        github: "https://github.com/Nixiestone/container-isolation-project",
        live: null,
        highlights: [
            "Implemented PID, User, Network, and Mount namespaces",
            "Configured CPU, memory, and disk I/O limits with cgroups",
            "Created isolated filesystem with chroot/pivot_root",
            "Applied security restrictions with seccomp and AppArmor"
        ]
    },
    {
        title: "DORA Metrics Monitoring System",
        category: "DevOps & Observability",
        description: "Comprehensive monitoring infrastructure tracking Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Restore with automated alerting to Slack.",
        tech: ["Prometheus", "Grafana", "Node Exporter", "Blackbox Exporter", "Alertmanager", "GitHub Actions", "Slack API"],
        metrics: ["4 DORA metrics", "Real-time dashboards", "Automated alerts", "Multi-exporter setup"],
        github: "https://github.com/Nixiestone/dora-metrics",
        live: null,
        highlights: [
            "Integrated Prometheus with GitHub Actions for CI/CD metrics",
            "Created custom Grafana dashboards for DORA visualization",
            "Configured alerting rules for CPU, memory, and downtime",
            "Implemented both failure and recovery alerts to Slack"
        ]
    },
    {
        title: "Dynamic Backend Deployment Platform",
        category: "Cloud Architecture",
        description: "Designed Kubernetes-based architecture for dynamically deploying and testing backend applications in isolated namespaces with automated testing and validation workflows.",
        tech: ["Kubernetes", "Namespaces", "Pods", "Services", "API Gateway", "CI/CD", "PostgreSQL"],
        metrics: ["Dynamic namespace creation", "Isolated environments", "Automated testing", "Production promotion"],
        github: null,
        live: null,
        highlights: [
            "Kubernetes namespace per deployment with app, DB, and test pods",
            "API gateway for request routing and management",
            "Automated testing and validation pipeline",
            "State management for production promotion"
        ]
    },
    {
        title: "FastAPI Microservices Platform",
        category: "DevOps & Cloud",
        description: "Containerized microservices architecture with CI/CD pipeline automation, reducing deployment time by 40% and enabling 15+ weekly deployments.",
        tech: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
        metrics: ["40% faster deployments", "15+ weekly releases", "30% improved lead time", "25% better incident response"],
        github: "https://github.com/Nixiestone/DevOps-Stage-4",
        live: null,
        highlights: [
            "Infrastructure as Code with Terraform & Ansible",
            "Real-time monitoring with Prometheus & Grafana",
            "Automated CI/CD pipelines with GitHub Actions",
            "Traefik reverse proxy for scalability"
        ]
    },
    {
        title: "RESTful Book Management API",
        category: "Software Development",
        description: "Production-grade RESTful API with FastAPI and PostgreSQL, featuring automated testing, containerization, and comprehensive API documentation.",
        tech: ["FastAPI", "PostgreSQL", "Docker", "Pytest", "SQLAlchemy"],
        metrics: ["100% API coverage", "Automated testing", "OpenAPI documentation", "Containerized deployment"],
        github: "https://github.com/Nixiestone/fastapi-book-project",
        live: null,
        highlights: [
            "RESTful design principles with proper HTTP methods",
            "Database relationship management with SQLAlchemy",
            "Automated testing with Pytest",
            "Interactive API documentation with Swagger"
        ]
    },
    {
        title: "Number Classification API",
        category: "API Development",
        description: "RESTful API that analyzes numbers and returns mathematical properties (prime, perfect, Armstrong) along with fun facts, deployed with CORS support and comprehensive error handling.",
        tech: ["Python", "FastAPI", "REST API", "CORS", "JSON", "Cloud Deployment"],
        metrics: ["<500ms response", "Multiple math properties", "Fun fact integration", "Error handling"],
        github: "https://github.com/Nixiestone/HNG-DevOps-internship",
        live: null,
        highlights: [
            "Analyzes prime, perfect, and Armstrong numbers",
            "Integrates Numbers API for fun facts",
            "Comprehensive input validation and error handling",
            "Deployed to publicly accessible endpoint"
        ]
    },
    {
        title: "NGINX Web Server Configuration",
        category: "Web Server Administration",
        description: "Deployed and configured NGINX web server on Ubuntu with custom HTML page, demonstrating fundamental DevOps skills in server setup and web server configuration.",
        tech: ["NGINX", "Ubuntu", "HTML", "Linux", "Cloud Deployment"],
        metrics: ["Port 80 deployment", "Custom HTML", "Public IP access", "Server administration"],
        github: null,
        live: null,
        highlights: [
            "Installed and configured NGINX on fresh Ubuntu server",
            "Created custom HTML welcome page",
            "Deployed to public IP address on port 80",
            "Documented setup process in blog post"
        ]
    },
    {
        title: "Professional Portfolio Website",
        category: "Frontend Development",
        description: "Modern, responsive portfolio built with vanilla JavaScript, HTML5, and CSS3, featuring dark mode, blog section, and PDF resume download functionality.",
        tech: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
        metrics: ["100% responsive", "Dark mode", "Performance optimized", "Zero dependencies"],
        github: "https://github.com/nixiestone/portfolio",
        live: "https://nixiestone.github.io/portfolio",
        highlights: [
            "Vanilla JavaScript (no frameworks)",
            "Dark mode toggle with localStorage persistence",
            "Smooth scroll animations and transitions",
            "Deployed via GitHub Pages"
        ]
    }
];

// Blog Posts Data
const blogPosts = [
    {
        title: "From DevOps to Quant Trading: How I Built a Gold Trading Bot (While My HP ProBook Begged for Mercy)",
        date: "2025-11-27",
        readTime: "9 min read",
        excerpt: "The journey from emotional trading losses to building a systematic trading bot that removes human bias. Learn about the technical challenges, AWS deployment, and ML integration in this comprehensive guide.",
        link: "https://medium.com/@NixieB/from-devops-to-quant-trading-how-i-built-a-gold-trading-bot-while-my-hp-probook-begged-for-mercy-a2f63b3fd4ca"
    },
    {
        title: "Deploying Prometheus & Grafana, Tracking DORA Metrics, and Setting Up Alerts: A DevOps Intern Journey at HNG Tech.",
        date: "2025-03-23",
        readTime: "10 min read",
        excerpt: "Ever woken up to frantic messages about your website being down? Or struggled to understand why your application performance degrades after deployments?",
        link: "https://medium.com/@NixieB/deploying-prometheus-grafana-tracking-dora-metrics-and-setting-up-alerts-6aa39fdce2cd"
    },
    {
        title: "Building a Number Classification API: My First Python Project in DevOps",
        date: "2025-03-10",
        readTime: "1 min read",
        excerpt: "Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact.",
        link: "https://medium.com/@NixieB/building-a-number-classification-api-my-first-python-project-in-devops-1ed0ebde3781"
    }
];

// Skills Data
const skills = {
    "DevOps & Cloud": [
        { name: "AWS (EC2, IAM, VPC)", level: 85 },
        { name: "Docker & Kubernetes", level: 80 },
        { name: "Terraform & Ansible", level: 75 },
        { name: "CI/CD (GitHub Actions, Jenkins)", level: 85 },
        { name: "Monitoring (Prometheus, Grafana)", level: 80 }
    ],
    "Programming": [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Bash Scripting", level: 80 },
        { name: "SQL", level: 75 },
        { name: "FastAPI/REST APIs", level: 85 }
    ],
    "Quantitative Finance": [
        { name: "Algorithmic Trading", level: 80 },
        { name: "Technical Analysis", level: 85 },
        { name: "Machine Learning (XGBoost, scikit-learn)", level: 75 },
        { name: "Backtesting & Strategy Development", level: 80 },
        { name: "Risk Management", level: 85 }
    ],
    "Tools & Platforms": [
        { name: "Git & GitHub", level: 90 },
        { name: "Linux/Unix", level: 85 },
        { name: "MetaTrader 5", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Slack/Telegram APIs", level: 80 }
    ]
};

// Experience Data
const experiences = [
    {
        title: "DevOps Engineer (Contract)",
        company: "Gradific",
        period: "April 2025 – August 2025",
        achievements: [
            "Designed and implemented robust CI/CD pipelines using GitHub Actions, managing automated workflows across development, staging, and production environments, reducing deployment time by 40% and increasing deployment frequency by 50%",
            "Established comprehensive monitoring system utilizing Grafana, Prometheus, Node Exporter, and Blackbox Exporter, achieving 99.9% system uptime",
            "Developed custom DORA metrics application to monitor CI/CD deployments, improving team efficiency by 30% through data-driven insights",
            "Created real-time alerting system with Prometheus and Alertmanager integrated with Slack, enabling proactive identification of 80%+ potential issues and reducing critical alert resolution time by 35%",
            "Successfully migrated application from Vercel to self-hosted server environment, reducing hosting costs by 25%",
            "Implemented CI/CD pipelines for Quality Assurance processes, reducing QA environment setup time by 60%",
            "Managed server setup and configured Nginx for efficient traffic routing across multiple environments",
            "Participated in on-call rotation ensuring 24/7 system availability and prompt resolution of critical production issues",
            "Collaborated closely with development and QA teams to integrate automated testing into CI/CD pipelines, ensuring code quality and stability early in the development cycle"
        ]
    },
    {
        title: "DevOps Engineer Intern",
        company: "HNG Tech",
        period: "January 2025 – April 2025",
        achievements: [
            "Engineered Infrastructure as Code using Terraform and Ansible, enabling one-command deployments across dev and prod environments",
            "Deployed Prometheus & Grafana for real-time monitoring, tracking DORA metrics and cutting deployment lead time by 30%",
            "Built CI/CD pipelines with GitHub Actions for FastAPI applications, reducing deployment time by 40%",
            "Implemented Slack alerting for critical thresholds (CPU > 80%), improving incident response time by 25%"
        ]
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const blogGrid = document.getElementById('blog-grid');
const skillsGrid = document.getElementById('skills-grid');
const themeToggle = document.getElementById('theme-toggle');

// Dark Mode Management
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// PDF Resume Download Functionality
function downloadResumePDF() {
    const link = document.createElement('a');
    link.href = 'Blessing_Omoregie_Resume.pdf';
    link.download = 'Blessing_Omoregie_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Add event listeners for resume download
document.getElementById('resume-download-nav').addEventListener('click', (e) => {
    e.preventDefault();
    downloadResumePDF();
});

document.getElementById('resume-download-hero').addEventListener('click', (e) => {
    e.preventDefault();
    downloadResumePDF();
});

// Navigation scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.id.includes('resume')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !this.id.includes('resume')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                </div>
                <p class="project-description">${project.description}</p>
                
                <div class="project-section">
                    <h4>Key Metrics</h4>
                    <div class="metrics-list">
                        ${project.metrics.map(metric => `
                            <span class="metric-tag">${metric}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="project-section">
                    <h4>Technologies</h4>
                    <div class="tech-list">
                        ${project.tech.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="project-section">
                    <h4>Highlights</h4>
                    <ul class="highlights-list">
                        ${project.highlights.map(highlight => `
                            <li>${highlight}</li>
                        `).join('')}
                    </ul>
                </div>

                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Source Code
                        </a>
                    ` : ''}
                    ${project.live ? `
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render blog posts
function renderBlog() {
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="blog-link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
}

// Render skills
function renderSkills() {
    skillsGrid.innerHTML = Object.entries(skills).map(([category, skillList]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            ${skillList.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.level}" style="width: 0%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    observeSkillBars();
}

// Render experience
function renderExperience() {
    const experienceContainer = document.querySelector('.experience-container');
    if (!experienceContainer) return;
    
    experienceContainer.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="experience-header">
                <div>
                    <h3>${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                </div>
                <span class="period">${exp.period}</span>
            </div>
            <ul class="achievements">
                ${exp.achievements.map(achievement => `
                    <li>${achievement}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// Intersection Observer for skill bar animations
function observeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Intersection Observer for fade-in animations
function observeElements() {
    const elements = document.querySelectorAll('.project-card, .blog-card, .experience-card, .about-text, .about-highlights');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// Active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    renderProjects();
    renderBlog();
    renderSkills();
    renderExperience();
    observeElements();
    updateActiveNavLink();
});

// Add keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Console message for recruiters
console.log('%cHey there, recruiter!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cThanks for checking out my portfolio source code.', 'color: #6b7280; font-size: 14px;');
console.log('%cThis site features dark mode, blog integration, and PDF resume download.', 'color: #6b7280; font-size: 14px;');
console.log('%cCheck out my GitHub: https://github.com/nixiestone', 'color: #2563eb; font-size: 14px;');