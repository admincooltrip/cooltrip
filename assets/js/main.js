/*=============== MENU AND HEADER LOGIC ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu on mobile link click
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Add blur to header on scroll
const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50
        ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass && scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else if (sectionsClass) {
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);


/*=============== BOOKING POPUP LOGIC ===============*/
const bookingPopup = document.getElementById('booking-popup');
const bookingClose = document.getElementById('booking-close');
const bookingForm = document.getElementById('booking-form');

// Buttons that can open the popup
const bookingButtons = [
    document.getElementById('booking-button'),
    document.getElementById('start-journey')
];

// Function to open the popup
const openPopup = (e) => {
    if (e) e.preventDefault();
    if (bookingPopup) bookingPopup.classList.add('active-popup');
};

// Function to close the popup
const closePopup = () => {
    if (bookingPopup) bookingPopup.classList.remove('active-popup');
};

// Add event listeners to all booking buttons
bookingButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', openPopup);
});

// Close popup with the 'X' button
if (bookingClose) {
    bookingClose.addEventListener('click', closePopup);
}

// Close popup when clicking outside of the content
if (bookingPopup) {
    bookingPopup.addEventListener('click', (e) => {
        if (e.target === bookingPopup) {
            closePopup();
        }
    });
}

// Handle Form Submission with Fetch
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = bookingForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;

        const formData = new FormData(bookingForm);

        fetch('../send_booking_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
             if (response.ok) {
                 alert('Thank you! Your booking request has been sent successfully.');
                 closePopup();
                 bookingForm.reset();
             } else {
                 alert('Sorry, there was an error sending your request.');
             }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, there was a network error. Please try again later.');
        })
        .finally(() => {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        });
    });
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container, .contact__container`);
sr.reveal(`.home__card`, { delay: 600, distance: '100px', interval: 100 });
sr.reveal(`.about__data, .join__image`, { origin: 'right' });
sr.reveal(`.about__image, .join__data`, { origin: 'left' });
sr.reveal(`.popular__card`, { interval: 200 });
sr.reveal('.services__grid .service-item', { interval: 150 });
sr.reveal('.faq__container .faq__item', { interval: 100 });