var indexstar = 0;
var indexend = 3;
chang(indexstar, indexend);
function plusSlide() {
    var classElement = document.getElementsByClassName("shared")


    indexstar -= 1;

    indexend -= 1;

    if (indexstar < 0) {
        indexstar = 0;
        indexend = 3;
    }
    chang(indexstar, indexend);

}
function plusSlideRight() {
    var classElement = document.getElementsByClassName("shared")
    indexstar += 1;

    indexend += 1;
    if (indexend > classElement.length) {

        indexstar = 7;
        indexend = 10;

    }
    chang(indexstar, indexend);

}
function slide_one() {
    var classElement = document.getElementsByClassName("shared")
    indexstar = 0;
    indexend = 3;
    chang(indexstar, indexend);
}
function slide_two() {
    var classElement = document.getElementsByClassName("shared")
    indexstar = 3;
    indexend = 6;
    chang(indexstar, indexend);
}
function slide_three() {
    var classElement = document.getElementsByClassName("shared")
    indexstar = 6;
    indexend = 9;
    chang(indexstar, indexend);
}
function slide_four() {
    var classElement = document.getElementsByClassName("shared")
    indexstar = 7;
    indexend = 10;
    chang(indexstar, indexend);
}
function chang(star, end) {
    var classElement = document.getElementsByClassName("shared")
    var io = document.getElementsByClassName("ii")
    var slide = document.getElementsByClassName("slide-page")
    for (var i = 0; i < classElement.length; i++) {
        classElement[i].style.display = "none";
    }
    for (var i = 0; i < classElement.length; i++) {
        classElement[i].className = classElement[i].className.replace(" active", "")
    }
    for (var i = star; i < end; i++) {
        classElement[i].className += " active"

    }
    for (var i = 0; i < classElement.length; i++) {
        if (classElement[i].className == 'shared active') {
            classElement[i].style.display = "block"
        }
    }
    for (var i = 0; i < io.length; i++) {
        io[i].className = io[i].className.replace(" disable", "")
    }
    if (star == 0) {
        io[0].className += " disable"
    } else if (end == 10) {
        io[1].className += " disable"
    }
    for (var i = 0; i < slide.length; i++) {
        slide[i].className = slide[i].className.replace(" active", "")
    }
    if (end <= 5) {
        slide[0].className += " active"
    } else if (end > 5 && end <= 8) {
        slide[1].className += " active"
    } else if (end >= 9 && end < 10) {
        slide[2].className += " active"
    } else {
        slide[3].className += " active"

    }

}
//
var indexstarchange = 0;
var indexendchange = 4;
change(indexstarchange, indexendchange)
function plusleft() {
    var io = document.getElementsByClassName("io")
    indexendchange -= 1;
    indexstarchange -= 1;
    if (indexstarchange < 0) {
        indexstarchange = 0;
        indexendchange = 4;
    }
    change(indexstarchange, indexendchange)
}
function plusright() {
    var io = document.getElementsByClassName("io")
    indexendchange += 1;
    indexstarchange += 1;
    if (indexendchange >io.length) {
        indexstarchange =7 ;
        indexendchange = 11;
    }
    change(indexstarchange, indexendchange)
}
function change(star, end) {
    var io = document.getElementsByClassName("io")
    var slide=document.getElementsByClassName("same")
    for (var i = 0; i < io.length; i++) {
        io[i].style.display = "none";
    }
    for (var i = 0; i < io.length; i++) {
        io[i].className = io[i].className.replace(" active", "")
    }
    for (var i = star; i < end; i++) {
        io[i].className += " active"
    }
    for (var i = 0; i < io.length; i++) {
        if (io[i].className == 'io active') {
            io[i].style.display = "block"
        }
    }
    for(var i=0;i<slide.length;i++){
        slide[i].className=slide[i].className.replace(" disable","")
    }
    if(star<=0){
        slide[0].className+=" disable"
    }else if(end==11){
        slide[1].className+=" disable"
    }
}




