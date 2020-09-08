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

//8/5/20
//Trinh's group: Trinh, Quinn, Bryce
function isPalindrome(str) {
    var check = false;
    for (var i = 0; i <= str.length / 2; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            check = true;
        }
        else {
            check = false;
        }
    }
    return check;
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true

//Nick Krauss's group
var BackwardsString = "";


    for (var i = str.length-1; i >= 0; i--){
      BackwardsString += str[i];
      console.log(BackwardsString);

    }
    return BackwardsString === str

  
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true



//Morley's solution: 
function isPalindrome(str) {
    for(var back = 0, front = str.length - 1; back < front; back++, front--) {
        if(str[back] !== str[front]) {
        return false;
        }
    }
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true

//Morley's solution: with my modifications
function isPalindrome(str) {
    for(var back = 0, front = str.length - 1; back <= front; back++, front--) {
        console.log("back: ",back, "front: ",front)
        console.log("Before if: back: ",str[back], "front: ", str[front])
        if(str[back] !== str[front]) {
          console.log("back: ",str[back], "front: ", str[front])
          return false;
        }
        else {return true;}
        
        // return
    }
}
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true



//Longest palindrome: howard
function longestPalindrome(str) {
    var prevPalindrome = currPalindrome = '';
    // i sets lower bound of the string
    for(var i = 0; i < str.length; i++){
        // j sets the upper bound of the string
        for(var j = str.length; j >= i; j--){
            if(isPalindrome(str.slice(i,j))){
                if(prevPalindrome.length < str.slice(i,j).length){
                    prevPalindrome = str.slice(i,j);
                }
                break;
            }
        }
    }
    return prevPalindrome;
  }
  console.log(longestPalindrome('this')); // should log 't'
  console.log(longestPalindrome('bobe')); // should log 'bob'
  console.log(longestPalindrome('what up, daddy-o?')); // should log 'dad'
  console.log(longestPalindrome('Yikes! my favorite racecar erupted!'));  // should log 'e racecar e'

// 8/6/2020 morning
// Book Index: Write a function that given a sorted array of page
// numbers, return a string representing a book
// index. Combine consecutive pages to create
// ranges. Given [1, 3, 4, 5, 7, 8, 10] ,
// return the string "1, 3-5, 7-8, 10" .


function join(arr, separator){
    var str = "";
    for (var i = 0; i<arr.length-1; i++){
      str += arr[i] + separator;
    }
    str += arr[arr.length-1];
    return str;
  }
  var myArr = ["a", "b", "c", "d"]; 
  mySep = " - ";
  console.log(join(myArr, mySep)); //should log "a - b - c - d"
  
  
  function bookIndex(arr){
    // find the gap between indexes
    var gapArr =[], gap=0;
    for (var i=0; i<arr.length-1; i++){
      gap = arr[i+1] - arr[i];
      gapArr.push(gap);
    }
    // console.log(gapArr); // gapArr = [2, 1, 1, 2, 1, 2]
    
    for (var i=0; i<gapArr.length; i++){
      if (gapArr[i] == 1){
        gapArr[i] ="M";
      }
      else {gapArr[i] ="B";}
      // console.log(gapArr);
    }
    var arrBMark =[];
    for (var i=0, j=0;  i<arr.length-1, j<gapArr.length; i++, j++){
      arrBMark.push(arr[i]);
      arrBMark.push(gapArr[j]);
    }
    arrBMark.push(arr[arr.length-1]);
    // console.log(arrBMark); // arrBMark = [1, B, 3, M, 4, M, 5, B, 7, M, 8, B, 10]; 
  var begArr=[], endArr=[], endResult="";
  // console.log("endResult: ",endResult);
  for (var i=1; i<arrBMark.length-2; i = i + 2){
      if (arrBMark[i] == "B"){
        endResult += arrBMark[i-1]; // end of last range , loop 1: endResult = "1", loop 2: endResult = "1, 3-5", "1, 3-5, 7-8"
        endResult += ", ";                  //endResult = "1, ", loop 2: endResult = "1, 3-5, " , "1, 3-5, 7-8, "
        endResult += arrBMark[i+1]; // beginning osf new range endResult = "1, 3", loop 2: endResult = "1, 3-5, 7", "1, 3-5, 7-8, 10"
        endResult += "-";              // = "1, 3-", "1, 3-5, 7-", "1, 3-5, 7-8, 10-"
        // console.log("loop ",i, "result: ",endResult);
      }
  }
  endResult += arrBMark[arrBMark.length-1];
  // console.log(endResult);
  return endResult;
  }
  
  var myArr = [1, 3, 4, 5, 7, 8, 10]; //arr length = 7
  //             2  1  1  2  1  2 //gapArr length = 6
  //             B  M  M  B  M  B
  // output = "1, 3-5, 7-8, 10"
  // arrBMark = [1, B, 3, M, 4, M, 5, B, 7, M, 8, B, 10]; 
  //             0  1  2  3  4  5  6  7  8  9  10 11  12 , length of this is 13
  var myArr2 = [5, 10, 11, 12];
  var myArr3 = [5, 10, 11, 12, 15, 16, 18, 20, 25, 26];
  console.log(bookIndex(myArr));
  console.log(bookIndex(myArr2));
  console.log(bookIndex(myArr3));

  //Howard's group:

  function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for(var i = 0; i < arr.length; i++){
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i+1])){
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if(i == arr.length -1){
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if(firstnum == lastnum){
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else{
                // Checks if the index is single, non-consecutive.
                if(firstnum == lastnum){
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else{
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }

        }
    }
    return myStr
  }

  console.log(bookIndex([1, 2, 3, 5, 6, 7, 10, 11]));
  console.log(bookIndex([5, 10, 11, 12]));
  


//   Common Suffix
// When given an array of words, returns the largest
// suffix (word-end) that is common between all
// words. For example, for input ["ovation",
// "notation", "action"] , return "tion" .
// Given ["nice", "ice", "sic"] , return ""



function commonSuffix(arr){
    var endP ="", shortestIndexLength = [arr[0].length];
    for (var i=0; i<arr.length; i++){
      if (shortestIndexLength > [arr[i].length]){
        shortestIndexLength = [arr[i].length];
      }
    }
    console.log("shortest array index: ",shortestIndexLength);
    
    for (var j=0; j<shortestIndexLength-1; j++){
      // console.log("Beg of loop j:");
      // get the last character of each of the array value
      var suffix = "";
      for (var i=0; i<arr.length; i++){ // looping through each index of the given array
        // suffix = ""; //to empty out the suffix at the beginning of each loop
        // console.log("Beg of loop i:");
        suffix += arr[i][arr[i].length -1-j]; //adding the last character of ech index value to a string called suffix
        // console.log("Array index ",i,"; Suffix inside loop i: ",suffix);
      }
      // if all characters are the same, we should have a string with all same characters * number of array indexes
        // console.log("Suffix before trimming: ",suffix); //nnn, length = 3
        //                                012
      //compare if the last characters are the same:
        var check = false;
        for (var k=0; k<suffix.length-1; k++){
          if (suffix[k] == suffix[k+1]){
            check = true
          } 
          else  {check = false;}
        }
        // console.log("are all characters in suffix the same? ",check);
console.log(commonSuffix(myArr2));        if (check == true){
          suffix = suffix[0];
          endP += suffix;
          
          }
        suffix = ""; // to empty out suffix for next use
        // console.log("Suffix after trimming: ",suffix);
        // console.log("End product: ",endP);
    }
    // now we need to reverse end product:
    var endP2 = "";
    for (var i=endP.length-1; i>=0; i--){
      endP2 += endP[i];
    }
    console.log("End product: ",endP2);
    return endP2; 
}
var myArr1= ["ovation","notation", "action"];
// loop from end of each index, get out the last character (len -1). Compare the last character of these indexes. If they are the same, store that in to suffix and continue.

//   Compare the second to last character of these indexes (len - 2). store that in to suffix and continue.

var myArr2= ["nice", "ice", "sic"];
console.log(commonSuffix(myArr1));



//8/7/2020
function invertHash(obj) {

    var newObj={};
    for (var key in obj){
      // console.log("Loop ",key);
      // var temp = key;
      // var temp1 = obj[key];
      // // console.log("temp (old key):",temp);
      // newObj[temp1]] = temp;
      newObj[obj[key]] = key;
      // console.log("new key: ",key);
      
      // console.log("new value: ",obj[key]);
      // console.log(obj);
      // console.log(newObj);
    }
    return newObj;
  }
  
  // var person={"name": "Ani", "gender": "female"};
  // console.log(person["name"]);
  
  
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
  })); // should log { val1: 'key1', val2: 'key2' }
  
  function invertHash(obj) {
    var newObj={};
    for (var key in obj){
      newObj[obj[key]] = key;
    }
    return newObj;
  }
  console.log(invertHash({ someKey: 'someVal' })); // should log { someVal: 'someKey' }
  console.log(invertHash({
    key1: 'val1',
    key2: 'val2'
  })); // should log { val1: 'key1', val2: 'key2' }
  
  
  /**
     * param {Array<String>} arr1 array of strings
     * param {Array<String>} arr2 array of strings
     * return {Object}
     * with the elements from the first as keys
     * and the elements from the second as values
     * 
     * NOTE: the two arrays are of equal length
     */
    //arr1: key
    //arr2: value
    function zipArraysIntoMap(arr1, arr2) {
      var newObj={};
      for (var i=0; i<arr1.length; i++){
        newObj[arr1[i]] = arr2[i];
      }
      return newObj;
    }
    
    console.log(
      zipArraysIntoMap(
        ['some', 'thing'], ['other', 'stuff']
      )
    );
    // should log { some: 'other', thing: 'stuff' }

    //8/10/2020
    /**
 * takes in a string
 * returns an object
 * with characters as keys
 * and the number of occurrences as values
 * 
 * how to determine if property is in object:
 * var obj = { someProp: 'some val' }
 * obj.hasOwnProperty('someProp') returns true
 */

