const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
  });
}

const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');

if (form && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thank you! This demonstration form does not send or store your message.';
    form.reset();
  });
}
