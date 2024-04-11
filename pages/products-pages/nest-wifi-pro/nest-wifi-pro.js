const reliabilityButtonWifi = document.querySelector(".reliability__button-wifi")
const reliabilityButtonCoverage =document.querySelector(".reliability__button-coverage")

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


reliabilityButtonWifi.addEventListener(("click") , () => {
    document.querySelector(".reliability__item-coverage").classList.add("hidden")
    document.querySelector(".reliability__item-wifi").classList.remove("hidden")
    reliabilityButtonWifi.setAttribute("disabled","")
    reliabilityButtonCoverage.removeAttribute("disabled","")
})

reliabilityButtonCoverage.addEventListener(("click") , () => {
    document.querySelector(".reliability__item-coverage").classList.remove("hidden")
    document.querySelector(".reliability__item-wifi").classList.add("hidden")
    reliabilityButtonWifi.removeAttribute("disabled","")
    reliabilityButtonCoverage.setAttribute("disabled","")

})