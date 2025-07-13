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
          }, delay);

          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => {
    observer.observe(el);
  });
}
