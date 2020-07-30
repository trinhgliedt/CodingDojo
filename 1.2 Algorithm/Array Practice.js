
/* 
  Array: Concat
  .push allowed
  Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] .
*/
function concat(arr1, arr2){
    var newArr=[]
    for (var i=0; i<arr1.length; i++){
        newArr.push(arr1[i]);
    }
    for (var j=0; j<arr2.length; j++){
        newArr.push(arr2[j]);
    }
    return newArr;
}
concat([1,2],[3,4]);

/* 
  Array: Reverse
  Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given . As always, do not use built-in array functions such as splice() .
*/
//[0,1,2,3] --> [3,2,1,0]
function reverse(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
      temp = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
  
  var myArr = ["a", "b", 1, 2];
  console.log(myArr);
  reverse(myArr);
  console.log(myArr);
  
/* 
  Bonus: Reverse string
  Return a new string that is the reverse of the string passes in.
*/
// example = "hello"
// output: "olleh"

function reverse(str){
    var reverseStr="";
    for (var i=str.length-1; i>=0; i--){
        reverseStr=reverseStr+str[i];
    }
    return reverseStr;
}
myStr="CodingDojo"
reverse(myStr);

