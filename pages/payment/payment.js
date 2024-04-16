const form = document.querySelector(".form")

form.addEventListener(("submit"),  (e) => {
    e.preventDefault()
    Toastify({
        text: "The payment was successful",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#90EE90",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})