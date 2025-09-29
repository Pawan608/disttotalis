import type { PostalPincodeResponse } from "../types";

type ContactFormPrefix = "cmf" | "cpf";

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
          s === selectedState ? "selected" : ""
        }>${s}</option>`
    )
    .join("");

  cityInput.innerHTML = cities
    .map(
      (c) =>
        `<option value="${c}" ${
          c === selectedCity ? "selected" : ""
        }>${c}</option>`
    )
    .join("");
};

const showError = (
  input: HTMLInputElement,
  el: HTMLParagraphElement,
  message: string
) => {
  input.dataset.error = "true";
  el.textContent = message;
  el.classList.remove("hidden");
  input.focus();
};

const hideError = (input: HTMLInputElement, el: HTMLParagraphElement) => {
  input.dataset.error = "false";
  el.textContent = "";
  el.classList.add("hidden");
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

    if (data.Status === "Success") {
      fillStateAndCity(prefix, data);
    } else {
      showError(pincodeEl, errorEl, "Invalid Pincode");
    }
  } catch {
    showError(pincodeEl, errorEl, "Unable to validate Pincode");
  }
};

const showNotification = (message: string, type: "success" | "error") => {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg z-50 ${
    type === "success"
      ? "bg-green-100 border-green-500 text-green-800"
      : "bg-red-100 border-red-500 text-red-800"
  } border-l-4 transition-all duration-300`;

  notification.innerHTML = `
    <div class="flex items-start">
      <div class="flex-1">
        <p class="font-semibold">${
          type === "success" ? "Success!" : "Error!"
        }</p>
        <p class="text-sm mt-1">${message}</p>
      </div>
      <button 
        type="button" 
        class="ml-4 text-gray-400 hover:text-gray-600"
        onclick="this.parentElement.parentElement.remove()"
      >
        ×
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 5000);
};

const extractFormData = (formData: FormData) => {
  const fullName = (formData.get("fullName") as string) || "";
  const nameParts = fullName.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return {
    First_Name: firstName,
    Last_Name: lastName,
    Email: formData.get("email") as string,
    Mobile: formData.get("whatsappNumber") as string,
    Zip_Code: formData.get("pincode") as string,
    City: formData.get("city") as string,
    State_Name: formData.get("state") as string,
    User_Persona: formData.get("role") as string,
    Requirement: [formData.get("intent") as string],
    Price_Bracket: (formData.get("priceBracket") as string) || "",
  };
};

const getFormSubmitHandler =
  (prefix: ContactFormPrefix) => async (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const submitButton = form.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;

    // Disable submit button and show loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Submitting...";
    }

    try {
      // Extract and format data for Totalis API
      const totalisData = extractFormData(formData);

      // Validate required fields
      if (
        !totalisData.First_Name ||
        !totalisData.Email ||
        !totalisData.Mobile
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Submit to contact API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(totalisData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Show success state
        getFormContainer(prefix)?.classList.add("hidden");
        getSuccessContainer(prefix)?.classList.remove("hidden");

        // Show success notification
        showNotification(
          result.message ||
            "Your form has been submitted successfully. We will contact you soon.",
          "success"
        );

        // Reset form
        form.reset();
        resetStateAndCity(prefix);
      } else {
        throw new Error(
          result.error ||
            result.details ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(`Error submitting form for ${prefix}:`, err);

      // Show error notification
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection and try again.";

      showNotification(errorMessage, "error");
    } finally {
      // Re-enable submit button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    }
  };

const initPincodeElement = (prefix: ContactFormPrefix) => {
  const pincodeEl = document.getElementById(
    `${prefix}-pincode`
  ) as HTMLInputElement;
  const errorEl = pincodeEl?.parentElement?.querySelector(
    ".error-message"
  ) as HTMLParagraphElement;

  pincodeEl?.addEventListener("blur", () => {
    resetStateAndCity(prefix);
    if (pincodeEl.checkValidity()) {
      hideError(pincodeEl, errorEl);
      processPincode(prefix, pincodeEl, errorEl);
    } else {
      showError(pincodeEl, errorEl, "Please enter a 6 digit Pincode");
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
  form.addEventListener("submit", getFormSubmitHandler(contactFormPrefix));
};

const getCmfModal = () =>
  document.getElementById("cmf-modal") as HTMLDivElement;

const showModalForm = () => {
  const modal = getCmfModal();
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

const hideModalForm = () => {
  const modal = getCmfModal();
  modal.classList.remove("flex");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
};

const downloadBrochure = () => {
  window.open(
    "https://www.hindalco.com/upload/pdf/totalis-brochure.pdf",
    "_blank"
  );
};

const skipToDownloadBrochure = () => {
  if (getCmfModal() && getCmfModal().classList.contains("flex"))
    hideModalForm();
  downloadBrochure();
};

export function initContactFormTriggers() {
  const formTriggers = document.querySelectorAll(".contact-form-trigger");
  const closeTriggers = document.querySelectorAll(
    ".close-contact-form-trigger"
  );
  const brochureTriggers = document.querySelectorAll(
    ".skip-to-download-brochure"
  );

  formTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      showModalForm();
    });
  });

  closeTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      hideModalForm();
    });
  });

  brochureTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      skipToDownloadBrochure();
    });
  });
}
