$(document).ready(function() {
  $("#form").submit(function(event) {

      var create = parseInt($("#create").val());
      var companies = parseInt($("#companies").val());
      var types = parseInt($("#types").val());
      var important = parseInt($("#important").val());
      var guess = parseInt($("#guess").val());


      if (create === 1 && companies === 1 && types === 1 && important === 1 && guess === 1) {
        alert("C# looks awesome for you");
      }
    event.preventDefault()
  });
});
