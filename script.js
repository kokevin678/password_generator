// var charactors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-=+[]{};#:@~,./<>?";
// var generate = document.getElementById("generate");
var save = document.getElementById("copy")

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