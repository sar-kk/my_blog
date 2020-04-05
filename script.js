$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');


    // click event on menu
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });

// Animate Smooth Scroll to 'Most Popular Post'
    $('#view1').on('click', function () {
        const ab = $('#Popularpost').position().top;

        $('html, body').animate(
            {
                scrollTop: ab
            },
            900
        );
    });
// owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });


//scroll top

    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});