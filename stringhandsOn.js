

console.log("---------------------------*----------------------------");
var givenString=" hey you are doing good,keep it up.    ";
function stringhandsOn(){
    console.log(" the given string as it is:->",givenString);
    var lengthString= givenString.length;
    console.log("total character legnth is:-",lengthString);

    var trimString=givenString.trim();
   var lengthAfterTrim= trimString.length;
    console.log("after trim,length is---->" ,trimString,trimString.length); 


    console.log("trimmed spaces ---->",lengthString-lengthAfterTrim);
    var startString=trimString.charAt(0);//first character
    var lastString=trimString.charAt(lengthAfterTrim-2);
     console.log("first and last character is:----",startString,lastString);


     var countWords=trimString.split(" ");
     console.log("total no of words after trim is---->" ,countWords,countWords.length);
     var goodResult=givenString.search("good");
     console.log("the index of good word is,---->" ,goodResult);
     var sliceString=givenString.slice(0,22);
     console.log("o to22 index is---->",sliceString);
     var resultinclude=trimString.includes("up");
     console.log("is string end with up--->",resultinclude);
    
     

  




}
stringhandsOn();