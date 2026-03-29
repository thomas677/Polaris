const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60 ? 'rgba(6,14,28,0.98)' : 'rgba(10,22,40,0.92)';
});
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-links a');
new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); });
}, { rootMargin: '-40% 0px -55% 0px' }).observe && sections.forEach(s => new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); }); }, { rootMargin: '-40% 0px -55% 0px' }).observe(s));
document.querySelectorAll('.section-eyebrow,.section-title,.divider-green,.about-content,.card,.satellites-content,.hightech-content,.contact-form').forEach(el => {
  el.classList.add('reveal');
  new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), 80); } }); }, { rootMargin: '0px 0px -60px 0px' }).observe(el);
});
document.querySelectorAll('.card').forEach((c,i) => c.style.transitionDelay = i*0.1+'s');
function handleSubmit(e) { e.preventDefault(); const btn = e.target.querySelector('.submit-btn'); btn.textContent = 'SENT!'; setTimeout(() => { btn.textContent = 'SUBMIT'; e.target.reset(); }, 3000); }
document.querySelectorAll('.dot').forEach(d => d.addEventListener('click', () => { document.querySelectorAll('.dot').forEach(x => x.classList.remove('active')); d.classList.add('active'); }));