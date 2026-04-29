/* Mehrab Beikzadeh — site interactions */

// Auto year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal — add .reveal to all section children, observe them
const targets = document.querySelectorAll(
  '.section-head, .about-prose, .about-stats, .research-card, .pub, .tl-item, .award, .passion, .contact-inner, .marquee'
);
targets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

targets.forEach(el => io.observe(el));

// Stagger reveals for grid groups
const stagger = (selector, delayStep = 80) => {
  document.querySelectorAll(selector).forEach((el, i) => {
    el.style.transitionDelay = `${i * delayStep}ms`;
  });
};
stagger('.research-grid .research-card');
stagger('.awards-grid .award', 60);
stagger('.beyond-grid .passion', 80);
stagger('.about-stats .stat', 70);

// Header shrink on scroll
const nav = document.querySelector('.nav');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 40) {
    nav.style.padding = '0.85rem var(--gutter)';
  } else {
    nav.style.padding = '1.25rem var(--gutter)';
  }
  lastY = y;
}, { passive: true });

// Smooth-scroll handles already done by CSS scroll-behavior — but offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navHeight = nav.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
