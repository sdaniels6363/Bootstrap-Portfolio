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

  // initial state, displays the page with data-slide-active set to yes
  var sections = $(".section");
  for (i=0; i<sections.length; i++){
    if ($(sections[i]).attr("data-slide-active") !== "yes"){
      var sectionID = `#${sections[i].id}`
      $(sectionID).slideUp(1);
    }
  }


  $(".section-link").on("click", function () {
    // modify css of heading
    self = $(this).attr("id");
    newSection = self.replace("nav-", "#section-")

    var sections = $(".section");
    for (i=0; i<sections.length; i++){
      if ($(sections[i]).attr("data-slide-active") === "yes"){
        var sectionID = `#${sections[i].id}`
        $(sectionID).attr("data-slide-active","no");
        $(sectionID).slideUp(500);

      }
    }
    setTimeout(function(){
      $(newSection).attr("data-slide-active","yes");
      $(newSection).slideDown(500);
  
    },500);

  }) 
});
