let result = document.getElementById("result");
let userPassword = document.getElementById("password");
let clearBtn = document.getElementById("clear")


userPassword.addEventListener("input", (e)=>{
    let password = userPassword.value;
    let strength = checkPasswordStrength(password);
    giveResult(strength);
})


function checkPasswordStrength(password){
    let score =0;
    if(password.length >=8) score++;
    
    if (/[A-Z]/.test(password)) score++;

    if (/[0-9]/.test(password)) score++;

    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return "Weak";
    if (score === 2 || score === 3) return "Medium";
      return "Strong";
}

function giveResult(strength){
    result.textContent = `Your password is: ${strength}.`
    if(strength==="Weak"){
        result.style.color= "red";
    }else if(strength === "Medium"){
        result.style.color="orange";
    }else{
        result.style.color="green"
    }
}
clearBtn.addEventListener("click", (event)=>{
    userPassword.value=""
    result.textContent=""
    result.style.color="black"
})

