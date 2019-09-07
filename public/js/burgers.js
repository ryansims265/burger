// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {


    $("#change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("TRUE");
      console.log("Devouring the Burger!")
  
      var newDevouredstate = {
        devoured: true
      };
  console.log(newDevouredstate);
      // Send the PUT request.
      $.ajax("burgers/update/:" + id, {
        type: "PUT",
        data: newDevouredstate
      }).then(
        function() {
          console.log("Changed devoured to", newDevoured);
          // Reload the page to get the updated list
          // location.reload();
        }
      );
    });
  
    $("#submitBurger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("Creating Burger");
  
      var newBurger = {
        burgerName: $("#newBurgerName").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
        }
      );
    });
  
  });
  