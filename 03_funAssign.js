

function funName() {
    console.log("I am Sunita Ghule ");
  
}
funName();
function funnameTwo(){
    console.log("this is my first program  using function.");
}
funnameTwo();



console.log("--------------**8personal details is***--------------------");



function personalDetails(firstName,lastName,collegeName) {
    console.log("my first name is--",firstName);
    console.log("My last name is--",lastName);
    console.log("my college  is--",collegeName);
    
}
personalDetails("Sunita","Ghule","Mit Aurangabad");
console.log("--------------------------***-------------------------");

var One=100;
var Two=200;
var temp;

function swapValueDude(valueOne,valueTwo) {
    console.log("before swap=", valueOne,valueTwo);
    
    temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    
    console.log("after swap=",valueOne,valueTwo);
  


    
}
swapValueDude(One,Two);
console.log("--------------------*--------------------------");
swapValueDude("virat","anuskha");
console.log("--------------------*--------------------------");
swapValueDude(1000,2000);
console.log("--------------------*--------------------------");

function addThreeValues(val1,val2,val3) {
    var result=val1+val2+val3;
    console.log("the result is:-",result);
    
}
addThreeValues(10.23,600,40);
console.log("--------------------*--------------------------");
addThreeValues("hello"," good"," morning");