document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_PUBLIC_KEY')
    .then(() => {
      document.getElementById('form-status').textContent = 'Message sent!';
      this.reset();
    }, 
          (err) => {
      document.getElementById('form-status').textContent = 'Failed to send. Try again.';
    });
});
