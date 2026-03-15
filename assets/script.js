/* ---------- Theme Toggle ---------- */

const toggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  icon.src = "assets/sun.svg";
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.src = "assets/sun.svg";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "assets/moon.svg";
    localStorage.setItem("theme", "light");
  }
};

/* ---------- Skills ---------- */

const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development"],
  },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "Programming", items: ["Java", "C", "Data Structures"] },
  {
    title: "Tools",
    items: ["Linux", "Git / GitHub", "Bash Scripting", "Figma"],
  },
];

const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
  const article = document.createElement("article");

  article.innerHTML = `
<h3>${skill.title}</h3>
<ul>
${skill.items.map((i) => `<li>${i}</li>`).join("")}
</ul>
`;

  skillsContainer.appendChild(article);
});

/* ---------- Projects ---------- */

const projects = [
  {
    name: "SyncSpace",
    year: 2026,
    month: "Mar",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "GitHub API"],
    desc: "Collaborative project management tool with GitHub integration and real-time task tracking for student teams.",
    github: "https://github.com/",
  },
  {
    name: "NotesApp",
    year: 2025,
    month: "Sep",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    desc: "Full-stack notes application with Google OAuth authentication, CRUD APIs, and responsive React interface.",
    github: "https://github.com/",
  },
  {
    name: "Library Management System",
    year: 2025,
    month: "July",
    stack: ["Java", "OOP", "File I/O", "Console"],
    desc: "Console-based Java application demonstrating inheritance, polymorphism, and file-based data persistence.",
    github: "https://github.com/",
  },
  {
    name: "Linux System Monitor Tool",
    year: 2025,
    month: "Dec",
    stack: ["Bash", "Scripting", "Dialog"],
    desc: "Terminal-based monitoring toolkit with resource usage display, log inspection, and keyboard-driven interface.",
    github: "https://github.com/",
  },
];

const projectsContainer = document.getElementById("projects-container");

projects.forEach((p) => {
  const article = document.createElement("article");

  article.innerHTML = `
<header class="project-head">
<h3>${p.name}</h3>
<p><time>${p.month}</time> - ${p.year}</p>
</header>

<p class="stack">${p.stack.join(" · ")}</p>

<p>${p.desc}</p>

<p>
<a href="${p.github}">GitHub Repository →</a>
</p>

<hr>
`;

  projectsContainer.appendChild(article);
});

/* ---------- Education ---------- */

const education = [
  {
    degree: "B.E — Electrical & Electronics Engineering",
    start: 2022,
    end: 2026,
    school: "KPR Institute of Engineering and Technology, Coimbatore",
    extra: "CGPA: 8.73 · Minor: Software Development Engineering",
  },
  {
    degree: "Higher Secondary School",
    start: 2021,
    end: 2022,
    school: "Sri Ramakrishna Vidyalaya Matric. Hr. Sec. School, Tirupur",
    extra: "Score: 91% · Computer Science & Mathematics",
  },
];

const eduContainer = document.getElementById("education-container");

education.forEach((e) => {
  const article = document.createElement("article");

  article.innerHTML = `
<h3>${e.degree}</h3>
<p>${e.start} — ${e.end}</p>
<p>${e.school}</p>
<p>${e.extra}</p>
<hr>
`;

  eduContainer.appendChild(article);
});

/* ---------- Certifications ---------- */

const certifications = [
  { name: "Database Management System", org: "NPTEL", year: 2025 },
  { name: "N5 Japanese Language Proficiency", org: "NAT", year: 2023 },
  { name: "Problem Solving (Basic)", org: "HackerRank", year: 2025 },
  { name: "SQL (Basic)", org: "HackerRank", year: 2025 },
];

const certContainer = document.getElementById("certifications-container");

certifications.forEach((c) => {
  const li = document.createElement("li");

  li.innerHTML = `<strong>${c.name}</strong> — ${c.org} (${c.year})`;

  certContainer.appendChild(li);
});

/* ---------- Highlights ---------- */

const highlights = [
  "Won ₹2000 cash prize in Race to Code at Coimbatore Institute of Technology.",
  "Cleared Japanese Language Proficiency Test (NAT) — Q5 Level.",
  "Organised Japanese Street at FIESTAA for three consecutive years.",
];

const highContainer = document.getElementById("highlights-container");

highlights.forEach((h) => {
  const li = document.createElement("li");
  li.textContent = h;
  highContainer.appendChild(li);
});
