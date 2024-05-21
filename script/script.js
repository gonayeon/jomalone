$(function(){
    
    $('.slider').bxSlider({
        // mode:''
        auto:true
    });

    $("#gnb > li ").hover(function(){
        $(".submenu").stop().slideDown();
        $("#gnb_bg").stop().slideDown();
    },function(){
        $(".submenu").stop().slideUp();
        $("#gnb_bg").stop().slideUp();

    });

    $("#ham").click(function(){
        $("#m_nav").animate({ right:0 });
        $("#close").animate({ right:"44%"});
    });

    $("#close").click(function(){
        $('.m_submenu').slideUp();
        $("#m_nav").animate({ right:"-50%" });
        $("#close").animate({ right:"-50px"});
    });

    $("#m_gnb > li").click(function(){
        var submenu = $(this).children('.m_submenu');
		$('.m_submenu').not(submenu).slideUp();
		submenu.slideToggle(); 
    });

    $(document).on('click', function(event) {
    // 메뉴 영역을 제외한 영역 클릭 시 메뉴 닫기
    if (!$(event.target).closest('#m_nav').length && $('#m_nav').is(':visible')) {
        $('.m_submenu').slideUp();
        $("#m_nav").animate({ right:"-50%" });
        $("#close").animate({ right:"-50px"});
        event.stopPropagation();
    }
    });
      
    $('#ham').on('click', function(event) {
    // 메뉴 버튼 클릭 시 메뉴 열기
    event.stopPropagation();
    });

    AOS.init();


    // 서브메뉴영역

    $("#tab > li").click(function(){
        $("#tab > li").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index();
        $(".con").hide();
        $(".con").eq(i).css("display","flex");
    });

    $("#tab2 > li").click(function(){
        $("#tab2 > li").removeClass("on");
        $(this).addClass("on");

        var i = $(this).index();
        $(".con").hide();
        $(".con").eq(i).show();
    });


    $(window).scroll(function(){

        var aaa = $(document).scrollTop();

        console.log(aaa);



        if($(this).scrollTop() > 200){
            $(".btn_top").fadeIn();
        }
        else {
            $(".btn_top").fadeOut();
        }
    });

    $(".btn_top").click(function(){
        $("html, body").animate({scrollTop:0});
        return false
    });


    /* var offset = $("#header_wrap").offset();

    $(window).scroll(function(){
        
    if($(document).scrollTop() > offset.top){
        $("#header_wrap").addClass("fixed");
    }else{
        $("#header_wrap").removeClass("fixed");
    }
    
    }); */
    

});