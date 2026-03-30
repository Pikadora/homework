let arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function filterDate (array) {
    return array.filter(element => {
        let res = new Date(element); 
        return res instanceof Date && !isNaN(res.getTime())
    })
    .map(el => {
            let date = new Date(el);
            return date.toLocaleString('ru-RU').split(",")[0].toString();
    });
}

console.log(filterDate(arr));
