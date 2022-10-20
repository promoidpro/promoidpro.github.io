jQuery(document).ready(function($) {

  "use strict";



  var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//test icone hover effect -------------

	$(".box-icon-data").hover(
		
    function(){
      var $this = $(this);
      $this.css("background-color",$this.data('box-hover-bg'));
    },
    function(){
      var $this = jQuery(this);
      $this.css("background-color",$this.data('box-bg'));
    }
    
  );

 
// -------------------------------------------------------------
//   min cart
// -------------------------------------------------------------
// 
$(".show-cart-btn").hoverIntent({
    over : cartover,
    out : cartout,
    timeout : 500
  });

  function cartover(){
    $('.hidden-cart')
      .stop(true,true)
      .fadeIn({duration:500,queue:false})
      .css('display','none')
      .slideDown(500);
  }
  function cartout(){
    $('.hidden-cart')
      .stop(true,true)
      .fadeOut({duration:100,queue:false})
      .slideUp(100);
  }


  $("hidden-cart").mouseover(function(){
    $(this).css("display","block");
  });

  $("hidden-cart").mouseout(function(){
    $(this).css("display","none");
  });




  $(".show-search-btn").hoverIntent({
    over : searchover,
    out : searchout,
    timeout : 500
  });

  function searchover(){
    $('.hidden-search')
      .stop(true,true)
      .fadeIn({duration:500,queue:false})
      .css('display','none')
      .slideDown(500);
  }
  function searchout(){
    $('.hidden-search')
      .stop(true,true)
      .fadeOut({duration:100,queue:false})
      .slideUp(100);
  }


  $("hidden-search").mouseover(function(){
    $(this).css("display","block");
  });

  $("hidden-search").mouseout(function(){
    $(this).css("display","none");
  });
  $("hidden-search").mouseover(function(){
    $(this).css("display","block");
  });


// -------------------------------------------------------------
//   sly carousel
// -------------------------------------------------------------
  (function () {
    var $frame  = jQuery('.wd-sly-carousel');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap   = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 3,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

    });

  }());


  
  var datafile = $('.counter').data('file');
    $('.counter').counterUp({
        delay: 10,
        time: datafile
    });
  //_______________menu ____________________________
	$(".toggle-menu").on("click", function(){
    $("#menu").toggleClass("is-open");
    $(".menu-empty-menu-container").toggleClass("is-open");
	});


  $('.wd-header-6 .wd-header-toggle').on("click", function(){
    $(".wd-header-6").toggleClass("active");
    if($(".wd-header-6").hasClass("active")){
      $("#nav-icon2",this).addClass('open');
    }else{
      $("#nav-icon2",this).removeClass('open');
    }

  });


  $('#nav-icon2').on("click", function(){
    $(this).toggleClass('open');
  });


	var toggles = document.querySelectorAll(".c-hamburger");
	
	  for (var i = toggles.length - 1; i >= 0; i--) {
	    var toggle = toggles[i];
	    toggleHandler(toggle);
	  };
	
	  function toggleHandler(toggle) {
	    toggle.addEventListener( "click", function(e) {
	      e.preventDefault();
	      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
	    });
	  }

	//____________isotop ________________
      $(window).load(function(){
      if ($('.freshair_isotop').length) {
        $('.freshair_isotop').each(function(i, obj) {
            blog_isotop_setting(this);
        });
    }
    function blog_isotop_setting(el) {
    	var $container = $(el),
		freshair_grid = $container.data('wdgrid');
      	// init
      	$container.isotope({
        // options
        itemSelector: '.freshair_multi_post_isotop_item',
        layoutMode: freshair_grid ,
        filter: '*'
      });

      $('.filters a').click(function(){
            $('.filters .current').removeClass('current');
            $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({ filter: selector });
      return false;
    	});
    }
    });


  /*_________________________________ Waypoints ___________________*/
  var waypoints = $('.main').waypoint({
    handler: function (direction) {
      $('.wd-section-blog-services.style-3').addClass('anim-on');
      $('.wd-section-blog-services.style-3 .wd-blog-post').addClass('nohover');
    },
    offset: '45%'
  });

