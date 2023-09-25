// Get the selected screen type from the previous page
var selectedScreenType = sessionStorage.getItem('selectedScreenOption');

// Display the selected screen type on the page
document.getElementById('selected-screen-type').textContent = 'Selected Screen Type: ' + selectedScreenType;

// // Add a listener to the click event of each date card
// document.querySelectorAll('#date-cards .card').forEach(function(card) {
//     card.addEventListener('click', function() {
//       // Update the checked attribute of the radio input element on the clicked card to true
//       this.querySelector('input').checked = true;
//     });
//   });
  
//   document.getElementById('continue-button3').addEventListener('click', function() {
//     // Get the selected date from the date cards
//     var selectedDate = document.querySelector('#date-cards .card.selected').textContent;
  
//     // Store the selected date in the sessionStorage object
//     sessionStorage.setItem('selectedDate', selectedDate);
//     var selectedDateType = sessionStorage.getItem('selectedDate');
  
//     // Open the next page
//     window.location.href = '/time.html';
//   });
document.getElementById('continue-button3').addEventListener('click', function() {
  // Get the selected screen option
  var selectedDateOption = document.querySelector('input[name="date_option"]:checked').value;

  // Store the selected screen option in the sessionStorage object
  sessionStorage.setItem('selectedDateOption', selectedDateOption);
  var selectedDateType = sessionStorage.getItem('selectedDateOption');


  // Open the next page
  window.location.href = '/time.html';
});



