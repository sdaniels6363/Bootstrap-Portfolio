

$( document ).ready(function() {
  console.log( "ready!" );

  $(".slide-link").on("click", function(){
    // modify css of heading
    var self = $(this).attr("id");
    var section = self.replace("nav-","#section-")
    console.log(self);
    console.log(section)
    var currIndex = $(section).css("z-index");
    console.log(currIndex);
    $(section).css("z-index",parseInt(currIndex) + 1); // increment by one each time it's clicked
  });



});