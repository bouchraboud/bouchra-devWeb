let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
    cart=[{
        productId:"1",
        quantity:0,
        },{
        productId:"2",
        quantity:0,
        }];
}



function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));

}
function addToCart(productId){
    let existe=false;
        
    cart.forEach((cartItem)=>{
       if(cartItem.productId===productId){
     cartItem.quantity+=1;
        existe=true;  
       }});
       if(existe===false){
        cart.push({
          productId:productId,
          quantity:1
          
          });
       }
       saveToStorage();
   } 
   function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
         if(cartItem.productId!==productId){
            newCart.push(cartItem);
         }
    });
    cart=newCart;
    saveToStorage();
   }
