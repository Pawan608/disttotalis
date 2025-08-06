import type { PostalPincodeResponse } from '../types';

type ContactFormPrefix = 'cmf' | 'cpf';

const getFormContainer = (prefix: ContactFormPrefix) =>
  document.getElementById(`${prefix}-container`) as HTMLDivElement;

const getSuccessContainer = (prefix: ContactFormPrefix) =>
  document.getElementById(`${prefix}-success`) as HTMLDivElement;

const resetStateAndCity = (prefix: ContactFormPrefix) => {
  const stateInput = document.getElementById(
    `${prefix}-state`
  ) as HTMLSelectElement;
  const cityInput = document.getElementById(
    `${prefix}-city`
  ) as HTMLSelectElement;

  stateInput.innerHTML = `<option value="" selected>Select your state</option>`;
  cityInput.innerHTML = `<option value="" selected>Select your city</option>`;
  stateInput.required = cityInput.required = false;
  stateInput.disabled = cityInput.disabled = true;
};

const fillStateAndCity = (
  prefix: ContactFormPrefix,
  data: PostalPincodeResponse
) => {
  const stateInput = document.getElementById(
    `${prefix}-state`
  ) as HTMLSelectElement;
  const cityInput = document.getElementById(
    `${prefix}-city`
  ) as HTMLSelectElement;

  const states = [...new Set(data.PostOffice.map((el) => el.State))];
  const cities = [...new Set(data.PostOffice.map((el) => el.District))];
  const selectedState = data.PostOffice[0].State;
  const selectedCity = data.PostOffice[0].District;

  stateInput.required = cityInput.required = true;
  stateInput.disabled = cityInput.disabled = false;

  stateInput.innerHTML = states
    .map(
      (s) =>
        `<option value="${s}" ${
          s === selectedState ? 'selected' : ''
        }>${s}</option>`
    )
    .join('');

  cityInput.innerHTML = cities
    .map(
      (c) =>
        `<option value="${c}" ${
          c === selectedCity ? 'selected' : ''
        }>${c}</option>`
    )
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
  prefix: ContactFormPrefix,
  pincodeEl: HTMLInputElement,
  errorEl: HTMLParagraphElement
) => {
  try {
    const res = await fetch(
      `https://api.postalpincode.in/pincode/${pincodeEl.value}`
    );
    const data = (await res.json())[0] as PostalPincodeResponse;

    if (data.Status === 'Success') {
      fillStateAndCity(prefix, data);
    } else {
      showError(pincodeEl, errorEl, 'Invalid Pincode');
    }
  } catch {
    showError(pincodeEl, errorEl, 'Unable to validate Pincode');
  }
};

const getFormSubmitHandler =
  (prefix: ContactFormPrefix) => async (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      });

      getFormContainer(prefix)?.classList.add('hidden');
      getSuccessContainer(prefix)?.classList.remove('hidden');
    } catch (err) {
      console.error(`Error submitting form for ${prefix}:`, err);
    }
  };

const initPincodeElement = (prefix: ContactFormPrefix) => {
  const pincodeEl = document.getElementById(
    `${prefix}-pincode`
  ) as HTMLInputElement;
  const errorEl = pincodeEl?.parentElement?.querySelector(
    '.error-message'
  ) as HTMLParagraphElement;

  pincodeEl?.addEventListener('blur', () => {
    resetStateAndCity(prefix);
    if (pincodeEl.checkValidity()) {
      hideError(pincodeEl, errorEl);
      processPincode(prefix, pincodeEl, errorEl);
    } else {
      showError(pincodeEl, errorEl, 'Please enter a 6 digit Pincode');
    }
  });
};

export const initContactForm = ({
  contactFormPrefix,
  formId,
}: {
  contactFormPrefix: ContactFormPrefix;
  formId: string;
}) => {
  const form = document.getElementById(
    `${contactFormPrefix}-${formId}`
  ) as HTMLFormElement;
  if (!form) return;

  initPincodeElement(contactFormPrefix);
  form.addEventListener('submit', getFormSubmitHandler(contactFormPrefix));
};

const getCmfModal = () =>
  document.getElementById('cmf-modal') as HTMLDivElement;

const showModalForm = () => {
  const modal = getCmfModal();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
};

const hideModalForm = () => {
  const modal = getCmfModal();
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  document.body.style.overflow = '';
};

const downloadBrochure = () => {
  window.open(
    'https://www.hindalco.com/upload/pdf/totalis-brochure.pdf',
    '_blank'
  );
};

const skipToDownloadBrochure = () => {
  if (getCmfModal() && getCmfModal().classList.contains('flex'))
    hideModalForm();
  downloadBrochure();
};

export function initContactFormTriggers() {
  const formTriggers = document.querySelectorAll('.contact-form-trigger');
  const closeTriggers = document.querySelectorAll(
    '.close-contact-form-trigger'
  );
  const brochureTriggers = document.querySelectorAll(
    '.skip-to-download-brochure'
  );

  formTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      showModalForm();
    });
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      hideModalForm();
    });
  });

  brochureTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      skipToDownloadBrochure();
    });
  });
}
