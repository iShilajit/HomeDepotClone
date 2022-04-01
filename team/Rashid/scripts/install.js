  
   function myFunction() {
    document.getElementById("more").innerHTML=""
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read less";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read more";
    moreText.style.display = "inline";
  }
}


let q=document.getElementById("q")

let div1=document.createElement("div")

let q1=document.createElement("h3")
q1.innerText="How much does cabinet installation costs"
// let button=document.createElement("button")
// button.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdhnFjJpq4ULtkjBG9VqHQrBMpBfN5F2lt6fAgzvL3qFAIwaLu"
div1.append(q1)

let div2=document.createElement("div")
let q2=document.createElement("h3")
q2.innerText="How do i measure my kitchen for cabinets"
div2.append(q2)

let div3=document.createElement("div")
let q3=document.createElement("h3")
q3.innerText="How height does kitchen cabinets be"
div3.append(q3)


let div4=document.createElement("div")
let q4=document.createElement("h3")
q4.innerText="How much does cabinet installation costs"
div4.append(q4)


let div5=document.createElement("div")
let q5=document.createElement("h3")
q5.innerText="What other rooms can i have cabinets installed in"
div5.append(q5)


let div6=document.createElement("div")
let q6=document.createElement("h3")
q6.innerText="How long does it take to install new cabinets"
div6.append(q6)


q.append(div1,div2,div3,div4,div5,div6)


function myFunctionn() {

  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("moree");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

let tab =document.getElementById("tab")

let div=document.createElement("div")
let img=document.createElement("img")
img.src="https://images.ctfassets.net/z031v9hsq077/zI4fiuNkRWcjYhUNU99pN/dcd8a5247a6fa1ef673095f63e2c8b96/banner_free_kitchen_estimate_mobile.jpg?fm=webp&h=120&q=80"

img.append(div)

let div12=document.createElement("div")
let title=document.createElement("h1")
title.innerText="Get a free kitchen estimate"

let para=document.createElement("p")
para.innerText="Estimate the cost of your kitchen project inluding countertops cabinets and appliances"

div12.append(title,para)

tab.append(img,div12)






function gett(){
        document.querySelector("#dis").innerHTML=" ."

  let dis= document.querySelector("#dis")
  
        var div = document.createElement("div");
        div.style.display="flex"

        var img = document.createElement("img");
        img.src="https://images.ctfassets.net/z031v9hsq077/13PtUEwxOIl86YFgX5sLOK/fb7c7e8ead21e568ad0855b193236760/water_treatment_related_service.jpg?fm=webp",

        img.style.height="400px";
        img.style.width="400px";

        
        let minidiv= document.createElement("div");
        minidiv.setAttribute=("id","minidiv")
        var name = document.createElement("h3");
        name.innerText = 
"Water treatment systems at The Home Depot soften your water by filtering out sediment buildup and harmful contaminants. Water softener installation can improve the taste and smell of the water you use in your bathroom, kitchen and laundry. A free in-home consultation includes"

      

        minidiv.append(name);
        div.append(img)
        document.querySelector("#dis").append(div,minidiv)
        return dis;
}




function get(){
        
    document.querySelector("#dis").innerHTML=null
   let dip= document.querySelector("#dis")
  
        var div = document.createElement("div");
        div.style.display="flex"

        var img = document.createElement("img");
        img.src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80"
        img.style.height="400px";
        img.style.width="400px";

        
        let minidiv= document.createElement("div");
        minidiv.setAttribute=("id","minidiv")
        var name = document.createElement("h3");
        name.innerText = "If you need countertop installation or replacement, your local Home Depot installers can help. We offer a variety of countertop surfaces and colors with your choice of edge style included with installation. Our kitchen designers will help you select countertops that best fit your style and budget, and our local, licensed countertop installers ensure your new countertops will fit perfectly in your space.";
      

        minidiv.append(name);
        div.append(img)
     dip.append(div,minidiv)
    
}





let brands=document.getElementById("brands")


let brdiv=document.createElement("div")

let img1=document.createElement("img")
img1.src="https://assets.thdstatic.com/images/v1/brand-logos/company-store.png"

let img2=document.createElement("img")
img2.src="https://assets.thdstatic.com/images/v1/brand-logos/blinds-dot-com.png"

let img3=document.createElement("img")
img3.src="https://assets.thdstatic.com/images/v1/brand-logos/home-decorator.png"

let img4=document.createElement("img")
img4.src="https://assets.thdstatic.com/images/v1/brand-logos/hampton-bay.png"

let img5=document.createElement("img")
img5.src="https://assets.thdstatic.com/images/v1/brand-logos/husky.png"

let img6=document.createElement("img")
img6.src="https://assets.thdstatic.com/images/v1/brand-logos/lifeproof.png"

let img7=document.createElement("img")
img7.src="https://assets.thdstatic.com/images/v1/brand-logos/glacier-bay.png"

// let img1=document.createElement("img")
// img1.src="

brdiv.append(img1,img2,img3,img4,img5,img6,img7)
brands.append(brdiv)