/* ===================== DATA ===================== */
const SKILLS = [
  {
    cat: "Frontend Development",
    icon: "fa-code",
    items: [
      { name: "JavaScript", pct: 92 },
      { name: "TypeScript", pct: 88 },
      { name: "React", pct: 85 },
      { name: "React Native", pct: 78 },
    ],
  },
  {
    cat: "Backend Development",
    icon: "fa-server",
    items: [
      { name: "Node.js", pct: 85 },
      { name: "Python", pct: 80 },
      { name: "Django", pct: 75 },
      { name: "Flask", pct: 70 },
    ],
  },
  {
    cat: "UI / UX Design",
    icon: "fa-palette",
    items: [
      { name: "Figma", pct: 90 },
      { name: "Adobe XD", pct: 92 },
      { name: "Sketch", pct: 82 },
      { name: "Adobe Photoshop", pct: 75 },
    ],
  },
  {
    cat: "Database Management",
    icon: "fa-database",
    items: [
      { name: "SQL", pct: 85 },
      { name: "MongoDB", pct: 80 },
      { name: "PostgreSQL", pct: 87 },
      { name: "Firebase", pct: 90 },
    ],
  },
  {
    cat: "Debugging & Troubleshooting",
    icon: "fa-bug",
    items: [
      { name: "Version Control (Git)", pct: 80 },
      { name: "Debugging Tools", pct: 75 },
      { name: "Error Handling", pct: 92 },
      { name: "Performance Optimization", pct: 65 },
    ],
  },
  {
    cat: "Performance & SEO",
    icon: "fa-chart-line",
    items: [
      { name: "SEO Strategies", pct: 90 },
      { name: "Content Optimization", pct: 93 },
      { name: "Technical SEO", pct: 95 },
      { name: "Local SEO", pct: 80 },
    ],
  },
];

const IELTS = [
  { skill: "Listening", score: 8.0, icon: "fa-headphones" },
  { skill: "Reading", score: 7.5, icon: "fa-book-open" },
  { skill: "Speaking", score: 7.0, icon: "fa-microphone" },
  { skill: "Writing", score: 7.0, icon: "fa-pen" },
];

const CERTS = [
  {
    title: "Learn Python from Scratch",
    org: "CodeWithHarry",
    date: "2026",
    icon: "fa-code",
  },
  {
    title: "Intra University Capture The Flag (CTF) Competition",
    org: "BUBT AI Community",
    date: "2026",
    icon: "fa-flag",
  },
  {
    title: "Monitize Your Apps & Ideas In Robi bdapps",
    org: "BASIS Students Forum of BUBT Chapter Club.",
    date: "2025",
    icon: "fa-coins",
  },
  {
    title: "Complete Web Development Course",
    org: "Programming Hero",
    date: "2025",
    icon: "fa-laptop-code",
  },
  {
    title: "Official Photographer Of BASIS Students Forum BUBT Chapter Club.",
    org: "BASIS Students Forum.",
    date: "2024-2025",
    icon: "fa-camera",
  },
  {
    title:
      "ICPC Asia Dhaka Regional Contest as a BUBT_TargetNext_ICPC Team Member.",
    org: "Daffodil International University (DIU).",
    date: "2024-2025",
    icon: "fa-trophy",
  },
  {
    title: "Photographer Of ICPC Asia Dhaka Regional Contest - 2023",
    org: "Bangladesh University of Business and Technology (BUBT)",
    date: "2023",
    icon: "fa-camera",
  },
  {
    title:
      "ICPC Asia Dhaka Regional Contest as a BUBT_CodeWarrior Team Member.",
    org: "Bangladesh University of Business and Technology (BUBT)",
    date: "2023-2024",
    icon: "fa-trophy",
  },
  {
    title: "Computer Science Fundamentals",
    org: "Phitron",
    date: "2023-2024",
    icon: "fa-code",
  },
];

