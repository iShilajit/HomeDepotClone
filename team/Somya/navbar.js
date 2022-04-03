const nav = () =>{
    return`<div class="d-flex d-none d-xl-block">
    <div id="message" class="container-fluid text-center">
        <span class="align-middle">#1 Home Improvement Retailer</span>
    </div>
</div>
<div id="stick" class="sticky-top">
<div id="nav" class="container-fluid">
    <div class="container d-none d-xl-block">
        <div class="d-flex justify-content-end align-items-center my-2">
            <div id="taskLinkList">
                <p><a>Store Finder</a></p>
                <p><a>Truck & Tool Rental</a></p>
                <p><a>For the Pro</a></p>
                <p><a>Gift Cards</a></p>
                <p><a>Credit Services</a></p>
                <p><a>Track Order</a></p>
                <p><a>Help</a></p>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <div id="logoPart">
            <div id="logo">
                <img src="https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg" style="width: 65px" alt="logo" onclick="home()">
            </div>
            <div id="location" class="container d-none d-xl-block">
                <a href="#" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" data-bs-content="Guam-Tamuning > Closes 11pm">
                    <p style="margin: 0">You're shopping</p>
                    <p style="margin: 0"><b>Guam-Tamuning</b></p>
                    <p><b>OPEN</b> until 11 pm</p>
                </a>
            </div>
            <div id="deliverTo" class="container d-none d-xl-block">
                <p style="margin: 0">Delivering to</p>
                <p><b>42040</b></p>
            </div>
        </div>
        <div id="searchbar">
            <div id="ser" class="d-flex justify-content-between">
                <div class="input-group mb-3"  style="width: 100%">
                    <input id="searchInput" type="text"  class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" autofocus placeholder="What can we help you find today?">
                    <div class="input-group-append">
                      <button id="searchBtn" class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </div>
                <div class="container d-none d-xl-block">
                    <div style="width: 60%;margin-left: 25%;" class="d-flex justify-content-around ">
                        <div class="dropdown">
                            <a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              My Account<i class="bi bi-person"></i>
                            </a>
                          
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a class="dropdown-item a1" href="/team/Somya/signin.html">Sign in</a></li>
                              <li><a class="dropdown-item a2" href="/team/Somya/signup.html">Register</a></li>
                              <li><div style="border-bottom: 1px solid gray"></div></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-box-seam"></i> Orders & Purchases</a></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-credit-card-2-back"></i> My Home Depot Credit Card</a></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-person"></i> Account Profile</a></li>
                              <li><a class="dropdown-item a3" href="/team/shilajit/cart.html"><i class="bi bi-cart-check"></i> Instant Checkout Settings</a></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-suit-heart"></i> Lists</a></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-tag"></i> My Subscriptions</a></li>
                              <li><a class="dropdown-item a3" href="#"><i class="bi bi-shield-shaded"></i> Military Discount Program</a></li>
                            </ul>
                        </div>
                        <a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Lists <i class="bi bi-suit-heart"></i>
                        </a>
                        <a class="btn btn-secondary macc" href="/team/shilajit/cart.html" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Cart <i class="bi bi-cart"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div class="container midscr">
                <div class="d-flex">
                    <div class="dropdown">
                        <a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          My Account<i class="bi bi-person"></i>
                        </a>
                      
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <li><a class="dropdown-item a1" href="./team/Somya/signin.html">Sign in</a></li>
                          <li><a class="dropdown-item a2" href="./team/Somya/signup.html">Register</a></li>
                          <li><div style="border-bottom: 1px solid gray"></div></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-box-seam"></i> Orders & Purchases</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-credit-card-2-back"></i> My Home Depot Credit Card</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-person"></i> Account Profile</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-cart-check"></i> Instant Checkout Settings</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-suit-heart"></i> Lists</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-tag"></i> My Subscriptions</a></li>
                          <li><a class="dropdown-item a3" href="#"><i class="bi bi-shield-shaded"></i> Military Discount Program</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Lists <i class="bi bi-suit-heart"></i>
                    </a>
                    <a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Cart <i class="bi bi-cart"></i>
                    </a>
                </div>
            </div>
            <div>
                <div class="dropdown smlscr">
                    <i class="bi bi-list" style="font-size: 40px" onclick="menudropdown()"></i>
                </div>
                <div id="dropMenu">
                    <ul>
                        <li><a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            My Account<i class="bi bi-person"></i>
                          </a></li>
                        <li><a class="btn btn-secondary macc" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Lists <i class="bi bi-suit-heart"></i>
                        </a></li>
                        <li><a class="btn btn-secondary macc" href="/team/shilajit/cart.html" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Cart <i class="bi bi-cart"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="abc" class="container-fluid d-none d-xl-block">
        <div class="container d-none d-xl-block">
            <div id="bottomBar" class="d-flex justify-content-around">
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          All Departments
                        </a>
                      
                        <ul class="dropdown-menu ads" aria-labelledby="dropdownMenuLink">
                          <li>
                              <div class="d-grid hov">
                                    <div><a class="dropdown-item" href="#"><p>Appliances</p></a></div>
                                    <div class="sideCard">
                                        <ul>
                                            <li><a href="./team/shilajit/ref.html">Refrigerators</a></li>
                                            <li><a href="./team/shilajit/washmachine.html">Washers & Dryers</a></li>
                                            <li><a href="#">Dishwashers</a></li>
                                            <li><a href="#">Microwaves</a></li>
                                            <li><a href="#">Wall Ovens</a></li>
                                            <li><a href="#">Cooktops</a></li>
                                            <li><a href="#">Vaccum Cleaners</a></li>
                                        </ul>
                                    </div>
                              </div>
                          </li>
                          <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Bath & Faucets</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                          <li><a href="#">Bathroom Collections</a></li>
                                          <li><a href="#">Bathroom Faucets</a></li>
                                          <li><a href="#">Kitchens Faucets</a></li>
                                          <li><a href="#">BAthroom Vanities</a></li>
                                          <li><a href="#">Bathtubs</a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Blinds & Window Treatment</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                          <li><a href="#">Blinds</a></li>
                                          <li><a href="#">Shades</a></li>
                                          <li><a href="#">Curtains</a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Building Materials</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                          <li><a href="#">Fencing</a></li>
                                          <li><a href="#">Decking</a></li>
                                          <li><a href="#">Plywood</a></li>
                                          <li><a href="#">Siding</a></li>
                                          <li><a href="#">Drywall</a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Cleaning</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                          <li><a href="#">Cleaing Supplies</a></li>
                                          <li><a href="#">Cleaning Tools</a></li>
                                          <li><a href="#">Trash & Recycling</a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Decor & Furniture</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Doors & Windows</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Electrical</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Flooring & Area Rugs</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Hardware</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Heating & Cooling</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Kitchen & Kitchenware</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Lawn & Garden</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Lighting & Ceiling Fans</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Outdoor Living & Patio</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Paint</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Plumbing</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Seasonal Decor</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Smart Home</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Storage & Organization</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Tools</p></a></div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Home Decor, Furniture & Kitchenware
                        </a>
                      
                        <ul class="dropdown-menu ads ads2" aria-labelledby="dropdownMenuLink">
                          <li>
                              <div class="d-grid hov">
                                    <div><a class="dropdown-item" href="#"><p>Home Decor</p></a></div>
                                    <div class="sideCard ext">
                                        <ul>
                                            <li><a href="#"><b>Home Accents</b></a></li><br>
                                            <li><a href="./team/Atul/vases.html">Vases</a></li><br>
                                            <li><a href="./team/Atul/sculptures.html">Sculptures</a></li><br>
                                            <li><a href="./team/Atul/decotraays.html">Decorative Trays</a></li><br>
                                            <li><a href="#">Decorative Pillows</a></li><br>
                                            <li><a href="#">Throw Blankets</a></li><br>
                                            <li><a href="#">Poufs</a></li><br>
                                            <li><a href="#"><b>Artificial Greenery</b></a></li><br>
                                            <li><a href="./team/Atul/artificialF.html">Artificial Flowers</a></li><br>
                                            <li><a href="./team/Atul/artificialP.html">Artificial Plants</a></li><br>
                                            <li><a href="#">Artificial Trees</a></li><br>
                                            <li><a href="./team/Atul/jewelry.html"><b>Decorative Storage</b></a></li><br>
                                            <li><a href="#"><b>Home Office</b></a></li><br>
                                            <li><a href="#"><b>Candles</b></a></li><br>
                                            <li><a href="#"><b>Rugs</b></a></li><br>
                                            <li><a href="#"><b>Luggage</b></a></li><br>
                                            </ul>
                                    </div>
                              </div>
                          </li>
                          <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Furniture</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                        <li><a href="#"><b>Living Room</b></a></li>
                                        <li><a href="#"><b>Entryway</b></a></li>
                                        <li><a href="#"><b>Bedroom Furniture</b></a></li>
                                        <li><a href="#"><b>Mattresses</b></a></li>
                                        <li><a href="#"><b>Home Office</b></a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Wall Decor</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                        <li><a href="#"><b>Wallpaper</b></a></li>
                                        <li><a href="#"><b>Wall Decor</b></a></li>
                                        <li><a href="#"><b>Wall Art</b></a></li>
                                        <li><a href="#"><b>Mirrors</b></a></li>
                                        <li><a href="#"><b>Wall Clocks</b></a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Small Kitchen Appliances</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                        <li><a href="#"><b>Mixers</b></a></li>
                                        <li><a href="#"><b>Coffee & Espresso</b></a></li>
                                        <li><a href="#"><b>Toasters</b></a></li>
                                        <li><a href="#"><b>Cookers</b></a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Kitchenware & Tableware</p></a></div>
                                  <div class="sideCard">
                                      <ul>
                                        <li><a href="#"><b>Cookware</b></a></li>
                                        <li><a href="#"><b>Tableware</b></a></li>
                                        <li><a href="#"><b>Drinkware</b></a></li>
                                        <li><a href="#"><b>Bakeware</b></a></li>
                                        <li><a href="#"><b>Serveware</b></a></li>
                                        <li><a href="#"><b>Knives & Cutlery</b></a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Bedding & Bath</p></a></div>
                            </div>
                            <div class="sideCard">
                                <ul>
                                    <li><a href="#"><b>Sheets</b></a></li>
                                    <li><a href="#"><b>Sets</b></a></li>
                                    <li><a href="#"><b>Blankets</b></a></li>
                                    <li><a href="#"><b>Towels</b></a></li>
                                    <li><a href="#"><b>Robes & Sleepwear</b></a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Lighting</p></a></div>
                            </div>
                            <div class="sideCard">
                                <ul>
                                    <li><a href="#"><b>Ceiling Fans</b></a></li>
                                    <li><a href="#"><b>Outdoor Lighting</b></a></li>
                                    <li><a href="#"><b>Chandeliers</b></a></li>
                                    <li><a href="#"><b>Ceiling Lights</b></a></li>
                                    <li><a href="#"><b>Light Bulbs</b></a></li>
                                    <li><a href="#"><b>Lamps</b></a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Window Treatment</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Flooring & Area Rugs</p></a></div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            DIY Projects & Ideas
                        </a>
                      
                        <ul class="dropdown-menu ads ads2" aria-labelledby="dropdownMenuLink">
                          <li>
                              <div class="d-grid hov">
                                    <div><a class="dropdown-item" href="#"><p>Home Decor Ideas</p></a></div>
                                    <div class="sideCard ext">
                                        <ul>
                                            <li><a href="./team/Prithvi/bathroomIdeas.html">Bathroom</a></li>
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Paint</a></li>
                                            <li><a href="#">Bedroom</a></li>
                                            <li><a href="#">Dining Room</a></li>
                                            <li><a href="#">Flooring</a></li>
                                            <li><a href="#">Hallway & Wall</a></li>
                                            <li><a href="#">Small Spaces</a></li>
                                            </ul>
                                    </div>
                              </div>
                          </li>
                          <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Home Entertaining</p></a></div>
                                  <div class="sideCard ext">
                                      <ul>
                                          <li><a href="#">Halloween</a></li>
                                          <li><a href="#">Christmas</a></li>
                                          <li><a href="#">Thanksgiving</a></li>
                                          <li><a href="#">Parties & Events</a></li>
                                          <li><a href="#">Cooking</a></li>
                                          </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Outdoor Living</p></a></div>
                                  <div class="sideCard ext">
                                      <ul>
                                          <li><a href="#">Gardening</a></li>
                                          <li><a href="#">Pest Control</a></li>
                                          <li><a href="#">Patios</a></li>
                                          <li><a href="#">Grills</a></li>
                                      </ul>
                                  </div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Remodelling Resources</p></a></div>
                            </div>
                        </li>
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Moving How-tos & More</p></a></div>
                            </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="./team/Rashid/cal.html" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Project Calculators
                        </a>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="./team/Rashid/install.html" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Installation & Services
                        </a>
                      
                       
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Special & Offers
                        </a>
                      
                        <ul class="dropdown-menu ads ads2" aria-labelledby="dropdownMenuLink">
                          <li>
                              <div class="d-grid hov">
                                    <div><a class="dropdown-item" href="#"><p>Tools</p></a></div>
                              </div>
                          </li> 
                          <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Kitchen</p></a></div>
                            </div>
                          </li>
                          <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Flooring & Tile</p></a></div>
                            </div>
                        </li> 
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Paint</p></a></div>
                            </div>
                        </li> 
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Furniture</p></a></div>
                            </div>
                        </li> 
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Electrical</p></a></div>
                            </div>
                        </li> 
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Plumbing</p></a></div>
                            </div>
                        </li> 
                        <li>
                            <div class="d-grid hov">
                                  <div><a class="dropdown-item" href="#"><p>Hardware</p></a></div>
                            </div>
                        </li>  
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="dropdown">
                        <a class="btn btn-secondary alld" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Local Ad & Catalog
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>`
}

export default nav