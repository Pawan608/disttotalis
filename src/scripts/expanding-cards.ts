export function initExpandingCards() {
  const cards = [
    ...document.querySelectorAll('.expanding-card'),
  ] as HTMLElement[];

  cards.forEach((card) => {
    const button = card.querySelector('.expanding-button');
    button?.addEventListener('click', () => {
      const expandingContent = card.querySelector(
        '.expanding-content'
      ) as HTMLElement;
      if (!expandingContent)
        console.error('Expanding cards do not work without expanding-content');

      const expandingContentMaxHeight = expandingContent.dataset.maxHeight!;

      if (!expandingContentMaxHeight)
        console.error(
          'Expanding cards do not work without data-max-height property'
        );

      const isContentExpanded =
        expandingContentMaxHeight === expandingContent.style.height;
      const initialHeight = expandingContent.dataset.initialHeight!;

      if (!initialHeight)
        expandingContent.dataset.initialHeight = String(
          expandingContent.clientHeight
        );

      button.setAttribute('data-content-expanded', String(!isContentExpanded));

      expandingContent.style.height = isContentExpanded
        ? `${initialHeight}px`
        : expandingContentMaxHeight;
      expandingContent.classList.toggle('line-clamp-1');
    });
  });
}
