/**
 * Created by tj on 2018/7/24.
 */
$(function(){
    $('.down_list').click(function(){
        $('.move_list').toggle()
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.top').css('display','block')
        }else{
            $('.top').css('display','none')
        }
    })

    $('.top').click(function(){
        $('body,html').animate({
            scrollTop:0
        },300)
    })

    $('.login').click(function(){
        $('#mask').toggle();
        $('.login_wraper').toggle()
    })


    $('.login_close').click(function(){
        $('.login_wraper').css("display","none");
        $('#mask').css("display","none");
    })

    $('.pl_img').click(function(){
        $('.img_close').toggle()
    })
})