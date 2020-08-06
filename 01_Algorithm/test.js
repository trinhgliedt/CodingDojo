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

  }
  console.log(isPalindrome('mom')); // should log true
  console.log(isPalindrome('Mom')); // should log false
  console.log(isPalindrome('this')); // should log false
  console.log(isPalindrome('mooom')); // should log true



//Morley's solution: 
for(var back = 0, front = str.length - 1; back < front; back++, front--) {
    if(str[back] !== str[front]) {
      return false;
    }
  }
console.log(isPalindrome('mom')); // should log true
console.log(isPalindrome('Mom')); // should log false
console.log(isPalindrome('this')); // should log false
console.log(isPalindrome('mooom')); // should log true

function isPalindrome(str) {
    // compare 2 string together
      var reversed = "";
      for (var i = str.length - 1; i >= 0; i--){        
          reversed += str[i];
      }
      if(reversed == str){
            return true; 
      }
      else{
        return false;
      }
  }  

    console.log(isPalindrome('mom')); // should log true
    console.log(isPalindrome('Mom')); // should log false
    console.log(isPalindrome('this')); // should log false
    console.log(isPalindrome('mooom')); // should log true

   