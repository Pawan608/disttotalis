import type { PostalPincodeResponse } from '../types';

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
const resetStateAndCity = () => {
  const stateInput = document.getElementById('state') as HTMLSelectElement;
  const cityInput = document.getElementById('city') as HTMLSelectElement;

  stateInput.innerHTML = `<option value="" selected>Select your state</option>`;
  cityInput.innerHTML = `<option value="" selected>Select your city</option>`;
  stateInput.required = false;
  cityInput.required = false;
  stateInput.disabled = true;
  cityInput.disabled = true;
};

const fillStateAndCity = (data: PostalPincodeResponse) => {
  const stateInput = document.getElementById('state') as HTMLSelectElement;
  const cityInput = document.getElementById('city') as HTMLSelectElement;

  const states = [...new Set(data.PostOffice.map((el) => el.State))];
  const cities = [...new Set(data.PostOffice.map((el) => el.District))];

  const selectedState = data.PostOffice[0].State;
  const selectedCity = data.PostOffice[0].District;

  stateInput.required = true;
  cityInput.required = true;
  stateInput.disabled = false;
  cityInput.disabled = false;

  stateInput.innerHTML = states
    .map((state) => {
      return `<option value="${state}" ${
        state === selectedState ? 'selected' : ''
      }>${state}</option>`;
    })
    .join('');

  cityInput.innerHTML = cities
    .map((city) => {
      return `<option value="${city}" ${
        city === selectedCity ? 'selected' : ''
      }>${city}</option>`;
    })
    .join('');
};

const showError = (
  input: HTMLInputElement,
  el: HTMLParagraphElement,
  message: string
) => {
  input.dataset.error = 'true';
  el.textContent = message;
  el.classList.remove('hidden');
  input.focus();
};

const hideError = (input: HTMLInputElement, el: HTMLParagraphElement) => {
  input.dataset.error = 'false';
  el.textContent = '';
  el.classList.add('hidden');
};

const processPincode = async (
  pincodeEl: HTMLInputElement,
  errorMessageEl: HTMLParagraphElement
) => {
  try {
    const res = await fetch(
      `https://api.postalpincode.in/pincode/${pincodeEl.value}`
    );
    const data = (await res.json())[0] as PostalPincodeResponse;

    if (data.Status === 'Success') {
      fillStateAndCity(data);
    } else {
      showError(pincodeEl, errorMessageEl, 'Invalid Pincode');
    }
  } catch (err) {
    showError(pincodeEl, errorMessageEl, 'Unable to validate Pincode');
  }
};

const handleFormSubmit = async (event: SubmitEvent) => {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);
  const formPayload = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      body: formData,
    });
    const formContainer = document.getElementById(
      'form-container'
    ) as HTMLDivElement;

    formContainer.classList.add('hidden');
    const successContainer = document.getElementById(
      'success-container'
    ) as HTMLDivElement;
    successContainer?.classList.remove('hidden');
  } catch (err) {
    console.error('Error processing form submission:', err);
  } finally {
  }
};

const initPincodeElement = () => {
  const pincodeEl = document.getElementById('pincode') as HTMLInputElement;
  const errorMessageEl = pincodeEl.parentElement?.querySelector(
    '.error-message'
  ) as HTMLParagraphElement;
  pincodeEl.addEventListener('blur', () => {
    resetStateAndCity();
    if (pincodeEl.checkValidity()) {
      hideError(pincodeEl, errorMessageEl);
      processPincode(pincodeEl, errorMessageEl);
    } else {
      showError(pincodeEl, errorMessageEl, 'Please enter a 6 digit Pincode');
    }
  });
};

export const initContactForm = () => {
  initPincodeElement();
  const form = document.getElementById('contact-form') as HTMLFormElement;
  form?.addEventListener('submit', handleFormSubmit);
};
