// Slide Banner
var owl = $('.owl-carousel');
owl.owlCarousel({
  nav: false,
  items: 1,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  autoplaySpeed: 600,
});

// Go to the next item
$('.banner__switch-right').click(function () {
  owl.trigger('next.owl.carousel', [600]);
})
// Go to the previous item
$('.banner__switch-left').click(function () {
  owl.trigger('prev.owl.carousel', [600]);
})