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

const button1 = document.getElementById("bt1");
const button2 = document.getElementById("bt2");
const Aptform = document.getElementById("form1");

// Add an event listener to the button
button1.addEventListener('click', function() {
  // Display the form
  Aptform.style.display = 'block';
});
button2.addEventListener('click', function()  {
  // Display the form
  Aptform.style.display = 'block';
});