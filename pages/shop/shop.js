let products = []

axios('https://fakestoreapi.com/products')
    .then((response) => products = response.data)


document.querySelector('.button').addEventListener(("click") , (e) => {

    console.log(products)
})
