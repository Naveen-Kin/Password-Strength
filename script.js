
var pass = document.getElementById ("password");
var msg = document.getElementById ("message");
var str = document.getElementById ("strenght");

pass.addEventListener ('input', ()=>{
    if(pass.value.length > 0) {
        msg.style.display ="block";
    }
    else {
        msg.style.display ="none";
    }
     if (pass.value.length < 6){
        str.innerHTML = "&#128545";
    }
    else if (pass.value.length >= 6 && pass.value.length < 8){
            str.innerHTML = "&#128528";
    }
    else if (pass.value.length >= 8){
            str.innerHTML = "&#128513";
    }
});