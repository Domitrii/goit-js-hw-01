function makeTransaction(quantity, ricePerDroid) {
    let totalPrice = quantity * ricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
};

makeTransaction();