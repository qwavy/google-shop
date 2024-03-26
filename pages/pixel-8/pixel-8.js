const video = document.querySelector(".hero__video");
const heroInfo = document.querySelector(".hero__info");
const promotionVideo = document.querySelectorAll(".promotion__video");

const aiCameraImage = document.querySelector('.ai__camera-image')
const aiCameraVideo = document.querySelector('.ai__camera-video')
const aiButtonImage = document.querySelector(".ai__camera-button_image")
const aiButtonZoom = document.querySelector('.ai__camera-button_zoom')

// const options = {
//     root:null,
//     rootMargin: '0px',
//     threshold: 0
// }

let observer = new IntersectionObserver(
  (elem) => {
    console.log(elem[0].target)
    elem[0].target.play()
  },
  { threshold: 0.4 }
);

promotionVideo.forEach((elem) => {
    observer.observe(elem)
})
const changeVideo = (video, src) => {
  video.src = src;
};

video.addEventListener(
  "ended",
  (event) => {
    changeVideo(
      video,
      "https://storage.googleapis.com/mannequin/blobs/122ad7a7-27a0-418c-9749-dccb0b625fd9.webm"
    );
    video.classList.add("half-size");
    heroInfo.classList.remove("hidden");
  },
  { once: true }
);


aiButtonImage.addEventListener(('click') , () => {

  aiButtonImage.setAttribute('disabled','')
  aiButtonZoom.removeAttribute('disabled','')

    if(aiCameraVideo.classList.contains('hidden')){

        aiCameraImage.classList.toggle('hidden')
    }else{
        aiCameraImage.classList.toggle('hidden')
        aiCameraVideo.classList.toggle('hidden')
    }

})

aiButtonZoom.addEventListener(('click') , () => {
  aiCameraVideo.play()

  aiButtonImage.removeAttribute('disabled','')

  aiButtonZoom.setAttribute('disabled','')

    if(aiCameraImage.classList.contains('hidden')){

        aiCameraVideo.classList.toggle('hidden')
    }else{
        aiCameraImage.classList.toggle('hidden')
        aiCameraVideo.classList.toggle('hidden')
    }


    // aiCameraImage.setAttribute('src','https://storage.googleapis.com/mannequin/blobs/6b44a864-5417-45da-8694-729352e5198f.mp4')
})


const swiper = new Swiper("ai__details ", {
  slidesPerView: 3,
});


const swiperTest = new Swiper('slider', {
  
})