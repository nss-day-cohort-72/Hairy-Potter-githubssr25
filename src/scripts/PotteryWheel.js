

let potteryId = 1;

/**
 * Function to create a piece of pottery
 * @param {string} shape - The shape of the pottery piece (e.g. "Mug", "Platter")
 * @param {number} weight - The weight of the pottery piece
 * @param {number} height - The height of the pottery piece
 * @returns {Object} - An object representing the pottery piece with shape, weight, height, and a unique id
 */
export function makePottery(shape, weight, height) {
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    };

    // Increment the primary key for the next piece of pottery
    potteryId++;

    return potteryPiece;
}