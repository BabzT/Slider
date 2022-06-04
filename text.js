// MANUAL SLIDE

let indexValue = 1;
showImg(indexValue);

let timer = setInterval(showSlides,5000);
function side_slide(e) {
    indexValue += e;
    showImg(indexValue);
    resetTimer();
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll(".slides");
    if (e > img.length) {
        indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "flex";
}

function resetTimer (){
    clearInterval(timer);
    timer = setInterval(showSlides,5000);
}

// AUTOMATIC SLIDE

var slidesIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("slides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slidesIndex++;
    if(slidesIndex > slides.length){
        slidesIndex = 1;
    }
    slides[slidesIndex - 1].style.display = "flex"
    setInterval(timer)
}