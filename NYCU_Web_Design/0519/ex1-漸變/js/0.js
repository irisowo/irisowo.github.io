// JavaScript

$ (document).ready(function(){

   $(".box").click(function(){
       //改fadeToggle
       $(".content").fadeToggle(1000); //1000=1s
        if ($(this).hasClass("ch_bg")){
            $(this).removeClass("ch_bg");
        }else{
            $(this).addClass("ch_bg");
        };	
   });

});