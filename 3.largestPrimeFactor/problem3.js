// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 13195 ?


function largestPrimeFactor(number){
 let largest = 1;
 for(let i =1;i<=number/2;i++){
     if(number% i ===0 && isPrime(i) ){

     }
 }
}

function isPrime(number){
    for(let i =2;i<number;i++){
        if(number%i === 0) return false;
    }
    return true
}

largestPrimeFactor(13195)

//to check if the number is Prime,create another fn isPrime
//Cant loop entire numbers,so lets loop half of numberS