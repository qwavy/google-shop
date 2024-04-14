
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
  console.log(response.data)
  if(response.data !== false){
    axios.post("https://localhost:7297/sendUserId" , {
      userId:response.data.id
    })
    console.log(response.data.id)
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}

