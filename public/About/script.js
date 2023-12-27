document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {
      menu.style.left = '0';
    } else {
      menu.style.left = '-270px';
    }
  });
});
