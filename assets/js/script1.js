$(".slick-slider").slick({
  slidesToShow: 4,
  infinite: true,
  slidesToScroll: 1,
  centermode: true,
  cssEase: "linear",
  autoplay: true,
  arrows: true,
  prevArrow: $(".prev"),
  nextArrow: $(".Next"),
  autoplaySpeed: 2000,
  // speed: 4500,
  // dots: true,
  Boolean,
  // arrows: false, Boolean
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
       
      },
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
       
      },
    },
  ],
});



