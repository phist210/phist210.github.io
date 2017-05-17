$('a.list-group-item#connect').click(function(){
    $(".panel#connect").slideToggle("fast");
});

$('a.list-group-item#work').click(function(){
    $(".panel#work").slideToggle("fast");
});

$(function(){

var appendesc   =  ("<div class='esc-info'>PRESS ESC TO CLOSE</div>");
var appendmodal =  ("<div class='modal-overlay'></div>");

  $('a[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendesc);
    $("body").append(appendmodal);
    $(".modal-overlay").slideDown().fadeTo(500, 0.9);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).slideDown($(this).data());
    document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
      $(".modal-box, .modal-overlay, .esc-info").slideUp(function() {
        $(".modal-overlay, .esc-info").fadeTo(500, 0.1).remove();
      });
    }
  };
});

$(".modal-overlay, .js-modal-close").click(function() {
  $(".modal-box, .modal-overlay, .esc-info").slideUp(function() {
    $(".modal-overlay, .esc-info").fadeTo(500, 0.1).remove();
  });
});

$(".menu-titles#about").click(function() {
  $(".modal-body#about-me").toggleClass("show");
});

$(".menu-titles#work").click(function() {
  $(".modal-body#my-work").toggleClass("show");
});

$(".menu-titles#blog").click(function() {
  $(".modal-body#my-ideas").toggleClass("show");
});

$(function() {
  var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
  };
  $( "#accordion" ).accordion({
    icons: icons,
    heightStyle: "content"
  });
});

$(window).resize(function() {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});

$(window).resize();

});
