const header = document.querySelector('.header');
header.addEventListener('mouseenter', function() {
  header.classList.add('expanded');
});
header.addEventListener('mouseleave', function() {
  header.classList.remove('expanded');
});