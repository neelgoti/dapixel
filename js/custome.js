
$(document).ready(function(){

    $('#slider1').owlCarousel({
        loop:true,
        // margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:500,
        items:1,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#slider2').owlCarousel({
        loop:true,
        // margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:500,
        items:5,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


})