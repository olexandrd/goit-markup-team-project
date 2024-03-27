import tippy from 'tippy.js/dist/tippy.esm';
import 'tippy.js/dist/tippy.css';

function validatePhone(phone) {
  const re = /^\+?(\d{10}|[0-9()-]{12,17})$/;
  return re.test(phone);
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function validateRequired(input) {
  return input.trim() !== '';
}

function toggleInvalidClass(input, isValid) {
  if (isValid) {
    input.classList.remove(INVALID_CLASS);
  } else {
    input.classList.add(INVALID_CLASS);
  }
}

function validate(formInput) {
  const message = formInput.validate();
  toggleInvalidClass(formInput.input, message === null);
  if (message) {
    formInput.setInfoContent(message);
  }
}

const INVALID_CLASS = 'text-input--invalid';

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const commentInput = document.getElementById('comment');

class FormInput {
  constructor(input, validate) {
    this.input = input;
    this.isDirty = false;
    this.info = tippy(input.nextElementSibling);
    this.validate = () => {
      if (!this.isDirty) {
        return null;
      }
      return validate();
    };
  }

  setInfoContent(content) {
    this.info.setContent(content);
  }
}

const formInputs = [
  new FormInput(nameInput, () => {
    if (!validateRequired(nameInput.value)) {
      return 'The field is required';
    }
    return null;
  }),
  new FormInput(emailInput, () => {
    if (!validateRequired(nameInput.value)) {
      return 'The field is required';
    }
    if (!validateEmail(emailInput.value)) {
      return 'Invalid email address';
    }
    return null;
  }),
  new FormInput(phoneInput, () => {
    if (!validateRequired(phoneInput.value)) {
      return 'The field is required';
    }
    if (!validatePhone(phoneInput.value)) {
      return 'Invalid phone number';
    }
    return null;
  }),
  new FormInput(commentInput, () => {
    if (!validateRequired(commentInput.value)) {
      return 'The field is required';
    }
    return null;
  }),
];

formInputs.forEach(formInput => {
  formInput.input.addEventListener('input', () => {
    formInput.isDirty = true;
  });

  formInput.input.addEventListener('blur', () => {
    validate(formInput);
  });

  formInput.input.addEventListener('focus', () => {
    toggleInvalidClass(formInput.input, true);
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();

  formInputs.forEach(formInput => {
    formInput.isDirty = true;
  });

  formInputs.forEach(formInput => {
    validate(formInput);
  });

  const isFormValid = !document.querySelector(`.${INVALID_CLASS}`);

  if (isFormValid) {
    alert('Form submitted');
  }
});

export {};
