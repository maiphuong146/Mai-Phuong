/* Reveal Sections on Scroll (stagger animation) */

const reveals = document.querySelectorAll(".reveal");

function reveal() {

const windowHeight = window.innerHeight;

reveals.forEach((section, index) => {

const elementTop = section.getBoundingClientRect().top;
const visible = 120;

if (elementTop < windowHeight - visible) {

setTimeout(() => {
section.classList.add("active");
}, index * 200); // hiện lần lượt

} else {

section.classList.remove("active");

}

});

}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);



/* Navbar Hide / Show */

const navbar = document.querySelector(".navbar");
let isAtTop = true;

window.addEventListener("scroll", () => {

if (window.scrollY <= 50) {
navbar.style.top = "0";
isAtTop = true;
} else {
navbar.style.top = "-80px";
isAtTop = false;
}

});

document.addEventListener("mousemove", (e) => {

if (e.clientY < 60) {
navbar.style.top = "0";
} else if (!isAtTop) {
navbar.style.top = "-80px";
}

});


/* Skills Expand */

const skills = document.querySelectorAll(".skill-card");

skills.forEach(card => {

card.addEventListener("click", () => {
card.classList.toggle("active");
});

});


/* Projects Expand */

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

card.addEventListener("click", () => {
card.classList.toggle("active");
});

});
