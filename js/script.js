document.addEventListener(
  'DOMContentLoaded',
  function () {
    // Flickity Start
    const elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
      // options
      cellAlign: 'left',
      contain: true
    });

    var flkty = new Flickity('.main-carousel', {
      // options
    });

    // Start cart counter
    let counter = 0;
    // Get elements
    const buttons = document.querySelectorAll('.add-product');
    const cartCounter = document.getElementsByClassName('cart-counter');
    const navLinks = document.querySelectorAll('.nav-link');
    const formEmail = document.querySelector('.form-email');

    // Functions
    function handleCartCounter() {
      // Add +1 counter
      counter++;
      if (counter > 0) {
        cartCounter[0].textContent = counter;
        // Display the counter
        cartCounter[0].classList.remove('cart-counter-noshow');
        cartCounter[0].classList.add('cart-counter-show');
      }
    }

    function resetCounter() {
      // Set counter to 0
      counter = 0;
      cartCounter[0].textContent = counter;
      // Hide counter
      cartCounter[0].classList.add('cart-counter-noshow');
      cartCounter[0].classList.remove('cart-counter-show');
    }

    function handleLinks(e) {
      // Prevent default behaviour
      e.preventDefault();
      // Get clicked element
      let path = e.path[0].getAttribute('href');
      // Get Y value of the element
      const y = document.getElementById(path).getBoundingClientRect().top;
      // Get size of the header
      var headerSize = document.getElementById('header').offsetHeight;
      // Scroll to element
      window.scrollTo(0, y + window.scrollY - headerSize, 'smooth');
    }

    // Validate e-mail (https://tylermcginnis.com/validate-email-address-javascript/)
    function emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Handle e-mail on submit

    function handleEmail(e) {
      e.preventDefault();
      const emailSent = e.target.elements[0].value;
      if (emailIsValid(emailSent)) {
        alert('Thanks for your subscription! :D');
      } else {
        alert('Your e-mail is incorrect. Try again :(');
      }
    }

    // Add all event listeners
    function start() {
      cartCounter[0].addEventListener('click', () => {
        resetCounter();
      });
      buttons.forEach(element => {
        element.addEventListener('click', () => {
          handleCartCounter();
        });
      });
      navLinks.forEach(element => {
        element.addEventListener('click', e => {
          handleLinks(e);
        });
      });
      formEmail.addEventListener('submit', e => {
        handleEmail(e);
      });
    }

    start();
  },
  false
);
