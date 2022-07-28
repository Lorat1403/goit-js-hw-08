import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEYS = 'feedback-form-state';
console.log(form.elements.email);

let formData = {};

form.addEventListener('input', throttle(saveMessage, 500));
form.addEventListener('submit', updData);

restoreData();

function saveMessage(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEYS, JSON.stringify(formData));
}

function updData(evt) {
  evt.preventDefault();
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS));
  console.log(savedData);
  form.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEYS);
  formData = {};
}
function restoreData() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEYS);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    const elements = form.querySelectorAll('[name]');
    for (const element of elements) {
      if (Object.keys(parsedData).includes(element.name)) {
        element.value = parsedData[element.name];
        formData[element.name] = parsedData[element.name];
      }
    }
  }
  return;
}
