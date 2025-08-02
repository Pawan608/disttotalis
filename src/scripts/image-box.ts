export const initImageBox = () => {
  const mainImg = document.getElementById('main-image') as HTMLImageElement;
  const thumbs = [
    ...document.querySelectorAll('.thumbnail-btn'),
  ] as HTMLButtonElement[];

  const updateActiveStates = (activeIndex: number) => {
    thumbs.forEach((btn, index) => {
      if (index === activeIndex) {
        btn.classList.add('ring-primary');
        btn.classList.remove('ring-transparent');
      } else {
        btn.classList.add('ring-transparent');
        btn.classList.remove('ring-primary');
      }
    });
  };

  thumbs.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      mainImg.src = btn.dataset.src!;
      mainImg.srcset = btn.dataset.srcset!;
      mainImg.alt = btn.dataset.alt!;
      updateActiveStates(index);
    });
  });
};
