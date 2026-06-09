<<<<<<< HEAD
// typing animation

const text = [
"AI Creator",
"Web Developer",
"CSE Student",
"Tech Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}
=======
function toggleMenu(){

document.getElementById("navLinks").classList.toggle("active")
>>>>>>> f7bbfaa31db4e80f1c1edd223d345e6ded6970a2

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
}

<<<<<<< HEAD
setTimeout(type,120);

})();


// particles background

particlesJS("particles-js", {
particles: {
number: { value: 80 },
size: { value: 3 },
move: { speed: 2 },
line_linked: { enable: true },
},
});
=======

function toggleMode(){

document.body.classList.toggle("light")

}
>>>>>>> f7bbfaa31db4e80f1c1edd223d345e6ded6970a2
