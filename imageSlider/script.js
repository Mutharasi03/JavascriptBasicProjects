// const images=document.querySelector('.images')
let currentSlide = 1;
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dota = document.querySelectorAll(".dot");
showSlide(currentSlide)

function showSlide(currentSlide) {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (let i = 0; i < dota.length; i++) {
    dota[i].classList.remove("colorchange");
  }

  slide[currentSlide-1].style.display = "block";
  dota[currentSlide-1].classList.add("colorchange");
  
}

next.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide > slide.length) {
    currentSlide = 1;
  }
  showSlide(currentSlide);
});
prev.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slide.length;
  }
  showSlide(currentSlide);
});

function dot(n) {
  showSlide(currentSlide=n);
}
