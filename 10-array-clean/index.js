let arr = [1,2,3,4,9,10];

function filered (array,delFunction){
    let res = [];
    for (let i = 0; i < array.length; i++){
        let isDeleted = delFunction(array[i]);
        if(!isDeleted) res.push(array[i])
    }
    return res;//отфильтрованный массив
}

function deleted (num) {
    if(num < 5) return true;
    else return false;
}

arr = filered(arr,deleted);
console.log(arr);