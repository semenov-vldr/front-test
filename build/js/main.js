let navMain = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');


navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navMain.classList.toggle('active');
});
