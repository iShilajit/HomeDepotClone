let fridgeData =JSON.parse(localStorage.getItem("fridge"))||[];
console.log("fridgeData",fridgeData);
var cartAdd=[];

const main = document.querySelector(".main");

const showFridge=(fridgeData)=>{
    fridgeData.map((el,index)=>{
        let div=document.createElement("div");
        div.setAttribute("id","add");

        let img = document.createElement("img");
        img.setAttribute("id","image");
        img.src=el.imgUrl;
        let hovimg = document.createElement("img");
        hovimg.setAttribute("id","hovimage");
        hovimg.src=el.hovimgurl;

        let wishimg=document.createElement("p");
        
        wishimg.setAttribute("id","wishimg");
        wishimg.innerHTML=el.wishimgurl;


        let title = document.createElement("h4");
        title.innerText=el.title;
        let headdiv=document.createElement("div");
        headdiv.setAttribute("id","headdiv");
        headdiv.append(title);


        let modelratediv=document.createElement("div");
        modelratediv.setAttribute("id","modelratediv");
        let model = document.createElement("p");
        model.innerText=el.model;
        let rate = document.createElement("p");
        rate.innerText=el.rate;
        modelratediv.append(model,rate)



        let pricediv=document.createElement("div");
        pricediv.setAttribute("id","pricediv");
        let price = document.createElement("p");
        price.innerText=`$${el.price}`;
        let strike = document.createElement("strike");
        strike.innerText=`${el.strikeprice}`;

        pricediv.append(price,strike)

        let infodiv=document.createElement("div");
        infodiv.setAttribute("id","infodiv");


        let rebates=document.createElement("p");
        rebates.innerText=`Get up to 1 Rebate for - ${el.rebates}`;
        let capacity=document.createElement("p");
        capacity.innerText=`Total Capacity (cu. ft.) - ${el.capacity}`
        let htt=document.createElement("p");
        htt.innerText=`Height to Top (in.) - ${el.htt}`;

        let indepth=document.createElement("p");
        indepth.innerText=`Installation Depth - ${el.indepth}`;

        let depth=document.createElement("p");
        depth.innerText=`Depth - ${el.depth}`
        let dispenser=document.createElement("p");
        dispenser.innerText=`Ice Maker Features - ${el.dispenser}`

        infodiv.append(rebates,capacity,htt,indepth,depth,);

        



        let addtocart=document.createElement("button");
        addtocart.setAttribute("id","addtocart");
        addtocart.innerText=`Add to Cart`;
        addtocart.addEventListener("click",()=>{
            gocart(el,index)
        })

        div.append(img,hovimg,wishimg,headdiv,modelratediv,pricediv,infodiv,addtocart);
        main.append(div)
    })

}


showFridge(fridgeData)

const gocart=(d,i)=>{
    console.log("ssssss",d);
    cartAdd.push(d);
    console.log(cartAdd);
    localStorage.setItem("cartItems",JSON.stringify(cartAdd))
}