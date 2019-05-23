$(function(){
    var toonMenu = false;
    $("label ul").hide();
    console.log("test");
    $(".hamburger").on("click",function(){
        toonMenu = !toonMenu;
        if(toonMenu){
            $("label ul").show();
        }else{
            $("label ul").hide();
        } 
    });
})