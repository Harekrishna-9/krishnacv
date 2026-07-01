// Premium Portfolio JavaScript

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Active navbar on scroll
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Typing animation
const typingText = document.querySelector(".hero h3");
const roles = [
  "Data Analyst • Web Developer • AI Enthusiast",
  "Frontend Developer • Excel Skilled • Fast Learner",
  "Inventory Professional • Tech Learner • Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 75);
}

typeEffect();

// Counter animation
const counters = document.querySelectorAll(".stat h2");
let counterStarted = false;

function animateCounters() {
  if (counterStarted) return;

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 80) {
    counters.forEach(counter => {
      const original = counter.innerText;
      const target = parseInt(original.replace(/\D/g, ""));
      let count = 0;
      const speed = 40;

      const update = () => {
        if (count < target) {
          count++;
          counter.innerText = original.includes("%") ? count + "%" : count + "+";
          setTimeout(update, speed);
        } else {
          counter.innerText = original;
        }
      };

      update();
    });

    counterStarted = true;
  }
}

window.addEventListener("scroll", animateCounters);
animateCounters();

// Scroll reveal animation
const revealItems = document.querySelectorAll(
  ".about-box, .skills-box, .project-card, .card, .timeline-item, .contact-box, .profile-card, .stat"
);

revealItems.forEach(item => {
  item.classList.add("reveal");
});

function revealOnScroll() {
  revealItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mouse glow effect
const glow = document.createElement("div");
glow.className = "mouse-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "back-top";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Premium hover tilt effect
const tiltCards = document.querySelectorAll(".project-card, .card, .profile-card, .about-box, .skills-box");

tiltCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// Loading screen
const loader = document.createElement("div");
loader.className = "loader";
loader.innerHTML = `
  <div class="loader-box">
    <h2>Harekrishna Patel</h2>
    <p>Loading Portfolio...</p>
    <div class="loader-line"><span></span></div>
  </div>
`;

document.body.appendChild(loader);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 800);
});

// Smooth link close / scroll fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
