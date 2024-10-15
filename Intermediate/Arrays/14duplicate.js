function duplicate(numbers){
    return [
        ... new Set(numbers)
    ]
}

let array = [1,1,2,3,4,5,6,7,7,1,8]
let num = duplicate(array);
console.log(num)