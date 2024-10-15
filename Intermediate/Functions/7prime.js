function isPrime(number) {
    let prime = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                prime = false;
                break;
            }
        }
        console.log(prime);
    }
}
isPrime(11);
