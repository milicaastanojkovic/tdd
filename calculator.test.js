const{subCalculator, multiCalculator, addMore, divCalculator, addCalculator} = require("./calculator");

test("substraction of 3 and 2 to equal 1", () => {
  expect(subCalculator(3, 2)).toBe(1);
});

test("multiplication of 3 and 2 to equal 6", () => {
  expect(multiCalculator(3, 2)).toBe(6);
});

test("addition of 2 and 3 and 1 to equal 6", () => {
   expect(addMore(2, 3, 1)).toBe(6);
 });

 
test("division of 6 and 2 to equal 3", () => {
   expect(divCalculator(6, 0)).toBe(Infinity);
 });


// test("not enough parametars", () => {
//   expect(addCalculator(6)).toThrow("Not enough arguments; two expected");
// });  


test("not enough parametars", () => {
  expect(addCalculator(6,2)).toBe(8);
});  


test("not enough parametars", () => {
  expect(addCalculator(6)).toThrow(TypeError);
});  

 