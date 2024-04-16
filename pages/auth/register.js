const button = document.querySelector('.button')
const form = document.querySelector(".form")


button.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value
    if(!email || !password){
      return       Toastify({
        text: "Please write data",
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
    axios.post('https://localhost:7297/register', {
        email:email,
        password:password
    })
    .then((response) => console.log(response))
    .then(window.location.href = "http://127.0.0.1:5500//pages/auth/auth.html")
      .catch(function (error) {
        console.log(error);
      });
})


