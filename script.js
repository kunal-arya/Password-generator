const passBtn = document.querySelector('.passwordBtn');
const passwordOne = document.querySelector('#password-one');
const passwordTwo = document.querySelector('#password-two');
const passwordLength = document.querySelector('[data-pass-length]')


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePasswords(pass) {
    let length = 15;
    // For Loop
    for(let i = 0 ; i < length ; i++){
        let random = Math.floor(Math.random() * characters.length);
        pass += characters[random]
    }
    return pass;
}

function passBtnClickHandler() {
    let pass1 = "";
    let pass2 = "";
    pass1 = generatePasswords(pass1);
    pass2 = generatePasswords(pass2);
    passwordOne.value = pass1;
    passwordTwo.value = pass2;
    copyPassClickHandler();
}

function copyPassClickHandler() {
    navigator.clipboard.writeText(passwordOne.innerText).then(
        function() {
            console.log(`Text has been copied`)
        }
    )
}


passBtn.addEventListener("click", passBtnClickHandler);


