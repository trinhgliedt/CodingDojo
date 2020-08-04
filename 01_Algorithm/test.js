
  




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
  
  
  
#   /**
#    * @param {String} str
#    * @return {Boolean} Are the braces valid?
#    */
  
  function bracesValid(str) {
    var count = 0, count1 = 0, count2 = 0;
    var symbol="";
    if (str[0] == ")" || str[0] == "}" || str[0] == "]"){
        return 'False';
    }
    for (var i=0; i<str.length; i++){
            if (str[i] == "("){
                count = count + 1;
                symbol= symbol +"(";
            }
            if (str[i] == ")"){
                count = count - 1;
                symbol= symbol + ")";
            }
           if (str[i] == "["){
                count1 = count1 + 1;
                symbol= symbol + "[";
            }
            if (str[i] == "]"){
                count1 = count1 - 1;
                symbol= symbol + "]";
            }
            if (str[i] == "{"){
                count2 = count2 + 1;
                symbol= symbol + "{";
            }
            if (str[i] == "}"){
                count2 = count2 - 1;
                symbol= symbol + "}";
            }
    }
    for (var j=0; j<symbol.length-1; j++) {
        if ((symbol[j]+symbol[j+1] == "[(" || symbol[j]+symbol[j+1] == "([" || symbol[j]+symbol[j+1] == "({" || symbol[j]+symbol[j+1] == "{(") 
        && (count1 == 0 && count2 ==0 && count == 0)){
            return "False";
        }
        else{
            return "True";
        }
        
    }
  }
  
  
  console.log(bracesValid('{[()]}')); // should log true
  console.log(bracesValid('{[()}]')); // should log false
  console.log(bracesValid('{[a()b]c}')); // should log true
  console.log(bracesValid('{}[]()[(])')); // should log false