$('.slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-small'
});

$('.slider-small').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-big',
    dots: true,
    centerMode: false,
    fade: true,
    focusOnSelect: true
});

$('.slider-big-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-small-2'
});


$('.slider-small-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-big-2',
    dots: true,
    centerMode: false,
    fade: true,
    focusOnSelect: true
});

(function($){
    var i=0;
    $(function() {
        $('.menu-icon').on('click', function() {
            $('div.mobile-menu').toggleClass('menu_state_open');
            $('div.menu-icon').toggleClass('menu_state_open');
            i=i+1;
            console.log(i)
        });
    });
})(jQuery);

(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);