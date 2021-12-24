
$(document).ready(function (){
    
    var val = parseInt($(".count").text());
    
    $("#inc").click(function (event){

        if(val >= 10){
            $(".count").css("color","red");
        }
        var result = ++val;
        console.log(result);
        $(".count").text(result);
        event.preventDefault();
    });


    $("#dec").click(function (event){

        if(val != 0){
            var result = --val;
        console.log(result);
        $(".count").text(result);
        event.preventDefault();
            
        }else{
            alert('can\'t decrement value is Zero');
        }
        
    });
});
