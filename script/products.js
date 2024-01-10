function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}



const products = [
    
      {
        id:"1",
        image:"images/products/0ff4035d-5847-494a-8adc-6c30e9bfaaf5.jpg",
        name: "a",
        Type: "iuyt",
  
        price: 1090,
        
      },
      {
        id:"2",
        image: "images/products/2dd63726-81b5-4f10-acd5-2baf3902ebbd.jpg",
        name: "b",
        Type: "lkjhgf",
  
        price: 1090,
        
      },
      {
        id:"3",
        image: "images/products/2e87930f-f8d9-4aa9-a70b-3875d92cc84b.jpg",
        name: "c",
        Type: "loiu",
  
        price: 1090,
        
      },{

        id:"4",
        image: "images/products/6b8d702d-c6a9-48ac-8005-9c2b7eea7353.jpg",
        name: "d",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"5",
        image: "images/products/6d85d14d-6c2a-409b-a5dd-f8928a908040.jpg",
        name: "e",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"6",
        image: "images/products/37e3cbe6-7df8-4d93-8210-b523dcb79af7.jpg",
        name: "f",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"7",
        image: "images/products/62b1f4b0-c802-4c46-9d6e-da228f042129.jpg",
        name: "g",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"8",
        image: "images/products/a6271f5c-c292-42d8-aec8-9c20f683ab25.jpg",
        name: "h",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"9",
        image: "images/products/792af8db-29ce-44f1-b321-55bc9ac551f0.jpg",
        name: "i",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"10",
        image: "images/products/058287b7-156c-4edc-ab90-a608e09248b8.jpg",
        name: "j",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"11",
        image: "images/products/792af8db-29ce-44f1-b321-55bc9ac551f0.jpg",
        name: "k",
        Type: "loiu",
  
        price: 1090,



      },{

        id:"12",
        image: "images/products/14709050-f3bf-41bc-9992-9854a774d2d3.jpg",
        name: "l",
        Type: "loiu",
  
        price: 1090, 
    },{

        id:"13",
        image: "images/products/a7c4332d-63d0-4f2e-8343-d86b739fb87c.jpg",
        name: "m",
        Type: "loiu",
  
        price: 1090, 
    },{

        id:"14",
        image: "images/products/a6271f5c-c292-42d8-aec8-9c20f683ab25.jpg",
        name: "n",
        Type: "loiu",
  
        price: 1090, 
    },
    
];