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
        (product) => `    <div class="product-card">
        <img class="product-card-image" src=${product.image} alt="">
        <h4 class="product-card-name">${product.name}</h4>
        <div class="product-card-actions">
            <span class="product-card-price">${product.price}</span>
          <button class="product-card-button" onClick="deleteProduct(${product.id})">delete</button>

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
