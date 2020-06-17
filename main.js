// Your code here!

const colorCombinator = require("./color-combinator");
const colorDeconstructor = require("./color-deconstructor");

const colorOne = getInput(0);
const colorTwo = getInput(1);

const combineColors = colorCombinator(colorOne, colorTwo);
const deconstructColor = colorDeconstructor(colorOne);

if (colorOne === undefined && colorTwo === undefined) {
  console.log('You need to enter a color!');
} 
if (colorOne !== undefined && colorTwo === undefined) {
  console.log(deconstructColor);
}
if (colorOne !== undefined && colorTwo !== undefined) {
  console.log(combineColors);
}











// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
