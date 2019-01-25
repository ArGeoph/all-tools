$(document).ready(() => {
    $(".menuButton").click(function() {
        //remove active class from all current button siblings      
        $(".menuButton").removeClass("buttonActive");
        
        //add css class to the currently selected menu button
        $(this).addClass("buttonActive");        
    });
});