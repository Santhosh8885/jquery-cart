function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function openCart() {
//     document.getElementById("cart").style.display = "block";
// }

// window.onclick = function(event) {
//     if (event.target == cart-popup) {
//       cart-popup.style.display = "none";
//     }
//   }

// Get the modal
var cart = document.getElementById("cart");

// Get the button that opens the modal
var cbtn = document.getElementById("cbtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
cbtn.onmouseover = function () {
  cart.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
span1.onclick = function () {
  cart.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == cart) {
    cart.style.display = "none";
  }
}

const cartbtn = document.getElementById("myBtn")

const products = []

let cartbtn1 = cartbtn
cartbtn1.addEventListener('click', () => {
  // console.log(document.getElementById("price").textContent)


  let product = {
    image: document.getElementById("imc").src,
    name: document.getElementById("sname").textContent,
    price: document.getElementById("price").textContent,
    // totalPrice: document.getElementById("price").textContent,
    quantity: 1
  }
  // console.log(totalPrice);
  addItemToLocal(product)
})

function addItemToLocal(product) {
  // alert('hi')
  let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
  // console.log(cartItem)

  if(cartItem === null) {
    // alert('hi')

    products.push(product)
    localStorage.setItem('prdInCart', JSON.stringify(products))
    console.log(cartItem);
  }{
    cartItem.forEach(item => {
        if(product.name == item.name){
            product.quantity = item.quantity += 1;
            // product.totalPrice = item.totalPrice += product.totalPrice;
        }else{
            products.push(item)
        }
    });
    products.push(product)
}
localStorage.setItem('prdInCart', JSON.stringify(products))
window.location.reload()
}

function dispCartItem(){
  let html = '';
  let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
  cartItem.forEach(item => {
      html += `
      <div class="cartlist">
      <div class="forImage"> <img src="${item.image}" alt=""></div>
      <div class="forName"><h3>${item.name}</h3></div>
      <div class="forPrice"><h3>${item.price}</h3></div>
      <div class="forQuantity"><h3>${item.quantity}</h3></div>
       <div class="reoveItem"><button>remove</button></div>
       
      
 </div>
      `
  });
 document.querySelector('.cartp').innerHTML = html;
}
dispCartItem()

const removeItem = document.getElementsByClassName('reoveItem')
for(var i = 0; i < removeItem.length; i++){
    let removeBtn = removeItem[i]
    removeBtn.addEventListener('click', () =>{
        let cartItem = JSON.parse(localStorage.getItem('prdInCart'))
        console.log(event.target.parentElement.parentElement.children[1].children[0].textContent);
        cartItem.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.children[1].children[0].textContent){
                products.push(item) 
            }
        });
        localStorage.setItem('prdInCart', JSON.stringify(products))
        window.location.reload()
    })
}