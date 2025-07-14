export function initCardGlowEffect() {
  const cards = document.querySelectorAll('.glow-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.setProperty('--tilt-x', `${rotateX}deg`);
      card.style.setProperty('--tilt-y', `${rotateY}deg`);
    });

    // Reset tilt when mouse leaves the card
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', `0deg`);
      card.style.setProperty('--tilt-y', `0deg`);
    });
  });
}
