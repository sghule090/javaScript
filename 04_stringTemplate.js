var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);//['Good', 'Morning', 'mate,', 'How', 'are', 'you']
console.log(`After slipt words are ${resultSplit}Total number of words ${resultSplit.length} `);
                                     //Good,Morning,mate,,How,are,you
console.log(`Given string is: ${greet}`);// Good Morning mate, How are you


var myName = "Elon Musk";
var result = myName.startsWith("E");//stored result in 'result'
console.log(` Is ${myName} starts with character E: ${result}`);//Is Elon Musk starts with character E: true

var result = myName.startsWith("Elon");
console.log(` Is ${myName} starts with character "Elon" : ${result}`);// Is Elon Musk starts with character "Elon" : true

var result = myName.startsWith("elon");
console.log(` Is ${myName} starts with character "elon" : ${result}`);//Is Elon Musk starts with character "elon" : false


var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(` Is ${myName} ends with character "k" : ${result}`);//Is Elon Musk ends with character "k" : true

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(` Is ${myName} ends with character "Musk" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(` Is ${myName} ends with character "b" : ${result}`);// Is Elon Musk ends with character "b" : false