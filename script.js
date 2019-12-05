var lengthx = document.getElementById("length");
var pwlengthx = document.getElementById("pwlength")

function generate(){

    var pwlength = lengthx.value;

    var charactors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-=+[]{};#:@~,./<>?";

    var password = "";

   
    for (i = 0; i <= pwlength; i++){
        password = password + charactors.charAt(Math.floor(Math.random() * Math.floor(charactors.length - 1)));
    }
    
    console.log(password)
    document.getElementById("displayPassword").value = password;
}

lengthx.innerHTML = "Length: 8";

lengthx.oninput = function (){
    if(lengthx.value > 0){
        pwlengthx.innerHTML = "Length: " + lengthx.value;
    }       
    
}

function copy(){
    document.getElementById("displayPassword").select();
    document.execCommand("copy");
    alert("Copy to clipboard");
}