/*  $('.animated').css('opacity', 0);*/


  //___________ Add animation delay
  var thisParent     = $(this).closest( '.animation-parent'),
      animationDelay = thisParent.data('animation-delay');

  // find ".animation-parent"
  $('.animation-parent').each(function( index, element ) {
    // find each ".animated" in the current ".animation-parent"
    $('.animated', $(this)).each(function ( index, element ) {
      thisParent     = $(this).closest( '.animation-parent' );
      animationDelay = thisParent.data('animation-delay');
      animationDelay = animationDelay * index;
      $(this).css('transition-delay', animationDelay + 'ms');
    });
  });

	//____________text icon hover ____________
	$('.hover_style1').hover(function(){
		var obj = $(this) ;
		var iconBgColor = $(obj).css('backgroundColor');
		var iconColor = $(obj).css('color');
		$(obj).css('color',iconBgColor);
		$(obj).css('backgroundColor',iconColor);
	});
  // _____________Empty Spaces

  if( $('.freshair_empty_space').length ) {

    $('.freshair_empty_space').each(function(i, obj) {
      freshair_empty_space_padding(this);
    });

    window.addEventListener('resize', function () {
      $('.freshair_empty_space').each(function(i, obj) {
        freshair_empty_space_padding(this);
      });
    }, true);
  }

  function freshair_empty_space_padding(el){
   var $mobile_height = $(el).data("heightmobile"),
       $tablet_height = $(el).data("heighttablet"),
       $desktop_height = $(el).data("heightdesktop");

    if (Modernizr.mq("(max-width: 40em)")) {
     $(el).css("height", $mobile_height);
    } else if (Modernizr.mq("(min-width: 40.063em) and (max-width: 64em)")) {
     $(el).css("height", $tablet_height);
    } else if (Modernizr.mq("(min-width: 64.063em)")) {
     $(el).css("height", $desktop_height);
    }
    $(document).foundation('equalizer', 'reflow');
  }


  // _____________Row Delimiter

  if( $('.row-delimiter').length ) {

    setTimeout(function(){
      $('.row-delimiter').each(function(i, obj) {
        freshair_row_delimiter_position(this);
      });
    }, 2000);

    window.addEventListener('resize', function () {
      $('.row-delimiter').each(function(i, obj) {
        freshair_row_delimiter_position(this);
      });
    }, true);
  }

  function freshair_row_delimiter_position(el){

    var screen_width = $(window).width(),
        parent_left  = parseInt($(el).parent().css('left')) * -1 ;

    if($(el).hasClass('vertical_line_bottom_left')){
      $(el).css('transform', 'translateY(100%) translateX('+ parent_left +'px)');
    }else if($(el).hasClass('vertical_line_bottom_center')){
      screen_width = screen_width / 2;
      $(el).css('transform', 'translateY(100%) translateX('+ screen_width +'px)');
    }else if($(el).hasClass('vertical_line_bottom_right')){
      var row_with = 1199;
      if( row_with > screen_width )
        row_with = screen_width - 1 ;
      $(el).css('transform', 'translateY(100%) translateX('+ row_with +'px)');
    }

  }  // _____________ Full Width Row

  if( $('.border-bar').length ) {

    setTimeout(function(){
      freshair_fullWidthRow();
    }, 2000);

    setTimeout(function(){
      freshair_fullWidthRow();
    }, 8000);

    window.addEventListener('resize', function () {
      setTimeout(function(){
        freshair_fullWidthRow();
      }, 1500);
    }, true);
  }

  function freshair_fullWidthRow() {
    if($('body').hasClass('body-border')) {
      var $elements = $('[data-vc-full-width="true"]');
      $.each($elements, function (key, item) {
        var $el = $(this);
        $el.addClass("vc_hidden");
        var $el_full = $el.next(".vc_row-full-width");
        $el_full.length || ($el_full = $el.parent().next(".vc_row-full-width"));
        var el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width();
        if ($el.css({
            position: "relative",
            left: offset + 40,
            "box-sizing": "border-box",
            width: $(window).width() - 80
          }), !$el.data("vcStretchContent")) {
          var padding = -1 * offset;
          0 > padding && (padding = 0);
          var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
          0 > paddingRight && (paddingRight = 0), $el.css({
            "padding-left": padding + "px",
            "padding-right": paddingRight + "px"
          })
        }
        $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden")
      })
    }
  }


  // _______________ Buttons _________________________
  jQuery(".button").hover(
    function(){
      var $this = jQuery(this);
      $this.css("background-color",$this.data('hover-bg'));
      $this.css("color",$this.data('hover-color'));
    },
    function(){
      var $this = jQuery(this);
      $this.css("background-color",$this.data('bg'));
      $this.css("color",$this.data('color'));
    }
  );


//___________ Portfolio Grid Isotope






