/*
It is a demo js file.
*/
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';
var myVariable = 'Bob';
myVariable = 'Steve';
var iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('Yay, I love chocolate ice cream!');
}else{
    alert('Awwww, but chocolate is my favorite...');
}
function multiply(num1, num2){
    var result = num1 * num2;
    return result;
}