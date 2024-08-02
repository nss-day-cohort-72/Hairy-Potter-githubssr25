// Imports go first

import { makePottery} from './PotteryWheel.js';
import {firePottery} from './Klin.js';
import {toSellOrNotToSell } from './PotteryCatalog.js'



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 5);
let bowl = makePottery("bowl", 2,6);
let plate = makePottery("plate",1,1);
let cup = makePottery("cup", 2,4);
let bottle = makePottery("bottle",3,5);
console.log(mug);
console.log(bowl);
console.log(plate);
console.log(cup);
console.log(bottle);

let mugFire = firePottery(mug, 1800);
let bowlFire = firePottery(bowl, 2300);
let plateFire = firePottery(plate, 2400);
let cupFire = firePottery(cup, 1600);
let bottleFire = firePottery(bottle, 2210);


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price

let toSellMug = toSellOrNotToSell(mug);
let toSellBowl = toSellOrNotToSell(bowl);
let toSellPlate = toSellOrNotToSell(plate);
let toSellCup = toSellOrNotToSell(cup);
let toSellBottle = toSellorNotToSell(bottle);



// Invoke the component function that renders the HTML list

