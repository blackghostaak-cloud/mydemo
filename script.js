// DARK MODE

const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
document.body.classList.toggle("dark");
};


// TYPING EFFECT

const roles = [
"Web Developer",
"JavaScript Learner",
"Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

function type(){

const element = document.getElementById("typing");

if(charIndex < roles[roleIndex].length){

element.textContent += roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}
else{

setTimeout(()=>{

element.textContent="";

charIndex=0;

roleIndex=(roleIndex+1)%roles.length;

type();

},1500);

}

}

type();


// FOOTER YEAR

document.getElementById("year").textContent = new Date().getFullYear();