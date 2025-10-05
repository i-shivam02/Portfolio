// Typing Effect
const text = "I build modern and responsive websites and web applications.";
let index = 0;
const typingElement = document.querySelector(".typing");
function type() {
  if(index < text.length){
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Scroll Animations
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if(top < trigger){
      section.classList.add("active");
    }
  });
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// EmailJS Contact Form
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => { alert("Message sent successfully!"); this.reset(); })
    .catch(() => { alert("Failed to send message."); });
});
