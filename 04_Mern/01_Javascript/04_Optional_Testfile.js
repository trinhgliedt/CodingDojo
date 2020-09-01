//Try calculating the 100,000th and 1,000,000th prime numbers
Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this% i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`); // 1299709
console.log(`This took ${performance.now() - start} milliseconds to run`);