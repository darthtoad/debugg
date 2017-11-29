$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(tijproeort) {
      var userInput = $("input#" + tijproeort).val();
      console.log(userInput);
      $("." + tijproeort).text(userInput).val();
    });

    $("#story").show();
    event.preventDefault();
  });
});
