var cartdata=JSON.parse(localStorage.getItem("cartItems"))||[];
console.log("ok",cartdata);
let carcon=document.getElementById("cartcontainer");

let checkout=document.getElementById("checkout");

const showtotal=(cartdata)=>{
carcon.innerHTML="";

cartdata.map((elem,index)=>{
    var div = document.createElement("div");
    var name = document.createElement("h4");
    name.innerText = elem.title;
    name.setAttribute("id","name");
    
    
    var price = document.createElement("p");
        price.innerText = `$ ${elem.price}` 
        price.setAttribute("id","price")
    
        div.append(name,price);
        carcon.append(div)
})




    
}

showtotal(cartdata)


checkout.addEventListener("click",()=>{
    gopayment();
})

const gopayment=()=>{

}