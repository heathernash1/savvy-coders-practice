const products = [
  {
    name: "product 1",
    weight: 33
  },
  {
    name: "product 1",
    weight: 21
  },
  {
    name: "product 2",
    weight: 11
  },
  {
    name: "product 3",
    weight: 2
  },
  {
    name: "product 4",
    weight: 5
  },
  {
    name: "product 5",
    weight: 18
  },
  {
    name: "product 6",
    weight: 20
  },
  {
    name: "product 7",
    weight: 6
  },
  {
    name: "product 8",
    weight: 3
  },
  {
    name: "product 9",
    weight: 311
  },
  {
    name: "product 10",
    weight: 10
  }
];

function kgs2Lbs(lbs) {
  return 2.2 * kgs;
}

/**
 * TODO: The items above have weights in POUNDS.
 * We need to convert the weights to KILOGRAMS,
 * and then build an Array that only has those that weight over 25 KILOGRAMS.
 * These heavier products need to be shipped separately,
 * so we have to separate them out.
 */
const heavyShipment = products
.map( product => {
   product.weight = kgs2Lbs(product.weight)
return product;
})
.filter(product => is);
console.log (grams(product));
function isHeavy(product, threshold){
  return product > threshold;
}
const heavyShipmentWeight = heavyShipment.reduce( totalWeight, currentProduct ) =>
(totalWeight  += currentProduct.weight), 0
