export function initTabManager() {
  const resizeDebounce = (fn: () => void, delay = 100) => {
    let timeout: number;
    return () => {
      clearTimeout(timeout);
      timeout = window.setTimeout(fn, delay);
    };
  };

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

      const setGliderStyles = (btn: HTMLButtonElement, immediate = false) => {
        if (immediate) {
          // For clicks, apply styles immediately
          group.style.setProperty(gliderCSSLeft, `${btn.offsetLeft}px`);
          group.style.setProperty(gliderCSSWidth, `${btn.offsetWidth}px`);
        } else {
          // For resize events, use requestAnimationFrame for smoother updates
          requestAnimationFrame(() => {
            group.style.setProperty(gliderCSSLeft, `${btn.offsetLeft}px`);
            group.style.setProperty(gliderCSSWidth, `${btn.offsetWidth}px`);
          });
        }
      };

      const activate = (btn: HTMLButtonElement, initial: boolean) => {
        const activeTab = btn.dataset.tab;
        if (isGliderPresent) setGliderStyles(btn, true); // immediate for clicks

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

      // activate(buttons[0], true);
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => activate(btn, false));
      });

      // Resize handling (debounced)
      const handleResize = resizeDebounce(() => {
        const activeButton = buttons.find((b) => b.dataset.active === 'true');
        if (activeButton && isGliderPresent)
          setGliderStyles(activeButton, false);
      });

      if (isGliderPresent && 'ResizeObserver' in window) {
        const observer = new ResizeObserver(() => handleResize());
        // Observe the tab container, not just the active button
        const tabContainer = group.querySelector('.tab-glider');
        if (tabContainer) {
          observer.observe(tabContainer);
        }
      }

      // Also add window resize listener as fallback
      if (isGliderPresent) {
        window.addEventListener('resize', handleResize);
      }
    }
  );
}
