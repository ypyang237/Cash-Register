
//OPERATORS

//Add
document.getElementById('+').onclick = function() {
  if(CR.getOperator() === 0) {
  CR.setBaseNum(document.getElementById('display').innerHTML);
  document.getElementById('display').innerHTML += '+';
  CR.setOperator(1);
  CR.setSign('plus');
 }

};

//Subtract
document.getElementById('-').onclick = function() {
   if(CR.getOperator() === 0) {
  CR.setBaseNum(document.getElementById('display').innerHTML);
  document.getElementById('display').innerHTML += '-';
  CR.setOperator(1);
  CR.setSign('subtract');
 }
};

//Multiply
document.getElementById('X').onclick = function() {
  if(CR.getOperator() === 0) {
  CR.setBaseNum(document.getElementById('display').innerHTML);
  document.getElementById('display').innerHTML += 'x';
  CR.setOperator(1);
  CR.setSign('multiply');

 }
};
//Divide
document.getElementById('divide').onclick = function() {
  if(CR.getOperator() === 0) {
  CR.setBaseNum(document.getElementById('display').innerHTML);
  document.getElementById('display').innerHTML += '/';
  CR.setOperator(1);
  CR.setSign('divide');

 }
};

//Equal
document.getElementById('=').onclick = function() {

    CR.setNextNum(document.getElementById('display').innerHTML);

    switch (CR.getSign()) {

      case ("plus"):
            document.getElementById('display').innerHTML = myCalc.add(CR.getBaseNum(), CR.getNextNum());
            break;

      case ("subtract"):
            document.getElementById('display').innerHTML = myCalc.subtract(CR.getBaseNum(), CR.getNextNum());
            break;

      case ("multiply"):
            document.getElementById('display').innerHTML = myCalc.multiply(CR.getBaseNum(), CR.getNextNum());
            break;

      case ("divide"):
            document.getElementById('display').innerHTML = myCalc.divide(CR.getBaseNum(), CR.getNextNum());
            break;

    }

    CR.setOperator(0);



};



//NUMS
document.getElementById('1').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '1';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '1';
    CR.setOperator(0);
  }
};

document.getElementById('2').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '2';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '2';
    CR.setOperator(0);
  }
};

document.getElementById('3').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '3';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '3';
    CR.setOperator(0);
  }
};

document.getElementById('4').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '4';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '4';
    CR.setOperator(0);
  }
};

document.getElementById('5').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '5';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '5';
    CR.setOperator(0);
  }
};

document.getElementById('6').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '6';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '6';
    CR.setOperator(0);
  }
};

document.getElementById('7').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '7';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '7';
    CR.setOperator(0);
  }
};

document.getElementById('8').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '8';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '8';
    CR.setOperator(0);
  }
};

document.getElementById('9').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '9';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '9';
    CR.setOperator(0);
  }
};







//ZEROS

document.getElementById('0').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '0';
  }
  else if (CR.getOperator() === 1) {
    document.getElementById('display').innerHTML = '0';
    CR.setOperator(0);
  }


};
document.getElementById('00').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '00';
  }
  else {
  document.getElementById('display').innerHTML = '00';
  }
};

document.getElementById('decimal').onclick = function() {
  if (CR.getOperator() === 0){
  document.getElementById('display').innerHTML += '.';
  }
  else {
  document.getElementById('display').innerHTML = '.';
  }
};



//SPECIAL BTNS
document.getElementById('clear').onclick = function() {
document.getElementById('display').innerHTML = '';
CR.setBaseNum(0);
};


document.getElementById('myBalance').onclick = function() {
document.getElementById('display').innerHTML = CR.getBalance();

};



document.getElementById('myDepo').onclick = function() {
  //get what is displayed and save it into balance
  var firstNum = CR.getBaseNum(CR.setBaseNum(document.getElementById('display').innerHTML));
  console.log('frog', firstNum);
  //CR.setBalance(firstNum);

  //current state of balance
  console.log('m', CR.getBalance());

  CR.setBalance(myCalc.add(firstNum, CR.getBalance()));
  console.log('j', CR.getBalance());

  //show the balance on screen
  document.getElementById('display').innerHTML = '';

};


document.getElementById('myWithdraw').onclick = function() {
  var firstNum = CR.getBaseNum(CR.setBaseNum(document.getElementById('display').innerHTML));
  console.log('frog', firstNum);

  console.log('m', CR.getBalance());

  CR.setBalance(myCalc.subtract(firstNum, CR.getBalance()));
  console.log('j', CR.getBalance());

  document.getElementById('display').innerHTML = '';
};

