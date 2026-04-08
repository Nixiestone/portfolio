// Portfolio JavaScript — Blessing Omoregie

// ─── Projects Data ────────────────────────────────────────────
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
        description: "Production-grade DevOps infrastructure for Gradific with automated CI/CD pipelines, comprehensive monitoring, DORA metrics tracking, and real-time alerting achieving 99.9% uptime.",
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
        title: "Container Isolation System",
        category: "Systems Engineering",
        description: "Built a lightweight container-like environment from scratch using Linux namespaces, cgroups, and chroot, demonstrating deep understanding of containerisation internals without Docker.",
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
            "Created custom Grafana dashboards for DORA visualisation",
            "Configured alerting rules for CPU, memory, and downtime",
            "Implemented both failure and recovery alerts to Slack"
        ]
    },
    {
        title: "Dynamic Backend Deployment Platform",
        category: "Cloud Architecture",
        description: "Kubernetes-based architecture for dynamically deploying and testing backend applications in isolated namespaces with automated testing and validation workflows.",
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
        description: "Containerised microservices architecture with CI/CD pipeline automation, reducing deployment time by 40% and enabling 15+ weekly deployments.",
        tech: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
        metrics: ["40% faster deployments", "15+ weekly releases", "30% improved lead time", "25% better incident response"],
        github: "https://github.com/Nixiestone/DevOps-Stage-4",
        live: null,
        highlights: [
            "Infrastructure as Code with Terraform and Ansible",
            "Real-time monitoring with Prometheus and Grafana",
            "Automated CI/CD pipelines with GitHub Actions",
            "Traefik reverse proxy for scalability"
        ]
    },
    {
        title: "RESTful Book Management API",
        category: "Software Development",
        description: "Production-grade RESTful API with FastAPI and PostgreSQL, featuring automated testing, containerisation, and comprehensive API documentation.",
        tech: ["FastAPI", "PostgreSQL", "Docker", "Pytest", "SQLAlchemy"],
        metrics: ["100% API coverage", "Automated testing", "OpenAPI documentation", "Containerised deployment"],
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
        description: "RESTful API that analyses numbers and returns mathematical properties (prime, perfect, Armstrong) along with fun facts, deployed with CORS support and comprehensive error handling.",
        tech: ["Python", "FastAPI", "REST API", "CORS", "JSON", "Cloud Deployment"],
        metrics: ["Sub-500ms response", "Multiple math properties", "Fun fact integration", "Error handling"],
        github: "https://github.com/Nixiestone/HNG-DevOps-internship",
        live: null,
        highlights: [
            "Analyses prime, perfect, and Armstrong numbers",
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
            "Installed and configured NGINX on a fresh Ubuntu server",
            "Created custom HTML welcome page",
            "Deployed to public IP address on port 80",
            "Documented setup process in blog post"
        ]
    },
    {
        title: "Professional Portfolio Website",
        category: "Frontend Development",
        description: "Modern, responsive portfolio built with vanilla JavaScript, HTML5, and CSS3, featuring glassmorphism design, dark mode, blog section, and PDF resume download.",
        tech: ["JavaScript", "HTML5", "CSS3", "GitHub Pages"],
        metrics: ["100% responsive", "Dark mode", "Performance optimised", "Zero dependencies"],
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

// ─── Blog Posts Data ──────────────────────────────────────────
const blogPosts = [
    {
        title: "From DevOps to Quant Trading: How I Built a Gold Trading Bot (While My HP ProBook Begged for Mercy)",
        date: "2025-11-27",
        readTime: "9 min read",
        excerpt: "The journey from emotional trading losses to building a systematic trading bot that removes human bias. Learn about the technical challenges, AWS deployment, and ML integration in this comprehensive guide.",
        link: "https://medium.com/@NixieB/from-devops-to-quant-trading-how-i-built-a-gold-trading-bot-while-my-hp-probook-begged-for-mercy-a2f63b3fd4ca"
    },
    {
        title: "Deploying Prometheus & Grafana, Tracking DORA Metrics, and Setting Up Alerts: A DevOps Intern Journey at HNG Tech",
        date: "2025-03-23",
        readTime: "10 min read",
        excerpt: "Ever woken up to frantic messages about your website being down? Or struggled to understand why application performance degrades after deployments? Here is how I tackled both.",
        link: "https://medium.com/@NixieB/deploying-prometheus-grafana-tracking-dora-metrics-and-setting-up-alerts-6aa39fdce2cd"
    },
    {
        title: "Building a Number Classification API: My First Python Project in DevOps",
        date: "2025-03-10",
        readTime: "1 min read",
        excerpt: "Create an API that takes a number and returns interesting mathematical properties about it, along with a fun fact — a clean introduction to Python-based API development.",
        link: "https://medium.com/@NixieB/building-a-number-classification-api-my-first-python-project-in-devops-1ed0ebde3781"
    }
];

// ─── Skills Data ──────────────────────────────────────────────
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
        { name: "FastAPI / REST APIs", level: 85 }
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
        { name: "Linux / Unix", level: 85 },
        { name: "MetaTrader 5", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Slack / Telegram APIs", level: 80 }
    ]
};

