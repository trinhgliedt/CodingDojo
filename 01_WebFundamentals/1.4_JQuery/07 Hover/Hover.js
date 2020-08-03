$(document).ready(function(){
    $('img').hover(function(){
        console.log("Hover");
        $(this).attr('src','windmill2.png');
    }, function(){
    $(this).attr('src','windmill1.gif');
    })
})
