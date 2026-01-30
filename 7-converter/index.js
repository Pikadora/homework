function convertTo(sum,currency1, currency2){
    const curs = 97;
    if(currency1 === "руб" && currency2 === "$"){
        return sum/curs;
    }
    else{
        console.log("Не умею")
    }
}

console.log(convertTo(1000,"руб", "$"))