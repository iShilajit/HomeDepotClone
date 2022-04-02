
import nav from "/team/Somya/navbar.js"
let da = nav()
let all=JSON.parse(localStorage.getItem("alldata"))||[];
let inp=document.getElementById("searchInput");

inp.addEventListener("onkeyup",()=>{
    search()
})

const search=()=>{
    let searchInput=document.getElementById("searchInput").value;
    console.log(searchInput)
    }
