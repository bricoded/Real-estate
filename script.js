const searchBtn = document.querySelector('nav .toggler');
const closeBtn = document.querySelector('.box-collapse .close')
const searchForm = document.querySelector('.box-collapse');
const darkOverlay = document.querySelector('.click-overlay')

searchBtn.addEventListener('click', function () {
  searchForm.classList.add('show');
  darkOverlay.classList.add('show');
})

closeBtn.addEventListener('click', function () {
  searchForm.classList.remove('show');
  darkOverlay.classList.remove('show');
})


const splide = new Splide('.splide', {
  type: 'loop', //slide, loop, fade
  // padding: { y: 10 }, //css values
  gap: '20px',
  speed: 500, //transition in milliseconds
  // fixedWidth: '10vw',
  // width: '100vw',
  perPage: 3,
  start: 1,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  arrows: false,
  pauseOnHover: true,
});
splide.mount();