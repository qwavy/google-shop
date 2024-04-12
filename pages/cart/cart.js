const userId = 1

const productsTemplate = document.querySelector(".products")
const getData = document.querySelector(".getData")




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
    const html = products
      .map(
        (product) => `    <div class="cart-product-card">
        <div class="cart-product-conteiner">
          <img class="cart-product-card-image" src=${product.image} alt="">
          <div class="cart-product-info">
          <h4 class="cart-product-card-name">${product.name}</h4>
          <p class="cart-product-card-category">${product.category}</p>
          </div>
        </div>
        <div class="cart-product-card-actions">
            <span class="cart-product-card-price">$${product.price}</span>
          <button class="cart-product-card-button" onClick="deleteProduct(${product.id})"><img src="/images/icons/x.svg" width="28" height="28"/></button>

        </div>
    </div>`
      )
      .join("");
    productsTemplate.innerHTML = html;
  };


const deleteProduct = (id) => {
    axios.delete(`https://localhost:7297/cart/1/${id}`)
        .then((response) => console.log(response))

    window.location.reload(true);
}
getUserCart(userId)
