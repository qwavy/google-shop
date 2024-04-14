let userId;

const getUserId = async () => {
  await axios.get("https://localhost:7297/getUserId")
    .then((response) => userId = (response.data))
    .then((response) => console.log(response))
    console.log(userId)


getUserCart(userId)

}


getUserId()


const productsTemplate = document.querySelector(".products")

const getUserCart = async (id) => {
    try{
        const cartProducts = await axios.get(`https://localhost:7297/cart/${id}/get`)
        console.log(cartProducts)
        renderHtml(cartProducts.data)
    }
    catch(e){
        console.log(e)
    }
}

const renderHtml = (products) => {
  products.forEach((product) => {
    let upperFirstChar = product.category[0].toUpperCase()
    let string = product.category.slice(1)
    product.category = upperFirstChar + string
  })
    const html = products
      .map(
        (product) => `    <div class="cart-product-card">
        <div class="cart-product-conteiner">
          <img class="cart-product-card-image" src=${product.image} alt="">
          <div class="cart-product-info">
          <div>
          <p class="cart-product-card-name">${product.name}</p>
          <p class="cart-product-card-category">${product.category}</p>
          </div>
          <p class="cart-product-card-stock"><img class="cart-product-card-stock-image" src="/images/icons/correct.svg"/> 
          <span>
          In stock
          </span></p>
          </div>
        </div>
        <div class="cart-product-card-actions">
            <span class="cart-product-card-price">${product.price}$</span>
          <span class="cart-product-card-button" onClick="deleteProduct(${product.id})" >Remove</span>

        </div>
    </div>`
      )
      .join("");
    productsTemplate.innerHTML = html;
  };


const deleteProduct = (id) => {
    axios.delete(`https://localhost:7297/cart/1/${id}`)
        .then((response) => renderHtml(response))

    window.location.reload(true);
}
