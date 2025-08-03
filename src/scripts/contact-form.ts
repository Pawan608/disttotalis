export function initContactFormTriggers() {
  const formTriggers = [
    ...document.querySelectorAll('.contact-form-trigger'),
  ] as HTMLElement[];

  const closeTriggers = [
    ...document.querySelectorAll('.close-contact-form-trigger'),
  ] as HTMLElement[];

  const skipToBrochureDownload = [
    ...document.querySelectorAll('.skip-to-download-brochure'),
  ] as HTMLElement[];

  formTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      showForm();
    });
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      hideForm();
    });
  });

  skipToBrochureDownload.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      skipToDownloadBrochure();
    });
  });
}

export function showForm() {
  const form = document.getElementById('contact-form-modal') as HTMLFormElement;

  form.classList.remove('hidden');
  form.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

export function hideForm() {
  const form = document.getElementById('contact-form-modal') as HTMLFormElement;
  form.classList.remove('flex');
  form.classList.add('hidden');
  document.body.style.overflow = '';
}

export function skipToDownloadBrochure() {
  console.log('We reached here');
  hideForm();
  downloadBrochure();
}

export function downloadBrochure() {
  window.open(
    'https://www.hindalco.com/upload/pdf/totalis-brochure.pdf',
    '_blank'
  );
}


export function validateForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement;

}

const validations = {
  name: (value: string) => value.trim().length > 3,
}