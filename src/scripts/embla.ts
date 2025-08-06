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

const emblaInstances: Map<string, EmblaCarouselType> = new Map();
let idCounter = 0;

let debounceTimer: number | null = null;
function debounceInit() {
  if (debounceTimer !== null) clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(() => {
    initEmblas();
  }, 150); // 100ms delay
}

export function initEmblas(): void {
  const roots = document.querySelectorAll<HTMLElement>('.embla');

  roots.forEach((root) => {
    const id = getOrAssignId(root);

    const viewport = root.querySelector<HTMLElement>('.embla-viewport');
    const prevBtn = root.querySelector<HTMLButtonElement>('.embla-prev');
    const nextBtn = root.querySelector<HTMLButtonElement>('.embla-next');

    if (!viewport) return;

    const alreadyInit = emblaInstances.get(id);
    if (alreadyInit) {
      alreadyInit.destroy();
    }

    const embla = EmblaCarousel(viewport, {
      // align: 'start',
      skipSnaps: false,
      // containScroll: 'trimSnaps',
    });

    const updateButtons = () => {
      if (prevBtn) prevBtn.disabled = !embla.canScrollPrev();
      if (nextBtn) nextBtn.disabled = !embla.canScrollNext();
    };

    embla.on('init', updateButtons);
    embla.on('select', updateButtons);

    prevBtn?.addEventListener('click', () => embla.scrollPrev());
    nextBtn?.addEventListener('click', () => embla.scrollNext());

    emblaInstances.set(id, embla);
    root.dataset.emblaInitialized = 'true';

    // Only set up observers once per root
    if (!root.dataset.emblaObserverAttached) {
      root.dataset.emblaObserverAttached = 'true';

      const resizeObserver = new ResizeObserver(() => {
        if (isVisible(root)) debounceInit();
      });
      resizeObserver.observe(root);

      const mutationObserver = new MutationObserver(() => {
        if (isVisible(root)) debounceInit();
      });
      mutationObserver.observe(root, {
        attributes: true,
        attributeFilter: ['class', 'style'],
      });
    }
  });
}

function getOrAssignId(el: HTMLElement): string {
  if (!el.dataset.emblaId) {
    el.dataset.emblaId = `embla-${idCounter++}`;
  }
  return el.dataset.emblaId;
}

function isVisible(el: HTMLElement): boolean {
  return el.offsetParent !== null;
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
