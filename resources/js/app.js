$(() => {

    // For sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // Scroll on buttons
    $('.js--scroll-to-plans').on('click', () => {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').on('click', () => {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    // Navigation scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});