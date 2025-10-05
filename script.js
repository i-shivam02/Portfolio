// Typing Effect with blinking cursor
const typingText = "I build modern and responsive websites and web applications.";
const typingElement = document.querySelector(".typing");
let charIndex = 0;

function type() {
  if (charIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // adjust speed
  }
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Scroll Animations
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) section.classList.add("active");
  });
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// EmailJS Contact Form
emailjs.init("YOUR_USER_ID"); // replace with your EmailJS user ID
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', this)
    .then(() => { alert("Message sent successfully!"); this.reset(); })
    .catch(() => { alert("Failed to send message."); });
});
