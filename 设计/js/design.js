/**
 * Created by tj on 2018/7/23.
 */
var index = 0;
var time;
$(document).ready(function(){
    $(".ig").eq(index).fadeIn(300).siblings('.ig').fadeOut(300);

    timer();

    $('.banner_left').click(function(){
        clearInterval(time);
        if(index <= 0){
            index = 3;
        }else{
            index --;
        }
        $(".ig").eq(index).fadeIn(300).siblings('.ig').fadeOut(300)
        timer();
    })

    $('.banner_right').click(function(){
        clearInterval(time);
        if(index >= 3){
            index = 0;
        }else{
            index ++;
        }
        $(".ig").eq(index).fadeIn(300).siblings('.ig').fadeOut(300)
        timer();
    })
})

function timer(){
    time = setInterval(function(){
        index ++;
        if(index >=4)
        {
            index=0;
        }
        $(".ig").eq(index).fadeIn(300).siblings('.ig').fadeOut(300)
    },4000);
}