function print(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        } 
    }
}

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Red'
};

print(car);
