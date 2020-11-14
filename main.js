let newsItem = document.querySelectorAll(".news-item");
let newsModal = document.querySelectorAll(".news-modal");
let modalClose = document.querySelectorAll(".modal-close");

// Navigation
$(".main-nav__toggler").click(function () {
  $(this).toggleClass("active-toggler");
  $(".main-nav__list").toggleClass("main-menu-active");
});

$(".sub-nav__toggler").click(function () {
  $(this).toggleClass("active-toggler");
  $(".sub-nav").toggleClass("sub-menu-active");
});

$(window).resize(function () {
  if ($(window).width() >= 769) {
    $(".main-nav__toggler").removeClass("active-toggler");
    $(".main-nav__list").removeClass("main-menu-active");

    $(".sub-nav").removeClass("sub-menu-active");
    $(".sub-nav__toggler").removeClass("active-toggler");
  }
});

// Open/Close modal
newsItem.forEach((item) => {
  item.addEventListener("click", function () {
    let modal = item.closest(".col-md-4").childNodes[5];
    modal.classList.add("modal-open");
  });
});

modalClose.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".news-modal").classList.remove("modal-open");
  });
});

newsModal.forEach((modal) => {
  modal.addEventListener("click", function () {
    this.classList.remove("modal-open");
  });
});

// Image Fancybox
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});

// Fade arrow
var arrowFade = $(".arrow");

$(window).on("scroll", function () {
  var st = $(this).scrollTop();
  arrowFade.css({
    opacity: 1 - st / 230,
  });
});

// Slider
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// Video slider

$(document).ready(function () {
  $(".video-slide").slick({});
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
