const buttonPhone = document.querySelector(".button-value-phone");
const buttonWatch = document.querySelector(".button-value-watch");
const buttonTablet = document.querySelector(".button-value-tablet");
const buttonEarphone = document.querySelector(".button-value-earphone");
const buttonOther = document.querySelector(".button-value-other");
const buttons = document.querySelectorAll(".button-value");



const productsTemplate = document.querySelector(".products");

const sendData = document.querySelector(".sendData");

const buttonProductBuy = document.querySelector(".product-buy")

const numbers = [33, 2, 8];
numbers.sort();
console.log(0.2 + 0.4);

buttonPhone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonPhone.classList.add("active");

  getFilteredProducts("phone");

});

buttonWatch.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttonWatch.classList.add("active");


  getFilteredProducts("watch");


});

buttonTablet.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonTablet.classList.add("active");

  getFilteredProducts("tablet");

});

buttonEarphone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonEarphone.classList.add("active");

  getFilteredProducts("earphone");

});

buttonOther.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonOther.classList.add("active");

  getFilteredProducts("other");
});

const getFilteredProducts = async (filterMethod) => {
    try {
      const others = await axios.get(
        `https://localhost:7297/products/?filterMethod=${filterMethod}`
      );
      renderHtml(others.data);
    } catch (e) {
      console.log(e);
    }
}

const renderHtml = (products) => {
  const html = products
    .map(
      (product) => `<div class="product">
    <img class="product-image" src=${product.image} alt="product image"/>
    <h3 class="product-name">${product.name}</h3>
    <p class="product-price">${product.price}</p>
    <button class="product-buy" >Add</button>
    </div>`
    )
    .join("");
  productsTemplate.innerHTML = html;
};

buttonProductBuy.addEventListener(("click") , () => {
  axios.post("/cart/1" , {
    
  })
})
