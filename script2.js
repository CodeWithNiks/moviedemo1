document.getElementById('continue-button').addEventListener('click', function() {
    // Get the selected screen option
    var selectedScreenOption = document.querySelector('input[name="screen_option"]:checked').value;
  
    // Store the selected screen option in the sessionStorage object
    sessionStorage.setItem('selectedScreenOption', selectedScreenOption);
    var selectedScreenType = sessionStorage.getItem('selectedScreenOption');

  
    // Open the next page
    window.location.href = '/date-time.html';
  });
  
