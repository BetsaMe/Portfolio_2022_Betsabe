
// Scroll reveal animation
const sr= ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset: true
})

sr.reveal('.title');
sr.reveal('.presentation');
sr.reveal('.container-CTA', { delay: 900, origin:'bottom'});
sr.reveal('.paragraph', {delay:200, origin:'bottom'});


window.addEventListener('scroll', () => {  
  blocParallax();
});

//Parallax effect on blocs
function blocParallax(){ 
  var position = window.pageYOffset || document.documentElement.scrollTop;

  var greenElement = document.getElementById("green-bloc");
  var blueElement = document.getElementById("blue-bloc");

  greenElement.style.top = position * 0.8 + "px";
  blueElement.style.top = position * 0.6 + "px";
}


let images = Array.from(document.querySelectorAll(".img-container"));



//Changing background color

$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#projet01").position().top / 1.5 ) {
      $("#projet01").css('background', $("#projet01").attr("data-color"));    
    }
    else{
      $("#projet01").css('background', "#f4f4f4")
    };
    if ($(document).scrollTop() > $("#projet02").position().top / 1.5) {
      $("#projet02").css('background', $("#projet02").attr("data-color"))
    }
    else{
      $("#projet02").css('background', "#f4f4f4")
    };
    if ($(document).scrollTop() > $("#projet03").position().top / 1.4) {
      $("#projet03").css('background', $("#projet03").attr("data-color"))
    }
    else{
      $("#projet03").css('background', "#f4f4f4")
    };
    if ($(document).scrollTop() > $("#projet04").position().top / 1.3) {
      $("#projet04").css('background', $("#projet04").attr("data-color"))
    }
    else{
      $("#projet04").css('background', "#f4f4f4")
    }
   
 });