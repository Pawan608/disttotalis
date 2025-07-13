export function initCardGlowEffect() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glow-card');

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set glow position
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);

      // Calculate 3D tilt based on mouse position
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // Inverted for natural feel
      const rotateY = ((x - centerX) / centerX) * 6; // Normal direction

      card.style.setProperty('--tilt-x', `${rotateX}deg`);
      card.style.setProperty('--tilt-y', `${rotateY}deg`);
    });
  });
}
