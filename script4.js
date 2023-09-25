// Get the selected screen type from the previous page
var selectedScreenType = sessionStorage.getItem('selectedScreenOption');

// Display the selected screen type on the page
document.getElementById('selected-screen-type').textContent = 'Selected Screen Type: ' + selectedScreenType;

// Get the selected screen type from the previous page
var selectedDateType = sessionStorage.getItem('selectedDateOption');

// Display the selected screen type on the page
document.getElementById('selected-date-type').textContent = 'Selected date Type: ' + selectedDateType;








// // Populate the time cards
// var timeCardsDiv = document.getElementById('time-cards');
// for (var i = 10; i < 20; i += 1) {
//   var timeCard = document.createElement('div');
//   timeCard.classList.add('card');
//   timeCard.innerHTML = '<input type="radio" name="time" value="' + i + ':00">' + i + ':00';
//   timeCardsDiv.appendChild(timeCard);
// }

// // Populate the location cards
// var locationCardsDiv = document.getElementById('location-cards');
// var locations = ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Barasat', 'Kalyani', 'North 24 Parganas'];
// for (var i = 0; i < locations.length; i++) {
//   var locationCard = document.createElement('div');
//   locationCard.classList.add('card');
//   locationCard.innerHTML = '<input type="radio" name="location" value="' + locations[i] + '">' + locations[i];
//   locationCardsDiv.appendChild(locationCard);
// }

// // Add a listener to the continue button
// document.getElementById('continue-button4').addEventListener('click', function() {
//   // Get the selected time card
//   var selectedTimeCard = document.querySelector('#time-cards .card.selected');

//   // Get the selected time
//   var selectedTime = selectedTimeCard.querySelector('input').value;

//   // Get the selected location card
//   var selectedLocationCard = document.querySelector('#location-cards .card.selected');

//   // Get the selected location
//   var selectedLocation = selectedLocationCard.querySelector('input').value;

//   // Store the selected time and location in the sessionStorage object
//   sessionStorage.setItem('selectedTime', selectedTime);
//   sessionStorage.setItem('selectedLocation', selectedLocation);

//   // Open the next page
//   window.location.href = '/seat.html';
// });
// document.getElementById('continue-button3').addEventListener('click', function() {
//   // Get the selected screen option
//   var selectedDateOption = document.querySelector('input[name="date_option"]:checked').value;

//   // Store the selected screen option in the sessionStorage object
//   sessionStorage.setItem('selectedDateOption', selectedDateOption);
//   var selectedDateType = sessionStorage.getItem('selectedDateOption');


//   // Open the next page
//   window.location.href = '/time.html';
// });
document.getElementById('continue-button4').addEventListener('click', function() {
  // Get the selected screen option
  var selectedTimeOption = document.querySelector('input[name="time_option"]:checked').value;

  // Store the selected screen option in the sessionStorage object
  sessionStorage.setItem('selectedTimeOption', selectedTimeOption);
  var selectedTimeType = sessionStorage.getItem('selectedTimeOption');

  var selectedlocOption = document.querySelector('input[name="loc_option"]:checked').value;

  // Store the selected screen option in the sessionStorage object
  sessionStorage.setItem('selectedlocOption', selectedlocOption);
  var selectedlocType = sessionStorage.getItem('selectedlocOption');


  // Open the next page
  window.location.href = '/seat.html';
});