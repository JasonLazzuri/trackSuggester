var create1 = function(create,companies,types,important,guess){
  return create + companies + types + important + guess;
};


$(document).ready(function() {
  $("#form").submit(function(event) {

      var create = parseInt($("#create").val());
      var companies = parseInt($("#companies").val());
      var types = parseInt($("#types").val());
      var important = parseInt($("#important").val());
      var guess = parseInt($("#guess").val());
      var createResult = create1(create,companies,types,important,guess);


      if (createResult > 9){
        alert("Ruby looks like a great choice!");$("#rubyChoice").show();
      }


      // if ((create === 1 && companies === 1 && types === 1 && important === 1 && guess === 1)||
      //     (create === 1 && companies === 1 && types === 1 && important > 1 && guess > 1 )||
      //     (create > 1 && companies > 1 && types === 1 && important === 1 && guess === 1 )
      //     (creat > 1)) {
      //   alert("C# looks awesome for you"); $("#cChoice").show();
      //
      // } else if
      // ((create === 2 && companies === 2 && types === 2 && important === 2 && guess === 2)||
      // (create === 2 && companies === 2 && types === 2 && important !== 2 && guess !== 2)||
      // (create !== 2 && companies !== 2 && types === 2 && important === 2 && guess === 2 )){
      //   alert("Ruby looks awesome for you"); $("#rubyChoice").show();
      // }
    event.preventDefault()
  });
});
