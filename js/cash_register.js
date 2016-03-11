var registerModule = function () {

var display = 0;


  var setDisplay = function(x) {
  //change html inside to x
  display = display + x;
  return display;
  };

  var clearDisplay = function() {
    //set display to 0
    display = 0;
    return display;
  };

  var getBalance = function() {
    // get from memory & set display to memory's value
    recallMemory();//will return memory
    memory = x;
    return x;

  };

  var getDisplay = function() {
    // get whatever is currently on display
    return display;
  };



};


for (i = 0; i < 9; i ++){
document.getElementById(i).onclick = setI;
document.getElementById('display').innerHTML = i;


var x = document.getElementById('display');
x.innerHTML = i;


}

document.getElementById(i).onclick = setI;
document.getElementById('display').innerHTML = i;




/*document.getElementById(1).onclick = function() {
  document.getElementById('display').innerHTML = 1;
};
document.getElementById(2).onclick = function() {
  document.getElementById('display').innerHTML = 2;
};
document.getElementById(3).onclick = function() {
  document.getElementById('display').innerHTML = 3;
};
document.getElementById(4).onclick = function() {
  document.getElementById('display').innerHTML = 4;
};
document.getElementById(5).onclick = function() {
  document.getElementById('display').innerHTML = 5;
};
document.getElementById(6).onclick = function() {
  document.getElementById('display').innerHTML = 6;
};
document.getElementById(7).onclick = function() {
  document.getElementById('display').innerHTML = 7;
};
document.getElementById(8).onclick = function() {
  document.getElementById('display').innerHTML = 8;
};
document.getElementById(9).onclick = function() {
  document.getElementById('display').innerHTML = 9;
};
document.getElementById(0).onclick = function() {
  document.getElementById('display').innerHTML = 0;
};
*/


