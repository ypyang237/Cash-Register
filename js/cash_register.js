
var cashRegisterModule =function () {



var myCalc = calculatorModule;
var operatorClick = false;
var tempMem = 0;
var currNum = 0;
var operatorCount = 0;


  var clearDisplay = function() {
    //set display to 0
    document.getElementById('display').innerHTML = "";

  };


  var getBalance = function() {

    // get from memory & set display to memory's value

    var mem = myCalc.recallMemory();//will return memory
    return mem; //right now i set mem to 2

  };


  var cashDepo = function(mem) {
//will update memory value
    /*1. get number from display  setTotal
    2. add it to recallMemory   +recallMemory*/
    var getSet = myCalc.load(x); // NOT DONE YET right now i set x to 3, it should be whatever is entered on calc
    var newMem = getSet + getBalance(mem);
    return newMem;
  };


  var takeMoney = function(mem) {
    var getSet = myCalc.load(x);
    var leftMon = getBalance(mem) - getSet;

    return leftMon;
  };








var btnBox = document.getElementById('btnBox');
//MAKING NUM BUTTONS WORK
for (i = 0; i < 10; i ++) {

  var btn = document.getElementById(i);
  btn.onclick = function(){
    //document.getElementById('display').innerHTML = 0;



      //x = myCalc.load(tempMem); //_total is 5;
      //myCalc.saveMemory();
      //x = myCalc.load(tempMem);

    //console.log(typeof Number(this.id)); --number of whatever button gets clicked

    //hey = Number(this.id);  -- this does not record second digit

    //console.log(hey);



    if (operatorClick){
      tempMem = this.id;
      operatorClick = false;
      //SOME SORT OF OPERATOR FUNCTION HERE!
    } else{
      _memory = document.getElementById('display').innerHTML + this.id;
    }
    console.log(_memory, hey);
    document.getElementById('display').innerHTML = _memory;

    //console.log(Number(tempMem), typeof tempMem);
    _memory = Number(_memory);
    myCalc.load(_memory);
    //console.log(myCalc.load(tempMem));


  };


}



//CLEAR BUTTON
var clearBtn = document.getElementById('clear');
    clearBtn.onclick = function(){
      document.getElementById('display').innerHTML = clearDisplay();
    };


//GET BALANCE BUTTON
var balanceBtn = document.getElementById('myBalance');
    balanceBtn.onclick = function(){
      document.getElementById('display').innerHTML = getBalance();
    };

//DEPOSIT CASH BUTTON
var depoBtn = document.getElementById('myDepo');
    depoBtn.onclick = function() {
      document.getElementById('display').innerHTML = cashDepo();
    };

//WITHDRAW BUTTON
var wthdrwBtn = document.getElementById('myWithdraw');
    wthdrwBtn.onclick = function() {
      document.getElementById('display').innerHTML = takeMoney();
    };

//ADD BUTTON
var addBtn = document.getElementById('add');
    addBtn.onclick = function() {


      operatorCount += 1;
      console.log(operatorCount);

      var newTotal = myCalc.add(myCalc.recallMemory());
      document.getElementById('display').innerHTML = newTotal;

      if(operatorCount > 1){



      /*var newTotal = myCalc.add(myCalc.recallMemory());
      document.getElementById('display').innerHTML = newTotal;
      console.log(newTotal);*/
      operatorClick = true;

          };

//SUBTRACT BUTTON
var subBtn = document.getElementById('subtract');
    subBtn.onclick = function() {
      document.getElementById('display').innerHTML = '-';
    };

//MULTIPLY BUTTON
var multBtn = document.getElementById('multiply');
    multBtn.onclick = function() {
      document.getElementById('display').innerHTML = 'x';
    };

//DIVIDE BUTTON
var divBtn = document.getElementById('divide');
    divBtn.onclick = function() {
      document.getElementById('display').innerHTML = '/';
    };

//EQUAL BUTTON
var equalBtn = document.getElementById('equal');
    equalBtn.onclick = function() {
      document.getElementById('display').innerHTML = '=';
    };

  };

};

 cashRegisterModule();