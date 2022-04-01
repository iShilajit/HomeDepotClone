const get = (x) => {
    return document.getElementById(x)
}



var arrCrAc = JSON.parse(localStorage.getItem("CreatedAccount")) || []
document.getElementById("crAcc").addEventListener("submit", (e) =>{
    e.preventDefault();
    let email = get("email").value
    let password = get("password").value
    let zip = get("zip").value
    let phone = get("phone").value
    if(email == "" || password == "" || zip == "" || phone == "")
    {
        alert("Please enter the complete information.")
    }
    else{
        let obj = {
            email: email,
            password: password,
            zip: zip,
            phone: phone
        }
        arrCrAc.push(obj)
        localStorage.setItem("CreatedAccount", JSON.stringify(arrCrAc))
        location.href = "./signin.html"
    }
})