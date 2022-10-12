  //undefined if a == undefiend 
  
  function subCalculator (a, b) {
    return a - b;
  }

  function addCalculator(a, b) {
    try 
    {
      if(a === undefined || b === undefined)
          throw "not enough parametars";
      else return a + b;
    }
    catch(error)
    {
      console.log(error);
      throw error;
    }
  }  

  function multiCalculator (a, b) {
    return a * b;
  }

  function divCalculator (a, b) {
    if(b=0) throw new Error( 'Divide by zero.' ); 
    else return a / b;
  }

  function addMore(...numbers){
    console.log(numbers)
    return numbers.reduce((sum,value) => sum+value, 0)
  }
  
  module.exports = {subCalculator, multiCalculator, addCalculator, addMore, divCalculator}

