//const{subCalculator, multiCalculator, addMore, divCalculator, addCalculator} = require("./calculator");
const{analyzeArr} = require("./calculator");
/*
test("substraction of 3 and 2 to equal 1", () => {
  expect(subCalculator(3, 2)).toBe(1);
});

test("multiplication of 3 and 2 to equal 6", () => {
  expect(multiCalculator(3, 2)).toBe(6);
});

test("multiplication when one of the parametars is string", () => {
  expect(() => multiCalculator(3, 'a')).toThrow("parametars can't be strings");
});

test("multiplication when both of the parametars are strings", () => {
  expect(() => multiCalculator('asc', 'a')).toThrow("parametars can't be strings");
});

test("addition of 2 and 3 and 1 to equal 6", () => {
   expect(addMore(2, 3, 1)).toBe(6);
 });
 
test("division of 6 and 2 to equal 3", () => {
   expect(() => divCalculator(6, 0)).toThrow();
 });

test("not enough parametars", () => {
  expect(addCalculator(6,2)).toBe(8);
});  

test("not enough parametars", () => {
  expect(() => addCalculator(6)).toThrow("not enough parametars");
});  
*/



test("array consists of numbers and strings", () => {
  let arr = [1,2,3,'123',1234,1,0,451,886]
  //expect(() => addCalculator(6)).toThrow("not enough parametars");
  expect(() => analyzeArr(arr)).toThrow("Array elements can't be strings");
});

