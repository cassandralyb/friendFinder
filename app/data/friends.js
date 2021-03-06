
var friends = [
   {
      "name":"Sandy B",
      "photo":"https://www.facebook.com/photo.php?fbid=10210394455246541&set=a.10210124513978178.1073741828.1497925264&type=3&theater",
      "scores":[5,1,4,4,5,1,2,5,4,1]
   },
]

module.exports = friends;

var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {
      allow_single_deselect: true
    },
    '.chosen-select-no-single': {
      disable_search_threshold: 10
    },
    '.chosen-select-no-results': {
      no_results_text: 'Oops, nothing found!'
    },
    '.chosen-select-width': {
      width: "95%"
    }
  }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }
  
  // Function to submit the user's responses on click.
  $("#submit").on("click", function() {
    
    function validateForm() {
      var isValid = true;
      $('.form-control').each(function() {
        if ($(this).val() === '')
          isValid = false;
      });
      $('.chosen-select').each(function() {
        if ($(this).val() === "")
          isValid = false
      })
      return isValid;
    }

    // If all required fields are completed by the user
    if (validateForm() == true) {

      // Create an object for the user's input to be saved as "userData"
      var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        }
        
      var currentURL = window.location.origin;

      // post the data to the friends API. 
      $.post(currentURL + "/api/friends", userData, function(data) {
        
        // Psuedocode: 
        //Grab the result from the post so that the best match's name,
        // and photo are displayed on the page.
        // Show the modal with the best match in the window.
        


