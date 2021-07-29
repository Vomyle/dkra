
var slideIndex=1;
convertSlide(slideIndex);
function plusSlide(n) {
  convertSlide(slideIndex += n)
}
function convertSlide(n) {
  var i;
  var slides = document.getElementsByClassName("image_single_big")
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

 
var indexSlide = 1;
changeSlide(indexSlide);
function plusSlides(k) {
  changeSlide(indexSlide += k)
}
function slideNews(k) {
  changeSlide(indexSlide = k)
}
function changeSlide(k) {
  var i;
  var slideElement = document.getElementsByClassName("slide_event")
  var classElement = document.getElementsByClassName("newschild")
  if (k > classElement.length) { 
    indexSlide = 1;
  }
  if (k < 1) {
    indexSlide = classElement.length;
  }
  for (i = 0; i < classElement.length; i++) {
    classElement[i].style.display = "none";
  }
  for (var i = 0; i < slideElement.length; i++) {
    slideElement[i].className = slideElement[i].className.replace(" active", " ")
  }

  classElement[indexSlide-1].style.display = "block";
  slideElement[indexSlide-1].className += " active"
}
var indexstart=0;
var indexend=3;
var indexEvent=1;
slideEvent(indexEvent)
function plusSlideEvent(h){
slideEvent(indexEvent+=h)
}
function slideEvent(h){
  var classEvent=document.getElementsByClassName("image_event_child")
if(h > classEvent.length){
  indexEvent=1;
}
if(h < 1){
  indexEvent=classEvent.length
}
for(var i=indexend+1;i < classEvent.length;i++){
  classEvent[i].style.display="none"
}
classEvent[indexEvent-1].style.display="block"
}

