// navigation

let navbar = $(".navbar");

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});
