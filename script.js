document.addEventListener("DOMContentLoaded", () => {

  // Scroll reveal animation for all important blocks
  const animatedItems = document.querySelectorAll(
    ".hero-text, .stats-card, .profile-card, .glass, .skill-grid div, .project, .cards div, .timeline div, .contact-box, .title"
  );

  animatedItems.forEach((item, index) => {
    item.classList.add("fade-up");
    item.style.transitionDelay = (index % 6) * 0.08 + "s";
  });

  function showOnScroll() {
    animatedItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  window.addEventListener("load", showOnScroll);
  showOnScroll();

  // Cursor glow
  const cursorGlow = document.createElement("div");
  cursorGlow.className = "cursor-glow";
  document.body.appendChild(cursorGlow);

  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });

  // Typing text
  const typing = document.querySelector("#typing");
  const roles = [
    "Data Analyst • Web Developer • AI Enthusiast",
    "Frontend Developer • Excel Skilled • Fast Learner",
    "Inventory Professional • Tech Learner • Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    if (!typing) return;

    const text = roles[roleIndex];

    if (!deleting) {
      typing.textContent = text.substring(0, charIndex++);
      if (charIndex > text.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
      }
    } else {
      typing.textContent = text.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeEffect, deleting ? 45 : 75);
  }

  typeEffect();

});