window.onload = function() {

  if ($('.wd-portfolio-grid').length) {
      $('.wd-portfolio-grid').each(function(i, obj) {
          portfolio_grid_setting(this);
      });
  }

    function portfolio_grid_setting(el) {
        var $freshair_portfolio_grid = $(el).isotope({
          itemSelector: '.wd-portfolio-grid-item',
          layoutMode: 'fitRows'
        })

        $('.filters').on( 'click', 'a', function(e) {
          e.preventDefault();
          var filterValue = $(this).attr('data-filter');
          $(".filters a").removeClass('current');
          $(this).addClass('current');
          $freshair_portfolio_grid.isotope({ filter: filterValue });
        });
    }


  if ($('.wd-portfolio-masonry').length) {
        $('.wd-portfolio-masonry').each(function(i, obj) {
            portfolio_masonry_setting(this);
        });
    }

    function portfolio_masonry_setting(el) {

        var $freshair_portfolio_masonry = $(el).isotope({
          itemSelector: '.wd-portfolio-masonry-item'
        })

        $('.filters').on( 'click', 'a', function(e) {
          e.preventDefault();
          var filterValue = $(this).attr('data-filter');
          $(".filters a").removeClass('current');
          $(this).addClass('current');
          $freshair_portfolio_masonry.isotope({ filter: filterValue });
        });
    }




    if ($('.wd-portfolio-masonry-free-style.style-1').length) {
      $('.wd-portfolio-masonry-free-style.style-1').each(function(i, obj) {
          portfolio_masonry_free_style_1_setting(this);
      });
  }

    function portfolio_masonry_free_style_1_setting(el) {

        var $freshair_portfolio_masonry = $(el).isotope({
          itemSelector: '.wd-portfolio-masonry-item'
        })

        $('.filters').on( 'click', 'a', function(e) {
          e.preventDefault();
          var filterValue = $(this).attr('data-filter');
          $(".filters a").removeClass('current');
          $(this).addClass('current');
          $freshair_portfolio_masonry.isotope({ filter: filterValue });
        });
    }



    if ($('.wd-portfolio-masonry-free-style.style-2').length) {
      $('.wd-portfolio-masonry-free-style.style-2').isotope('destroy');
      $('.wd-portfolio-masonry-free-style.style-2').each(function(i, obj) {
          portfolio_masonry_free_style_2_setting(this);
      });
    }

    function portfolio_masonry_free_style_2_setting(el) {
    var $container = $(el);
      var $containerProxy = $container.clone().empty().css({ visibility: 'hidden' }); 
      var colWidth;
    
        $container.after( $containerProxy );  

      $(window).resize( function() {
        colWidth = Math.floor( $containerProxy.width() / 4 );
        $container.css({
            width: colWidth * 4
        })
        $container.isotope({
          resizable: false,
          itemSelector: '.wd-portfolio-masonry-item',
          masonry: {
            columnWidth: colWidth
          }
        });
      }).resize();


      $(window).load(function() {
      $container.isotope('layout');
    });

    var filtertoggle = jQuery('body');

    $(window).load(function() {
      $container.isotope('layout');
          $(function(){
            setTimeout(function() {
              $container.isotope('layout');
            }, filtertoggle.hasClass("") ? 755: 755);
          }); 
    });
    

    $(window).resize(function() {
      $container.isotope('layout');
          $(function(){
            setTimeout(function() {
              $container.isotope('layout');
            }, filtertoggle.hasClass("") ? 755: 755);
          });   
    });


    $('.filters').on( 'click', 'a', function(e) {
          e.preventDefault();
          var filterValue = $(this).attr('data-filter');
          $(".filters a").removeClass('current');
          $(this).addClass('current');
          $freshair_portfolio_masonry.isotope({ filter: filterValue });
        });
    }






/*
  var $freshair_portfolio_grid = $('.wd-portfolio-grid').isotope();
  var $freshair_portfolio_masonry = $('.wd-portfolio-masonry').isotope();*/

};






var $hover_color = $(".filters a").data("hovercolor");
var $overlay_padding = $(".wd-portfolio-masonry").data("padding");
var $overlay_padding_grid = $(".wd-portfolio-grid").data("padding");

$('head').append('<style> .filters a:hover , .filters a.current {color: ' + $hover_color + '!important;} </style>');
$('head').append('<style> .wd-portfolio-container .wd-portfolio-grid .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-grid.style-3 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid.style-3 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry.style-3 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry.style-3 .wd-portfolio-masonry-item {padding: ' + $overlay_padding + 'px !important;} </style>');

