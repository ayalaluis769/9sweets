/* Navbar function */
function dropdownMenu() {
  var x = document.getElementById("dropdownClick");
  if (x.className === "topnav") {
    x.className += " responsive";
    // change topnav to topnav.responsive
  } else {
    x.className = "topnav";
  }
}

/* Slideshow function */
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sweetSlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}