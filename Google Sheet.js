const scriptURL = 'https://script.google.com/macros/s/AKfycbxvr5uYemGCFkoSSaWsc5QMZmI2jUbmJ2j0VU6DpaIJs_bBvQQw6Qy1scWaWNPGGQ8QSg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})