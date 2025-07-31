export function initTabManager() {
  ([...document.querySelectorAll('.tab-group')] as HTMLElement[]).forEach(
    (group) => {
      const buttons = [
        ...group.querySelectorAll('.tab-button'),
      ] as HTMLButtonElement[];
      const panes = [...group.querySelectorAll('.tab-pane')] as HTMLElement[];

      const gliderCSSPrefix = '--glider-tab-group',
        gliderCSSWidth = `${gliderCSSPrefix}-width`,
        gliderCSSLeft = `${gliderCSSPrefix}-left`;

      const isGliderPresent = !!group.querySelector('.tab-glider');

      if (buttons.length !== panes.length || buttons.length === 0) {
        console.error('Mismatch in tabs or insufficient buttons/panes');
        return;
      }

      const activate = (btn: HTMLButtonElement, initial: boolean) => {
        const activeTab = btn.dataset.tab;
        if (isGliderPresent) {
          group.style.setProperty(gliderCSSLeft, `${btn.offsetLeft}px`);
          group.style.setProperty(gliderCSSWidth, `${btn.offsetWidth}px`);
        }
        buttons.forEach((b) =>
          b.setAttribute('data-active', b === btn ? 'true' : 'false')
        );
        panes.forEach((p) => {
          p.classList.toggle('tab-active', p.dataset.tab === activeTab);
          p.classList.remove('fade-up');
          if (p.dataset.tab === activeTab && !initial)
            p.classList.add('fade-up');
        });
      };

      activate(buttons[0], true);
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => activate(btn, false));
      });
    }
  );
}
