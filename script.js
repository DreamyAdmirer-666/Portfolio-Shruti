// Load skills from JSON and display them
fetch("info.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("skills-container");
    const skills = data.skills;

    for (const [skill, level] of Object.entries(skills)) {
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.innerHTML = `
        <div class="skill-name"><i>★</i> ${skill}</div>
        <div class="skill-bar">
          <div class="skill-fill" style="--skill-level:${level}%" data-percent="${level}%"></div>
        </div>`;
      container.appendChild(skillDiv);
    }
  });

// Starfield animation
function generateStars(count = 100) {
  const starfield = document.getElementById("starfield");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 4 + 2}s`;
    starfield.appendChild(star);
  }

  for (let i = 0; i < 5; i++) {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.left = `${Math.random() * 100}%`;
    shootingStar.style.top = `${Math.random() * 100}%`;
    shootingStar.style.animationDelay = `${Math.random() * 10}s`;
    starfield.appendChild(shootingStar);
  }
}

// Animate About section on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector('.about-section'));

window.onload = () => generateStars();
