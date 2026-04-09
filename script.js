const heroTitle = document.getElementById("heroTitle");
const workBtn = document.getElementById("workBtn");
const contactBtn = document.getElementById("contactBtn");
const menuBtn = document.getElementById("menuBtn");
const links = document.querySelector(".links");

workBtn.addEventListener("click", () => {
  document.getElementById("work").scrollIntoView({ behavior: "smooth" });
});

contactBtn.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

menuBtn.addEventListener("click", () => {
  links.classList.toggle("open");
});

const projects = [
  {
    id: 1,
    title: "Theme Switcher App",
    desc: "Buttons that switch themes using DOM + event listeners.",
    category: "app",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 2,
    title: "Interactive Landing Page",
    desc: "Responsive landing page with headline cycling.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 3,
    title: "Portfolio UI Layout",
    desc: "Clean responsive UI design practice.",
    category: "ui",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 4,
    title: "Business Homepage",
    desc: "Modern homepage design for a service-based business.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 5,
    title: "Dashboard Concept",
    desc: "A clean admin dashboard interface with card-based layout.",
    category: "ui",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 6,
    title: "Task Tracker App",
    desc: "Interactive app concept for managing daily tasks.",
    category: "app",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 7,
    title: "Creative Agency Site",
    desc: "Bold landing page concept for a digital creative studio.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 8,
    title: "Mobile App UI",
    desc: "Interface concept for a sleek mobile productivity app.",
    category: "ui",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  },
  {
    id: 9,
    title: "Weather Widget App",
    desc: "Small frontend app idea for displaying live weather info.",
    category: "app",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/pixelbuggg/interactive-landing-page"
  }
];
const projectsGrid = document.getElementById("projectsGrid");

function renderProjects(list) {
  projectsGrid.innerHTML = list
    .map(
      (p) => `
      <div class="project fade-in" data-id="${p.id}">
        <div class="project-thumb ${p.category}"></div>
        <span class="project-tag">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
    `
    )
    .join("");
}

function renderSkeletons() {
  projectsGrid.innerHTML = `
    <div class="skeleton-card">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line text"></div>
      <div class="skeleton-line text short"></div>
    </div>

    <div class="skeleton-card">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line text"></div>
      <div class="skeleton-line text short"></div>
    </div>

    <div class="skeleton-card">
      <div class="skeleton-line title"></div>
      <div class="skeleton-line text"></div>
      <div class="skeleton-line text short"></div>
    </div>
  `;
}

renderSkeletons();

setTimeout(() => {
  renderProjects(projects);
}, 1500);

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    renderSkeletons();

    setTimeout(() => {
      if (filter === "all") {
        renderProjects(projects);
      } else {
        const filtered = projects.filter((p) => p.category === filter);
        renderProjects(filtered);
      }
    }, 700);
  });
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.innerText = "Please fill in all fields.";
    msg.style.color = "orange";
    return;
  }

  msg.innerText = "Message sent successfully 🚀";
  msg.style.color = "#4ade80";

  form.reset();
});

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

const sections = document.querySelectorAll(".section");

function revealSections() {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (top < triggerPoint) {
      section.classList.add("reveal");
    } else {
      section.classList.remove("reveal");
    }
  });
}

window.addEventListener("scroll", revealSections);

let counted = false;

window.addEventListener("scroll", () => {
  const stats = document.getElementById("stats");
  const top = stats.getBoundingClientRect().top;

  if (top < window.innerHeight && !counted) {
    counted = true;
    startCounters();
  }
});

function startCounters() {
  animate("projects", 12);
  animate("hours", 120);
  animate("coffee", 87);
}

function animate(id, target) {
  let count = 0;
  const element = document.getElementById(id);

  const interval = setInterval(() => {
    count++;
    element.innerText = count;

    if (count >= target) {
      clearInterval(interval);
    }
  }, 30);
}

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("open");
  });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.innerText = "🌙";
  } else {
    themeToggle.innerText = "☀️";
  }
});

const projectModal = document.getElementById("projectModal");
const closeProjectModal = document.getElementById("closeProjectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalTech = document.getElementById("modalTech");
const modalLink = document.getElementById("modalLink");
const modalThumb = document.getElementById("modalThumb");
const modalCategory = document.getElementById("modalCategory");

if (projectsGrid && projectModal && closeProjectModal && modalTitle && modalDesc && modalTech && modalLink) {
  projectsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".project");
    if (!card) return;

    const id = parseInt(card.dataset.id);
    const project = projects.find((p) => p.id === id);

    if (!project) return;

  modalTitle.innerText = project.title;
modalDesc.innerText = project.details || project.desc;

modalCategory.innerText = project.category;

modalTech.innerHTML = (project.tech || [])
  .map((tech) => `<span class="tech-badge">${tech}</span>`)
  .join("");

modalLink.href = project.link || "#";
modalLink.innerText = "View Code on GitHub";

modalThumb.className = `panel-thumb ${project.category}`;

projectModal.style.display = "flex";
  });

  closeProjectModal.addEventListener("click", () => {
    projectModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.style.display = "none";
    }
  });
}

const changeBtn = document.getElementById("changeBtn");

const heroMessages = [
  "I build modern, responsive websites with clean design and interactive user experiences.",
  "Focused on creating user-friendly interfaces with strong attention to detail.",
  "Developing real-world frontend projects using HTML, CSS, and JavaScript.",
  "Turning ideas into functional, visually engaging web experiences."
];

let heroIndex = 0;

changeBtn.addEventListener("click", () => {
  heroTitle.classList.add("fade");

  setTimeout(() => {
    heroIndex = (heroIndex + 1) % heroMessages.length;
    heroTitle.innerText = heroMessages[heroIndex];
    heroTitle.classList.remove("fade");
  }, 200);
});