var visibleSectionStyle = {
  'background-color':'#777777',
  'border': '1px solid #ffffff',
  'display': 'block'
}

var invisibleSectionStyle = {
  'display': 'none'
}

var activeHeadingStyle = {
  'background-color':'#777777',
  'border-top': '1px solid #ffffff',
  'border-right': '1px solid #ffffff',
  'border-left': '1px solid #ffffff',
  'border-bottom': '2px solid #777777',
  'display': 'block'
}

var inactiveHeadingStyle = {
  'background-color':'#666666',
  'border': '1px solid #ffffff',
  'display': 'none'
}


$(document).ready(function () {
  console.log("ready!");

  $(".section-link").on("click", function () {
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