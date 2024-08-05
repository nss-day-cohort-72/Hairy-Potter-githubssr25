
import { usePottery } from './PotteryCatalog.js';

export const potteryList = () => {

let potteryHTML = "";

let itemsToSell = usePottery();

for(const item of itemsToSell){
potteryHTML += `
<section class="pottery" id="${item.potteryId}">
  <h2 class="pottery__shape">Pottery Shape: ${item.shape}</h2>
  <div class="pottery__properties">
    Item weighs ${item.weight} grams and is ${item.height} cm in height
  </div>
  <div class="pottery__price">Price is ${item.price}</div>
</section>`;
}

return potteryHTML;






}