$(document).ready(function(){
    
    function rand(max){
        var result = Math.floor(Math.random() * max);
        return result;
    }
    
    function maker(box){
        var number = rand(2);
        if(number == 1){
            $(box).append("<span class='text-primary'>P</span>");
        }else if(number == 0){
            $(box).append("<span class='text-danger'>B</span>");
        }
    }
    
    $("#genbtn").click(function(){
        $("#genbox").empty();
        var count = parseInt($("#counter").val());
        for(i=0;i<count;i++){
            maker("#genbox");
        }
    });
    
    $("#counter").keyup(function(e){
        if(13 == e.keyCode){
            $("#genbtn").trigger("click");
        }
    });
    
});