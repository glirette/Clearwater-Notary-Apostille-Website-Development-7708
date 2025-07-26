// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
menuToggle.addEventListener('click', function() {
navMenu.classList.toggle('active');
// Animate hamburger to X
const spans = menuToggle.querySelectorAll('span');
if (navMenu.classList.contains('active')) {
spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
spans[1].style.opacity = '0';
spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
} else {
spans[0].style.transform = 'none';
spans[1].style.opacity = '1';
spans[2].style.transform = 'none';
}
});
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', function() {
if (navMenu) {
navMenu.classList.remove('active');
if (menuToggle) {
const spans = menuToggle.querySelectorAll('span');
spans[0].style.transform = 'none';
spans[1].style.opacity = '1';
spans[2].style.transform = 'none';
}
}
});
});

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
window.addEventListener('scroll', function() {
if (window.scrollY > 100) {
header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
header.style.backdropFilter = 'blur(10px)';
header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
} else {
header.style.backgroundColor = 'white';
header.style.backdropFilter = 'none';
header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
}
});
}

// Process Tabs
const tabButtons = document.querySelectorAll('.tab-button');
if (tabButtons.length > 0) {
tabButtons.forEach(button => {
button.addEventListener('click', function() {
// Get the tab to show
const tabId = this.getAttribute('data-tab') + '-tab';

// Remove active class from all buttons and tabs
tabButtons.forEach(btn => btn.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

// Add active class to clicked button and corresponding tab
this.classList.add('active');
const tabElement = document.getElementById(tabId);
if (tabElement) {
tabElement.classList.add('active');
}
});
});
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const href = this.getAttribute('href');
// Skip if href is just # or not an internal anchor
if (href === '#' || !href.startsWith('#')) return;

e.preventDefault();
const target = document.querySelector(href);
if (target) {
const headerHeight = 80; // Height of fixed header
const elementPosition = target.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

window.scrollTo({
top: offsetPosition,
behavior: 'smooth'
});
}
});
});

// Animate elements when they come into view
const animateOnScroll = function() {
const elements = document.querySelectorAll('.service-card, .step, .pricing-card, .contact-method, .platform-feature, .benefit-card');
elements.forEach(element => {
const position = element.getBoundingClientRect();
// If element is in viewport
if (position.top < window.innerHeight && position.bottom >= 0) {
element.style.transform = element.classList.contains('featured') ? 'scale(1.05)' : 'translateY(0)';
element.style.opacity = '1';
}
});
};

// Add initial styles to elements
const elementsToAnimate = document.querySelectorAll('.service-card, .step, .pricing-card, .contact-method, .platform-feature, .benefit-card');
elementsToAnimate.forEach(element => {
element.style.transition = 'all 0.5s ease';
element.style.opacity = '0';
element.style.transform = 'translateY(30px)';
});

// Run animation check on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// City page functionality (if on city page)
if (window.location.pathname.includes('city.html')) {
const urlParams = new URLSearchParams(window.location.search);
const cityParam = urlParams.get('city');

if (cityParam) {
const cityName = cityParam.replace(/-/g, ' ')
.replace(/\b\w/g, l => l.toUpperCase());

document.title = `${cityName} FL Apostille Services | The Florida Apostille`;

// Update city name in content with NO SPECIAL STYLING to look natural
document.querySelectorAll('.city-name').forEach(el => {
// Remove any special styling to make it look completely natural
el.style.color = 'inherit';
el.style.fontWeight = 'inherit';
el.style.fontStyle = 'inherit';
el.style.textDecoration = 'inherit';
el.style.background = 'inherit';
el.style.border = 'inherit';
el.style.textShadow = 'inherit';
el.style.boxShadow = 'inherit';
el.textContent = cityName;
});

// Update city-specific content if needed
document.querySelectorAll('.city-content').forEach(el => {
el.textContent = el.textContent.replace('[CITY]', cityName);
});
}
}

// Track CTA clicks for analytics
const trackEvent = function(eventName, properties = {}) {
// This would connect to an analytics service in production
console.log(`Event: ${eventName}`, properties);
};

document.querySelectorAll('.primary-button, .service-button, .gradient-button, .pricing-button, .platform-button, .why-choose-button').forEach(button => {
button.addEventListener('click', function() {
trackEvent('CTA Click', {
text: this.textContent,
url: this.href,
location: this.closest('section')?.className || 'unknown'
});
});
});
});