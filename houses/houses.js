const splide = new Splide('.splide', {
  type: 'loop', //slide, loop, fade
  // padding: { y: 10 }, //css values
  speed: 500,
  start: 1,
  perPage: 1,
  perMove: 1,
  interval: 2000,
  arrows: false,
  pauseOnHover: true,
  autoplay: true,
});
splide.mount();