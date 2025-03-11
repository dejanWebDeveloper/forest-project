$(document).ready(function () {
    /*********show/hide paragraph in section about us********/
    $('.hide-text').hide();
    $('.about-us aside button').click(function () {
        if ($(this).text() === 'View more') {
            $('.hide-text').toggle(600, function () {
                $('.about-us aside button').text('View less');
            });
        } else {
            $('.hide-text').toggle(600);
            $(this).text('View more');
        }
    });
    /*********date in section news**************/
    const d = new Date("2022-03-25");
    $('.news .date').text(new Date());
    /********news show more****************/
    $('.news-text p').hide();
    $('.news').on('click', '.news-text a', function (e) {
        e.preventDefault();
        if ($(this).text() === 'Read more') {
            $(this).prev().toggle(500, function () {
                $(this).next().text('Read less');      
            });
        } else {
            $(this).prev().toggle(500);
            $(this).text('Read more');
        }
        $(this).closest('article').siblings().find('p').hide(500);
    }); 
    /*********show/hide brans in section our work*****************/
    $('.brand ul:nth-of-type(2)').hide();
    $('.brand button.btn').click(function () {
        if ($(this).text() === 'View more') {
            $('.brand ul:nth-of-type(2)').toggle(600, function () {
                $('.brand button.btn').text('View less');
            });
        } else {
            $('.brand ul:nth-of-type(2)').toggle(600);
            $(this).text('View more');
        }
    });
});