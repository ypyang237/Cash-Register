var calculatorModule = function () {


  function add(x,y) {
    return Number(x) + Number(y);
  }

  function subtract(x,y) {
    return Number(x) - Number(y);
  }

  function multiply(x,y) {
    return Number(x) * Number(y);
  }

  function divide(x,y) {

    return Number(x) / Number(y);
  }



  return {
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide

  };

};

