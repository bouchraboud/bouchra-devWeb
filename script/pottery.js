let productsHTML = '';
products.forEach((product) => {
  productsHTML+= `
  <div class="product-container">
    <div class="product-image-container">
       <img class="product-image" src="${product.image}">
    </div>   
    <div class="product-name">
        ${product.name}
    </div>
    <div class="product-price">
         ${product.price/100}$
     </div>
    <div>
        <button class="add-to-cart-button
        button-primary js-add-to-cart" data-product-id="${product.id}">
        add to cart</button>
    </div>
</div>
     
 `;
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;
document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
  button.addEventListener('click',() => {
      const productId =button.dataset.productId;
      let existe=false;
      
      cart.forEach((item)=>{
         if(item.productId===productId){
          item.quantity++;
          existe:true;
         }});
         if(existe===false){
          cart.push({
            productId:productId,
            quantity:1
            });
         }
      
     
      
      console.log(cart);

  });
});