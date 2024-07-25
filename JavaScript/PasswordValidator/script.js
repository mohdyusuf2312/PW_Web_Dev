let password = document.querySelector("#enterPassword");
console.log(password.value);

let confirm_password = document.querySelector("#confirmPassword");
console.log(confirm_password.innerText);

let btn = document.querySelector("#submit");
let h3 = document.querySelector("#message");

function checks(){
    if(password.value.length < 8){
        h3.innerText = "Your Password is less than 8 character. please input at least 8 character."
    }
    else if(password.value === confirm_password.value){
        h3.innerText = "Password Matched. Password validation Successful.";
    }
    else{
        h3.innerText = "Password didn't match. Password validation unsuccessful.";
    }
}

btn.addEventListener("click", checks);