$('a.list-group-item#connect').click(function () {
  $(".panel#connect").slideToggle("fast");
});

$('a.list-group-item#work').click(function () {
  $(".panel#work").slideToggle("fast");
});

$(function () {
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $("#accordion").accordion({
    icons: icons,
    heightStyle: "content"
  });
});

$(window).resize(function () {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});

$(window).resize();

});
