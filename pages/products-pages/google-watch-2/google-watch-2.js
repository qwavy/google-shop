const heroIntro = document.querySelector('.hero__intro')
const heroVideo = document.querySelector('.hero__video')
const heroInner = document.querySelector('.hero__inner')


// https://storage.googleapis.com/mannequin/blobs/4d177599-0950-4f70-866d-4c4f92b74632.mp4
heroIntro.addEventListener("ended",() => {
    console.log("sdfjsdkf")
    heroIntro.classList.add('hidden')
    // heroVideo.classList.add("half-size");
    heroInner.classList.remove("hidden");

}, {once:true})