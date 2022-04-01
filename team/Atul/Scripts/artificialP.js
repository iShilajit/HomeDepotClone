var artificialplant=JSON.parse(localStorage.getItem("plants")) || []
console.log("artificialplant",artificialplant)
artificialplant.map(function(e){

var h=document.createElement("div");
var imgh=document.createElement("img")
imgh.setAttribute("src",e.imghUrl);
imgh.setAttribute("class","des")

var plantmain=document.createElement("div");
plantmain.setAttribute("class","main")

var img=document.createElement("img");
img.setAttribute("src",e.imgUrl);
img.setAttribute("class","des");

var div1=document.createElement("div");
div1.setAttribute("class","div1");

var title=document.createElement("h4");
title.id="title";
title.innerText=e.title;
title.style.padding="";

var div2=document.createElement("div");
div2.setAttribute("class","div2");

var auth=document.createElement("p");
auth.id="auth";
auth.innerText=e.auth;

var div3=document.createElement("div");
div3.setAttribute("class","div3");

var rate=document.createElement("p");
rate.id="rate";
rate.innerHTML=e.rate;

let pri=document.createElement("div");
pri.setAttribute("id", "pri");

var price=document.createElement("p");
price.id="price";
price.innerText=`$${e.price}`;

// var pickup=document.createElement("p");
// pickup.id="pickup";
// pickup.innerText=e.pickup;

// var delivery=document.createElement("p");
// delivery.id="delivery";
// delivery.innerText=e.delivery;
let addtocart=document.createElement("button");
addtocart.setAttribute("id","addtocart");
addtocart.innerText="Add to Cart";
addtocart.addEventListener("click",()=>{
    add()

})
h.append(imgh)
div1.append(title)
div2.append(auth)
div3.append(rate)
pri.append(price)
plantmain.append(img,div1,div2,div3,pri,addtocart);

document.querySelector("#container").append(plantmain);

const  add= () =>{
    
}






})