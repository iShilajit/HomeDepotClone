var details= [ {
    url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/tilecalculator-mob.jpg",
    name:"TILE CALCULATOR",
    mtr:"Our tile calculator removes the guesswork. Select your tiles and enter your square footage to get the right quantity for your project."
},
{

    url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/countertops-mob.jpg",
    name:"COUNTERTOP CALCULATOR",
     mtr:"Measure your countertop – multiplying the length times width – to determine the total square footage of the area you will be working on. Then, enter the dimensions into our calculator to gauge the amount of material you will need to complete your project.",
},
{
    url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/moving-mob.jpg",
    name:"MOVING CALCULATOR",
    mtr:"Our moving calculator will help determine how many large, medium and small size boxes you need based on the size of your home. Moving can be expensive so this is a great alternative to spending all day gathering quotes.",
},

{
    url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/mulch-mob.jpg",
    name:"MULCH CALCULATOR",
 mtr:"Our mulch calculator will help you determine the number of bags needed for proper mulch coverage in your landscape. Enter your preferred type of material, the square footage of the space to be covered and mulch depth for accurate results.",
},

{
    url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/air-conditioning-calculator-dsk.jpg",
    name:"AIR CONDITIONING CALCULATOR",
    mtr:"Before you can get an air conditioner, you’ll need to calculate the right BTU range (cooling cap for your room)",
},

 {
     url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/wall-paper-calculator-dsk.jpg",
     name:"WALLPAPER CALCULATOR",
      mtr:"Our wallpaper calculator is an easy way to figure out the number of wallpaper rolls you’ll need to cover a single wall or a whole room. Enter the number of walls, wall dimensions and coverage amount to get started."
 },


 {
     url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/grass-seed-calculator-dsk.jpg",
     name:"GRASS SEED CALCULATOR",
     mtr:"This calculator estimates how much seed you'll need to plant a beautiful lawn or overseed existing grass. Simply give us the dimensions of the area and the type of grass you'd like to grow."

 },
 {
     url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/insulation-calculator-dsk.jpg",
     name:"INSULATION CALCULATOR",
      mtr:"Installing the right amount of insulation can help you stay comfortable and save energy. Our insulation calculator can determine the number of bags of insulation you’ll need based on both square footage and climate.",
 },

 {
     url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/decking-calculator-dsk.jpg",
     name:"DECKING CALCULATOR",
      mtr:"Our decking calculator lets you get a fresh look without replacing your entire deck. Enter your dimensions, choose your colors and we’ll determine the amount of material you’ll need for a decking project.",
  },

  {
      url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/paint-calculator.jpg",
      name:"PAINT CALCULATOR",
       mtr:"Quickly estimate how many quarts or gallons of paint you need for your project with our paint calculator. We'll even factor in windows and trim.",
    },

    {
        url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/drywall-B.jpg",
        name:"DRYWALL CALCULATOR",
       mtr:"Let us know the size of the area you need covered with drywall and find out how much material you will need. Don’t forget the dimensions of doors and windows to cut out."
},

{
url:"https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/fencing-calculator-dsk.png",
name:"FENCING CALCULATOR",
mtr:"Before you can install a fence, you need to know how much fencing material you'll need. We'll calculate the amount of fencing you should purchase based on your property needs."
},
]


let display=document.getElementById("container")

localStorage.setItem("data", JSON.stringify("details"));

var Arr = JSON.parse(localStorage.getItem("data")) || [];


function displayData(details) {

document.querySelector("#container").innerHTML = "";
details.map(function (elem, index, array) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", elem.url);
    img.setAttribute("class","image")

    var name = document.createElement("h2");
    name.innerText = elem.name;

    var tag = document.createElement("p");
    tag.innerText = elem.mtr;

    div.append(img, name, tag, );
    document.querySelector("#container").append(div);
})
}

displayData(details)
