jQuery(document).ready(function ($) {

  /*lang*/
  $(window).on('load', function (e){
    if($('.lang-wrap ul li:first-child').hasClass()){
      $('.lang-wrap ul').addClass('is-left')
    };



  });

  $(window).on('load', function (e){
    if($('*').is('.home')){
      $('.bg-img-section .video-desk').get(0).play();
      $('.bg-img-section .video-mob').get(0).play();
    }

  })

  /*slider*/
  var swiperTop = new Swiper(".top-slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: ".top-pagination",
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
  });

  /* mob menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();
    if($('.open-menu').hasClass('is-active')){
      $('.open-menu').removeClass('is-active');
      $('html').removeClass('is-menu');
      $.fancybox.close();
    } else{
      $('.open-menu').addClass('is-active');
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        animationDuration : 600,
        animationEffect   : 'slide-in-out',
        afterClose:function(e){
          $('.open-menu').removeClass('is-active');
          $('html').removeClass('is-menu');
        },
        beforeShow:function(e){
          $('html').addClass('is-menu');
        },
      });
    }
  });

  /*move top*/

  $(document).on('click', '.top-site', function (e) {
    $('html, body').stop().animate({scrollTop:0},'slow', 'swing');
  });

  /*show/hide video*/
/*  if(window.innerWidth > 1279){
    $(document).on('mouseover', '.bg-img-section', function (e){
      setTimeout(function() {
        $('.bg-img-section video').get(0).play();
        $('.bg-img-section').addClass('is-play');
      }, 500);
    });

    $(document).on('mouseout', '.bg-img-section', function (e){
      setTimeout(function() {
        $('.bg-img-section video').get(0).pause();
        $('.bg-img-section').removeClass('is-play');
      }, 500);
    });
  }else{
    $('.bg-img-section video').get(0).play();
  };*/


  /*accordion*/
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });

  /*fancybox*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
  });


  /*slider*/
  var swiperProject = new Swiper(".project-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      1279: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

    },
  });


  /*datapicker*/
  const localeEn = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0
  }

  new AirDatepicker('.data1', {
    locale: localeEn,

  })

$(".hover-block-popup").on('click', function (e){
    $(this).hide();
    $(this).find('video').get(0).play();
  });

  /*menu anim*/
  $('.home-nav').onePageNav();
  $('.design-nav').onePageNav();


 /* home anim*/
  $(document).scroll(function() {

    /*page home*/
    if($('*').is('.home-nav')) {
      if($('.home-nav .item-pre-footer').hasClass('current') || $('.home-nav .item-footer').hasClass('current')){
        $('.pre-footer').addClass('is-visible');
      }else{
        $('.pre-footer').removeClass('is-visible');
      };


      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };

    }

    /*page web-design*/
    if($('*').is('.design-nav')){
      if($('.design-nav .item-pre-footer').hasClass('current') || $('.design-nav .item-footer').hasClass('current')){
        $('.form-section').addClass('is-visible');
      }else{
        $('.form-section').removeClass('is-visible');
      };


      if($('.item-black').hasClass('current')){
        $('header').addClass('black');
        $('.fix').addClass('black');
      }else{
        $('header').removeClass('black');
        $('.fix').removeClass('black');
      };
    }

    /*anim-bg*/
    if($('*').is('.web-design')){
      var st = $(this).scrollTop(),
        //MOVE BLOCK
        topBlock = $('.web-design-1').offset().top,
        scrollLeft = -(st + topBlock)/2 - 100,
        translate = 'translate3d( ' + '-50%' + ', ' + scrollLeft + 'px, ' + 0 + ')',
        anim = 'all 2s ease'
      $('.bg-design img').css({
        '-webkit-transform': translate,
        '-moz-transform': translate,
        'transform': translate,
        ' -webkit-transition': anim,
        'transition': anim
      });
    }

  });



  /*footer */
  function myfun() {
    var h = parseInt($('.footer').css('height'));
    $(".footer-wrap").css('padding-bottom', h);

  };

  $( window ).resize(myfun);
  $( document ).ready(myfun);


  /*next step*/

  $(document).on('click', '.next-step', function (e){
    e.preventDefault();
    let index = ($(this).closest('.item').index() + 1)*100;

    $('.form-step .item').css({top: -index +"vh"})
  });

  /*video project*/
  if(window.innerWidth > 1279){
    $(document).on('mouseover', '.project-video .video-wrap', function (e){
      $(this).find('video').get(0).play();
      $(this).find('img').hide();
      $(this).closest('.item').addClass('is-play');
    });

    $(document).on('mouseout', '.project-video .video-wrap', function (e){
      $(this).find('video').get(0).pause();
      $('.project-video .video-wrap img').show();
      $('.project-video .item').removeClass('is-play');
    });
  }else {
    $('.project-video .video-wrap video').get(0).play();
    $('.project-video .video-wrap img').hide();
    $('.project-video .video-wrap').closest('.item').addClass('is-play');
  }

  /*show text*/
  $(document).on('click', '.more', function (e){
    e.preventDefault();
    $(this).hide();
    $(this).closest('.link-wrap').siblings('p').slideDown()
  });

});