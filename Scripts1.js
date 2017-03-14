function openBar() {
    document.getElementById("sidebar").style.width = "180px";
    document.getElementById("bar").style.marginLeft = "180px";
}

function closeBar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("bar").style.marginLeft= "0";
}

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
