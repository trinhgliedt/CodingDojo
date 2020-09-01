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