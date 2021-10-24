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
