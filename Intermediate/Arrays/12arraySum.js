function sum(array) {
    let totalSum = array[0];
    for (let counter = 1; counter < array.length; counter++){
            totalSum += array[counter];
        }
    return totalSum;
}

let numbers = [5, 12, 3, 9, 10, 7];
const total = sum(numbers);
console.log(total);