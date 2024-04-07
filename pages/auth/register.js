const button = document.querySelector('.button')
const form = document.querySelector(".form")


button.addEventListener("click", (e) => {
    e.preventDefault()
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    axios.post('https://localhost:7297/register', {
        email:email,
        password:password
    })
    .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
})