const RESEARCH = [
  {
    title: "Assessing Coastal Erosion Trends using Sentinel-2 Time Series",
    journal: "Journal of Coastal Research",
    year: 2024,
    tag: "Remote",
    abstract:
      "Multi-temporal shoreline mapping along the Bay of Bengal reveals accelerated erosion linked to rising sea levels and storm intensity.",
  },
  // { title: 'Urban Heat Island Dynamics in Dhaka: A Landsat-based Analysis', journal: 'Urban Climate', year: 2024, tag: 'Climate', abstract: 'Thermal remote sensing shows a 2.4°C increase in UHI intensity over two decades, correlated with impervious surface expansion.' },
  // { title: 'Land-Use Change Detection using GEE and Machine Learning', journal: 'Remote Sensing Applications', year: 2024, tag: 'GIS', abstract: 'Random Forest classification on Google Earth Engine quantifies forest-to-agriculture transition in northern Bangladesh.' },
  // { title: 'Microplastic Contamination in the Meghna Estuary', journal: 'Marine Pollution Bulletin', year: 2023, tag: 'Environment', abstract: 'Sediment samples reveal polymer-specific pollution hotspots with implications for aquaculture and public health.' },
  // { title: 'Climate-Resilient Agriculture: An SDG 13 Framework', journal: 'Sustainability', year: 2023, tag: 'Sustainability', abstract: 'A policy-oriented review proposes integrating climate indicators into agricultural extension services nationwide.' },
  // { title: 'Mangrove Canopy Monitoring with SAR Imagery', journal: 'Forest Ecology and Management', year: 2023, tag: 'Remote', abstract: 'Sentinel-1 backscatter analysis tracks Sundarbans canopy dynamics following Cyclone Amphan.' },
  // { title: 'Air Quality Index Mapping in Urban Bangladesh', journal: 'Atmospheric Environment', year: 2023, tag: 'Environment', abstract: 'Kriging interpolation of PM2.5 stations identifies seasonal pollution corridors in metropolitan regions.' },
  // { title: 'Groundwater Vulnerability via GIS-based DRASTIC Model', journal: 'Groundwater Sustainability', year: 2022, tag: 'GIS', abstract: 'Overlay analysis identifies high-risk aquifer zones in the central delta, informing protection policy.' },
  // { title: 'Carbon Sequestration Potential of Wetland Ecosystems', journal: 'Ecological Indicators', year: 2022, tag: 'Sustainability', abstract: 'Field-sampled biomass and soil cores estimate 14–22 t C/ha in freshwater wetlands of Sylhet.' },
];

