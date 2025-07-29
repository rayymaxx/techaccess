// Theme toggle
document.getElementById('modeToggle').addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
});

// Newsletter form
const subForm = document.getElementById('subscribeForm');
if (subForm) {
  subForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('formMessage').innerText = "🎉 Thanks for subscribing!";
    subForm.reset();
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('contactMessage').innerText = "✅ Message sent! We'll get back to you soon.";
    contactForm.reset();
  });
}
