/*var name = prompt('What is your name?');
  alert('Hello ' + name);

  var myCountry = prompt('what is your favorite country?');

  var freedomCheck = function(){
    if( myCountry === 'USA' ) alert('Sweet Land of Liberty');
    else alert('Sounds like you need some DEMOCRACY');
  };

    freedomCheck();*/


var getColor = function(){
  var color = prompt('What is your favorite color?');
  if(color === 'blue') {
    alert('You are awesome');
    return;
  }
  else {
  alert('Pick another color.');
  }
  getColor();
};

  getColor();
