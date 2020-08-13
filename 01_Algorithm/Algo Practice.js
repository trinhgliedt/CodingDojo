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