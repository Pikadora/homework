let userLanguage = prompt("Введите страну:");

switch(userLanguage){
    case "en":
        console.log("Good evening!");
        break;
    case "ru":
        console.log("Добрый вечер!");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    default:
        console.log("Не понял страну, поэтому Хеллоу");
        break;
}