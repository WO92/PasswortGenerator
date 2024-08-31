const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generatePass = document.getElementById("random")
let copyOne = document.getElementById("password1")
let copyTwo = document.getElementById("password1")
let passW2 = document.getElementById("display2")
let pass1 = ""
let pass2 = ""

function randomPassword(){
    for (let i = 0 ; i < 15; i++)
    {
        let a = Math.floor( Math.random()*91) + 1
        let b = Math.floor( Math.random()*91) + 1
        pass1 += characters[a]
        pass2 += characters[b]
    }
    document.getElementById("display1").textContent = pass1
    document.getElementById("display2").textContent = pass2
}
function copy1(){
   document.getElementById("message").textContent ="password was copied !"
}
function copy2(){
    document.getElementById("message").textContent ="password was copied !"
}


