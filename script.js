document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".hero-text, .stats-card, .profile-card, .glass, .project, .cards div, .timeline div, .contact-box"
  );

  animatedItems.forEach(item => item.classList.add("fade-up"));

  function showOnScroll(){
    animatedItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        item.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();

  const cursorGlow = document.createElement("div");
  cursorGlow.className = "cursor-glow";
  document.body.appendChild(cursorGlow);

  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });
});
