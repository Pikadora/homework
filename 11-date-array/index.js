let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function filerDate (array) {
    let resArr = [];
    array.forEach(element => {
        let res = new Date(element) 
        if(res instanceof Date && !isNaN(res.getTime())){
            resArr.push(element)
        }
    });
    return resArr;
}

console.log(filerDate(arr));
