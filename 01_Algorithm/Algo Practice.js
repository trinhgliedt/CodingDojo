/*
The “Basic 13”
These are Coding Dojo’s foundation “Basic 13” algorithm challenges. 
For each, write a JavaScript function - a suggested function name is included below. 
Can you finish all of these challenges in less than two minutes each?   

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255. 
*/
function print1to255(){
    for (var i=1; i<256; i++){
        console.log(i);
    }
}
print1to255();

// 2. Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255. 

function printOdds(){
    for (var i=1; i<256; i++){
        if (i%2 ==1){
            console.log(i);
        }
    }
}
printOdds();

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 


function printIntandSum0to255(){
    var sum=0;
    for (var i=0; i<256; i++){
        console.log('i: ',i);
        sum = sum + i;
        console.log('sum: ',sum);
    }
}
printIntandSum0to255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value. 
// PrintArrayVals(arr)

function iterateandprintarray(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
iterateandprintarray([1,2,3,4,5]);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 

function findprintMax(arr){
    var max=arr[0];
    for (var i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    console.log(max);
}
findprintMax([-1,-3,-7,6]);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average

function printavg(arr) {
    var sum=0;
    for (i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum/arr.length;
    console.log('sum: ',sum);
    console.log("avg: ",avg);
}
printavg([8,6,5,4,3]);

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  

function oddArr(){
    var arr=[];
    for (var i=1; i<256; i=i+2){
        arr.push(i);
    }
    return arr;
}
console.log(oddArr());

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 

function squareArr(arr){
    for ()
}


//7/30/20
/* 
  Array: Remove At
  Given array and an index, remove and return the array value at that index. 
  Do this without using built-in array methods except pop().
*/
function removeAt(arr,n){
  
  var temp=arr[n];
    for (var i=n; i>arr.length; i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    return temp;
}
removeAt([5,6,3,7,9,5],2);


/* 
  Array: Min to Front
  Given an array of comparable values, move the lowest element to array’s 
  front, shifting backward any elements previously ahead of it. Do not 
  otherwise change the array’s order. Given [4,2,1,3,5] , 
  change it to [1,4,2,3,5] and return it. As always, do this without using 
  built-in functions.
*/
function minToFront(arr){
    var min=arr[0];
    var position = 0;
    for (var i=0; i<arr.length; i++){
      if (min>arr[i]){
        min=arr[i];
        position = i;
      }
    }
    // console.log(min)
    // console.log(position)
    for (var j=position; j>0; j--){
      arr[j]=arr[j-1];
    }
    arr[0]=min;
    return arr;
  }
  minToFront([4,2,1,3,5]);

  //7/31/20
  /* 
  Given an arr and a separator, output a string of every item in the array separated 
  by the separator.
  The separator should only be between two elements.

  join([1, 2, 3], ", ") => "1, 2, 3"
  join([4, 5, 6, 7], "* ") => "4*5*6*7"
*/
function  arrToString(arr,s){
    var str="";
    for (var i=0; i<arr.length-2; i++){
        str=str+arr[i]+s;
    }
    str=str+arr[arr.length-1]
    return str;
}
arrToString([1, 2, 3], ", ")



/* 
Array: Second-Largest
Return the second-largest element of an array. Given [42,1,4,8,7] , return 8 . 
If the array is too short or all values are the same, return null .
*/
function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if (max == arr[0]){
        return null;
    }
    else {
        var pen = arr[0];
    for (var j = 1; j < arr.length; j++) {
        if (pen < arr[j] && arr[j] < max) {
            pen = arr[j];
        }
    }
    return pen;
}      
}
secondLargest([5, 5, 5, 5, 5]);
// secondLargest([5, 3, 4, -1, 8]);

//8/3/2020
/**
//  * param {String} str1
//  * param {String} str2
//  * return {Boolean}
//  * Are the two strings equal irrespective of case?
//  */

function caseInsensitiveStringCompare(str1, str2) {
    if (str1.toLowerCase()==str2.toLowerCase()){
        return true;
    }
    else {
        return false;
    }
   }
   caseInsensitiveStringCompare('Bryce', 'bryce');

//   console.log(caseInsensitiveStringCompare('This', 'this'));
//   // should log true
//   console.log(caseInsensitiveStringCompare('this', 'that'));
//   // should log false

//   /**
//    * @param {String} str
//    * @return {String} first letter of each "word" capitalized
//    */
  
function acronyms(str) {
      var newStr = "";
    var arr=[];
    arr=str.split(" ");
    for (var i = 0; i < arr.length; i++){
        newStr = newStr + arr[i].substring(0,1);
    }
    return newStr.toUpperCase();
  }
var myStr = "Live from New York, it's Saturday Night!";
console.log(acronyms(myStr));

//   'hello'.toUpperCase(); // returns 'HELLO'
  
//   console.log(acronyms("there's no free lunch - gotta pay yer way."));
//   // should log 'TNFL-GPYW'
//   console.log(acronyms("Live from New York, it's Saturday Night!"));
//   // should log 'LFNYISN'
  
  
//   /**
//    * @param {String} str
//    * @return {String} characters in the reverse order
//    */
  
function stringReverse(str) {
    newStr="";
    for (var i=str.length-1; i>=0; i--){
        newStr = newStr + str[i];
    }
    return newStr;
  }
  stringReverse("Hello");
  
//   console.log(stringReverse('this')); // should log 'siht'
//   console.log(stringReverse('something')); // should log 'gnihtemos'
















# //   8/4/2020
# /**
#  * #1
#  * param {String} str
#  * return {Boolean} Are the parentheses valid?
#  */
function parensValid(str) {
     var count = 0;

        
    for (var i=0; i<str.length; i++){

        if (str[i] == "("){
            count = count + 1;
            
        }
        else if (str[i] == ")"){
            count = count - 1;         
        }
        if (count < 0){return false;}
        }
    console.log(count);
    return (count===0);    
    }
  
    
  console.log(parensValid('(()))')); // should log false
  console.log(parensValid('((some)a)')); // should log true
  console.log(parensValid(')(')); // should log false
  console.log(parensValid('()()')); // should log true
  
  
// #2: 

   /**
#    * param {String} str
#    * return {Boolean} Are the braces valid?
#    */

  function bracesValid(str){

    var open_braces = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] == '(' || str[i] == '{' || str[i] == '['){
            open_braces.push(str[i]);
        }
        else if(str[i] == ')' || str[i] == '}' || str[i] == ']'){
            if((str[i] == ')' && open_braces[open_braces.length-1] == '(')
            || (str[i] == ']' && open_braces[open_braces.length-1] == '[')
            || (str[i] == '}' && open_braces[open_braces.length-1] == '{')){
                open_braces.pop();
            }
            else{
                return false;
            }
        }
    }
    return open_braces.length == 0;
}


console.log(bracesValid('{[()]}')); // should log true
console.log(bracesValid('{[()}]')); // should log false
console.log(bracesValid('{[a()b]c}')); // should log true
console.log(bracesValid('{}[]()[(])')); // should log false