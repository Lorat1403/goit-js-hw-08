import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCAL_STORAGE_KEYS = "feedback-form-state";
console.log(form.elements.email);

let formData = {};

form.addEventListener("input", throttle(saveMessage, 500));
form.addEventListener("submit", updData);

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

 let savedData = localStorage.getItem(LOCAL_STORAGE_KEYS);
 savedData = JSON.parse(savedData);
 
  if (savedData) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;

  };
      
}