// set a key/value pair
obj['secondKey'] = 'second val'

// get a value from an object
obj['secondKey'] // returns 'second val'

function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}
console.log(freqTable('abac'));

console.log(freqTable('abac')); // logs { a: 2, b: 1, c: 1 }
//                     0123
console.log(freqTable('deffd')); // logs { d: 2, e: 1, f: 2 }


/**
 * takes in a string
 * returns a string
 * with the "words" reversed
 */

function reverseWordOrder(str) {
  var arr = str.split(" "); //--> ['This', 'is', 'a' ,'test']
  var newStr = "";
  for (var i = arr.length - 1; i>0; i--){
    newStr += arr[i] + " ";
  }
  return newStr + arr[0];
  }
  
  console.log(reverseWordOrder('this statement'));
  // should log 'statement this'
  console.log(reverseWordOrder('This is a test'));
  // should log 'test a is This'

  //8/11/2020
  /**
 * param {String} str
 * return {String} with only the last instance of each character
 * NOTE: the character order should be preserved
 */

function dedupe(str) {
  var tempStr ="";
  for (var i=str.length-1; i>=0; i--){
    if (tempStr.includes(str[i]) == false){
      tempStr += str[i];
    }
  } 
  tempStr2="";
  for (var j=tempStr.length-1; j>=0; j--){
    tempStr2 += tempStr[j];
  }
  return tempStr2;
  }
  
  console.log(dedupe('abac')); // should log 'bac'
  console.log(dedupe('Snaps! crackles! pops!')); // should log 'Snrackle ops!'

  function dedupe(str){
    var newObj = {};
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--){
        var character = str[i];
        if (newObj.hasOwnProperty(character) == false){
            newObj[character] = true;
            newStr = character + newStr;
        }
    }
    return newStr;
}