// ─── Experience Data ──────────────────────────────────────────
const experiences = [
    {
        title: "DevOps Engineer (Contract)",
        company: "Gradific",
        period: "April 2025 – August 2025",
        achievements: [
            "Designed and implemented robust CI/CD pipelines using GitHub Actions, managing automated workflows across development, staging, and production environments, reducing deployment time by 40% and increasing deployment frequency by 50%.",
            "Established comprehensive monitoring system utilising Grafana, Prometheus, Node Exporter, and Blackbox Exporter, achieving 99.9% system uptime.",
            "Developed custom DORA metrics application to monitor CI/CD deployments, improving team efficiency by 30% through data-driven insights.",
            "Created real-time alerting system with Prometheus and Alertmanager integrated with Slack, enabling proactive identification of 80%+ potential issues and reducing critical alert resolution time by 35%.",
            "Successfully migrated application from Vercel to self-hosted server environment, reducing hosting costs by 25%.",
            "Implemented CI/CD pipelines for Quality Assurance processes, reducing QA environment setup time by 60%.",
            "Managed server setup and configured Nginx for efficient traffic routing across multiple environments.",
            "Participated in on-call rotation ensuring 24/7 system availability and prompt resolution of critical production issues."
        ]
    },
    {
        title: "DevOps Engineer Intern",
        company: "HNG Tech",
        period: "January 2025 – April 2025",
        achievements: [
            "Engineered Infrastructure as Code using Terraform and Ansible, enabling one-command deployments across dev and production environments, reducing deployment complexity by 60%.",
            "Deployed Prometheus and Grafana for real-time monitoring, tracking DORA metrics and cutting deployment lead time by 30%.",
            "Built CI/CD pipelines with GitHub Actions for FastAPI applications, reducing deployment time by 40% and enabling 15+ weekly deployments with zero-downtime strategies.",
            "Implemented Slack alerting for critical thresholds (CPU above 80%), improving incident response time by 25%.",
            "Containerised microservices using Docker and orchestrated with Kubernetes, improving system scalability with Traefik reverse proxy configuration."
        ]
    }
];


// ═══════════════════════════════════════════════════════════════
// DOM REFERENCES
// ═══════════════════════════════════════════════════════════════
const navbar        = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu       = document.getElementById('nav-menu');
const projectsGrid  = document.getElementById('projects-grid');
const blogGrid      = document.getElementById('blog-grid');
const skillsGrid    = document.getElementById('skills-grid');
const themeToggle   = document.getElementById('theme-toggle');

// ═══════════════════════════════════════════════════════════════
// PAGE LOAD OVERLAY
// ═══════════════════════════════════════════════════════════════
function initPageLoader() {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    // Fade out after a short but noticeable moment
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('loaded'), 380);
    });
    // Fallback if load event already fired
    if (document.readyState === 'complete') {
        setTimeout(() => loader.classList.add('loaded'), 300);
    }
}

