// calling one function in another function

const fruitCutter = function(cutapple) {
  return cutapple * 4;
};

function fruit(apple, pineapple) {
  const cuttingApple = fruitCutter(apple);
  const cuttingPineApple = fruitCutter(pineapple);

  const juice = `there are ${cuttingApple} apple pieces and ${cuttingPineApple} pineapple pieces for jucie`;
  return juice;
}
console.log(fruit(2, 3));