const PROJECTS = [
  {
    title: "Clean Nature",
    desc: "A web application that promotes environmental awareness and encourages users to participate in local clean-up initiatives.",
    tech: ["JavaScript", "Clerk", "TypeScript"],
    obj: "Promote environmental awareness and encourage community participation",
    accent: "#6ee7a5",
    status: "Under Development",
    image: "ProjectImages/CleanNature.png", // Add your actual image path here
    liveLink: "", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "Student Management System",
    desc: "A web application for managing student information, grades, and academic records.",
    tech: ["JavaScript", "Firebase", "TypeScript"],
    obj: "Streamline student data management and improve academic tracking",
    accent: "#6ee7a5",
    status: "Project 1 Live",
    image: "ProjectImages/CourseBook.png", // Add your actual image path here
    liveLink: "https://therudrabro.github.io/StudentAcademicManagement/", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "StudyVault",
    desc: "A web application for students to create, share, and access study materials, notes, and resources collaboratively.",
    tech: ["JavaScript", "Firebase", "Cloudinary"],
    obj: "Facilitate collaborative learning and resource sharing among students",
    accent: "#6ee7a5",
    status: "Project 2 Live",
    image: "ProjectImages/StudyVault.png",
    liveLink: "https://therudrabro.github.io/StudentResourceHub/",
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "Emergency Blood Network (EMC)",
    desc: "Web-based platform connecting blood donors, hospitals, and NGOs for real-time emergency blood requests.",
    tech: ["React", "Node.js", "MongoDB", "Twilio"],
    obj: "Facilitate rapid blood donation during emergencies",
    accent: "#6ee7a5",
    status: "Project 3 Live",
    image: "ProjectImages/BloodFinder.png", // Add your actual image path here
    liveLink: "https://blooddonorsearching.pages.dev/", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "Travel Mama",
    desc: "Web application for booking travel packages, managing itineraries, and connecting with local guides.",
    tech: ["JavaScript", "HTML", "CSS", "Firebase"],
    obj: "Provide a seamless travel planning experience for users",
    accent: "#6ee7a5",
    status: "Project 4 Live",
    image: "ProjectImages/TravelMama.png", // Add your actual image path here
    liveLink: "https://therudrabro.github.io/TravelMama/",
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },

  {
    title: "Orbric Jersey Store",
    desc: "Web-based platform for selling jerseys and other sports merchandise.",
    tech: ["JavaScript", "HTML", "CSS", "Firebase"],
    obj: "Provide a platform for selling sports merchandise",
    accent: "#6ee7a5",
    status: "Project 5 Live",
    image: "ProjectImages/Orbric.png", // Add your actual image path here
    liveLink: "https://therudrabro.github.io/Orbric/", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "Tourism Bangladesh",
    desc: "Web application showcasing tourist destinations in Bangladesh with interactive maps, itineraries, and user reviews.",
    tech: ["JavaScript", "Firebase"],
    obj: "Promote tourism and provide travel information for Bangladesh",
    accent: "#10a373",
    status: "Project 6 Live",
    image: "ProjectImages/TourismBangladesh.png", // Add your actual image path here
    liveLink: "https://tourism-bangladesh.netlify.app/", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
  {
    title: "English Janala",
    desc: "Web-based platform for learning English with interactive lessons and exercises.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    obj: "Provide an engaging way to learn English",
    accent: "#a7f3d0",
    status: "Project 7 Live",
    image: "ProjectImages/EnglishJanala.png", // Add your actual image path here
    liveLink: "https://english-vocabularies-learning-janala.netlify.app/", // Add the actual live link
    githubLink: "https://github.com/TheRudraBro", // Add GitHub link
  },
];

/* ===================== RENDERING ===================== */
function renderSkills() {
  const wrap = document.getElementById("skills-grid");
  wrap.innerHTML = SKILLS.map(
    (s, i) => `
    <div class="glass p-7 reveal stat-card">
      <div class="flex items-center gap-4 mb-6">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center" 
        style="background: linear-gradient(135deg, rgba(110,231,165,0.15), 
        rgba(52,211,153,0.05)); border:1px solid rgba(110,231,165,0.25);">
          <i class="fa-solid ${s.icon} text-emerald-300"></i>
        </div>
        <h3 class="font-display text-xl text-white">${s.cat}</h3>
      </div>
      <div class="space-y-4">
        ${s.items
          .map(
            (it) => `
          <div>
            <div class="flex justify-between text-xs mb-1.5">
              <span class="text-white/70 font-medium">${it.name}</span>
              <span class="text-emerald-300 font-mono">${it.pct}%</span>
            </div>
            <div class="skill-track">
              <div class="skill-fill" data-pct="${it.pct}"></div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `,
  ).join("");
}

function renderIELTS() {
  const wrap = document.getElementById("ielts-grid");
  if (!wrap) return; // Prevent error if hidden entirely and removed from DOM
  wrap.innerHTML = IELTS.map((i) => {
    const pct = (i.score / 9) * 100;
    const C = 2 * Math.PI * 48;
    const offset = C - (pct / 100) * C;
    return `
      <div class="glass p-6 text-center reveal stat-card">
        <div class="score-ring mx-auto mb-4">
          <svg viewBox="0 0 120 120" width="120" height="120">
            <circle class="track" cx="60" cy="60" r="48"/>
            <circle class="fill" cx="60" cy="60" r="48" stroke-dasharray="${C}" stroke-dashoffset="${C}" data-offset="${offset}"/>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <i class="fa-solid ${i.icon} text-emerald-300 text-sm mb-0.5"></i>
            <div class="font-display text-2xl text-white">${i.score.toFixed(1)}</div>
          </div>
        </div>
        <div class="text-sm font-medium text-white">${i.skill}</div>
        <div class="text-[10px] text-white/50 font-mono mt-1">BAND SCORE</div>
      </div>
    `;
  }).join("");

  // Overall card
  const overall = IELTS.reduce((a, b) => a + b.score, 0) / IELTS.length;
  const banner = document.createElement("div");
  banner.className =
    "col-span-2 md:col-span-4 glass-strong p-6 flex flex-wrap items-center justify-between gap-4 reveal mt-4";
  banner.innerHTML = `
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300"><i class="fa-solid fa-award"></i></div>
      <div>
        <div class="text-[10px] font-mono text-white/50 uppercase">Overall Band</div>
        <div class="font-display text-3xl accent-text">${overall.toFixed(1)} / 9.0</div>
      </div>
    </div>
    <div class="text-white/50 text-sm">Academic Module · Test Date: Jan 2024</div>
  `;
  wrap.appendChild(banner);
}

function renderCerts() {
  const wrap = document.getElementById("cert-grid");
  wrap.innerHTML = CERTS.map(
    (c) => `
    <div class="cert-card glass p-6 reveal">
      <div class="flex items-start justify-between mb-5">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background: linear-gradient(135deg, rgba(110,231,165,0.15), rgba(52,211,153,0.05)); border:1px solid rgba(110,231,165,0.25);">
          <i class="fa-solid ${c.icon} text-emerald-300"></i>
        </div>
        <span class="text-[10px] font-mono text-white/40 uppercase tracking-wider">${c.date}</span>
      </div>
      <h3 class="font-display text-lg text-white mb-1.5 leading-tight">${c.title}</h3>
      <div class="text-xs text-white/55 mb-5">${c.org}</div>
      <button class="text-xs font-mono text-emerald-300 hover:text-emerald-200 flex items-center gap-2 group" data-toast="Credential opened in a new tab">
        View Credential <i class="fa-solid fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 transition"></i>
      </button>
    </div>
  `,
  ).join("");
}

let currentFilter = "all";
function renderResearch() {
  const wrap = document.getElementById("research-grid");
  const filtered =
    currentFilter === "all"
      ? RESEARCH
      : RESEARCH.filter((r) => r.tag === currentFilter);
  wrap.innerHTML =
    filtered
      .map(
        (r) => `
    <article class="research-card glass p-7 reveal flex flex-col">
      <div class="flex items-center justify-between mb-5">
        <span class="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 uppercase tracking-wider">${r.tag}</span>
        <span class="text-xs font-mono text-white/40">${r.year}</span>
      </div>
      <h3 class="font-display text-lg text-white leading-snug mb-3">${r.title}</h3>
      <div class="text-xs text-emerald-300/80 italic mb-4">${r.journal}</div>
      <p class="text-sm text-white/55 leading-relaxed flex-1 mb-5">${r.abstract}</p>
      <button class="self-start text-xs font-mono text-emerald-300 hover:text-emerald-200 flex items-center gap-2 group" data-toast="Opening full paper...">
        Read Full Paper <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
      </button>
    </article>
  `,
      )
      .join("") ||
    `<div class="col-span-full text-center text-white/50 py-12">No papers in this category yet.</div>`;
  observeReveal();
  bindToasts();
}

function renderProjects() {
  const wrap = document.getElementById("projects-grid");
  wrap.innerHTML = PROJECTS.map(
    (p, i) => `
    <article class="project-card glass-strong overflow-hidden reveal group ${i >= 4 ? "hidden-project hidden" : ""}">
      <div class="relative h-52 overflow-hidden" style="background: url('${p.image}') center/cover no-repeat; background-color: ${p.accent}22;">
        
        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

        <div class="absolute top-4 left-4 glass px-3 py-1 text-[10px] font-mono text-emerald-200 uppercase z-10">
          ${p.status ? `<i class="fa-solid fa-bolt"></i> ${p.status}` : `Project ${String(i + 1).padStart(2, "0")}`}
        </div>
      </div>
      
      <div class="p-7">
        <h3 class="font-display text-2xl text-white mb-3">${p.title}</h3>
        <p class="text-sm text-white/60 leading-relaxed mb-5">${p.desc}</p>

        <div class="flex items-start gap-2 text-xs text-white/70 mb-5 pb-5 border-b border-emerald-400/10">
          <i class="fa-solid fa-bullseye text-emerald-300 mt-0.5"></i>
          <div><span class="font-medium text-white">Objective:</span> <span class="text-white/60">${p.obj}</span></div>
        </div>

        <div class="flex flex-wrap gap-2 mb-5">
          ${p.tech.map((t) => `<span class="text-[10px] font-mono px-2.5 py-1 rounded-md bg-emerald-500/8 border border-emerald-400/15 text-emerald-200/90">${t}</span>`).join("")}
        </div>

        <div class="flex gap-3">
          ${p.githubLink ? `<a href="${p.githubLink}" target="_blank" class="btn-ghost text-xs py-2 px-4"><i class="fa-brands fa-github"></i> GitHub</a>` : ""}
          ${p.liveLink ? `<a href="${p.liveLink}" target="_blank" class="btn-primary text-xs py-2 px-4"><i class="fa-solid fa-play"></i> Live Preview</a>` : ""}
        </div>
      </div>
    </article>
  `,
  ).join("");

  // View All Projects Button Logic
  const viewAllBtn = document.getElementById("view-all-projects-btn");
  if (viewAllBtn) {
    if (PROJECTS.length <= 4) {
      viewAllBtn.style.display = "none"; // Hide button if 4 or fewer projects exist
    } else {
      viewAllBtn.addEventListener("click", function () {
        // Unhide the extra projects
        document.querySelectorAll(".hidden-project").forEach((el) => {
          el.classList.remove("hidden");
        });
        // Hide the button itself after clicking
        this.style.display = "none";
        // Re-trigger scroll animations for newly visible projects
        observeReveal();
      });
    }
  }
}

/* ===================== PARTICLES ===================== */
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
function initParticles() {
  particles = [];
  const count = Math.min(60, Math.floor(window.innerWidth / 30));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.5 + 0.2,
    });
  }
}
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(110,231,165,${p.a})`;
    ctx.fill();
  });
  // connect close pairs
  for (let i = 0; i < particles.length; i++)
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i],
        b = particles[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(110,231,165,${0.1 * (1 - d / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  requestAnimationFrame(drawParticles);
}
window.addEventListener("resize", () => {
  sizeCanvas();
  initParticles();
});
sizeCanvas();
initParticles();
drawParticles();

/* ===================== TYPING ===================== */
const TYPES = [
  "Full Stack Developer",
  "React & Node.js Specialist",
  "UI/UX Enthusiast",
  "Software Engineer",
];
let tIdx = 0,
  cIdx = 0,
  deleting = false;
function typeLoop() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  const full = TYPES[tIdx];
  if (!deleting) {
    el.textContent = full.slice(0, ++cIdx);
    if (cIdx === full.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    el.textContent = full.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      tIdx = (tIdx + 1) % TYPES.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

/* ===================== REVEAL ===================== */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            // animate skill bars
            e.target.querySelectorAll(".skill-fill").forEach((f) => {
              f.style.width = f.dataset.pct + "%";
            });
            // animate score rings
            e.target.querySelectorAll(".score-ring .fill").forEach((c) => {
              c.style.strokeDashoffset = c.dataset.offset;
            });
          }
        });
      },
      { threshold: 0.12 },
    );
  }
  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach((el) => revealObserver.observe(el));
}

