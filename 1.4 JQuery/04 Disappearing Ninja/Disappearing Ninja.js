$(document).ready(function(){
    $('img').click(function(){
        $(this).hide();
        console.log(this.width + 'x'+this.height);
    })
    $('button').click(function(){
        $('img').show();
    })

    console.dir($('#img1'));

})


