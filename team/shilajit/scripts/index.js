let bannerData=JSON.parse(localStorage.getItem("banner"))||[];

let catData=JSON.parse(localStorage.getItem("cat"))||[];



console.log(bannerData);
let i=1;
let slideshow = document.getElementById("slider");
let img = document.createElement("img");
img.setAttribute("id","slideimg")
img.src = bannerData[2];
slideshow.append(img)

setInterval(function(){
    if(i==bannerData.length){
        i=0
    }

    let image = bannerData[i]
    slideshow.innerHTML = null;

    let img = document.createElement("img");
    img.src = image

    slideshow.append(img);
    i++;
}, 3000);


//shop by category

let displaycat=document.getElementById("displaycat");

const showCat=(catData)=>{
    displaycat.innerHTML=""
    catData.map((el)=>{
        let div = document.createElement("div");
        div.setAttribute("id","catdiv");
        let img = document.createElement("img");
        img.src = el
        div.append(img)
        displaycat.append(div)
    })
}

showCat(catData);