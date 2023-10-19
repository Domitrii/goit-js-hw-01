function makeTransaction(quantity, ricePerDroid) {
    let totalPrice = quantity * ricePerDroid;
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
};

makeTransaction();