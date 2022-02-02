
let cookieRemove = document.querySelector("#cookie-alert")
console.log(cookieRemove);

let displayCart = document.querySelector("#cart");

let imageOne = document.querySelector("#image");



function remCookie(){
    cookieRemove.remove();
}

function cartDisplay(){
    alert("Your cart is empty");
}


// function setnewImage(){
//     imageOne.src = "/assets/succulents-2.jpg";
// }

// function setOldImage(){
//     imageOne.src = "/assets/aloe-m.jpg";
// }


// function newImage(){
//     document.querySelector("#image").src = "/assets/succulents-2.jpg";
// }

// function oldImage(){
//     document.querySelector("#image").src = "/assets/aloe-m.jpg";
// }