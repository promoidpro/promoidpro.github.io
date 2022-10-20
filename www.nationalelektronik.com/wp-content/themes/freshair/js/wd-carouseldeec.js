jQuery(document).ready(function($) {

	
       
    $Pitmnumber = $(".carousel_portfolio").data("numberitem");
    $Pmargin = $(".carousel_portfolio").data("margin");
    //___________ animate Element when it visible
    function freshair_waypoint(){
     
        $('.animated').waypoint(function() {
            // if "this.element" is not an empty array
            var that = $(this.element).length > 0 ? $(this.element) : $(this);
            that.css('opacity', 1);
            that.addClass(that.data('animated'));
          },
          { offset: '98%' });


    }


    $('.carousel_portfolio').owlCarousel({
        items: $Pitmnumber,
        margin: $Pmargin,
        rtl: $direction,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                rtl: $direction,
            },
            600: {
                items: 2,
                rtl: $direction,
                nav: false
            },
            1000: {
                items: $Pitmnumber,
                rtl: $direction,
                nav: true,
                loop: false,
            }

        }
    });
	var $direction;
    if ($('html').attr('dir') == 'rtl') {
        $direction = true;
    } else {
        $direction = false;
    }
    $('.carousel').owlCarousel({
        items: 1,
        rtl: $direction,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
    });

    $Bitmnumber = $(".carousel_blog").data("numberitem");
    $Bmargin = $(".carousel_blog").data("margin");

    $('.carousel_blog').owlCarousel({
        items: $Bitmnumber,
        margin: $Bmargin,
        rtl: $direction,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                rtl: $direction,
            },
            600: {
                items: 2,
                rtl: $direction,
                nav: false
            },
            1000: {
                items: $Bitmnumber,
                nav: true,
                rtl: $direction,
                loop: false,

            }
        }
    });
    // _______________Testimonial
    if ($('.owl-testimonail').length) {
        $('.owl-testimonail').each(function(i, obj) {
            testimonial_slider_setting(this);
        });
    }
    
  

    function testimonial_slider_setting(el) {
        var $data = $(el).data('infinity');
        var owl_testimonial = $(el).owlCarousel({
            items: 1,
            nav: false,
            rtl: $direction,
            margin: 10,
            autoplay: true,
            loop:$data,
            navText: [""],
            autoplayTimeout: 5000,
            thumbs: true,
            thumbsPrerendered: true,
            responsiveClass: true,
            onInitialize: function(event) {
                if ($(el).find('.wd-testimonail-item').length <= 1) {
                    this.settings.loop = false;
                }
            }
        });
        // Custom Navigation Events
        $(el).find(".testimonial-next").click(function() {
            owl_testimonial.trigger('next.owl.carousel');
        });
        $(el).find(".testimonial-prev").click(function() {
            owl_testimonial.trigger('prev.owl.carousel');
        });
    }





    var navigation_style_carousel = $('.team-member-carousel').data('navigation');
    var elements_to_show_mobile = $('.team-member-carousel').data('showmobile');
    var elements_to_show_tablet = $('.team-member-carousel').data('showtablet');
    var elements_to_show_desktop = $('.team-member-carousel').data('showdesktop');

    var elements_to_swipe = $('.team-member-carousel').data('swipe');



    $(window).load(function() {

        if ($('.team-member-slider').length) {
            $('.team-member-slider').each(function(i, obj) {
                freshair_team_slider_setting(this);
            });
        }

        function freshair_team_slider_setting(el) {
            var navigation_style_slider = $(el).data('navigation');
            if (navigation_style_slider == "dotts") {

                $(el).owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: false,
                    dots: true,
                    items: 1,
                    onInitialize: function(event) {
                        if ($(el).find('.wd-team-member-item').length <= 1) {
                            this.settings.loop = false;
                        }
                    }
                });
            }

            if (navigation_style_slider == "arrows") {
                $(el).owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                    dots: false,
                    items: 1,
                    onInitialize: function(event) {
                        if ($('.owl-carousel .item').length <= 1) {
                            this.settings.loop = false;
                        }
                    }
                });
            }

        }




        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').each(function(i, obj) {
                freshair_testimonial_slider_setting(this);
            });
        }

        function freshair_testimonial_slider_setting(el) {
            var $data = $(el).data('infinity');
            $(el).owlCarousel({
                loop: $data,
                margin: 0,
                nav: true,

                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                dots: false,
                items: 1,
                onInitialize: function(event) {
                    if ($(el).find('.testimonial-slider-item').length <= 1) {
                        this.settings.loop = false;
                    }
                }
            });
        }




        if ($('.wd-clients-carousel').length) {
            $('.wd-clients-carousel').each(function(i, obj) {
                freshair_clients_carousel_setting(this);
            });
        }


        function freshair_clients_carousel_setting(el) {
            var navigation_style_carousel = $(el).data('navigation');
            var elements_to_show_mobile = $(el).data('displaymobile');
            var elements_to_show_tablet = $(el).data('displaytablet');
            var elements_to_show_desktop = $(el).data('displaydesktop');
            var elements_to_swipe = $(el).data('swipe');

            if (navigation_style_carousel == "dots") {
                $(el).owlCarousel({
                    loop: true,
                    margin: 15,
                    nav: false,
                    dots: true,
                    slideBy: elements_to_swipe,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: elements_to_show_mobile
                        },
                        600: {
                            items: elements_to_show_tablet
                        },
                        1000: {
                            items: elements_to_show_desktop
                        }
                    },
                    onInitialize: function(event) {
                        if ($(el).find('.wd-clients-carousel-item').length <= 1) {
                            this.settings.loop = false;
                        }
                    }
                });
            }

            if (navigation_style_carousel == "arrows") {
                $(el).owlCarousel({
                    loop: true,
                    margin: 15,
                    nav: true,
                    dots: false,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: elements_to_show_mobile,
                        },
                        600: {
                            items: elements_to_show_tablet
                        },
                        1000: {
                            items: elements_to_show_desktop
                        }
                    },
                    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                    slideBy: elements_to_swipe,
                    onInitialize: function(event) {
                        if ($('.owl-carousel .item').length <= 1) {
                            this.settings.loop = false;
                        }
                    }
                });
            }


        }




        if ($('.team-member-carousel').length) {
            $('.team-member-carousel').each(function(i, obj) {
                freshair_team_member_carousel_setting(this);
            });
        }

        function freshair_team_member_carousel_setting(el) {
            if (navigation_style_carousel == "arrows") {
                    // Team member Carousel
                    $(el).owlCarousel({
                        loop: true,
                        margin: 15,
                        nav: true,
                        dots: false,
                        responsiveClass: true,
                        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
                        responsive: {
                            0: {
                                items: elements_to_show_mobile
                            },
                            600: {
                                items: elements_to_show_tablet
                            },
                            1000: {
                                items: elements_to_show_desktop
                            }
                        },
                        slideBy: elements_to_swipe,
                        onInitialize: function(event) {
                            if ($(el).find('.team-member-carousel-item').length <= 1) {
                                this.settings.loop = false;
                            }
                        },
                        onInitialized: function(event) {
                          $('.animated').waypoint('destroy');
                          freshair_waypoint();
                        }
                    });
            }

            if (navigation_style_carousel == "dotts") {
                    // Team member Carousel
                    $(el).owlCarousel({
                        loop: true,
                        margin: 15,
                        nav: false,
                        dots: true,
                        slideBy: elements_to_swipe,
                        responsiveClass: true,
                        responsive: {
                            0: {
                                items: elements_to_show_mobile
                            },
                            600: {
                                items: elements_to_show_tablet
                            },
                            1000: {
                                items: elements_to_show_desktop
                            }
                        },
                        onInitialize: function(event) {
                            if ($(el).find('.team-member-carousel-item').length <= 1) {
                                this.settings.loop = false;
                            }
                        },
                        onInitialized: function(event) {
                          $('.animated').waypoint('destroy');
                          freshair_waypoint();
                        }
                    });
            }
        }

        // ____________wd portfolio carousel
        if ($('.wd-portfolio-carousel').length) {
            $('.wd-portfolio-carousel').each(function(i, obj) {
                freshair_portfolio_carousel_setting(this);
            });
        }

        function freshair_portfolio_carousel_setting(el) {
              $(el).owlCarousel({
                  loop: true,
                  margin: 15,
                  nav: true,
                  dots: false,
                  items: 1,
                  responsiveClass: true,
                  navText: ["Prev", "Next"],
                  onInitialize: function(event) {
                    if ($(el).find('.wd-portfolio-carousel-item').length <= 1) {
                        this.settings.loop = false;
                    }
                  },
              });
        }


        if ($('.wd-single-portfolio-carousel').length) {
            $('.wd-single-portfolio-carousel').each(function(i, obj) {
                freshair_single_portfolio_carousel_setting(this);
            });
        }

        function freshair_single_portfolio_carousel_setting(el) {
              $(el).owlCarousel({
                  loop: true,
                  margin: 15,
                  nav: true,
                  dots: false,
                  items: 1,
                  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                  onInitialize: function(event) {
                    if ($(el).find('li').length <= 1) {
                        this.settings.loop = false;
                    }
                  },
              });
        }






        
          $(".freshair_blog_post_gallery_masonry").owlCarousel({
		      nav: true,
		      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		      items:1,
		       responsiveClass  : true,
		      responsive: {
            0: {
            	items:1,
            }}
		  });
		  $(".freshair_blog_post_gallery").owlCarousel({
		      nav: true,
		      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		      items:1,
		       responsiveClass  : true,
		      responsive: {
            0: {
            	items:1,
            }}
		  });
		  $(".freshair_blog_post_gallery_left_image").owlCarousel({
		      nav: true,
		      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		     
		      items:1,
		      responsiveClass  : true,
		      responsive: {
            0: {
            	items:1,
            }}
		  });
		  $(".freshair_blog_post_gallery_top_image").owlCarousel({
		      nav: true,
		      navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		      
		      items:1,
		       responsiveClass  : true,
		      responsive: {
            0: {
            	items:1,
            }}
		  });

    });


});
