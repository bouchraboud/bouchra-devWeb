
let cartSummaryHTML='';


cart.forEach((cartItem)=>{
    const productId=cartItem.productId;
    let matchingProduct;
    products.forEach((product)=>{
      if(product.id===productId){
        matchingProduct=product;
      }
    });
    console.log(matchingProduct);
    cartSummaryHTML+=`<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
  <img src="${matchingProduct.image}" />
  <div class="product-details">
    <div class="product-name">${matchingProduct.name}</div>
    <div class="product-price">${matchingProduct.price/100}$</div>
  </div>
  <div class="quantity">quantity:${cartItem.quantity}</div>
  <button class="delete-button js-delete-link" onclick="deleteproduct(this)" data-product-id="${matchingProduct.id}">
    delete
  </button>
</div>`;
});
document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;
document.querySelectorAll('.js-delete-link')
.forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId=button.dataset.productId;
        removeFromCart(productId);
        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.remove();
    });



});
function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents =1000;
 
  cart.forEach((cartItem) =>{
    const product = getProduct(cartItem.productId);
    productPriceCents += product.price*(cartItem.quantity);});
    
  
  
  const taxCents = productPriceCents * 0.1;
  const totalCents = productPriceCents+taxCents+shippingPriceCents;
  const paymentSummaryHTML =
       `<div class="shipping-handling">shipping & handling:10$</div>
        <div class="tax-product">tax:10%</div>
        <div class="total-product">total:${(totalCents/100).toFixed(2)}$</div>
      `;
      
      document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML;}
      renderPaymentSummary();