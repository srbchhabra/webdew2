const slides = document.querySelectorAll(".slide");

//console.log(slides,"slides");
var counter=0;
slides.forEach((slides,index) => {
    slides.style.left=`${index*100}%`

})

const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })

}
const next=()=>{
    if(counter<slides.length-1)
{    counter++
slideImage();}
}
const back=()=>{
    if(counter!=0)
{counter--
slideImage()}
}
const ham=document.querySelectorAll(".hamburger");
ham.onclick=function(){
    console.log("clicked")
    const navbar=document.querySelectorAll(".nav")
    navbar.classList.toggle("active")

}
const drop=()=>{
    const navbar=document.querySelector(".nav")
    navbar.classList.toggle("active")
}