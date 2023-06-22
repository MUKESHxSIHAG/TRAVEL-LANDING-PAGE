$(".slick-slider").slick({
  slidesToShow: 4,
  infinite: true,
  slidesToScroll: 1,
  centermode: true,
  cssEase: "linear",
  // autoplay: true,
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
$(".slick-slider2").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  centermode: true,
  cssEase: "linear",
  autoplay: false,
  arrows: true,
  prevArrow: $(".prev1"),
  nextArrow: $(".Next1"),
  autoplaySpeed: 0,
  // speed: 4500,
  // dots: true,
  Boolean,
  // arrows: false, Boolean
 
});

// back-to top//
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// tabs//
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}