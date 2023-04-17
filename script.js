function oncli()
{

}

// If you want the dropdown to disappear when you move the mouse away
var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('mouseleave', function() {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
});
