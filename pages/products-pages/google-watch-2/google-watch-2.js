const heroIntro = document.querySelector('.hero__intro')
const heroVideo = document.querySelector('.hero__video')
const heroInner = document.querySelector('.hero__inner')

const checkButtonSigns = document.querySelector('.check__button-signs')
const checkButtonsSteps = document.querySelector('.check__button-steps')
const checkButtonsRoutine = document.querySelector('.check__button-routine')

const checkSignsVideo = document.querySelector('.check__signs-video')
const checkStepsVideo = document.querySelector('.check__steps-video')
const checkRoutineVideo = document.querySelector('.check__routine-image')

// https://storage.googleapis.com/mannequin/blobs/4d177599-0950-4f70-866d-4c4f92b74632.mp4
heroIntro.addEventListener("ended",() => {
    console.log("sdfjsdkf")
    heroIntro.classList.add('hidden')
    // heroVideo.classList.add("half-size");
    heroInner.classList.remove("hidden");

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
