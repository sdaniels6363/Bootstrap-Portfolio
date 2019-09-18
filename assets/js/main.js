

$(document).ready(function () {
  console.log("ready!");

  $(".slide-link").on("click", function () {
    // modify css of heading
    var self = $(this).attr("id");
    var section = self.replace("nav-", "#section-")

    switch (section) { // depending on which heading is clicked, we make that heading visible.
      case "#section-1":
        $("#section-1").css("display", "block");
        $("#section-2").css("display", "none");
        $("#section-3").css("display", "none");
        break;
      case "#section-2":
        $("#section-1").css("display", "none");
        $("#section-2").css("display", "block");
        $("#section-3").css("display", "none");
        break;
      case "#section-3":
        $("#section-1").css("display", "none");
        $("#section-2").css("display", "none");
        $("#section-3").css("display", "block");
        break;
    }

  });



});