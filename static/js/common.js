$(function(){
    $("#gnb > li ").hover(function(){
        $(".submenu").stop().slideDown();
        $("#gnb_bg").stop().slideDown();
    },function(){
        $(".submenu").stop().slideUp();
        $("#gnb_bg").stop().slideUp();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('#m_nav').length && $('#m_nav').is(':visible')) {
            $('.m_submenu').slideUp();
            $("#m_nav").animate({ right:"-50%" });
            $("#close").animate({ right:"-50px"});
            event.stopPropagation();
        }
    });
    
    $('#ham').on('click', function(event) {
    event.stopPropagation();
    });

    AOS.init();

    $("#tab > li").click(function(){
        $("#tab > li").removeClass("on");
        $(this).addClass("on");

        let i = $(this).index();
        $(".con").hide();
        $(".con").eq(i).css("display","flex");
    });

    $("#tab2 > li").click(function(){
        $("#tab2 > li").removeClass("on");
        $(this).addClass("on");

        let i = $(this).index();
        $(".con").hide();
        $(".con").eq(i).show();
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 1500){
            $(".btn_top").fadeIn();
        }
        else {
            $(".btn_top").fadeOut();
        }
    });
});

function mobileSideMenuSlide() {
    $("#m_nav").animate({ right:0 });
    $("#close").animate({ right:"44%"});
}

function mobileSideBarClose() {
    $('.m_submenu').slideUp();
    $("#m_nav").animate({ right:"-50%" });
    $("#close").animate({ right:"-50px"});
}

function sideBarSubList(element) {
    let submenu = $(element).children('.m_submenu');

    $('.m_submenu').not(submenu).slideUp();
    submenu.slideToggle(); 
}

function pageMoveTop() {
    $("html, body").animate({scrollTop:0});
}