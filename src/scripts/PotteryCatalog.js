

let storePottery = [];

export function toSellOrNotToSell (potteryObject) {

    if(!potteryObject.cracked){
    if(potteryObject.weight > 6){
        potteryObject.price = 40;
    } else {
        potteryObject.price = 20;
    }
    storePottery.push(potteryObject);
}

return potteryObject;

}

export function usePottery() {
    return [...storePottery];
    // or return const copyArray = originalArray.slice()
}