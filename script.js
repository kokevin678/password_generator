function generate(){

    var pwlength = document.getElementById("length").value;

    var charactors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-=+[]{};#:@~,./<>?";

    var password = "";

   
    for (i = 0; i <= pwlength; i++){
        password = password + charactors.charAt(Math.floor(Math.random() * Math.floor(charactors.length - 1)));
    }
    
    console.log(password)
    document.getElementById("displayPassword").value = password;
}

document.getElementById("pwlength").innerHTML = "Length: 8";

document.getElementById("length").oninput = function (){
    if(document.getElementById("length").value > 0){
        document.getElementById("pwlength").innerHTML = "Length: " + document.getElementById("length").value;
    }
    
}

function copy(){
    document.getElementById("displayPassword").select();
    document.execCommand("copy");
    alert("Copy to clipboard");
}
