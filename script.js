// Smooth scrolling for navbar links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Newsletter form validation
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("mail").value;
  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address!");
  } else {
    alert("Thank you for subscribing!");
    this.reset();
  }
});
// Scroll animation for service cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Typing Animation
const roles = ["Web Developer", "AI Enthusiast", "Data Scientist", "Software Engineer"];
let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.innerHTML += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) setTimeout(typeEffect, 1000);
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// Scroll animation for projects
window.addEventListener("scroll", function () {
  let elements = document.querySelectorAll(".project-card");
  elements.forEach((el) => {
    let position = el.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("fade-in");
    }
  });
});