// ═══════════════════════════════════════════════════════════════
// DARK MODE
// ═══════════════════════════════════════════════════════════════
function initDarkMode() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ═══════════════════════════════════════════════════════════════
// RESUME — generated entirely in JS, no file needed in repo.
// Opens a new tab with a fully formatted HTML resume that
// auto-triggers the browser print dialog (Save as PDF).
// All links are real <a> tags → clickable in the saved PDF.
// ═══════════════════════════════════════════════════════════════
function openResume() {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Blessing Omoregie — Resume</title>
<style>
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
  /* @page margin:0 means .resume padding IS the margin — never clipped */
  @page{size:letter;margin:0}

  body{font-family:'Calibri','Segoe UI',Arial,sans-serif;background:#fff;color:#111}

  .resume{
    width:100%;
    /* 0.85in top/bottom · 0.9in sides — generous, balanced breathing room */
    padding:82px 86px;
    font-size:10.5pt;
    line-height:1.46;
    overflow-wrap:break-word;
    word-break:break-word;
  }

  /* ── Header ── */
  .rh{text-align:center;padding-bottom:10px;margin-bottom:14px;border-bottom:2.5px solid #b06080}
  .rh-name{font-size:22pt;font-weight:700;color:#1a0f1e;letter-spacing:.4px;margin-bottom:3px}
  .rh-role{font-size:10.5pt;font-weight:600;color:#52305e;margin-bottom:8px}
  .rh-row{font-size:9pt;color:#52305e;line-height:1.85;margin-bottom:2px}
  .rh-row.portfolio-row{font-size:9.5pt;font-weight:700;color:#3a1a40;margin-bottom:2px}
  .rh-row a{color:#8c2050;text-decoration:underline;text-underline-offset:2px;font-weight:600}
  .sep{margin:0 5px;color:#ccc;font-weight:400}

  /* ── Section ── */
  .rs{margin-bottom:13px;page-break-inside:avoid}
  .rs-title{
    font-size:10.5pt;font-weight:700;color:#1a0f1e;
    text-transform:uppercase;letter-spacing:.7px;
    border-bottom:1.5px solid #d0b8e0;
    padding-bottom:3px;margin-bottom:8px;
  }

  /* ── Job ── */
  .rj{margin-bottom:11px;page-break-inside:avoid}
  .rj-row{display:flex;justify-content:space-between;align-items:baseline;gap:14px;margin-bottom:3px}
  .rj-left{flex:1 1 0;min-width:0}
  .rj-title{font-weight:700;font-size:10.5pt;color:#1a0f1e}
  .rj-org{font-style:italic;font-size:10pt;color:#52305e;margin-top:1px}
  .rj-org a{color:#8c2050;text-decoration:underline;text-underline-offset:2px;font-style:normal;font-weight:600}
  .rj-date{font-size:9.5pt;color:#786080;white-space:nowrap;flex-shrink:0}

  /* ── Lists ── */
  .rl{margin:5px 0 0 15px;padding:0}
  .rl li{margin-bottom:4px;line-height:1.46;font-size:10pt;color:#1e1e1e}
  .ra{margin:0 0 0 15px;padding:0}
  .ra li{margin-bottom:4px;font-size:10pt;line-height:1.46;color:#1e1e1e}

  /* ── Skills ── */
  .rsk{margin-bottom:5px;font-size:10pt;line-height:1.52}
  .rsk strong{color:#1a0f1e}

  /* ── Summary ── */
  .r-sum{font-size:10pt;line-height:1.54;color:#1e1e1e;text-align:justify}

  /* ── Print overrides ── */
  @media print{
    a{color:#8c2050!important;text-decoration:underline!important;text-underline-offset:2px!important}
    a[href]::after{content:none!important}
  }

  /* ── Print banner (screen only) ── */
  .print-bar{
    background:#f9f1f5;border-bottom:2px solid #c07494;
    padding:14px 20px;font-family:Arial,sans-serif;font-size:.9rem;
    display:flex;align-items:center;gap:14px;flex-wrap:wrap;
  }
  .print-bar strong{color:#8c3060}
  .print-bar button{
    padding:9px 22px;background:#c07494;color:#fff;
    border:none;border-radius:5px;font-size:.88rem;
    font-weight:600;cursor:pointer;font-family:Arial,sans-serif;
  }
  .print-bar button:hover{background:#a0607a}
  @media print{.print-bar{display:none}}
</style>
</head>
<body>

<div class="print-bar">
  <div>
    <strong>Save as PDF:</strong> Click the button →
    set <em>Destination</em> to <strong>Save as PDF</strong>,
    <em>Margins</em> to <strong>None</strong>, then Save.
    Open the PDF in Chrome or Adobe Reader for clickable links.
  </div>
  <button onclick="window.print()">Print / Save as PDF</button>
</div>

<div class="resume">

  <div class="rh">
    <div class="rh-name">BLESSING OMOREGIE</div>
    <div class="rh-role">DevOps Engineer &nbsp;&bull;&nbsp; Quantitative Trading Developer</div>
    <div class="rh-row">
      <a href="mailto:omoregieblessing52@gmail.com">omoregieblessing52@gmail.com</a>
      <span class="sep">|</span>+234 812 302 7408<span class="sep">|</span>
      <a href="https://linkedin.com/in/nixie001">linkedin.com/in/nixie001</a>
      <span class="sep">|</span>
      <a href="https://github.com/nixiestone">github.com/nixiestone</a>
    </div>
    <div class="rh-row portfolio-row">
      Portfolio: <a href="https://nixiestone.github.io/portfolio">nixiestone.github.io/portfolio</a>
    </div>
    <div class="rh-row">
      Blog: <a href="https://medium.com/@NixieB">medium.com/@NixieB</a>
    </div>
  </div>

  <div class="rs">
    <div class="rs-title">Professional Summary</div>
    <p class="r-sum">Results-driven DevOps Engineer with proven expertise in CI/CD automation, cloud infrastructure, monitoring systems, and algorithmic trading. Achieved 99.9% system uptime through comprehensive monitoring, reduced deployment times by 40%, and improved incident response by 35% through automated alerting. Currently managing production infrastructure at Gradific while developing systematic trading strategies. Combines technical DevOps excellence with quantitative finance knowledge to build reliable, data-driven systems. Seeking roles in DevOps Engineering or Quantitative Trading where dual expertise can drive operational excellence and systematic alpha generation.</p>
  </div>

  <div class="rs">
    <div class="rs-title">Technical Skills</div>
    <div class="rsk"><strong>DevOps &amp; Cloud:</strong> AWS (EC2, IAM, VPC, CloudFormation), Azure, Docker, Kubernetes, Terraform, Ansible, GitHub Actions, Jenkins, Prometheus, Grafana, Alertmanager, Node Exporter, Blackbox Exporter, Traefik, ELK Stack, Nginx</div>
    <div class="rsk"><strong>Programming &amp; Development:</strong> Python, JavaScript, Bash, SQL, FastAPI, React, Flask, RESTful APIs, OpenAPI/Swagger</div>
    <div class="rsk"><strong>Quantitative Finance:</strong> Algorithmic Trading, Machine Learning (XGBoost, scikit-learn), Technical Analysis, Risk Management, Backtesting, Strategy Development, MetaTrader 5</div>
    <div class="rsk"><strong>Systems Engineering:</strong> Linux Namespaces, cgroups, chroot, seccomp, AppArmor, Container Internals, System-level Isolation</div>
    <div class="rsk"><strong>Tools &amp; Databases:</strong> Git, GitHub, Linux/Unix, PostgreSQL, MySQL, SQLite, Slack/Telegram APIs</div>
  </div>

  <div class="rs">
    <div class="rs-title">Professional Experience</div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">DevOps Engineer (Contract)</div>
          <div class="rj-org">Gradific</div>
        </div>
        <div class="rj-date">April 2025 &ndash; August 2025</div>
      </div>
      <ul class="rl">
        <li>Designed and implemented robust CI/CD pipelines using GitHub Actions across development, staging, and production environments, reducing deployment time by 40% and increasing deployment frequency by 50%.</li>
        <li>Established comprehensive monitoring with Grafana, Prometheus, Node Exporter, and Blackbox Exporter, achieving 99.9% system uptime.</li>
        <li>Developed custom DORA metrics application to monitor CI/CD deployments, improving team efficiency by 30% through data-driven insights.</li>
        <li>Created real-time alerting with Prometheus and Alertmanager integrated with Slack, enabling proactive identification of 80%+ potential issues and reducing critical alert resolution time by 35%.</li>
        <li>Successfully migrated application from Vercel to self-hosted server, reducing hosting costs by 25%.</li>
        <li>Implemented CI/CD pipelines for QA processes, reducing QA environment setup time by 60%.</li>
        <li>Managed server setup and configured Nginx for efficient traffic routing across multiple environments.</li>
        <li>Participated in on-call rotation ensuring 24/7 system availability and prompt resolution of critical production issues.</li>
        <li>Collaborated with development and QA teams to integrate automated testing into CI/CD pipelines, ensuring code quality and stability early in the development cycle.</li>
      </ul>
    </div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">DevOps Engineer Intern</div>
          <div class="rj-org">HNG Tech</div>
        </div>
        <div class="rj-date">January 2025 &ndash; April 2025</div>
      </div>
      <ul class="rl">
        <li>Engineered Infrastructure as Code using Terraform and Ansible, enabling one-command deployments and reducing deployment complexity by 60%.</li>
        <li>Built comprehensive CI/CD pipelines with GitHub Actions for FastAPI applications, reducing deployment time by 40% and enabling 15+ weekly deployments with zero-downtime strategies.</li>
        <li>Deployed Prometheus and Grafana for real-time monitoring, achieving a 30% reduction in deployment lead time through DORA metrics tracking.</li>
        <li>Implemented Slack alerting for critical infrastructure thresholds (CPU &gt; 80%, service downtime), improving incident response time by 25%.</li>
        <li>Containerised microservices using Docker and orchestrated with Kubernetes, improving scalability with Traefik reverse proxy configuration.</li>
        <li>Documented infrastructure setup and created runbooks for common operational tasks.</li>
      </ul>
    </div>
  </div>

  <div class="rs">
    <div class="rs-title">Key Projects</div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">Gradific CI/CD &amp; Monitoring Platform</div>
          <div class="rj-org">DevOps &amp; Cloud Infrastructure &mdash; <a href="https://github.com/Nixiestone/Prograde-Frontend">github.com/Nixiestone/Prograde-Frontend</a></div>
        </div>
        <div class="rj-date">Apr &ndash; Aug 2025</div>
      </div>
      <ul class="rl">
        <li>Architected production-grade DevOps infrastructure managing multi-environment deployments with automated testing, building, and deployment verification.</li>
        <li>Implemented monitoring stack with Prometheus, Grafana, Node Exporter, and Blackbox Exporter tracking system health, application performance, and business metrics.</li>
        <li>Developed custom DORA metrics dashboard providing real-time insights into Deployment Frequency, Lead Time, Change Failure Rate, and MTTR.</li>
        <li>Technologies: GitHub Actions, Prometheus, Grafana, Nginx, Alertmanager, Node Exporter, Blackbox Exporter, Slack API.</li>
      </ul>
    </div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">Nixie&rsquo;s Gold Trading Bot (XAU/USD)</div>
          <div class="rj-org">Personal Project &mdash; Quantitative Trading &mdash; <a href="https://github.com/nixiestone/nixie-gold-bot">github.com/nixiestone/nixie-gold-bot</a></div>
        </div>
        <div class="rj-date">Nov 2024 &ndash; Present</div>
      </div>
      <ul class="rl">
        <li>Developed algorithmic trading system achieving 65&ndash;75% win rate in backtesting through a 6-factor confluence strategy combining technical analysis, smart money concepts, and machine learning.</li>
        <li>Implemented multi-timeframe analysis (H4 + M15) with RSI divergence detection, liquidity sweep identification, and XGBoost signal filtering across 20+ features.</li>
        <li>Deployed to AWS EC2 with 24/7 uptime, automated restart mechanisms, and Telegram multi-user broadcasting.</li>
        <li>Technologies: Python, MetaTrader 5, XGBoost, scikit-learn, Pandas, NumPy, AWS EC2, Telegram Bot API, PostgreSQL.</li>
      </ul>
    </div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">Container Isolation System</div>
          <div class="rj-org">Personal Project &mdash; Systems Engineering &mdash; <a href="https://github.com/Nixiestone/container-isolation-project">github.com/Nixiestone/container-isolation-project</a></div>
        </div>
        <div class="rj-date">December 2025</div>
      </div>
      <ul class="rl">
        <li>Built a lightweight container-like environment from scratch using Linux namespaces (PID, User, Network, Mount), cgroups, and chroot without Docker.</li>
        <li>Applied security hardening with seccomp and AppArmor to restrict system calls and enhance process isolation.</li>
        <li>Technologies: Linux Namespaces, cgroups, chroot, Bash scripting, systemd, seccomp, AppArmor.</li>
      </ul>
    </div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">DORA Metrics Monitoring System</div>
          <div class="rj-org">HNG Tech &mdash; DevOps &amp; Observability &mdash; <a href="https://github.com/Nixiestone/dora-metrics">github.com/Nixiestone/dora-metrics</a></div>
        </div>
        <div class="rj-date">March 2025</div>
      </div>
      <ul class="rl">
        <li>Designed and deployed monitoring infrastructure tracking Deployment Frequency, Lead Time, Change Failure Rate, and MTTR with automated Slack alerting.</li>
        <li>Technologies: Prometheus, Grafana, Node Exporter, Blackbox Exporter, Alertmanager, GitHub Actions, Slack API.</li>
      </ul>
    </div>

    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">FastAPI Microservices Platform</div>
          <div class="rj-org">HNG Tech &mdash; DevOps &amp; Cloud &mdash; <a href="https://github.com/Nixiestone/DevOps-Stage-4">github.com/Nixiestone/DevOps-Stage-4</a></div>
        </div>
        <div class="rj-date">Jan &ndash; Apr 2025</div>
      </div>
      <ul class="rl">
        <li>Architected containerised microservices platform managing 15+ services with consistent Infrastructure as Code deployment pipelines and zero-downtime deployments.</li>
        <li>Technologies: Docker, Kubernetes, Terraform, Ansible, GitHub Actions, Prometheus, Grafana, FastAPI, Traefik, PostgreSQL.</li>
      </ul>
    </div>
  </div>

  <div class="rs">
    <div class="rs-title">Education</div>
    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">Bachelor of Science in Software Development</div>
          <div class="rj-org">Brigham Young University &ndash; Idaho, Rexburg, ID</div>
        </div>
        <div class="rj-date">Sep 2024 &ndash; Present</div>
      </div>
    </div>
    <div class="rj">
      <div class="rj-row">
        <div class="rj-left">
          <div class="rj-title">Bachelor of Science in Computer Science</div>
          <div class="rj-org">University of Benin, Benin City, Nigeria</div>
        </div>
        <div class="rj-date">Sep 2021 &ndash; Present</div>
      </div>
    </div>
  </div>

  <div class="rs">
    <div class="rs-title">Key Achievements</div>
    <ul class="ra">
      <li>Achieved 99.9% system uptime through comprehensive monitoring and proactive alerting at Gradific.</li>
      <li>Reduced deployment time by 40% and increased deployment frequency by 50% through CI/CD optimisation.</li>
      <li>Improved incident response time by 35% through automated alerting and runbook automation.</li>
      <li>Reduced hosting costs by 25% through successful cloud migration from Vercel to self-hosted environment.</li>
      <li>Improved team efficiency by 30% through DORA metrics tracking and data-driven insights.</li>
      <li>Reduced QA environment setup time by 60% through automated CI/CD pipelines.</li>
      <li>Developed algorithmic trading system achieving 65&ndash;75% win rate in backtesting for XAU/USD.</li>
    </ul>
  </div>

</div>
<script>
  // Auto-open print dialog after a short delay so the page renders first
  window.addEventListener('load', () => {
    setTimeout(() => window.print(), 500);
  });
</script>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const tab  = window.open(url, '_blank');

    // Clean up the blob URL after the tab has loaded
    if (tab) {
        tab.addEventListener('load', () => {
            setTimeout(() => URL.revokeObjectURL(url), 2000);
        });
    }
}

document.getElementById('resume-download-nav').addEventListener('click', e => { e.preventDefault(); openResume(); });
document.getElementById('resume-download-hero').addEventListener('click', e => { e.preventDefault(); openResume(); });

// ═══════════════════════════════════════════════════════════════
// NAVBAR SCROLL
// ═══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ═══════════════════════════════════════════════════════════════
// MOBILE MENU
// ═══════════════════════════════════════════════════════════════
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.id.includes('resume')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !this.id.includes('resume')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ═══════════════════════════════════════════════════════════════
// ACTIVE NAV LINK
// ═══════════════════════════════════════════════════════════════
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(s => {
            if (window.scrollY >= s.offsetTop - 130) current = s.id;
        });
        links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// HERO PARTICLE CANVAS
// ═══════════════════════════════════════════════════════════════
function initParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles = [], raf;

    const COLORS_DARK  = ['rgba(219,168,192,', 'rgba(182,170,218,', 'rgba(198,160,106,'];
    const COLORS_LIGHT = ['rgba(160,67,95,',   'rgba(95,77,142,',   'rgba(145,104,48,'];

    function getColors() {
        return document.documentElement.getAttribute('data-theme') === 'light'
            ? COLORS_LIGHT : COLORS_DARK;
    }

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
    }

    function Particle() {
        this.reset = function() {
            this.x   = Math.random() * W;
            this.y   = Math.random() * H;
            this.r   = Math.random() * 1.8 + 0.4;
            this.vx  = (Math.random() - 0.5) * 0.3;
            this.vy  = -(Math.random() * 0.4 + 0.1);
            this.life = 0;
            this.maxLife = Math.random() * 220 + 140;
            const cols = getColors();
            this.col = cols[Math.floor(Math.random() * cols.length)];
        };
        this.reset();
        this.life = Math.random() * this.maxLife; // stagger start
    }

    function createParticles(n) {
        for (let i = 0; i < n; i++) particles.push(new Particle());
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        // Particles need higher opacity on light ivory bg to be visible
        const maxAlpha = isLight ? 0.82 : 0.55;
        particles.forEach(p => {
            p.life++;
            if (p.life > p.maxLife) p.reset();

            const progress = p.life / p.maxLife;
            const alpha = progress < 0.15 ? progress / 0.15
                        : progress > 0.80 ? (1 - progress) / 0.20
                        : 1;

            // Larger radius in light mode for visibility
            const r = isLight ? p.r * 1.8 : p.r;

            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = p.col + (alpha * maxAlpha) + ')';
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;
        });
        raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    createParticles(70);
    draw();

    // Restart particles when theme changes so colours update
    const observer = new MutationObserver(() => {
        particles.forEach(p => { p.col = getColors()[Math.floor(Math.random() * 3)]; });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
}

// ═══════════════════════════════════════════════════════════════
// CURSOR GLOW — follows mouse
// ═══════════════════════════════════════════════════════════════
function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    let mx = -999, my = -999;
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
        glow.style.left = mx + 'px';
        glow.style.top  = my + 'px';
    });
}

// ═══════════════════════════════════════════════════════════════
// HERO MOUSE PARALLAX
// ═══════════════════════════════════════════════════════════════
function initParallax() {
    const hero   = document.querySelector('.hero');
    const slow   = document.querySelector('.parallax-slow');
    const fast   = document.querySelector('.parallax-fast');
    if (!hero || !slow || !fast) return;

    let tSlow = {x:0, y:0}, tFast = {x:0, y:0};
    let cSlow = {x:0, y:0}, cFast = {x:0, y:0};
    let raf;

    hero.addEventListener('mousemove', e => {
        const rect = hero.getBoundingClientRect();
        const rx   = (e.clientX - rect.left) / rect.width  - 0.5;
        const ry   = (e.clientY - rect.top)  / rect.height - 0.5;
        tSlow = { x: rx * -12, y: ry * -10 };
        tFast = { x: rx *   8, y: ry *   6 };
    });

    hero.addEventListener('mouseleave', () => {
        tSlow = {x:0, y:0};
        tFast = {x:0, y:0};
    });

    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
        cSlow.x = lerp(cSlow.x, tSlow.x, 0.07);
        cSlow.y = lerp(cSlow.y, tSlow.y, 0.07);
        cFast.x = lerp(cFast.x, tFast.x, 0.09);
        cFast.y = lerp(cFast.y, tFast.y, 0.09);
        slow.style.transform = `translate(${cSlow.x}px, ${cSlow.y}px)`;
        fast.style.transform = `translate(${cFast.x}px, ${cFast.y}px)`;
        raf = requestAnimationFrame(tick);
    }
    tick();
}

// ═══════════════════════════════════════════════════════════════
// SECTION TITLE REVEAL — triggers even if already in viewport
// ═══════════════════════════════════════════════════════════════
function initTitleReveals() {
    const targets = document.querySelectorAll('.section-title, .section-subtitle, .section-title-accent');

    // Use rootMargin to catch elements already visible on load
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small delay so CSS transition has something to animate from
                setTimeout(() => entry.target.classList.add('in-view'), 60);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    targets.forEach(el => {
        // If element is already visible on load (above fold), trigger after a paint
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            requestAnimationFrame(() => {
                setTimeout(() => el.classList.add('in-view'), 100);
            });
        } else {
            io.observe(el);
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// HIGHLIGHT ITEMS REVEAL — both themes
// ═══════════════════════════════════════════════════════════════
function initHighlightReveals() {
    const items = document.querySelectorAll('.highlight-item');
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -10px 0px' });
    items.forEach(el => io.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// EXPERIENCE CARD REVEAL
// ═══════════════════════════════════════════════════════════════
function initExperienceReveals() {
    const cards = document.querySelectorAll('.experience-card');
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(el => io.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// STAGGERED CARD REVEAL (Projects / Blog / Skills)
// ═══════════════════════════════════════════════════════════════
function initCardReveals() {
    // Pre-hide all cards
    const selector = '.project-card, .blog-card, .skill-category';
    document.querySelectorAll(selector).forEach((card, i) => {
        card.classList.add('reveal-hidden');
        // Assign delay based on column position (0,1,2 → delay 0,1,2)
        const col = i % 3;
        if (col === 1) card.classList.add('reveal-delay-1');
        if (col === 2) card.classList.add('reveal-delay-2');
    });

    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll(selector).forEach(el => io.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// ABOUT TEXT REVEAL
// ═══════════════════════════════════════════════════════════════
function initAboutReveal() {
    const items = document.querySelectorAll('.about-text, .about-highlights');
    items.forEach(el => {
        el.style.opacity  = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });
    const io = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity   = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 120);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    items.forEach(el => io.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// SKILL BAR ANIMATION WITH SHIMMER
// ═══════════════════════════════════════════════════════════════
function observeSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    const io   = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar   = entry.target;
                const level = bar.getAttribute('data-level');
                // Small delay so user sees the bar start from 0
                setTimeout(() => {
                    bar.style.width = level + '%';
                    setTimeout(() => bar.classList.add('filled'), 1200);
                }, 200);
                io.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    bars.forEach(b => io.observe(b));
}

// ═══════════════════════════════════════════════════════════════
// RENDER PROJECTS
// ═══════════════════════════════════════════════════════════════
function renderProjects() {
    if (!projectsGrid) return;
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
                        ${project.metrics.map(m => `<span class="metric-tag">${m}</span>`).join('')}
                    </div>
                </div>
                <div class="project-section">
                    <h4>Technologies</h4>
                    <div class="tech-list">
                        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="project-section">
                    <h4>Highlights</h4>
                    <ul class="highlights-list">
                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        Source Code
                    </a>` : ''}
                    ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        Live Demo
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════════
// RENDER BLOG
// ═══════════════════════════════════════════════════════════════
function renderBlog() {
    if (!blogGrid) return;
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-content">
                <div class="blog-meta">
                    <span>${new Date(post.date).toLocaleDateString('en-GB', { year:'numeric', month:'long', day:'numeric' })}</span>
                    <span>|</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="blog-link">
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════════
// RENDER SKILLS
// ═══════════════════════════════════════════════════════════════
function renderSkills() {
    if (!skillsGrid) return;
    skillsGrid.innerHTML = Object.entries(skills).map(([category, list]) => `
        <div class="skill-category">
            <h3>${category}</h3>
            ${list.map(skill => `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.level}" style="width:0%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
    observeSkillBars();
}

// ═══════════════════════════════════════════════════════════════
// RENDER EXPERIENCE
// ═══════════════════════════════════════════════════════════════
function renderExperience() {
    const container = document.getElementById('experience-container') || document.querySelector('.experience-container');
    if (!container) return;
    container.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="experience-header">
                <div>
                    <h3>${exp.title}</h3>
                    <p class="company">${exp.company}</p>
                </div>
                <span class="period">${exp.period}</span>
            </div>
            <ul class="achievements">
                ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════════════════════════
// KEYBOARD ACCESSIBILITY
// ═══════════════════════════════════════════════════════════════
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// ═══════════════════════════════════════════════════════════════
// INIT — order matters: render first, then animate
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initDarkMode();

    // Render content
    renderProjects();
    renderBlog();
    renderSkills();
    renderExperience();

    // Animations — run after a tick so DOM is fully painted
    requestAnimationFrame(() => {
        initParticles();
        initCursorGlow();
        initParallax();
        initTitleReveals();
        initHighlightReveals();
        initAboutReveal();
        initExperienceReveals();
        initCardReveals();
        initActiveNavLink();
    });
});

console.log('Portfolio — Blessing Omoregie | DevOps Engineer & Quant Developer');
console.log('GitHub: https://github.com/nixiestone');