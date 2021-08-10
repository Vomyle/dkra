
// slide phần event
var indexSlideEvent = 0;
var indexSlideEventEnd = 3;
var classElementEvent = document.getElementsByClassName("image_event_child")
changeSlideEvent(indexSlideEvent, indexSlideEventEnd)
function plusSlideEvent() {
  var classElementEvent = document.getElementsByClassName("image_event_child")

  indexSlideEvent += 1;

  indexSlideEventEnd += 1;

  if (indexSlideEventEnd >= classElementEvent.length) {
    indexSlideEvent = 0;
    indexSlideEventEnd = 3;
  }
  changeSlideEvent(indexSlideEvent, indexSlideEventEnd)

}
function changeSlideLeft() {
  var classElementEvent = document.getElementsByClassName("image_event_child")
  var slideEventChild = document.getElementsByClassName(".class_event_child_end")
  indexSlideEvent -= 1;


  indexSlideEventEnd -= 1;

  if (indexSlideEvent < 0) {
    indexSlideEventEnd = 5;
    indexSlideEvent = 2;
  }
  changeSlideEvent(indexSlideEvent, indexSlideEventEnd)
}

function changeSlideEvent(start, end) {
  var classElementEvent = document.getElementsByClassName("image_event_child")
  var tio = document.getElementsByClassName("slide_event_child_end")
console.log(tio)
  for (var i = 0; i < classElementEvent.length; i++) {
    classElementEvent[i].style.display = "none";
  }
  for (var i = 0; i < classElementEvent.length; i++) {
    classElementEvent[i].className = classElementEvent[i].className.replace(" active", "")
  }

  for (var i = start; i <= end; i++) {
    classElementEvent[i].className += " active"

  }
 
  for (var i = 0; i < classElementEvent.length; i++) {
    if (classElementEvent[i].className == 'image_event_child active') {
      classElementEvent[i].style.display = "block"
    }
  }

//  for (var i = 0; i < tio.length; i++) {
//     tio[i].className = tio[i].className.replace(" active", "")
//   }
//   for (var i = 0; i <= tio.length; i++) {
//     tio[i].className += " active"
//   }
  
  tio[0].style.backgroundColor = "rgb(129, 127, 127)";
  tio[1].style.backgroundColor = "rgb(129, 127, 127)";

  if (end > 4) {
    tio[1].style.backgroundColor = 'rgb(34, 34, 34)'
  } else {
    tio[0].style.backgroundColor = 'rgb(34, 34, 34)'
  }

}
//slide project
var indexProject = 1;
changeProject(indexProject);
function changeProjectChild(m) {
  changeProject(indexProject += m)
}
function changeProject(m) {
  var elementProject = document.getElementsByClassName("container_project_final")
  console.log(elementProject)
  if (m > elementProject.length) {
    indexProject = 1;
  }
  if (m < 1) {
    indexProject = elementProject.length;
  }

  for (var i = 0; i < elementProject.length; i++) {
    elementProject[i].style.display = "none";
  }
  elementProject[indexProject - 1].style.display = "flex"
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 10.7305375, lng: 106.6447933 };
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
