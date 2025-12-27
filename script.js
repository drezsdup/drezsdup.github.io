// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


// ===== Fade-in animation on scroll =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .product').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});


// ===== Subtle hover glow follow (premium effect) =====
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth * 100;
  const y = e.clientY / window.innerHeight * 100;

  document.body.style.background =
    `radial-gradient(circle at ${x}% ${y}%, #0a0a0a, #000)`;
});


// ===== WhatsApp safety check =====
const orderBtn = document.querySelector('.order');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    console.log('Order button clicked');
  });
}
