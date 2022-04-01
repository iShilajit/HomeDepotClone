const toCrAcPg = () => {
    location.href = "./signup.html"
}

document.getElementById("logo").addEventListener("click",() => {
    // location.href = ""   to home page
})

var users = JSON.parse(localStorage.getItem("CreatedAccount"))
console.log("🚀 ~ file: signin.html ~ line 127 ~ users", users)

document.getElementById("formH").addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(document.querySelector("#email").value == "" || document.querySelector("#password").value== "")
    {
        // console.log("yes")
        alert("Please enter your email address and password")
        return
    }
    else{
        var email = document.querySelector("#email").value
        var pass = document.querySelector("#password").value

        var flag = false
        for(var i=0;i<users.length;i++)
        {
            if(email == users[i].email && pass == users[i].password)
            {
                flag = true
            }
        }

        if(flag == true)
        {
            // console.log("yes")
            alert("Log-in Successful")
            // location.href = ""                    to home page
        }
        
        else alert("Wrong Email or Password")
        
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
    }   

})