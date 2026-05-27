// Animate skill bars on scroll
const bars = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
    }
  });
}, { threshold: 0.3 });

bars.forEach(bar => observer.observe(bar));
