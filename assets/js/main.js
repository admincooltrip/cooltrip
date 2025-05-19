/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset:true // Animations repeat
})

/*=============== BOOKING POPUP ===============*/
const bookingPopup = document.getElementById('booking-popup');
const bookingButton = document.getElementById('booking-button');
const bookingClose = document.getElementById('booking-close');

/* Show popup */
if(bookingButton) {
   bookingButton.addEventListener('click', () => {
      bookingPopup.classList.add('active-popup');
   });
}

/* Close popup */
if(bookingClose) {
   bookingClose.addEventListener('click', () => {
      bookingPopup.classList.remove('active-popup');
   });
}

/* Close popup when clicking outside */
bookingPopup.addEventListener('click', (e) => {
   if(e.target === bookingPopup) {
      bookingPopup.classList.remove('active-popup');
   }
});

/* Form submission handling */
const bookingForm = document.querySelector('.booking__popup-form');
if(bookingForm) {
   bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Here you would normally send the form data to your server
      // For demo purposes, we'll just show an alert and close the popup
      alert('Booking request received! We will contact you shortly.');
      bookingPopup.classList.remove('active-popup');
      bookingForm.reset();
   });
}

/*=============== BOOKING POPUP ===============*/
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const bookingPopup = document.getElementById('booking-popup');
    const bookingClose = document.getElementById('booking-close');
    const startJourneyBtn = document.getElementById('start-journey');
  
    // Show popup when Start Journey is clicked
    if (startJourneyBtn) {
      startJourneyBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        // Add class to show popup
        bookingPopup.classList.add('active-popup');
        
        // Optional: Add animation class
        document.querySelector('.booking__popup-content').classList.add('animate-popup');
      });
    }
  
    // Close popup when X is clicked
    if (bookingClose) {
      bookingClose.addEventListener('click', function() {
        bookingPopup.classList.remove('active-popup');
      });
    }
  
    // Close popup when clicking outside content
    bookingPopup.addEventListener('click', function(e) {
      if (e.target === bookingPopup) {
        bookingPopup.classList.remove('active-popup');
      }
    });
  
    // Handle form submission
    const bookingForm = document.querySelector('.booking__popup-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally send the form data
        alert('Thank you! We will contact you shortly to plan your journey.');
        bookingPopup.classList.remove('active-popup');
        this.reset();
      });
    }
  });
  
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 })
sr.reveal(`.about__data, .join__image`, { origin: 'right' })
sr.reveal(`.about__image, .join__data`, { origin: 'left' })
sr.reveal(`.popular__card`, { interval: 200 })
// Add these to your existing ScrollReveal initialization
sr.reveal('.about-hero__data', { delay: 200 });
sr.reveal('.mission__data, .mission__image', { interval: 100 });
sr.reveal('.team__member', { interval: 200 });
sr.reveal('.values__item', { interval: 150 });