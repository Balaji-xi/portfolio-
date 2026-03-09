function reveal(){

let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let visible=150;

if(elementTop < windowHeight-visible){
reveals[i].classList.add("active");
}

}

}

window.addEventListener("scroll",reveal);