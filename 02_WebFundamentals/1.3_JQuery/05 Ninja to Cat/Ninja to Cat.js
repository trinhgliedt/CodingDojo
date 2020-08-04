$(document).ready(function(){
 $('img').click(function(){
    //  console.log($(this).attr('src').substring(0,7));
    if ($(this).attr('src').substring(0,7)=='img/nin'){
        $(this).attr('src',$(this).attr('data-alt-src'));
        console.log($(this).attr('src')); 
        console.log($(this).attr('data-alt-src'));
    }
    else{
    
        $(this).attr('src','img/ninja'+$(this).attr('data-alt-src').slice(7));
    }
    

})
})


