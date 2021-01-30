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
function fancybox() {
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
}

// Fade arrow
var arrowFade = $(".arrow");

$(window).on("scroll", function () {
  var st = $(this).scrollTop();
  arrowFade.css({
    opacity: 1 - st / 230,
  });
});

// Slider
function slider() {
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
}

// Contact
let contactBtn = document.querySelector('.contact-btn');


contactBtn.addEventListener('click', function () {
  let subject = document.querySelector('#subject').value;
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  if (subject && name && email && message != "" && email.includes('@')) {
    toastr.success('Message Sent!');
  } else {
    toastr.error('Please enter required contact information!');
  }
})