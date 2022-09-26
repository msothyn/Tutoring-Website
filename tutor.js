const webmenu = document.querySelector('#mobile-menu')
const webmenulinks = document.querySelector('.nav__menu')

// Showing the menu for mobile display

const mobMenu = () => {
    webmenu.classList.toggle('is-active')
    webmenulinks.classList.toggle('active')
}

webmenu.addEventListener('click',mobMenu)

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);