
// var slideIndex = 1;
// convertSlide(slideIndex);
// function plusSlide(n) {
//   convertSlide(slideIndex += n)
// }
// function convertSlide(n) {
//   var i;
//   var slides = document.getElementsByClassName("image_single_big")
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex - 1].style.display = "block";
// }


//slide phần news
// var indexSlide = 1;
// changeSlide(indexSlide);
// function plusSlides(k) {
//   changeSlide(indexSlide += k)
// }
// function slideNews(k) {
//   changeSlide(indexSlide = k)
// }
// function changeSlide(k) {
//   var i;
//   var slideElement = document.getElementsByClassName("slide_event")
//   var classElement = document.getElementsByClassName("newschild")
//   if (k > classElement.length) {
//     indexSlide = 1;
//   }
//   if (k < 1) {
//     indexSlide = classElement.length;
//   }
//   for (i = 0; i < classElement.length; i++) {
//     classElement[i].style.display = "none";
//   }
//   for (var i = 0; i < slideElement.length; i++) {
//     slideElement[i].className = slideElement[i].className.replace(" active", " ")
//   }

//   classElement[indexSlide - 1].style.display = "block";
//   slideElement[indexSlide - 1].className += " active"
// }
// slide phần event
// var indexSlideEvent = 0;
// var indexSlideEventEnd = 3;
// var classElementEvent = document.getElementsByClassName("image_event_child")
// changeSlideEvent(indexSlideEvent, indexSlideEventEnd)
// function plusSlideEvent() {
//   var classElementEvent = document.getElementsByClassName("image_event_child")

//   indexSlideEvent += 1;

//   indexSlideEventEnd += 1;

//   if (indexSlideEventEnd >= classElementEvent.length) {
//     indexSlideEvent = 0;
//     indexSlideEventEnd = 3;
//   }
//   changeSlideEvent(indexSlideEvent, indexSlideEventEnd)

// }
// function changeSlideLeft() {
//   var classElementEvent = document.getElementsByClassName("image_event_child")
//   var slideEventChild = document.getElementsByClassName(".class_event_child_end")
//   indexSlideEvent -= 1;


//   indexSlideEventEnd -= 1;

//   if (indexSlideEvent < 0) {
//     indexSlideEventEnd = 5;
//     indexSlideEvent = 2;
//   }
//   changeSlideEvent(indexSlideEvent, indexSlideEventEnd)
// }

// function changeSlideEvent(start, end) {
//   var classElementEvent = document.getElementsByClassName("image_event_child")
//   var tio = document.getElementsByClassName("slide_event_child_end")

//   for (var i = 0; i < classElementEvent.length; i++) {
//     classElementEvent[i].style.display = "none";
//   }
//   for (var i = 0; i < classElementEvent.length; i++) {
//     classElementEvent[i].className = classElementEvent[i].className.replace(" active", "")
//   }

//   for (var i = start; i <= end; i++) {
//     classElementEvent[i].className += " active"

//   }

//   for (var i = 0; i < classElementEvent.length; i++) {
//     if (classElementEvent[i].className == 'image_event_child active') {
//       classElementEvent[i].style.display = "block"

//     }
//   }


//   tio[0].style.backgroundColor = "rgb(129, 127, 127)";
//   tio[1].style.backgroundColor = "rgb(129, 127, 127)";

//   if (end > 4) {
//     tio[1].style.backgroundColor = 'blue'
//   } else {
//     tio[0].style.backgroundColor = 'blue'
//   }

// }
//slide project
// var indexProject = 1;
// changeProject(indexProject);
// function changeProjectChild(m) {
//   changeProject(indexProject += m)
// }
// function changeProject(m) {
//   var elementProject = document.getElementsByClassName("container_project_final")

//   if (m > elementProject.length) {
//     indexProject = 1;
//   }
//   if (m < 1) {
//     indexProject = elementProject.length;
//   }

//   for (var i = 0; i < elementProject.length; i++) {
//     elementProject[i].style.display = "none";
//   }
//   elementProject[indexProject - 1].style.display = "flex"
// }

//slide partner
// var indexSlidePartnerStart = 3;
// var indexSlidePartnerEnd = 8;
// changeSlidePartner(indexSlidePartnerStart, indexSlidePartnerEnd)
// function plusSlidePartner() {
//   var partnerElement = document.getElementsByClassName("company_partner_child")
//   indexSlidePartnerStart += 1;

//   indexSlidePartnerEnd += 1;

//   if (indexSlidePartnerEnd >= partnerElement.length) {
//     indexSlidePartnerStart = 3;
//     indexSlidePartnerEnd = 8;
//   }

//   changeSlidePartner(indexSlidePartnerStart, indexSlidePartnerEnd)
// }
// function plusSlidePartnerLeft() {
//   var partnerElement = document.getElementsByClassName("company_partner_child")
//   indexSlidePartnerStart -= 1;
//   indexSlidePartnerEnd -= 1;
//   if (indexSlidePartnerStart < 0) {
//     indexSlidePartnerStart = 4;
//     indexSlidePartnerEnd = 9;
//   }
//   changeSlidePartner(indexSlidePartnerStart, indexSlidePartnerEnd)

// }
// function changeSlidePartner(startPartner, endPartner) {
//   var partnerElement = document.getElementsByClassName("company_partner_child")

//   for (var i = 0; i < partnerElement.length; i++) {
//     partnerElement[i].style.display = "none"
//   }
//   for (var i = 0; i < partnerElement.length; i++) {
//     partnerElement[i].className = partnerElement[i].className.replace(" active", "")
//   }
//   for (var i = startPartner; i <= endPartner; i++) {
//     partnerElement[i].className += " active"

//   }

//   for (var i = 0; i < partnerElement.length; i++) {
//     if (partnerElement[i].className == 'company_partner_child active') {
//       partnerElement[i].style.display = "block"

//     }
//   }
// }
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 10.7305375, lng:106.6447933 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
