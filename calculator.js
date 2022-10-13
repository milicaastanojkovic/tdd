  function subCalculator (a, b) {
    return a - b;
  }

  // function addCalculator(a, b) {
  //   try 
  //   {
  //     if(a === undefined || b === undefined)
  //         throw "not enough parametars";
  //     else return a + b;
  //   }
  //   catch(error)
  //   {
  //     console.log(error);
  //     throw error;
  //   }
  // }  

  function addCalculator(a,b){
    if(arguments.length < 2) 
      throw "not enough parametars";
    else return a + b;
  }

  function multiCalculator (a, b) {
    if (typeof a === 'string' || a instanceof String || typeof b === 'string' || b instanceof String) 
      throw "parametars can't be strings";
    else return a * b;
  }

  function divCalculator (a, b) {
    if(b==0) 
      throw "Divide by zero."; 
    else return a / b;
  }

  function addMore(...numbers){
    console.log(numbers)
    return numbers.reduce((sum,value) => sum+value, 0)
  }
  
//4. zahtev - Function takes an array of numbers, analyze it, and return object 
//that has information about number of elements, average value of elements, maximum and minimum value. 
//Implement handling error that function throw if one of elements is string, or undefined.

 //var array = [1,2,'22',33,44,123,1976];

  function avgArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  }

  function analyzeArr(array){
    var obj = {
      total: array.length,
      avg: avgArray(array),
      max: Math.max.apply(Math, array),
      min: Math.min.apply(Math, array)  
    }

    for (let i = 0; i < array.length; i++) {
      if(array[i] === 'string' || array[i] instanceof String) throw "Array elements can't be strings"
      if(array[i] === undefined) throw "Array elements can't be undefined"
      else return obj;
    }
  }


  //module.exports = {subCalculator, multiCalculator, addCalculator, addMore, divCalculator}
  module.exports = {analyzeArr}

