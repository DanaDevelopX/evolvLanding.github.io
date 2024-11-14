document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailRegex.test(email)) {
      const button = this.querySelector('.submit-btn');
      button.innerHTML = '<i class="fas fa-check"></i>';
      button.style.backgroundColor = '#4CAF50';
      
      setTimeout(() => {
          this.reset();
          button.innerHTML = 'Subscribe';
          button.style.backgroundColor = 'var(--primary-glow)';
      }, 2000);
  } else {
      const input = this.querySelector('.email-input');
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
  }
});

document.querySelector('.logo-video').addEventListener('loadeddata', function() {
  this.style.opacity = '1';
});
