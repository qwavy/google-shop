const heroIntro = document.querySelector('.hero__intro')
const heroVideo = document.querySelector('.hero__video')
const heroInner = document.querySelector('.hero__inner')
const heroInfo = document.querySelector(".hero__info")

const checkButtonSigns = document.querySelector('.check__button-signs')
const checkButtonsSteps = document.querySelector('.check__button-steps')
const checkButtonsRoutine = document.querySelector('.check__button-routine')

const checkSignsVideo = document.querySelector('.check__signs-video')
const checkStepsVideo = document.querySelector('.check__steps-video')
const checkRoutineVideo = document.querySelector('.check__routine-image')

const accordion = document.querySelectorAll(".accordion")
const accordionName = document.querySelectorAll(".accordion-name")
const accordionContent = document.querySelectorAll(".accordion-content")

// https://storage.googleapis.com/mannequin/blobs/4d177599-0950-4f70-866d-4c4f92b74632.mp4
heroIntro.addEventListener("ended",() => {
    console.log("sdfjsdkf")
    heroIntro.classList.add('hidden')
    // heroVideo.classList.add("half-size");
    heroInner.classList.remove("hidden");
    heroInfo.classList.add('left-pad-50')
}, {once:true})

checkButtonSigns.addEventListener(('click') , () => {
    checkSignsVideo.classList.remove('hidden')
    checkStepsVideo.classList.add('hidden')
    checkRoutineVideo.classList.add('hidden')

    checkButtonSigns.setAttribute('disabled',0)
    checkButtonsSteps.removeAttribute('disabled')
    checkButtonsRoutine.removeAttribute('disabled')
})

checkButtonsSteps.addEventListener(('click') , () => {
    checkSignsVideo.classList.add('hidden')
    checkStepsVideo.classList.remove('hidden')
    checkRoutineVideo.classList.add('hidden')

    checkButtonSigns.removeAttribute('disabled')
    checkButtonsSteps.setAttribute('disabled',0)
    checkButtonsRoutine.removeAttribute('disabled')
})

checkButtonsRoutine.addEventListener(('click') , () => {
    checkSignsVideo.classList.add('hidden')
    checkStepsVideo.classList.add('hidden')
    checkRoutineVideo.classList.remove('hidden')

    checkButtonSigns.removeAttribute('disabled')
    checkButtonsSteps.removeAttribute('disabled')
    checkButtonsRoutine.setAttribute('disabled',0)
})

console.log(accordion)

accordion.forEach((elem) => {

})

for(let i = 0; i < accordion.length;i++){
    accordion[i].addEventListener("click",() => {
        console.log("asdlfkj")
        accordion[i].classList.toggle("active")
        accordionName[i].classList.toggle("opened")
    })
}


