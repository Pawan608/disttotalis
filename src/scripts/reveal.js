export function initRevealObserver() {
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay) || 0;

          setTimeout(() => {
            el.classList.add('visible');

            // Update glow card CSS variables if this is a glow card
            if (el.classList.contains('glow-card')) {
              el.style.setProperty('--reveal-y', '0px');
              el.style.setProperty('--reveal-rotate', '0deg');
            }
          }, delay);

          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => {
    // Initialize glow card CSS variables for unrevealed state
    if (el.classList.contains('glow-card')) {
      el.style.setProperty('--reveal-y', '3rem'); // Same as translate-y-12
      el.style.setProperty('--reveal-rotate', '2deg');
    }

    observer.observe(el);
  });
}
