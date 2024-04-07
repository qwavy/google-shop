
const button = document.querySelector('.button')
const form = document.querySelector(".form")


button.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    axios.post('https://localhost:7297/login', {
        email:email,
        password:password
    })
    .then((response) => result(response))
      .catch(function (error) {
        console.log(error);
      });
})

const result = (response) => {
  console.log(response)
  if(response.data === "success login"){
    window.location.href = "http://127.0.0.1:5500/index.html";
  }else{
      alert("not found user")
  }
}

