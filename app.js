const slides = document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded",initializeslide)

function initializeslide(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId= setInterval(nwxtSlide,4000);

}
function showSlide(index){
    if(index>=slides.length){
        slideIndex=0;

    }
    else if(index<0){
        slideIndex=slides.length-1
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add('displaySlide')
}
function prevSlide(){
    clearInterval(intervalId)
    slideIndex--
    showSlide(slideIndex)
}
function nwxtSlide(){
    
    slideIndex++
    showSlide(slideIndex)
}


