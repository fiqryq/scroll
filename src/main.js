const button = document.querySelector('#button');
const text = document.querySelector('#sometext');

button.addEventListener(
  'click',
  () => (text.innerHTML = 'This text generated form button create.')
);
