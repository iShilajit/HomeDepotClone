
import nav from "./navbar.js"
let da = nav()

document.getElementById("header").innerHTML = da
// let s=document.getElementById("searchInput");
// s.addEventListener("click",()=>{
//     window.location.href="./team/shilajit/search.html";
// })

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
//     var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//       return new bootstrap.Popover(popoverTriggerEl)
//     })

    const home = ()=>{
        location.href = "/index.html"
    }
document.getElementById("logo").addEventListener("click", ()=>{
    location.href = "/index.html"
})
    var click = 0
    const menudropdown = ()=>{
        // console.log("clicked")
        click++
        let box = document.getElementById("dropMenu")
        if (click%2!=0){
            box.style.display = "block"
        }
        else if(click%2==0)
        {
            box.style.display = "none"
        }
    }
    