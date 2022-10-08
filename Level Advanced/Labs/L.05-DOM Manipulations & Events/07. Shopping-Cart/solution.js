function solve() {

   //вместо да закачам евент на всеки бутон, ще го закача на Shopping Cart
   // и ще използвам event propagation

   let shoppingCart = document.querySelector('.shopping-cart');
   let result = document.querySelector('textarea');

   let products = [];
   let totalPrice = 0;
   let checkoutDone = false;

   shoppingCart.addEventListener('click', function (event) {
      if (event.target.nodeName != 'BUTTON') {
         return; //идеята е да работи само при кликане на add button
      }

      if (checkoutDone) {
         return;
      }

      let btn = event.target;

      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let productElement = event.target.parentElement.parentElement; 
         //от add бутона отивам 2 нива нагоре - на .product класът
         let product = productElement.querySelectorAll('.product-title')[0].textContent;
         let price = productElement.querySelectorAll('.product-line-price')[0].textContent;

         result.textContent += `Added ${product} for ${Number(price).toFixed(2)} to the cart.\n`;

         if (products.indexOf(product) < 0) { 
            //ако няма такъв продукт - да го добавим, ще е уникален и няма да се повтаря
            products.push(product);
         }

         totalPrice += Number(price);
      } else if (Array.from(btn.classList).indexOf('checkout') >= 0) {
         result.textContent += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
         checkoutDone = true;
      }
   })
}  