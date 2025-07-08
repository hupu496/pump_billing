const scriptURL = 'https://script.google.com/macros/s/AKfycby3AAm4cn5hzR3LAzkCqE76QfnFguza_VdMEIjo9WBWyakIvnSL-Ujh3RaGUNNhAtDkbQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})