$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
    });

    //menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.home .home-text-content').toggleClass("none")
        $('.menu-btn i').toggleClass("active");

    })
});