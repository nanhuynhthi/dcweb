
$(document).ready(function () {
    $(".owl-fwslider").owlCarousel({
        navigation: true, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], pagination: true, slideSpeed: 500, paginationSpeed: 500, autoPlay: 4000, responsiveRefreshRate: 0,
        singleItem: true, mouseDrag: false, rewindSpeed: 300, addClassActive: true,
    });

    $("#list-domain").owlCarousel({
        itemsCustom: [[0, 2], [450, 3], [600, 4], [768, 3], [980, 5], [1000, 3], [1200, 4],],
        navigation: true, navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], pagination: false, rewindSpeed: 300,
        responsiveRefreshRate: 0,
    });

    $(".owl-customer").owlCarousel({
        itemsCustom: [[0, 2], [450, 3], [640, 4], [768, 5], [980, 6], [1000, 7], [1200, 8],],
        navigation: true, pagination: false, rewindSpeed: 0, autoPlay: false, rewindNav: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
});


$(document).ready(function () {
    $('.nslide-mb').inewsticker({
        speed: 2500,
        effect: 'slide',
        dir: 'ltr',
        delay_after: 1000
    });
    $('.nslide-dek').inewsticker({
        speed: 2500,
        effect: 'slide',
        dir: 'ltr',
        delay_after: 1000
    });
});	
