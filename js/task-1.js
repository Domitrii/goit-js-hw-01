function makeTransaction(quantity, ricePerDroid) {
    let totalPrice = quantity * ricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
};

makeTransaction();

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500));