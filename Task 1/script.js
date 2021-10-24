/* SCROLL jQuery code for smooth animation/scrolling */
var duration = 300;     //miliseconds latency for animation. More value, slower the animation

$('a').on('click', function(event){     // animate all the anchor tags
    if(this.hash!==''){
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, duration, function(){
                window.location.hash = hash;
        });
    }/* end-if */
}); /* on() */


/* SCROLL TO TOP jQuery code for smooth animation and fade effects */
var offset = 200;       //pixels for triggering the button. More the value, more scrolling needed to trigger the button

$(window).scroll(function(){
    if($(this).scrollTop() > offset){
        $("#scrolltotop").fadeIn(duration);     // hide the scroll button
    } else{
        $("#scrolltotop").fadeOut(duration);    // unhide the scrolling button
    }
});

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

