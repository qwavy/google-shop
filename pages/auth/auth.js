
const button = document.querySelector('.button')
const form = document.querySelector(".form")



showNotify("Please login" , "good")

button.addEventListener("click", (e) => {
    e.preventDefault()

    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    if(!email || !password){
      return showNotify("Please write data","bad")
      
    }
    axios.post('https://localhost:7297/login', {
        email:email,
        password:password
    })
    .then((response) => result(response))
      .catch(function (error) {
        console.log(error);
      });

      showNotify("The password or email not correct","bad")

})

const result = (response) => {
  console.log(response.data)
  if(response.data !== false){
    axios.post("https://localhost:7297/sendUserId" , {
      userId:response.data.id
    })
    console.log(response.data.id)
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}

function showNotify (message,type) {
  let color = "";
  if(type == "good"){
    color = "#90EE90"
  }else if(type === "bad" ){
    color = "#FF2400"
  }
  Toastify({
    text: message,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#FF2400",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
