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