

export function firePottery(potteryObject, firingTemp) {
    potteryObject.fired = true;
    potteryObject.cracked = firingTemp > 2200;
    return potteryObject;
}

