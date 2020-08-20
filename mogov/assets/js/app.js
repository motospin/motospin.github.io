$(function() {
    
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {        
        if(scrollOffset >= introH )  {
            header.addClass("fixed");
        } else  {
            header.removeClass("fixed");
        }
    }


    
    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this)
            blockId = $this.data('scroll');
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");

        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");

       $("html, body").animate({
            scrollTop: blockOffset - 69

       }, 500);

    });

});

/* Nav toggle */
$("#nav_toggle").on("click", function(event){
    event.preventDefault();
    
    $("#nav_toggle").toggleClass("active");
    $("#nav").toggleClass("active");
   });

/* Collapse */
$("[data-collapse").on("click", function(event){
    event.preventDefault();

    var $this = $(this)
        blockId = $this.data('collapse');

    $this.toggleClass("active");
});

/* Slider */
$("[data-slider]").slick({
    infinitie: true,
    fade: false,
    slideToShow: 1,
    slideToScroll: 1
});