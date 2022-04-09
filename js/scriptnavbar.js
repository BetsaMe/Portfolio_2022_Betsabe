window.addEventListener('scroll', () => { showingNavbar()});


function showingNavbar(){ 
  
    var navbar = document.querySelector('header')
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  }