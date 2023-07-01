
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

const hamburger = document.querySelector('.hamburger');
const navContainer = document.querySelector('nav .container')
const menu = document.querySelector('nav ul');
const icon = document.querySelector('.btn-icon');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  menu.classList.toggle('show');
  icon.classList.toggle('show');
  navContainer.classList.toggle('show');
})

const disabledLinks = document.querySelectorAll('nav li.dropdown');
disabledLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  })
});