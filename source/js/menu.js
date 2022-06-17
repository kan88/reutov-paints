let navMainHeader = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__button');


navToggle.addEventListener('click', function () {
  if (navMainHeader.classList.contains('main-header__nav--closed')) {
    navMainHeader.classList.remove('main-header__nav--closed');
    navMainHeader.classList.add('main-header__nav--opened');
  } else {
    navMainHeader.classList.add('main-header__nav--closed');
    navMainHeader.classList.remove('main-header__nav--opened');
  }
});
