function generatepassword (length,includelowercase,includeuppercase,includenumber,includesymbol){
    const lowercasechar = "abcdefghijjklmnopqrstuvwxyz"
    const uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "0123456789"
    const symbol = "!@#$%^&*()_-=+"

    let allowedchars = "";
    let password = "";

    allowedchars += includelowercase ? lowercasechar : "";
    allowedchars += includeuppercase ? uppercasechar : "";
    allowedchars += includenumber ? number : "";
    allowedchars += includesymbol ? symbol : ""; 

    if(length < 0){
        return `(Password must be at least 1)`;
    }
    if(allowedchars === 0){
        return `(At least 1 set of characters must be chosen)`;
    }
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}


const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumber = true;
const includesymbol = true;

const password =  generatepassword (passwordlength,includelowercase,includeuppercase,includenumber,includesymbol)

console.log(`Generated Password ${password}`);