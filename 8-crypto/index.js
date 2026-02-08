let passDefault = 'password';

function crypto (pass) {
    let passArr = pass.split('');
    let cryptoPassArr = [passArr.slice(2,4),passArr.slice(0,2).reverse(),passArr.slice(-1),passArr.slice(5,7),passArr.slice(4,5)];
    let res = cryptoPassArr.flat().join('');
    
    console.log(res);
    return res;
}

function check (defPass, inPass){
    let defPassArr = defPass.split('');
    let defArr = [defPassArr.slice(2,4).reverse(),defPassArr.slice(0,2),defPassArr.slice(-1),defPassArr.slice(5,7),defPassArr.slice(4,5)];
    let defRes = defArr.flat().join('');
    
    console.log(defRes);

    if (defRes === inPass) return true;
    
    return false;
}

let cryptoPass = crypto(passDefault);
let userPass = prompt("Введите пароль");

console.log(check(cryptoPass,userPass));


