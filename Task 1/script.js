/* SCROLL TO TOP jQuery code for smooth animation and fade effects */
var duration = 300;     //miliseconds latency for animation. More value, slower the animation
var offset = 200;       //pixels for triggering the button. More the value, more scrolling needed to trigger the button
$('#scrolltotop').fadeOut(duration)

// Hide/show scroll to top button
$(window).scroll(function(){
    if($(this).scrollTop() > offset){
        $("#scrolltotop").fadeIn(duration);     // hide the scroll button
    } else{
        $("#scrolltotop").fadeOut(duration);    // unhide the scrolling button
    }
});

// Define click behaviour of scroll to top button
$("#scrolltotop").click(function(event){
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, duration);  // animate the scrolling event
    return false;
});




// Shows the carousel control icons when carousel is hovered
$(function() {
    $('#carouselCover').hover(
        //mousein event
        function(){
            $('.carousel-button').css('visibility', 'visible');
        }, 
        //mouseout event
        function(){
        $('.carousel-button').css('visibility', 'hidden');
        }
    );
});




// Navigation link status update
var nav_sections = $(".section"); // gets a list of the elements with section class
var main_nav = $(".navbar");    // get the navigation bar

$(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 200;
    nav_sections.each(function () {
        var top = $(this).offset().top, bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            if (cur_pos <= bottom) {
                main_nav.find("li").find("a").removeClass("active");
            }
            main_nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
        }
        if (cur_pos < 300) {
            $(".navbar ul:first li:first a").addClass("active");
        }
    });
});