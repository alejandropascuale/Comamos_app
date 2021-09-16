
let cartUser = JSON.parse(localStorage.getItem('cartItem'));
let productContainer = document.querySelector('.product-container');
let buisness = await (await fetch ('http://localhost:8000/api/buisness')).json();

cartUser.map(item => {
    productContainer.innerHTML+= 
    `<h2>${item[0].id_restaurant}</h2>
    <article>
        <p>${item[0].plato}</p>
        <a href="">Quitar Producto</a>
    </article>`
    //console.log(item[0]);
})