$('head').append('<style> .wd-portfolio-container .wd-portfolio-grid .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-grid.style-3 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-grid.style-3 .wd-portfolio-masonry-item, .wd-portfolio-container .wd-portfolio-masonry.style-3 .wd-portfolio-grid-item, .wd-portfolio-container .wd-portfolio-masonry.style-3 .wd-portfolio-masonry-item {padding: ' + $overlay_padding_grid + 'px !important;} </style>');

$(".wd-portfolio-container .wd-portfolio-grid .wd-portfolio-grid-item .wd-portfolio-grid-item-image a .overlay-color").css("background-color",$(".wd-portfolio-container .wd-portfolio-grid .wd-portfolio-grid-item .wd-portfolio-grid-item-image a .overlay-color").data('overlaycolor'))
$(".wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-masonry-item .wd-portfolio-masonry-item-image a .overlay-color").css("background-color",$(".wd-portfolio-container .wd-portfolio-masonry .wd-portfolio-masonry-item .wd-portfolio-masonry-item-image a .overlay-color").data('overlaycolor'))
$(".wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-grid-item .overlay-color").css("background-color", $(".wd-portfolio-container .wd-portfolio-grid.style-2 .wd-portfolio-grid-item .overlay-color").data('overlaycolor'));
$(".wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-masonry-item .overlay-color").css("background-color", $(".wd-portfolio-container .wd-portfolio-masonry.style-2 .wd-portfolio-masonry-item .overlay-color").data('overlaycolor'));


  var $testimonial_quote_color = $(".testimonial-text").data('quotecolor');
  var $testimonial_quote_opacity = $(".testimonial-text").data('quoteopacity');
  var $testimonial_quote_size = $(".testimonial-text").data('quotesize');


  $('head').append('<style> .wd-testimonail .testimonial-text:before, .wd-testimonail .testimonial-text:after {color:'+ $testimonial_quote_color + ';opacity:.'+ $testimonial_quote_opacity + ';font-size:' + $testimonial_quote_size + 'px;}</style>');


  $(window).load(function(){
    $(".static-html-item-container").height($(".wd-portfolio-grid-item-image img").height());
  });


$('#twitter').sharrre({
  share: {
    twitter: true
  },
  enableHover: false,
  enableCounter: false,
  enableTracking: true,
  //buttons: { twitter: {via: '_JulienH'}},
  click: function(api, options){
    api.simulateClick();
    api.openPopup('twitter');
  }
});
$('#facebook').sharrre({
  share: {
    facebook: true
  },
  enableCounter: false,
  enableHover: false,
  enableTracking: false,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('facebook');
  }
});

$('#pinterest').sharrre({
  share: {
    pinterest: true
  },
  enableCounter: false,
  enableHover: false,
  enableTracking: false,
  click: function(api, options){
    api.simulateClick();
    api.openPopup('pinterest');
  }
});



  //___________ animate Element when it visible
  function freshair_waypoint(){
    if(!isMobile.any()) {
      $('.animated').waypoint(function() {
          // if "this.element" is not an empty array
          var that = $(this.element).length > 0 ? $(this.element) : $(this);
          that.css('opacity', 1);
          that.addClass(that.data('animated'));
        },
        { offset: '98%' });
    }

  }

  freshair_waypoint();

});




var $window = jQuery(window);
var scrollTime = 0.4;
var scrollDistance = 300;

mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile");

function freshair_SS_Listener(event){
  event.preventDefault();

  var delta = event.wheelDelta / 120 || -event.detail / 3;
  var scrollTop = $window.scrollTop();
  var finalScroll = scrollTop - parseInt(delta * scrollDistance);

  TweenLite.to($window, scrollTime, {
    scrollTo: {
      y: finalScroll, autoKill: !0
    },
    ease: Power1.easeOut,
    autoKill: !0,
    overwrite: 5
  });

}

if (jQuery('body').hasClass('wd-smooth-scroll') && !jQuery('html').hasClass('touch') && !mobile_ie ) {
  if (window.addEventListener) {
    window.addEventListener('mousewheel', freshair_SS_Listener, false);
    window.addEventListener('DOMMouseScroll', freshair_SS_Listener, false);
  }
}

jQuery(".wd-list.style-4 li i").css('backgroundColor', "red");

jQuery('.wd-list.style-4 li i').hover(
  
    function(){
        jQuery(this).animate({'backgroundColor': data_hover},400);
    },
    function(){
        jQuery(this).animate({'backgroundColor': '#FFF'},400);
    }

);




/*@TODO*/
function freshair_fullPageUpdate(index,elements){

  console.log(index);
  console.log(elements);

}