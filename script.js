// ============================================
//  GEOKAPTI — MAIN SCRIPT
// ============================================

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(6, 14, 28, 0.98)';
  } else {
    navbar.style.background = 'rgba(10, 22, 40, 0.92)';
  }
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOpts = { rootMargin: '-40% 0px -55% 0px' };
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOpts);

sections.forEach(s => sectionObserver.observe(s));

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(
  '.section-eyebrow, .section-title, .divider-green, .about-content, ' +
  '.card, .satellites-content, .hightech-content, .hightech-image, ' +
  '.contact-form, .btn'
);
revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Stagger cards
document.querySelectorAll('.card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// ---- Contact form ----
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.submit-btn');
  const orig = btn.textContent;
  btn.textContent = 'SENT!';
  btn.style.background = '#6fa52e';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ---- Hero dots ----
document.querySelectorAll('.dot').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});
