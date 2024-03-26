const video = document.querySelector(".hero__video");
const heroInfo = document.querySelector(".hero__info");
const promotionVideo = document.querySelectorAll(".promotion__video");

const aiCameraImage = document.querySelector('.ai__camera-image')
const aiCameraVideo = document.querySelector('.ai__camera-video')
const aiButtonImage = document.querySelector(".ai__camera-button_image")
const aiButtonZoom = document.querySelector('.ai__camera-button_zoom')

const editGroupVideo = document.querySelector('.edit__item-group')
const editReimagineVideo = document.querySelector('.edit__item-reimagine')
const editSoundsVideo = document.querySelector('.edit__item-sounds')

const editGroupButton = document.querySelector('.edit__button-group')
const editReimagineButton = document.querySelector('.edit__button-reimagine')
const editSoundsButton = document.querySelector('.edit__button-sounds')


// слайдер для секции ai блока details
const swiperPixel = new Swiper(".ai__details ", {
  slidesPerView: 3,
  spaceBetween: 30,
});

// менять видео когда заканчивается первое видео у секции hero

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

// что бы видео проигровалось при попадания в поле зрения пользователя

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

// переключение видео по кнопки у секции ai 

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
})

// переключение видео по кнопке у секции edit 


editGroupButton.addEventListener(('click') , () => {

  editGroupVideo.classList.remove('hidden')
  editGroupVideo.play()

  editReimagineVideo.classList.add('hidden')
  editSoundsVideo.classList.add('hidden')

})

editReimagineButton.addEventListener(('click') , () => {
  editReimagineVideo.classList.remove('hidden')
  editReimagineVideo.play()

  editGroupVideo.classList.add('hidden')
  editSoundsVideo.classList.add('hidden')
})

editSoundsButton.addEventListener(('click') , () => {
  editSoundsVideo.classList.remove('hidden')
  editReimagineVideo.play()

  editGroupVideo.classList.add('hidden')
  editReimagineVideo.classList.add('hidden')
})