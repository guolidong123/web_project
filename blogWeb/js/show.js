/**
 * Created by tj on 2018/7/20.
 */
$(function(){
    $('.nav_group li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });

    $('.slider_btn').click(function(){
        showSilder()
    });

    $('.mask').click(function(){
        hideSilder()
    });

    function showSilder(){
        $('.mask').fadeIn();
        $('.slider').css('right',0);
    };

    function hideSilder(){
        $('.mask').fadeOut();
        $('.slider').css('right',-($('.slider').width()));
    };

    $('.top').click(function(){
        $('body,html').animate({
            scrollTop:0
        },300)
    });

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.top').css('display','block')
        }else {
            $('.top').css('display','none')
        }
    })
})