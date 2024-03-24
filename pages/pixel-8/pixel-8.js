const video = document.querySelector('.hero__video')
const heroInfo = document.querySelector('.hero__info')

const changeVideo = (video,src) => {
    video.src=src
}


video.addEventListener("ended" , (event) => {
    changeVideo(video,"https://storage.googleapis.com/mannequin/blobs/122ad7a7-27a0-418c-9749-dccb0b625fd9.webm")
    video.classList.add('half-size')
    heroInfo.classList.remove('hidden')
} , {once:true})