console.log(dedupe('abac')); // should log 'bac'
console.log(dedupe('Snaps! crackles! pops!'));
// should log 'Snrackle ops!


/**
 * param {String} str
 * return {String} with individual "words" reversed
 */

function reverseWords(str) {
  // your code here
}

console.log(reverseWords("hello")); // should log 'olleh'
console.log(reverseWords('this that')); // should log 'siht taht'

//8/12/20
/**
 * param {String} str
 * return {String} with the original "compressed"
 * if the "compressed" version IS NOT shorter,
 * return the original
 */

function encode(str) {
  // your code here
}

console.log(encode('aabbbbbb')); // should log 'a2b6'
console.log(encode('abbbbbbbbbb')); // should log 'a1b10'
console.log(encode('abbbaa')); // should log 'abbbaa'
console.log(encode('abc')); // should log 'abc'


/**
 * param {String} str
 * return {String} with the original "expanded"
 * 
 * parseInt('a') returns NaN
 * parseInt('5') returns 5
 * isNaN('c') returns true
 * isNaN(5) returns false
 */

function decode(str) {
  var newStr="", freStr="", fre=0, prevChar = str[0];
  for (var i = 1; i<=str.length; i++){
    if (isNaN(str[i])){
      for(var j = 0; j < parseInt(freStr); j++){
          newStr +=  prevChar;
      }
      prevChar = str[i];
      freStr="";
    }
    else {
      freStr += str[i];
    }
  }

  return newStr;
}

console.log(decode('a2b6')); // should log 'aabbbbbb'
console.log(decode('a10b10')); // should log 'abbbbbbbbbb'
// loop 1: newStr = a
// loop 2: newStr = a, freStr="1"
// loop 3: newStr = a, freStr="10"
// loop 4: freStr="10", fre=10, 
console.log(decode('a1b10c6')); // should log 'abbbbbbbbbbcccccc'

//8/13/20
/**
 * param {String} str
 * param {Number} num
 * return {String} a new string with the characters
 * rotated to the left by the given number
 * Note: the number can be greater than the string length
 */

function rotateString(str, num) {
  var newStr="", newNum=0;
  newNum = Math.floor(num%str.length);
  console.log("newNum: ",newNum);

  for (var i=str.length-newNum; i<str.length; i++){
    newStr += str[i];
  }
  for (var i=0; i<str.length-newNum; i++){
    newStr += str[i];
  } 
  return newStr;
}

console.log(rotateString('this', 1));
console.log(rotateString('this', 5));
console.log(rotateString('this', 9));

console.log(rotateString('Boris Godunov', 5));


/**
 * param {String} str1
 * param {String} str2
 * return {Boolean} Is the second string a rotation of the first?
 * See if you can optimize once you get it working.
 */

