const swiper = new Swiper(".slider", {
    // slidesPerView: 3,
    spaceBetween: 30,
})

const accordion = document.querySelectorAll(".accordion") 
const accordionName = document.querySelectorAll(".accordion-name") 
const accordionContent = document.querySelectorAll(".accordion-content")


for(let i = 0; i < accordion.length;i++){ 
    accordion[i].addEventListener("click",() => { 
        console.log("asdlfkj") 
        accordion[i].classList.toggle("active") 
        accordionName[i].classList.toggle("opened")
    }) 
}
