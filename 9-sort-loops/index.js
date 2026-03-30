const arr = [1, 40, -5, 10, 0];

function sort (array){
    for(let i = 0; i <= array.length - 1; i++){
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Меняем элементы местами
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    
    return array
}
console.log(sort(arr))