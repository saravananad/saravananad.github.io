$(document).ready(function() {
    $(".scroller").on("click", function( e ) {
        e.preventDefault();
        $("body, html").animate({ 
            scrollTop: $($(this).attr('href')).offset().top 
        }, 600);
        
        $(this).parent().siblings().removeClass('active');
        
        if(!$(this).parent().hasClass('active')) {
            $(this).parent().addClass('active');
          }
    });
    
    
//    $('#navbar').on('show.bs.collapse', function() {
//        $('.nav-pills').addClass('nav-stacked dropdownbg');
//    });
//
//    $('#navbar').on('hide.bs.collapse', function() {
//        $('.nav-pills').removeClass('nav-stacked dropdownbg');
//    });
//    
//    $('.navbar-ul').on('shown hidden', function () {
//        $('body').scrollspy('refresh');
//    });
});