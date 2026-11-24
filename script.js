// 1. Dark Mode Toggle with LocalStorage
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggleBtn.textContent = "Light";
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 2. Mobile Menu Toggle
const menuToggleBtn = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// 3. Interactive Project Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const selected = btn.dataset.filter;
    projectItems.forEach((item) => {
      if (selected === "all" || item.dataset.category === selected) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

// 4. Contact Form Validation
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    feedback.style.color = "#dc2626";
    feedback.textContent = "Please enter your name (at least 2 characters).";
    return;
  }

  if (!emailPattern.test(email)) {
    feedback.style.color = "#dc2626";
    feedback.textContent = "Please enter a valid email address.";
    return;
  }

  if (message.length < 10) {
    feedback.style.color = "#dc2626";
    feedback.textContent = "Please write a message of at least 10 characters.";
    return;
  }

  feedback.style.color = "#16a34a";
  feedback.textContent = `Thanks, ${name}! Your message has been sent.`;
  contactForm.reset();
});