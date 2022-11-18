var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }
    var password = document.getElementById('password')
    var chars = "0123456789abcdefghijklmnoprstuvyzx!@#$%^&*_ABCDEFGHIJKLMNOPRSTUVYZX"

    function generatePassword(){
        var password=''
        var passwordLength = document.getElementById('myRange').value
    for(var i = 0 ; i <= passwordLength  ; i++){
        var randomNumber = Math.floor(Math.random()* chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
     }
    document.getElementById('password').value = password
    }

    function copyPassword(){
    var copyText = document.getElementById('password')
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    }

