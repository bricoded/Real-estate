const splide = new Splide('.splide', {
  type: 'loop', //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: '20px',
  speed: 500,
  start: 1,
  perPage: 3,
  breakpoints: {
		767: {
			perPage: 2,
		},
    575: {
      perPage: 1,
    }
  },
  perMove: 1,
  interval: 3000,
  arrows: false,
  pauseOnHover: true,
});
splide.mount();