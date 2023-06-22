$('.move_sl').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    prevArrow: $(".previous"),
    nextArrow: $(".Next_Btn"),
    // cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1270,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$(".slick-slider-custom").slick({
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    centermode: true,
    cssEase: "linear",
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".Next"),
    autoplaySpeed: 2000,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                infinite: true,
                slidesToScroll: 1,
                // autoplay: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                // autoplay: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                // autoplay: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                // autoplay: true,
            },
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                // autoplay: true,
            },
        },
    ],
});

