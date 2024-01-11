function getPassword8(){

    var chars = "0123456789101002281337ABCDISDFKLkdfjglsdfkJSDKLFJSKLDFJKLSDFJKLSDJFKLD";
    var passwordLength = 8;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password
}
function getPassword16(){

    var chars = "0123456789101002281337ABCDISDFKLkdfjglsdfkJSDKLFJSKLDFJKLSDFJKLSDJFKLD";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password
}
function getPassword32(){

    var chars = "0123456789101002281337ABCDISDFKLkdfjglsdfkJSDKLFJSKLDFJKLSDFJKLSDJFKLD";
    var passwordLength = 32;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password
}
function getPasswordSymbols(){

    var chars = "0123456789101002281337ABCDISDFKLkdfjglsdfkJSDKLFJSKLDFJKLSDFJKLSDJFKLD_-*%№@!$^?()";
    var passwordLength = 16;
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password
}

// lol