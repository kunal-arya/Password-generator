const passwordBtn = document.querySelector('.passwordBtn');
const passwordOne = document.querySelector('#password-one');
const passwordTwo = document.querySelector('#password-two');
const passwordLength = document.querySelector('[data-pass-length]');
const textCopiedMsgEl = document.querySelector('[data-text-copied]');
const hideCopiedMsgEl = document.querySelector('.hideCopied');
const copiedExitBtn = document.querySelector('.copiedExitBtn');
const numbersCheck = document.querySelector('#numbers');
const symbolsCheck = document.querySelector('#symbols');

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let charPlusNum = characters.concat(numbers);
let charPlusSymbol = characters.concat(symbols);
let totalChar = charPlusNum.concat(symbols);


function generatePasswords(pass) {
    let length = passwordLength.value;
    let character;
    if(numbersCheck.checked == true && symbolsCheck.checked == true){
        character = totalChar;
    } else if(numbersCheck.checked == true && symbolsCheck.checked == false){
        character = charPlusNum;
    } else if(numbersCheck.checked == false && symbolsCheck.checked == true){
        character = charPlusSymbol;
    } else if(numbersCheck.checked == false && symbolsCheck.checked == false){
        character = characters;
    }
    console.log(character);
    // For Loop
    for(let i = 0 ; i < length ; i++){
        let random = Math.floor(Math.random() * character.length);
        pass += character[random]
    }
    return pass;
}

function passwordBtnClickHandler() {
    let pass1 = "";
    let pass2 = "";
    pass1 = generatePasswords(pass1);
    pass2 = generatePasswords(pass2);
    passwordOne.value = pass1;
    passwordTwo.value = pass2;
}

function textCopy(password) {
    if(password.value == "") return;
    navigator.clipboard.writeText(password.value)
    .then(() => {
        textCopiedMsgEl.classList.remove("hideCopied");
        textCopiedMsgEl.classList.add("showCopied");
        setTimeout(()=> {
            textCopiedMsgEl.classList.add("hideCopied");
            textCopiedMsgEl.classList.remove("showCopied");
        }, 1000)
    })
}

function copiedExitClickHandler () {
    textCopiedMsgEl.classList.remove("hideCopied");
}

passwordBtn.addEventListener("click", passwordBtnClickHandler);
copiedExitBtn.addEventListener('click', copiedExitClickHandler);
passwordOne.addEventListener("click", () => {
    textCopy(passwordOne)
});
passwordTwo.addEventListener("click", () => {
    textCopy(passwordTwo)
});


