var cashRegisterModule = function () {


  var baseNum = 0;
  var nextNum = 0;
  var displayNum = 0;
  var sign = "";
  var operator = 0;
  var balance = 0;




  function getBaseNum() {
    return baseNum;
  }

  function setBaseNum(x) {
    baseNum = x;
  }

  function getNextNum() {
    return nextNum;
  }

   function setNextNum(x) {
    nextNum = x;
  }

    function getDisplay() {
    return displayNum;
  }

  function setDisplay(x) {

    displayNum = x;
  }

  function getSign() {
    return sign;
  }

  function setSign(x) {
    sign = x;
  }

  function getOperator() {
    return operator;
  }

  function setOperator(x) {
    operator = x;
  }

  function getBalance() {
    return balance;
  }

  function setBalance(x) {
    balance = x;
  }







return {
  getDisplay : getDisplay,
  setDisplay : setDisplay,
  getBaseNum : getBaseNum,
  setBaseNum : setBaseNum,
  getNextNum : getNextNum,
  setNextNum : setNextNum,
  getSign : getSign,
  setSign : setSign,
  getOperator : getOperator,
  setOperator : setOperator,
  getBalance : getBalance,
  setBalance : setBalance



};



};

var CR = cashRegisterModule();


var myCalc = calculatorModule();



