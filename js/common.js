$('document').ready(function () {
    /*header*/
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('#header').addClass('hd-blur')
        } else {
            $('#header').removeClass('hd-blur')
        }
    });

    /*section01*/
    $(document).ready(function () {
        setTimeout(function () {
            $("#section01").addClass('active');
        }, 300);
    });

     var sec_02 = gsap.timeline({
        scrollTrigger: {
            //            id: 'blue',
            trigger: "#section02",
            start: "top top",
            end: "bottom bottom",
            //markers: true,
            scrub: true,
//            pin: true,
            onEnter: function () {
                $("#section02").addClass("active");
            },
            onLeaveBack: function () {
                $("#section02").removeClass("active");
            },
        }
    });

    gsap.to('.History , .Skill', { 
        left:0,
        scrollTrigger: {
            //id:'ewe',
            trigger: '.History',
            start: '-=500 top',
            end: 'center center',
            scrub: true,
            //markers:true,
            end: "top bottom",
            onEnter: function () {
                $(".Skill").addClass("active");
            },
            onLeaveBack: function () {
                $(".Skill").removeClass("active");
            },
        }
    });

    /* section03 */

    $('.work-item > a').hover(function () {
            var img = $(this).find('img'),
                imgHtoAnimate = img.height() - $(this).height();
            $(this).find('img').stop().animate({
                marginTop: -(imgHtoAnimate)
            }, 2500);
        },
        function () {
            $(this).find('img').stop().animate({
                marginTop: 0
            }, 2500);
        });

    /* top btn */


    $('.top-btn').click(function () {
        $('html,body').animate({
            scrollTop: $('html,body').offset().top
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 1200) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

});