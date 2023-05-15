// // var multiplication = function (one, two, three) {
// //     var result = one*two*three;
// //     return `Multiplication is: ${result}`;
// // }
// var result = multiplication(2, 2, 2 );
// console.log(result);

function squareOf(value1,value2,value3){
    var result=value1*value2*value3;
    console.log(` square of the number  is---- ${result}`);
}
squareOf(5,5,5);
squareOf(6,6,6);
squareOf(25,25,25);
squareOf(100,100,100);
console.log("------------------**----------------------");
console.log("type of function is", typeof squareOf);
console.log("------------------**----------------------");
function areaRectangular(value1,value2) {
    var result=value1*value2
    console.log("area of rectangular is------> :" ,result);
    
}
areaRectangular(499,917);
console.log("------------------**----------------------");
function swapping(para1,para2) {
    console.log("before swapping----->",para1,para2);
    var temp=para1;
    para1=para2;
    para2=temp;
   console.log("after  swapping---->",para1,para2);

}
swapping("virat","anushka");
console.log("------------------**----------------------");
swapping("1000","2000");
console.log("------------------**----------------------");


function funString(string) {
    var lenghtresult=string.length;
    console.log(`the total no of length is---->${lenghtresult}`);
    var charIndex=string.charAt(6);
    var charIndex2=string.charAt(11);
    console.log(`the character of the index at 6 position  is---->${charIndex}`);
    console.log(`the character of the index at 11 position  is----> ${charIndex2}`);
    console.log("------------------**----------------------");
    var last =string.charAt(lenghtresult-1);

    console.log("last character is------->",last);
    var first =string.charAt(0);
    console.log("first character is------->",first);
    console.log("------------------**----------------------");

    var totalCount=string.split(" ");
    // console.log("total no of words is:-----> " ,split);
    var count=totalCount.length;
    console.log("total no of word count is-------->",count);
    console.log("------------------**----------------------");

    
}
funString("JS is the most popular language if the internet")
squareOf(9,9,9);