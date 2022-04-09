
// Scroll reveal animation
const sr= ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset: true
})

sr.reveal('.title');
sr.reveal('.presentation', { delay: 700 });
// sr.reveal('.green-bloc', { delay: 700 });
sr.reveal('.container-CTA', { delay: 900, origin:'bottom'});


window.addEventListener('scroll', () => {  
  blocParallax();
});

//Parallax effect on blocs
function blocParallax(){ 
  var posicion = window.pageYOffset || document.documentElement.scrollTop;

  var elemento1 = document.getElementById("green-bloc");
  var elemento2 = document.getElementById("blue-bloc");

  elemento1.style.top = posicion * 0.4 + "px";
  elemento2.style.top = posicion * 0.6 + "px";
}


let images = Array.from(document.querySelectorAll(".img-container"));
console.log(images)