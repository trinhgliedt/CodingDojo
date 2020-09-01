//-------------------------------------------------#1: Prime number

//Original:
Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


//Rewrite isPrime() to calculate primes faster
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
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`); //104729
console.log(`This took ${performance.now() - start} milliseconds to run`); //This took 309.549899995327 milliseconds to run

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
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`); // 1299709
console.log(`This took ${performance.now() - start} milliseconds to run`); //This took 7795.614799976349 milliseconds to run

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
console.log(`The 10,000th prime number is ${num-1}`); // 15485863
console.log(`This took ${performance.now() - start} milliseconds to run`); //This took 270667.79809999466 milliseconds to run

//---------------------------------------#2: Which implementation of Fibonacci should be faster?
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);