/* ===================== NAV ===================== */
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  },
  true,
);

document.querySelector(".portfolio-wrapper").addEventListener("scroll", (e) => {
  if (e.target.scrollTop > 40) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");

  // Active link
  const sections = [
    "home",
    "about",
    "projects",
    "research",
    "education",
    "experience",
    "contact",
  ];
  let active = "home";
  const scrollTop = e.target.scrollTop;
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop - 150 <= scrollTop) active = id;
  });
  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + active);
  });
});

// Smooth scroll within wrapper
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      document.querySelector(".portfolio-wrapper").scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      document.getElementById("mobile-menu").classList.remove("open");
    }
  });
});

// Mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("open");
});

/* ===================== FILTER ===================== */
document.getElementById("filter-bar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;
  document
    .querySelectorAll(".filter-chip")
    .forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderResearch();
});

/* ===================== TOAST ===================== */
function showToast(msg) {
  const t = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  t.style.opacity = "1";
  setTimeout(() => (t.style.opacity = "0"), 2200);
}
function bindToasts() {
  document.querySelectorAll("[data-toast]").forEach((el) => {
    if (el._bound) return;
    el._bound = true;
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showToast(el.dataset.toast);
    });
  });
}

/* ===================== CONTACT FORM ===================== */
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';
  setTimeout(() => {
    msg.innerHTML =
      '<i class="fa-solid fa-check-circle"></i> Message sent! I\'ll reply soon.';
    e.target.reset();
    showToast("Message delivered successfully");
    setTimeout(() => (msg.textContent = ""), 4000);
  }, 900);
});

