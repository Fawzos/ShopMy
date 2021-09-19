/**
 * generate slider scheme from products
 */
const generateSliderData = (products) => {
  let numberOfIterations = Math.ceil(products?.length / 3);
  let outputArray = [];
  for (let i = 0; i < numberOfIterations; i++) {
    let x = products.splice(0, 3);
    outputArray.push(x);
  }
  return outputArray;
};

export default generateSliderData;
