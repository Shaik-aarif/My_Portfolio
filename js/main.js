// $(document).on( "ready", function(){

//     alert("jhbfre");


// });


let $btns = $('.project-area .button-group button');

    $btns.on(  "click",function(e){
        // alert("hwbef");

        $('.project-area .button-group button').removeClass('active');

        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({

            filter:selector 
        });

        return false;

    })


$('.project-area .button.group #btn1').trigger('click');


$('.profiles-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        }
    }    
})

let nav_top = $('.header-space').height() - 50;

    function navbarFixed() {
        if ($('.header-space').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_top) {
                    $('.header-space ').addClass('navbar_fixed');
                } else {
                    $('.header-space ').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

