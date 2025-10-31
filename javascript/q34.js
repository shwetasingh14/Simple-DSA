
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function canBeSumOfTwoPrimes(n) {
    let found = false;
    for (let i = 2; i <= n / 2; i++) {
        if (isPrime(i) && isPrime(n - i)) {
            console.log(`${n} = ${i} + ${n - i}`);
            found = true;
        }
    }
    if (!found) {
        console.log(`${n} cannot be expressed as the sum of two prime numbers.`);
    }
}


let number = parseInt(prompt("Enter a number:"));
if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    canBeSumOfTwoPrimes(number);
}