document.getElementById("year").textContent = new Date().getFullYear();

/* ===================== RENDER ALL ===================== */
renderSkills();
renderIELTS();
renderCerts();
renderResearch();
renderProjects();
observeReveal();
bindToasts();

/* ===================== ELEMENT SDK ===================== */
const defaultConfig = {
  hero_name: "Rudra Mojumder",
  hero_title: "Computer Science & Web Development Enthusiast",
  hero_tagline: "Turning Ideas into Code, One Line at a Time",
  hero_intro:
    "I'm Rudra Mojumder — a Computer Science & Web Development Enthusiast creating digital experiences that matter. I transform ideas into code, one line at a time.",
  about_paragraph:
    "I'm passionate about building the future of the web — from responsive designs to robust applications. My work sits at the crossroads of creativity and functionality, turning complex problems into elegant solutions.",
  contact_email: "r17.gfx@gmail.com",
  contact_phone: "+8801568931456",
  contact_location: "Dhaka, Bangladesh",
};

function applyConfig(cfg) {
  const nameEl = document.getElementById("hero-name-inline");
  if (nameEl) nameEl.textContent = cfg.hero_name || defaultConfig.hero_name;
  const introEl = document.getElementById("hero-intro-text");
  if (introEl)
    introEl.innerHTML = (cfg.hero_intro || defaultConfig.hero_intro).replace(
      cfg.hero_name || defaultConfig.hero_name,
      `<span class="text-emerald-300 font-medium">${cfg.hero_name || defaultConfig.hero_name}</span>`,
    );
  const aboutEl = document.getElementById("about-paragraph-text");
  if (aboutEl)
    aboutEl.textContent = cfg.about_paragraph || defaultConfig.about_paragraph;
  const emEl = document.getElementById("contact-email-text");
  if (emEl) emEl.textContent = cfg.contact_email || defaultConfig.contact_email;
  const emCard = document.getElementById("contact-email-card");
  if (emCard)
    emCard.href =
      "mailto:" + (cfg.contact_email || defaultConfig.contact_email);
  const phEl = document.getElementById("contact-phone-text");
  if (phEl) phEl.textContent = cfg.contact_phone || defaultConfig.contact_phone;
  const locEl = document.getElementById("contact-location-text");
  if (locEl)
    locEl.textContent = cfg.contact_location || defaultConfig.contact_location;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (cfg) => applyConfig(cfg),
    mapToCapabilities: () => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined,
    }),
    mapToEditPanelValues: (cfg) =>
      new Map([
        ["hero_name", cfg.hero_name || defaultConfig.hero_name],
        ["hero_title", cfg.hero_title || defaultConfig.hero_title],
        ["hero_tagline", cfg.hero_tagline || defaultConfig.hero_tagline],
        ["hero_intro", cfg.hero_intro || defaultConfig.hero_intro],
        [
          "about_paragraph",
          cfg.about_paragraph || defaultConfig.about_paragraph,
        ],
        ["contact_email", cfg.contact_email || defaultConfig.contact_email],
        ["contact_phone", cfg.contact_phone || defaultConfig.contact_phone],
        [
          "contact_location",
          cfg.contact_location || defaultConfig.contact_location,
        ],
      ]),
  });
}

