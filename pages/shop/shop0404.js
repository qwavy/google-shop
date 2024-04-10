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

  changeActiveButton(buttonAll)

  getAllProducts();
});

buttonPhone.addEventListener("click", () => {

  changeActiveButton(buttonPhone)

  getFilteredProducts("phone", createBuyButton);
});

buttonWatch.addEventListener("click", () => {
  
  changeActiveButton(buttonWatch)

  getFilteredProducts("watch", createBuyButton);
});

buttonTablet.addEventListener("click", () => {
  
  changeActiveButton(buttonTablet)

  getFilteredProducts("tablet", createBuyButton);
});

buttonEarphone.addEventListener("click", () => {
  
  changeActiveButton(buttonEarphone)

  getFilteredProducts("earphone", createBuyButton);
});

buttonOther.addEventListener("click", () => {
  
  changeActiveButton(buttonOther)

  getFilteredProducts("other", createBuyButton);
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
  const html = products
    .map(
      (product) => `    <div class="product-card">
      <img class="product-card-image" src=${product.image} alt="">
      <h4 class="product-card-name">${product.name}</h4>
      <div class="product-card-actions">
          <span class="product-card-price">${product.price}</span>
          <button class="product-card-button" onClick="createBuyButton(${product.id})">+</button>
      </div>
  </div>`
    )
    .join("");
  productsTemplate.innerHTML = html;
};

const createBuyButton = (id) => {
  axios.post(`https://localhost:7297/cart/1/${id}` , {
  })
  .then((response) => console.log(response))
};




getAllProducts()