function isRotation(str1, str2) {
  var firstChar = str1[0], firstPos=0, newStr="";
  for (var i=0; i<str2.length; i++ ){
    if (str2[i]==firstChar){
      if (str2[i] !=str2[i-1]){
        firstPos =i;
      }
    }
    console.log("firstPos:",firstPos);
  }
  for (var i=firstPos; i<str2.length; i++ ){
    newStr += str2[i];
  } //Boris Go
  for (var i=0; i<firstPos; i++ ){
    newStr += str2[i];
  } //Boris Godunov
  console.log("newStr: ",newStr);
  return newStr == str1;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go')); 
console.log(isRotation('BBBBoris Godunov', 'dunovBBBBoris Go'));
console.log(isRotation('Boris Godunov', 'vBoris Goduno'));
console.log(isRotation('Boris Godunov', 'oris GodunovB'));
// should log true

console.log(isRotation('hello world', 'llo worldHe'));
// should log false

function isRotation(str1, str2) {
  // string lengths do not match
  if (str1.length != str2.length){
      return false;
  }

  for(var i = 0; i < str1.length; i++){
      // Rotate str1 by i and compare with str2 each time
      if (rotateString(str1, i) == str2){
          // If the if-statement ever passes, we can exit the function with a true.
          return true;
      }
  }
  // If the if-statement never passed, we exit the function with a false.
  return false;
}

console.log(isRotation('Boris Godunov', 'dunovBoris Go'));
// should log true

console.log(isRotation('hello world', 'llo worldHe'));
// should log false


//8/14/20
/**
 * @param {Array<Object>} newInv new inventory
 * @param {Array<Object>} currentInv current inventory
 * @return {Array<Object>} the current inventory after
 * updating it with the new inventory
 * new items get added; existing items have quantities changed
 */

//Howard's group: 
function updateInventory(newInv, currentInv) {
  for (var new_item of newInv){
      var found_item = false;
      for (var curr_item of currentInv){
          if (new_item['name'] === curr_item['name']){
              curr_item['quantity'] += new_item['quantity'];
              found_item = true;
              break;
          }
      }
      if (!found_item){
          currentInv.push(new_item);
      }
  }
  return currentInv;
} 

console.log(updateInventory([{name: 'item',quantity: 2},{name: 'item2',quantity: 3}], [{name: 'item',quantity: 2}]));


function trim(str) {
  // console.log("str length:",str.length);
  var startPos = 0, endPos=0, newStr="";
  if ((str[0] != " " && str[0] != "\t" && str[0] != "\n")){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
    // console.log("----------IN LOOP:",i)
      if ((str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        // console.log("is prev blank?", (str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n"))
        // console.log("is current not blank?", (str[i] != " " || str[i] != "\t" || str[i] != "\n"))
        startPos = i;
        // console.log("startPos: ",startPos)
      }
    }
  }
  if ((str[str.length-1] != " " && str[str.length-1] != "\t" && str[str.length-1] != "\n")){
  endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((str[i+1] == " " || str[i+1] == "\t" || str[i+1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        endPos = i;
        // console.log("endPos: ",endPos)
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'

//short version, without console.log
function trim(str) {
  var startPos = 0, endPos=0, newStr="";
  if ((str[0] != " " && str[0] != "\t" && str[0] != "\n")){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
      if ((str[i-1] == " " || str[i-1] == "\t" || str[i-1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        startPos = i;
      }
    }
  }
  if ((str[str.length-1] != " " && str[str.length-1] != "\t" && str[str.length-1] != "\n")){
  endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((str[i+1] == " " || str[i+1] == "\t" || str[i+1] == "\n") && (str[i] != " " && str[i] != "\t" && str[i] != "\n")){
        endPos = i;
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'


// ----------------------------- Shorter version
function trim(str) {
  var blank = {" ": 1, "\t": 1, "\n": 1 };
  var startPos = 0, endPos=0, newStr="";
  if (blank.hasOwnProperty(str[0]) == false){
    startPos = 0;
  }
  else{
    for (var i=1; i<str.length-1; i++){
      if ((blank.hasOwnProperty(str[i-1])) && (blank.hasOwnProperty(str[i]) == false)){
        startPos = i;
      }
    }
  }
  if (blank.hasOwnProperty(str[str.length-1]) == false){
    endPos = str.length-1;
  }
  else{
    for (var i=str.length-1; i>=0; i--){
      if ((blank.hasOwnProperty(str[i+1])) && (blank.hasOwnProperty(str[i]) == false)){
        endPos = i;
      }
    }
  }
  for (var j = startPos; j<=endPos; j++){
    newStr += str[j];
  }
  return newStr;
}

console.log(trim('  this   ')); // should log 'this'
console.log(trim('        multiline')); // should log 'multiline'
console.log(trim('this that')); // should log 'this that'



/**
 * param {String} str1
 * param {String} str2
 * return {Boolean} Is the second string an anagram of the first?
 * Anagram: characters can be rearranged to make the same string
 */

// long version
function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}
// console.log(freqTable('Yes'));
// console.log(freqTable('seY')); 
// console.log(freqTable('eYs')); 

function isAnagram(str1, str2) {
  var obj1 = freqTable(str1), obj2 = freqTable(str2);
  // console.log("obj1: ",freqTable(str1));
  // console.log("obj2: ",freqTable(str2));
  // console.log("obj1 length: ",Object.keys(obj1).length);
  // console.log("obj2 length: ",Object.keys(obj2).length);
  var check = false;
  if (Object.keys(obj1).length == Object.keys(obj2).length){
    // console.log("in if");
    for (var key in obj1){
      if (obj2.hasOwnProperty(key) && obj1[key] == obj2[key]){
        check = true;
      }
    }
  }
   return check;
}
console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa'));

// ------------------------------short version
function freqTable(str) {
  var obj = {};
  for (var i in str) {
    var character = str[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}

function isAnagram(str1, str2) {
  var obj1 = freqTable(str1), obj2 = freqTable(str2);
  var check = false;
  if (Object.keys(obj1).length == Object.keys(obj2).length){
    for (var key in obj1){
      if (obj2.hasOwnProperty(key) && obj1[key] == obj2[key]){
        check = true;
      }
    }
  }
   return check;
}
console.log(isAnagram('Yes', 'eYs')); // should log true
console.log(isAnagram('silent', 'listen')); // should log true
console.log(isAnagram('ono', 'noa'));


//8/17/2020
/**
 * param {number[]} arr
 * return {boolean}
 * Is there a point between indices
 * where the summed values on each side are equal?
 */

function balancePoint(arr) {
  var sumForward = 0, sumBackward = 0, sumAll = 0;
  var check = false;
  for (var i =0; i<arr.length; i++){
    sumAll += arr[i];
  }
  for (var j =0; j<arr.length; j++){
    // console.log("-------Beg of loop: ", j)
    sumForward += arr[j];
    sumBackward = sumAll - sumForward;
    // console.log("sumForward: ", sumForward);
    // console.log("sumBackward: ", sumBackward);
    if (sumForward == sumBackward){
      // console.log("------inside if")
      check = true;
      // console.log("result: ", result);
    }
  }
  return check;
}

console.log(balancePoint([1, 2, 3, 4])); // should log false
// i = 0            sumF = 1, sumR = arr[4-1-0]    sumR = arr[3]=4
console.log(balancePoint([3, 4, 2, 5]));
// should log true (between indices 1 and 2)


/**
 * param {number[]} arr
 * return {number}
 * if there is an index in which the summed values
 * on each side are equal, return it
 * otherwise, return -1
 */

function balanceIndex(arr) {
  var sumForward = 0, sumBackward = 0, sumAll = 0;
  var result = -1;
  for (var i =0; i<arr.length; i++){
    sumAll += arr[i];
  }
  for (var j =1; j<arr.length; j++){
    // console.log("-------Beg of loop: ", j)
    sumForward += arr[j-1];
    sumBackward = sumAll - sumForward - arr[j];
    // console.log("sumForward: ", sumForward);
    // console.log("sumBackward: ", sumBackward);
    if (sumForward == sumBackward){
      // console.log("------inside if")
      result = j;
      // console.log("result: ", result);
    }
  }
  return result;
}

console.log(balanceIndex([-2, 5, 7, 0, 3])); // should log 2
console.log(balanceIndex([9, 9])); // should log -1

//8/18/2020
/**
 * param {number[]} sortedArr array of SORTED integers
 * param {number} searchVal
 * return {boolean}
 * 
 * Is the given value in the array?
 * DON'T ITERATE THROUGH THE ENTIRE ARRAY
 */

function binarySearch(sortedArr, searchVal) {
  var check = false;
  var startIndex = 0, endIndex = sortedArr.length-1;
  var midPoint = Math.floor([sortedArr.length/2])
  if (sortedArr[midPoint] == searchVal){
    return true;
  }
  else if (sortedArr[midPoint] > searchVal){
    if (sortedArr[midPoint-1] == searchVal){check = true;}
    else if (sortedArr[midPoint-1] < searchVal){check = false;}
    else if (sortedArr[midPoint-1] > searchVal){
      endIndex = midPoint-1;
      midPoint = Math.floor((endIndex-startIndex)/2);
      if (sortedArr[midPoint] == searchVal){check = true;}
      else if (sortedArr[midPoint] < searchVal){check = false;}
      else if (sortedArr[midPoint] > searchVal){
        for (var i=midPoint-1; i>=0; i--){
          if (sortedArr[i] == searchVal){check = true;}
        }
      }
    }
  }
  else if (sortedArr[midPoint] < searchVal){
    if (sortedArr[midPoint+1] == searchVal){check = true;}
    else if (sortedArr[midPoint+1] > searchVal){check = false;}
    else if (sortedArr[midPoint+1] < searchVal){
      startIndex = midPoint+1;
      midPoint = Math.floor((endIndex-startIndex)/2);
      if (sortedArr[midPoint] == searchVal){check = true;}
      else if (sortedArr[midPoint] > searchVal){check = false;}
      else if (sortedArr[midPoint] < searchVal){
      for (var i =midPoint+1; i<sortedArr.length; i++){
        if (sortedArr[i] == searchVal){check = true;}
      }
    }
  }
  }
  return check;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 4, 5], 3));
console.log(binarySearch([1, 2, 4, 5, 6, 7, 9], 3))
//Howard's group:
function binarySearch(sortedArr, searchVal) {
  // your code here
  var lowInd = 0;
  var highInd = sortedArr.length - 1;

  while(lowInd <= highInd){
    var midInd = Math.floor((lowInd + highInd) / 2);
    if(searchVal == sortedArr[midInd]){
      return true;
    }

    if(sortedArr[midInd] > searchVal){
      highInd = midInd - 1;
    }
    else if(sortedArr[midInd] < searchVal){
      lowInd = midInd + 1;
    }
  }

  return false;
}


/**
 * BONUS: Once done, create this version
 * returns the number of occurrences of the value
 * 
 * @param {number[]} sortedArr array of SORTED integers
 * @param {number} searchVal
 * @return {number} the number of occurrences of the searched for value
 */
//Ranil's group
function binarySearchBonus(sortedArr, searchVal) {
  // your code here
  /*
        st
    st  en  
     0       2    3       5     mid= ( (0 + 5) / 2)= 2.5    Math.floor(2.5) = 2
    [1   2   3    3  55  76]   3    mid= (0 + 1 / 2) = .5 Math.floor(.5) = 0


*/    
    var count = 0;
    var start = 0;
    var end = sortedArr.length - 1;
    var mid = Math.floor( (start + end ) /2);

    var found = false;
    while  ( !found ) {

        // found it
        if (sortedArr[mid] == searchVal)  {
          count = 1;  
          // right  
          for (var i=mid + 1; i < sortedArr.length; i++ )
              if (sortedArr[i] == searchVal) 
                  count += 1;
              else break;
          // left
          for (var i=mid - 1; i >= 0; i-- )
              if (sortedArr[i] == searchVal) 
                  count += 1;
              else break;  

          console.log ('found it 1');
          return count;
        }

        // array element in midpoint is greater
        else if (sortedArr[mid] > searchVal) {
            // start will be same
            end = mid - 1;
            mid = Math.floor( (start + end ) /2);
        }
        // array element in midpoint is less
        else {
            // end will be same
            start = mid + 1;
            mid = Math.floor( (start + end ) /2);
        }

        // exit when both markers are on same index
        if (start >= end) break;
    }


    // still check if we found it
    if (sortedArr[start] == searchVal) {
        console.log ('found it 2');
        count = 1;
        for (var i=start + 1; i < sortedArr.length; i++ )  {
          if (sortedArr[i] == searchVal) 
              count += 1;
          else break;
          for (var i=start - 1; i >= 0; i-- )
                if (sortedArr[i] == searchVal) 
                    count += 1;
                else break;  

        }

      return count; 
    } 

  return 0;  
}




console.log(binarySearchBonus([1, 2, 3, 4, 5], 3));
// should log 1

console.log(binarySearchBonus([1, 2, 4, 4, 4, 5], 4));
// should log 3

console.log(binarySearchBonus([1, 2, 4, 4, 5], 6));
// should log 3

//8/19/2020
/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @return {number[]} the same OR a new array "deduped"
 * 
 * BONUSES:
 * O(n): no nested loops, new array okay X
 * In place (`no` new array)
 * In place and O(n): no nested loops
 * Keep it O(n) even if unsorted
 */

function removeDuplicates(sortedArr) {
  var newArr=[];
  for (var i=0; i<sortedArr.length; i++){
    if (sortedArr[i] != sortedArr[i+1] ){
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates([1, 2, 3, 4, 4, 4, 5]));
// should log [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 6, 5, 7, 8, 6, 4, 2, 10]));

function removeDuplicates(sortedArr) {
  for (var i=1; i<sortedArr.length; i++){
    if (sortedArr[i-1] == sortedArr[i] ){
      
    }
  }
  return sortedArr;
}

/**
 * @param {number[]} intArr array of integers
 * @return {number|number[]}
 * 
 * if one number shows up with the highest frequency, return it
 * if all numbers show up the same number of times, return []
 * if multiple numbers have the same frequency, return them in an array
 */

function findAllModes(intArr) {
  // your code here
  // To get a frequency table for the array
  var freqTable = {}, newArr=[];
  for(var i = 0; i < intArr.length; i++){
    if(freqTable.hasOwnProperty(intArr[i])){
      freqTable[intArr[i]]++;
    }
    else{
      freqTable[intArr[i]] = 1;
    }
  }
  // To find the highest frequency
  var maxFreq = 0;
  for (var key in freqTable){
    if (maxFreq < freqTable[key]){
      maxFreq = freqTable[key]; // maxFreq=2
    }
  }
  
  // Set a flag for when we find an element that doesn't get appended to the newArr
  var found = false;
  // Loop through the freqTable and compare with maximum frequency we found from previous loop
  for (var key in freqTable){
    if (maxFreq == freqTable[key]){
      newArr.push(parseInt(key));
    }
    else {
      found = true;
    }
  }
  // if newArr only has one value that means there's only one highest frequency: --> return this newArr
  if (newArr.length == 1){
    return newArr[0];
  }
 

  // if flag is true, that means at least one value in the given array has lower frequency than other values. Also means that this newArr contains values with the same frequency: --> return this newArr
  // if flag is false, that means all values in the given array have the same frequency: --> return an empty array
  return found ? newArr: [];

  // if(found){
  //   return newArr
  // }
  // else{
  //   return [];
  // }

}

console.log(findAllModes([1, 2, 3, 4])); // should log []
console.log(findAllModes([1, 1, 2, 2, 3, 3])); // should log []
console.log(findAllModes([1, 1, 3, 4])); // should log 1
console.log(findAllModes([1, 1, 3, 4, 4])); // should log [1, 4]
//freqTable ={"1": 2, "3":1, "4":2}
//                   maxFreq=2
//                  newArr = ["1", "4"]

//8/24/2020
/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */


function rSumArray(arr, i = 0) {
  if (i == arr.length) {
      return 0;
  }
  return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2

/**
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

function rSigma(num) {

  /* base case */
  
  if (num == 0) {
    return num;
  }
  
  return num + rSigma(num - 1);
  }
  
console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)


//Morley's lecture code
function rLoopThroughAndLog (arr, i=0){
  //base case
  // this is where we will stop the recursion
  if (i == arr.length) return;
  console.log(arr[i]);
  //this is the recursive call
  // the function calls itself
  rLoopThroughAndLog(arr, i+1);
  // the i + 1 is what we call "forward movement"
}
//8/25/20
/**
 * @param {number[]} intArr an array of integers
 * @param {number} i index, which defaults to 0
 * @return {number} the sum of all the elements
 */

function rSumArray(arr, i = 0) {
  if (i == arr.length) {
      return 0;
  }
  return arr[i] + rSumArray(arr, i + 1);
}

console.log(rSumArray([1, 4, 6])); // should log 11
console.log(rSumArray([2, -4, 6])); // should log 4
console.log(rSumArray([2, -4, 6], 1)); // should log 2


/**
 * @param {number} num
 * @return {number} the sum from one up to and including the number
 */

function rSigma(num) {

  /*  base case */
  
    if  (num == 0)  { 
      return num; 
    }
  
    return num + rSigma(num - 1);
  
  }
  
  console.log(rSigma(4)); // should log 10 (1 + 2 + 3 + 4)
  console.log(rSigma(5)); // should log 15 (1 + 2 + 3 + 4 + 5)

  //8/26/2020
/**
 * @param {number[]} sortedArr a SORTED array of numbers
 * @param {number} searchVal a value to search for
 * @return {boolean} Is the value in the array?
 * BONUS: Do it without slice
 */

function rBinarySearch(sortedArr, searchVal) {
  // base case
  if(sortedArr.length == 0){
      return false;
  }

  var lowInd = 0;
  var highInd = sortedArr.length - 1;
  var midInd = Math.floor((lowInd + highInd) / 2);

  // base case
  if (searchVal == sortedArr[midInd]) return true;

  if(searchVal > sortedArr[midInd]){
      lowInd = midInd + 1;
  }
  else{
      highInd = midInd - 1;
  }

  return rBinarySearch(sortedArr.slice(lowInd, highInd + 1), searchVal)
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// [1, 2, 3, 4, 5].slice(1, 4) returns [2, 3, 4], which is a NEW ARRAY
// [1, 2, 3, 4, 5].slice(2) returns [3, 4, 5], which is a NEW ARRAY

console.log(rBinarySearch([1, 2, 3, 4, 5], 3)); // should log true
//                               2
console.log(rBinarySearch([1, 2, 4, 5], 3)); // should log false





/**
 * @param {string} str a string to reverse
 * @return {string} a new string with the characters reversed
 */

/**
 * @param {string} str a string to reverse
 * @return {string} a new string with the characters reversed
 */

function rStringReverse(str) {


  // base case, exit situation
  if  (str.length <= 1)
      return str;

  //                hello          ello                 h
  //                                llo                eh
  //                                 lo               leh
  //                                  o              lleh
  //                                                olleh       

  return  rStringReverse(str.slice(1) ) + str[0]; 

}

console.log(rStringReverse('hello')); // should log 'olleh'
console.log(rStringReverse('world')); // should log 'dlrow'


//8/27/20
/**
 * @param {number} num an integer
 * @return {number} a ONE-DIGIT integer
 * sum all the digits until the answer has only ONE DIGIT
 */

function rSumToOneDigit(num) {
  // base case
  if (num.toString().length == 1){
      return num;
  }
  var sum = 0;
  for (var i = 0; i < num.toString().length; i++){
      sum += parseInt(num.toString()[i]);
  }
  return rSumToOneDigit(sum);
}

console.log(rSumToOneDigit(19));
// should log 1: 1 + 9 = 10 -> 1 + 0 = 1

console.log(rSumToOneDigit(999));
// should log 9: 9 + 9 + 9 = 27 -> 2 + 7 = 9

//Nick's group: 
function rSumToOneDigit(num) {

  return (num - 1) % 9 + 1;
  
  }
  
  console.log(rSumToOneDigit(999));


/**
 * @param {string} str the starting string
 * @param {string[]} anagrams an array of anagrams (default value is empty)
 * @param {string} partial a partial solution (default value is empty)
 * @return {string[]} an array of anagrams made from the original string
 * NOTE: the order of the individual strings inside the
 * returned array is unimportant; just make sure you get them all
 */

function stringAnagrams(str, anagrams = [], partial = '') {
  // your code here
  if(str.length === 0) {
    // do something, base case
    if(partial.length !== 0) {
      anagrams.push(partial);
    }

  } else {
    // forward movement and recursion
    for(var i = 0; i < str.length; i++) {
      var char = str[i];

      // creates a new string including everything but the character
      var newStr = str.slice(0, i) + str.slice(i + 1);
      var newPartial = partial + char;

      stringAnagrams(newStr, anagrams, newPartial);
    }

  }

  return anagrams;
}

// 'something'.slice(2, 4) returns a new string 'me'
// 'something' + 'else' returns a new string 'somethingelse'

console.log(stringAnagrams('mi'));
// should log ['mi', 'im'] or ['im', 'mi']

console.log(stringAnagrams('mil'));
// should log ['mil', 'mli', 'iml', 'ilm', 'lim', 'lmi']

//8/28/20
/**
 * @param {number} num1 an integer
 * @param {number} num2 an integer
 * @return {number} an integer
 * remember finding a common denominator for fraction addition/subtraction?
 */

function lowestCommonMultiple(num1, num2, base1 = num1, base2 = num2) {
  // your code here
  if (num1 == num2) return num1;

  if (num1 > num2) {
      return lowestCommonMultiple(num1, num2 + base2, base1, base2);
  }
  return lowestCommonMultiple(num1 + base1, num2, base1, base2);
}


console.log(lowestCommonMultiple(3, 4)); // should log 12
console.log(lowestCommonMultiple(4, 6)); // should log 12



/**
 * @param {string} str a string consisting of any number of these characters: 0, 1, ?
 * @param {string[]} solutions an array of "expanded" strings (default value is empty)
 * @param {string} partial a "partial" solution string
 * @return {string[]} the array of solutions
 * with every `?` replaced by both a 0 and a 1
 * NOTE: the order of the solutions in the output array DOES NOT MATTER
 */

function binaryStringExpansion(str, solutions = [], partial = '') {
  // your code here
}

// 'something'.indexOf('m') returns 2
// 'something'.indexOf('b') returns -1 since it's not in the string
// 'something'.slice(2) returns a new string: 'mething'
// 'something'.slice(2, 5) returns a new string: 'met'

console.log(binaryStringExpansion('001?0'));
// should log ['00100', '00110']

console.log(binaryStringExpansion('001?0?'));
// should log ['001000', '001001', '001100', '001101']

//8/31/20
// Bubble Sort Array
// For review, create a function that uses
// BubbleSort to sort an unsorted array in-place.
function bubbleSort(arr){
  for (var j = 0; j<arr.length; j++){
    var isSorted = true;
    for (var i=0; i<arr.length-1; i++){
      isSorted = false;
      if (arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
    if (isSorted){ return;}
  }
  return arr;
}

console.log(bubbleSort([5,9,3,1,2,4,3,7,1,0]));
console.log(bubbleSort([4,7,8,3,4,1,8,6]));

//9/1/20
// Stable
// It is stalbe if when there are duplicates, the duplicates are left in original order relative to one another
// Making a sort stable incurs overhead (takes more time)
// Click the above link for an example of when stability is needed
function insertionSort(arr){
  for (let j = 1; j<arr.length; j++){
    for (let i = j; i>=0; i--){
      if (arr[i] < arr[i-1]){
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
//                      [2, 9, 5, 6, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 9, 6, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 9, 4, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 9, 3, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 9, 7, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 10, 1, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 1, 10, 8]
//                      [2, 5, 6, 4, 3, 7, 9, 1, 8, 10]
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numsOrdered: ",insertionSort(numsOrdered));
console.log("numsRandomOrder:", insertionSort(numsRandomOrder));
console.log("numsReversed:", insertionSort(numsReversed));
console.log("expected:", insertionSort(expected));

//from Neil:
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    // save the current 'target' so this space is available to use for shifting
    let numToInsert = nums[i];
    let leftIdx = i - 1;

    while (leftIdx >= 0 && nums[leftIdx] > numToInsert) {
      // shift to the right because it's greater than the item we are going to insert
      nums[leftIdx + 1] = nums[leftIdx];
      leftIdx--;
    }
    // shifting complete, insert position located
    nums[leftIdx + 1] = numToInsert;
  }
  return nums;
}

function insertionSortSwap(nums) {
  for (let i = 1; i < nums.length; i++) {
    let currIdx = i; // to avoid altering i directly
    let leftIdx = currIdx - 1; // compare to the left

    while (leftIdx >= 0 && nums[leftIdx] > nums[currIdx]) {
      // destructure swap notation
      [nums[leftIdx], nums[currIdx]] = [nums[currIdx], nums[leftIdx]];

      // curr got swapped to the left, so currIdx is now 1 to the left
      currIdx--;
      leftIdx = currIdx - 1;
    }
  }
  return nums;
}
/* 
  Stable sort

  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic

  Space: O(n) linear

  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

// merge
const sortedA = [1, 2, 4, 5, 6, 9];
const sortedB = [3, 7, 8, 10];
const expectedMerge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Merges two already sorted arrays into a new sorted array
 * @param   {Array<number>} left
 * @param   {Array<number>} right
 *          @left and @right are sorted
 * @return  {Array<number>}
 *          A new sorted array containing all the elements of @left and @right
 *
 * Time:    O(n + m) -> O(n) linear
 *          n = left.length, m = right.length.
 *          Every item from each array is visited once.
 * Space:   O(n + m) => O(n) linear
 */
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
  while (indexLeft < left.length) {
    result.push(left[indexLeft]);
    indexLeft++;
  }

  while (indexRight < right.length) {
    result.push(right[indexRight]);
    indexRight++;
  }

  return result;

  // one liner version of adding in any left over items
  // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}


//9/2/20
// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split and merged
 * @param   {Array<number>} nums
 *          In any order
 * @return  {Array<number>}
 *          New sorted array
 * Best:    O(n log(n)) linearithmic
 * Avg:     O(n log(n)) linearithmic
 * Worst:   O(n log(n)) linearithmic
 */
function mergeSort(nums) {
  if (nums.length === 1) {
    // return once we hit an array with a single item
    return nums;
  }

  const middle = Math.floor(nums.length / 2); // get the middle item of the array rounded down
  const left = nums.slice(0, middle); // items on the left side
  const right = nums.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort };
 //9/3/20
 /* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx

  2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
  and all values greater than the pivot value are to the right (not perfectly sorted)

  3. return: new idx of the pivot value or the index where the left section of smaller items ends

  "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
// nums1 example if 3 was pivot value
// doesn't have to be this exactly but this is an acceptable answer: [2, 3, 14, 8, 11, 7]
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the @nums array by mutating it by selecting the number at the middle index (pivot) then arranges
 * all numbers less than the pivot to be to it's left and all larger numbers to the right of the pivot
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being partitioned
 * Time:    O(n) linear, n = nums.length
 * Space:   O(1) constant
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare, who developed the quicksort algorithm in 1959.
 * does fewer swaps than Lomuto
 * NOTE that in this scheme, the pivot’s final location is not necessarily at the index that was returned (some edge cases)
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotVal = nums[midIdx];

  while (left < right) {
    while (nums[left] < pivotVal) {
      left++;
    }

    while (nums[right] > pivotVal) {
      right--;
    }
    // array destructure swap syntax
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return left;
}

module.exports = { partition };

console.log(partition(nums1));
// console.log(partition(nums2));

module.exports = { partition };

//9/4/20
/* 
  Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
  Create a function that uses yesterday’s partition to fully sort an array in-place.
  Unstable sort
  
  Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic
  
  Space: O(1) constant
  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the last idx
  - later these params will be used to specify a sub section of the array to partition
  Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/

const { partition } = require("./05_partition");

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts @nums by mutating the array
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being sorted
 * Best:    O(n log(n)) linearithmic
 * Average: O(n log(n)) linearithmic
 * Worst:   O(n^2) quadratic
 */
function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let pivotIndex = partition(nums, left, right);
    quickSort(nums, left, pivotIndex - 1);
    quickSort(nums, pivotIndex + 1, right);
  }
  return nums;
}

module.exports = { quickSort };

console.log(quickSort(nums1));
console.log(quickSort(expected1));
console.log(quickSort(nums2));