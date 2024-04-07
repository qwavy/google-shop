const buttonPhone = document.querySelector(".button-value-phone");
const buttonWatch = document.querySelector(".button-value-watch");
const buttonTablet = document.querySelector(".button-value-tablet");
const buttonEarphone = document.querySelector(".button-value-earphone");
const buttonOther = document.querySelector(".button-value-other");
const buttonAll = document.querySelector(".button-value-all");
const buttons = document.querySelectorAll(".button-value");

const productsTemplate = document.querySelector(".products");

const sendData = document.querySelector(".sendData");

const buttonProductBuy = document.querySelectorAll(".product-card-button");

buttonAll.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonAll.classList.add("active");

  getAllProducts();
});

buttonPhone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonPhone.classList.add("active");

  getFilteredProducts("phone", createBuyButton);
});

buttonWatch.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  buttonWatch.classList.add("active");

  getFilteredProducts("watch", createBuyButton);
});

buttonTablet.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonTablet.classList.add("active");

  getFilteredProducts("tablet", createBuyButton);
});

buttonEarphone.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonEarphone.classList.add("active");

  getFilteredProducts("earphone", createBuyButton);
});

buttonOther.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  buttonOther.classList.add("active");

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


sendData.addEventListener("click", () => {
  axios
    .get("https://localhost:7297/products")
    .then((response) => console.log(response));
});