/* ===================== COPY EMAIL ===================== */
function copyDirectEmail() {
  // HTML theke email text-ta nibe
  const emailText = document.getElementById("direct-email").innerText;

  // Asol copy korar process (Clipboard API)
  navigator.clipboard
    .writeText(emailText)
    .then(() => {
      // Copy success hole tomar design kora toast message show korbe
      showToast("Email copied!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      alert("Could not copy text. Please copy manually.");
    });
}

/* ===================== AI CHATBOT LOGIC ===================== */
const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const closeChat = document.getElementById("close-chat");
const chatInput = document.getElementById("chat-input");
const sendChat = document.getElementById("send-chat");
const chatMessages = document.getElementById("chat-messages");

// Toggle Chat Window
function toggleChat() {
  chatWindow.classList.toggle("hidden");
  chatWindow.classList.toggle("flex");
}

chatToggle.addEventListener("click", toggleChat);
closeChat.addEventListener("click", toggleChat);

// Append Message to UI
function addMessage(text, isUser = false) {
  const msgDiv = document.createElement("div");
  msgDiv.className = isUser
    ? "bg-emerald-600/40 border border-emerald-400/30 rounded-xl rounded-tr-none p-3 text-sm text-white self-end max-w-[85%] leading-relaxed"
    : "bg-white/5 border border-emerald-400/10 rounded-xl rounded-tl-none p-3 text-sm text-white/90 self-start max-w-[85%] leading-relaxed";

  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
}

// Handle Sending Message
async function handleSendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  // 1. Show user message
  addMessage(text, true);
  chatInput.value = "";

  // 2. Show typing indicator (Loading state)
  const typingDiv = document.createElement("div");
  typingDiv.className =
    "bg-white/5 border border-emerald-400/10 rounded-xl rounded-tl-none p-3 text-sm text-white/50 self-start max-w-[85%] flex gap-1 items-center";
  typingDiv.innerHTML =
    '<span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce"></span><span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce" style="animation-delay: 0.1s"></span><span class="w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>';
  typingDiv.id = "typing-indicator";
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // 3. TODO: Backend theke API call hobe ekhane.
  // Filhal ekta fake 1.5s delay diye dummy response dekhacchi testing er jonno:
  setTimeout(() => {
    // Remove typing indicator
    const indicator = document.getElementById("typing-indicator");
    if (indicator) indicator.remove();

    // Bot Response
    addMessage(
      "That's a great pleasure to hear from you! I am currently being upgraded with my backend API. Soon I will be able to answer everything about Rudra!",
    );
  }, 1500);
}

