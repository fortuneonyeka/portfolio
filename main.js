const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
    form.submit();
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
});