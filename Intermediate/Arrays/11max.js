function findMax(array) {
    let max = array[0];
    for (let counter = 1; counter < array.length; counter++) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    return max;
}

let numbers = [5, 12, 3, 9, 10, 7];
const maximum = findMax(numbers);
console.log(maximum);
