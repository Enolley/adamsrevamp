
  document.getElementById('year').textContent = new Date().getFullYear();

  // Animate liquid-fill pricing cards when scrolled into view
  const cards = document.querySelectorAll('.price-card[data-fill]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fillEl = entry.target.querySelector('.fill');
        const pct = entry.target.getAttribute('data-fill');
        fillEl.style.height = pct + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  cards.forEach(card => observer.observe(card));