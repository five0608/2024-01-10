$(function(){
    var slideCount=$(".slide").length;
    var sliderReady=0;
    var slidePosition;
    setInterval(function(){
        if(sliderReady<slideCount-1){
            sliderReady++;
        }else{
            sliderReady=0;
        }
        slidePosition=sliderReady*(-1200)+"px";
        $(".sliders").animate({ left: slidePosition},400);
    },3000);
})