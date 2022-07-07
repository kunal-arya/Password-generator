const passBtn = document.querySelector('.passwordBtn');
const passwordOne = document.querySelector('[data-pass1]');
const passwordTwo = document.querySelector('[data-pass2]')

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords(pass) {
    let length = 15;
    // For Loop
    for(let i = 0 ; i < length ; i++){
        let random = Math.floor(Math.random() * characters.length);
        pass += characters[random]
    }
    console.log(pass)
    return pass;
}

let check = "";

generatePasswords(check)

function passBtnClickHandler() {
    let pass1 = "";
    let pass2 = "";
    pass1 = generatePasswords(pass1);
    pass2 = generatePasswords(pass2);
    passwordOne.innerText = pass1;
    passwordTwo.innerText = pass2;
}

passBtn.addEventListener("click", passBtnClickHandler);