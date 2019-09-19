var activeHeadingStyle = {
  'background-color':'rgb(97, 94, 94, 0.75)',
  'border-top': '1px solid #000000',
  'border-right': '1px solid #000000',
  'border-left': '1px solid #000000',
  'border-bottom':'none',
  'z-index': '2',
}

var inactiveHeadingStyle = {
  'background-color':'rgb(159, 160, 161)',
  'border': '1px solid #000000',
  'z-index':'0',
}

var activeSlide = {
  'background-color':'rgb(97, 94, 94, 0.75)',
}


$(document).ready(function () {
  console.log("ready!");

  // initial state, displays the page with data-slide-active set to yes
  var sections = $(".section");
  for (i=0; i<sections.length; i++){
    var sectionID = `#${sections[i].id}`
    var navID = sectionID.replace("#section-","#nav-");
    if ($(sections[i]).attr("data-slide-active") !== "yes"){
      $(navID).css(inactiveHeadingStyle);
      $(sectionID).slideUp(1);
    } else {
      $(navID).css(activeHeadingStyle);
      $(sectionID).css(activeSlide);
      $(sectionID).slideDown(1);
    }
  }


  $(".section-link").on("click", function () {
    // modify css of heading
    self = $(this).attr("id");
    newSection = self.replace("nav-", "#section-");
    $(`#${self}`).css(activeHeadingStyle);

    var sections = $(".section");
    for (i=0; i<sections.length; i++){
      if ($(sections[i]).attr("data-slide-active") === "yes"){
        var sectionID = `#${sections[i].id}`
        var navID = sectionID.replace("#section-","#nav-")
        $(sectionID).attr("data-slide-active","no");
        $(sectionID).slideUp(500);
        $(navID).css(inactiveHeadingStyle);
      }
    }
    setTimeout(function(){
      $(newSection).attr("data-slide-active","yes");
      $(newSection).css(activeSlide);
      $(newSection).slideDown(500);
    },500);

  }) 
});
