const buttonPhone = document.querySelector(".button-value-phone");
const buttonWatch = document.querySelector(".button-value-watch");
const buttonTablet = document.querySelector(".button-value-tablet");
const buttonEarphone = document.querySelector(".button-value-earphone");
const buttonOther = document.querySelector(".button-value-other");
const buttonAll = document.querySelector(".button-value-all");
const buttons = document.querySelectorAll(".button-value");

const productsTemplate = document.querySelector(".products__container");

const sendData = document.querySelector(".sendData");

const buttonProductBuy = document.querySelectorAll(".product-card-button");

const accordion = document.querySelectorAll(".accordion") 
const accordionName = document.querySelectorAll(".accordion-name") 
const accordionContent = document.querySelectorAll(".accordion-content")


let userId;

const getUserId = async () => {
  await axios.get("https://localhost:7297/getUserId")
    .then((response) => userId = (response.data))
    .then((response) => console.log(response))
    console.log(userId)


  
}
getUserId()


for(let i = 0; i < accordion.length;i++){ 
    accordion[i].addEventListener("click",() => { 
        accordion[i].classList.toggle("active") 
        accordionName[i].classList.toggle("opened")
    }) 
}

const changeActiveButton = (button) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  button.classList.add("active")
}



buttonAll.addEventListener("click", () => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.delete("filterMethod");
  history.pushState(null, null, newUrl.toString());

  categoryButton(buttonAll)

});

buttonPhone.addEventListener("click", () => {
  changeUrl("phone")
  

  categoryButton(buttonPhone)

});

buttonWatch.addEventListener("click", () => {
  

  changeUrl("watch")
  

  categoryButton(buttonWatch)

});

buttonTablet.addEventListener("click", () => {
  
  changeUrl("tablet")
    

  categoryButton(buttonTablet)
});

buttonEarphone.addEventListener("click", () => {
  
  changeUrl("earphone")
    

  categoryButton(buttonEarphone)
});

buttonOther.addEventListener("click", () => {
  
  changeUrl("other")

  categoryButton(buttonOther)
});

const getFilteredProducts = async (filterMethod, createBuyButton) => {
  try {
    const others = await axios.get(
      `https://localhost:7297/products/?filterMethod=${filterMethod}`
    );
    renderHtml(others.data);
  } catch (e) {
    console.log(e);
  }
};

const getAllProducts = async () => {
  
  try {
    const products = await axios.get("https://localhost:7297/products");
    console.log(products);
    renderHtml(products.data);
  } catch (e) {
    console.log(e);
  }



};

const renderHtml = (products) => {
  products.forEach((product) => {
    let upperFirstChar = product.category[0].toUpperCase()
    let string = product.category.slice(1)
    product.category = upperFirstChar + string
  })
  const html = products
    .map(
      (product) => `    <div class="product-card">
      <img class="product-card-image" src=${product.image} alt="">
      <div class="product-card-info">
      <h4 class="product-card-name">${product.name}</h4>
      <p class="product-card-category">${product.category}</p>
      </div>
      <div class="product-card-actions">
          <span class="product-card-price">${product.price}$</span>
          <button class="product-card-button" onClick="createBuyButton(${product.id})"><img src="/images/icons/cart.svg"/></button>
      </div>
  </div>`
    )
    .join("");
  productsTemplate.innerHTML = html;
};

const createBuyButton = (id) => {
  axios.post(`https://localhost:7297/cart/${userId}/${id}` , {
  })
  .then((response) => console.log(response))
  Toastify({
    text: "Product Added to Cart",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "	#90EE90",
    },
    onClick: function(){} // Callback after click
  }).showToast();
};

const changeUrl = (filterMethod) => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set("filterMethod", filterMethod);
  history.pushState(null, null, newUrl.toString());

}

const categoryButton = (button) => {
  const query = new URLSearchParams(location.search);
  const filterMethod = query.get( "filterMethod" )
  if(!filterMethod){
    console.log(filterMethod)
    getAllProducts()
    changeActiveButton(buttonAll)
  }else{
    getFilteredProducts(filterMethod, createBuyButton);



    changeActiveButton(document.querySelector(`.button-value-${filterMethod}`))
  }




}


categoryButton()