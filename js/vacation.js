"use strict"; 

const navLinks = document.querySelectorAll(".nav-link")
const hamburger = document.querySelector(".hamburger")
const collapse = document.querySelector(".collapse")

hamburger.addEventListener("click", function () {
  collapse.classList.toggle("active")
  hamburger.classList.toggle("close")

})

navLinks.forEach(n => n.addEventListener("click", () => {
  collapse.classList.remove("active")
  hamburger.classList.toggle("close")
}))


// click on nav link then that nav link looks active

navLinks.forEach(function (navBtn) {
  navBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (screen.width > 767) {
      if (!this.classList.contains('active')) {
        navLinks.forEach(function (aTag) {
          aTag.classList.remove('active');
        });
        this.classList.add('active');
      }
    }
  });
});


// nav click by id come on screen

document.querySelectorAll("nav ul li a").forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let top = this.getAttribute("href");
    let targetElement = document.querySelector(top);
    let hehe = targetElement.offsetTop;

    if (screen.width > 767) {
      window.scrollTo({
        top: hehe - 76,
        behavior: "smooth"
      });
    }
    else if (screen.width < 767) {
      window.scrollTo({
        top: hehe - 45,
        behavior: "smooth"
      });
    }
  });
});

// slider image on click

const slider = document.querySelector(".slider")
const slides = document.querySelectorAll(".slide")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

let slideIndex = 0 ;

slides[slideIndex].classList.add("slide-active")

prev.addEventListener("click" , function(){
  slides[slideIndex].classList.remove("slide-active")

  slideIndex = ( slideIndex === 0 )? slides.length - 1 : slideIndex - 1 ;
  slides[slideIndex].classList.add("slide-active") 
  slider.style.transform = `translateX(-${slideIndex * 100}%)` ;
})

next.addEventListener("click" , function(){
  slides[slideIndex].classList.remove("slide-active")

  slideIndex = ( slideIndex === slides.length - 1)? 0 : slideIndex + 1 ;
  slides[slideIndex].classList.add("slide-active") 
  slider.style.transform = `translateX(-${slideIndex * 100}%)` ;
})









