
const button = document.querySelector('.button')
const form = document.querySelector(".form")


button.addEventListener("click", (e) => {
    e.preventDefault()
    let id = 1
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    axios('https://localhost:7297/login', {
        id: id,
        email:email,
        password:password
    })
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})

