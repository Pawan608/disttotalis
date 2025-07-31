import type { EmblaCarouselType } from 'embla-carousel';
import EmblaCarousel from 'embla-carousel';

/**
 * Initializes all Embla carousels found in the DOM.
 *
 * Assumes each `.embla` root contains:
 *  - `.embla-viewport`: the scrollable container
 *  - `.embla-container`: the flex wrapper for slides
 *  - `.embla-prev` / `.embla-next`: optional navigation buttons
 */
export function initEmblas(): void {
  const roots = document.querySelectorAll<HTMLElement>('.embla');

  roots.forEach((root) => {
    const viewport = root.querySelector<HTMLElement>('.embla-viewport');
    const prevBtn = root.querySelector<HTMLButtonElement>('.embla-prev');
    const nextBtn = root.querySelector<HTMLButtonElement>('.embla-next');

    // Skip if essential viewport is missing
    if (!viewport) return;

    // Create a new Embla instance on this root
    const embla: EmblaCarouselType = EmblaCarousel(viewport, {
      align: 'start',
      skipSnaps: false,
      containScroll: 'trimSnaps',
    });

    const updateButtons = () => {
      if (prevBtn) prevBtn.disabled = !embla.canScrollPrev();
      if (nextBtn) nextBtn.disabled = !embla.canScrollNext();
    };

    embla.on('select', updateButtons);
    embla.on('init', updateButtons);

    // Hook up optional nav buttons if present
    prevBtn?.addEventListener('click', () => embla.scrollPrev());
    nextBtn?.addEventListener('click', () => embla.scrollNext());

    // Optional: flag root as initialized
    root.dataset.emblaInitialized = 'true';
  });
}

/**
 * Expected HTML structure:
 *
 * <div class="embla">
 *   <div class="embla-viewport">
 *     <div class="embla-container">
 *       <div class="embla-slide">...</div>
 *       ...
 *     </div>
 *   </div>
 *   <button class="embla-prev">←</button>
 *   <button class="embla-next">→</button>
 * </div>
 */
