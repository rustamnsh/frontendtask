"use strict";
let slideDiv= document.querySelector(".slide");
let imgDiv = document.querySelectorAll(".imgDiv")


let left= document.querySelector(".left");
let right= document.querySelector(".right");

left.addEventListener("click", leftImg);
right.addEventListener("click",rightImg);


let counter=0;
let size = imgDiv[counter].clientWidth;
function leftImg(){
    counter--;
    slideDiv.style.transition=".4s ease-in-out";
    slideDiv.style.transform = "translateX("+(-size*counter)+"px)";
    console.log(imgDiv[counter])
    console.log(slideDiv.style.transform)

}

function rightImg(){
    counter++ ;
    slideDiv.style.transition=".4s ease-in-out";
    slideDiv.style.transform = "translateX("+(-size*counter)+"px)";
    console.log(slideDiv.style.transform)
    // console.log(size)
    // console.log(imgDiv[-counter].id)
    // console.log( counter=imgDiv.length-2)
    console.log(imgDiv[-counter])

}
slideDiv.addEventListener("transitionend",endSlide);
function endSlide(){
   
    if(imgDiv[counter].id ==="last") {
        slideDiv.style.transition="none";
        counter=imgDiv.length-2;
        slideDiv.style.transform="translateX("+(-size*counter)+"px)";
    }
    else if(imgDiv[counter].id === "first"){
        console.log("ddd");
        slideDiv.style.transition="none";
        counter=imgDiv.length-counter;
        slideDiv.style.transform="translateX("+(-size*counter)+"px)";
    }
    
}