// Send on Button Click
sendChat.addEventListener("click", handleSendMessage);

// Send on Enter Key
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSendMessage();
});

// ====================== CONTACT ===============================
/* ===================== CONTACT FORM SUBMISSION LOGIC ===================== */
const contactForm = document.getElementById("contact-form");
const formSubmitBtn = document.getElementById("form-submit-btn");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload thekabe

    // Button state change (Loading animation)
    const originalBtnText = formSubmitBtn.innerHTML;
    formSubmitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    formSubmitBtn.disabled = true;

    const formData = new FormData(contactForm);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          // Success Toast Show
          if (toastMsg)
            toastMsg.innerText = "Project details sent successfully!";
          if (toast) toast.classList.remove("opacity-0", "pointer-events-none");

          // Form clear kora
          contactForm.reset();

          // Hide toast after 3 seconds
          setTimeout(() => {
            if (toast) toast.classList.add("opacity-0", "pointer-events-none");
          }, 3000);
        } else {
          alert(json.message || "Something went wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Network Error! Please try again.");
      })
      .finally(() => {
        // Button aager obosthay firiye ana
        formSubmitBtn.innerHTML = originalBtnText;
        formSubmitBtn.disabled = false;
      });
  });
}

// ====================== END OF CONTACT FORM SUBMISSION LOGIC ===================== */

// ===================== AI CHATBOT LOGIC =====================
