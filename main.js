var modalBg = document.getElementsByClassName("news-modal");
var modal = document.getElementsByClassName("news-modal-box");
var openBtn = document.getElementsByClassName("news-item");
var closeBtn = document.getElementsByClassName("modal-close");

// Navigation

$(".main-nav__toggler").click(function () {
  $(this).toggleClass("active-toggler");
  $(".main-nav__list").toggleClass("main-menu-active");
});

$(".sub-nav__toggler").click(function () {
  $(this).toggleClass("active-toggler");
  $(".sub-nav").toggleClass("sub-menu-active");
});

// Open modal
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].onclick = function () {
    modalBg[i].style.display = "block";
  };
}

// Close modal
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    modalBg[i].style.display = "none";
  };
}

// Close modal on outside click
window.addEventListener("click", outsideClick);
function outsideClick(e) {
  if (e.target == modalBg) {
    modalBg.style.display = "none";
  }
}

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
