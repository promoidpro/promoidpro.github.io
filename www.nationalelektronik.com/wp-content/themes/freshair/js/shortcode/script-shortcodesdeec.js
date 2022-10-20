// COUNT UP
jQuery(document).ready(function($) {
    datafile = $('.wd-fucts .number').data('file');
    $('.wd-fucts .number').counterUp({
        delay: 10,
        time: datafile
    });


    if (!isMobile.any()) {

        var waypoints = $('.main').waypoint({
            handler: function(direction) {

                var easy_pie_chart = {};
                $('.circular-item-style-team').removeClass("hidden");
                $('.circular-pie-style-team').each(function() {
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        animate: 2000,
                        lineWidth: 2,
                        lineCap: 'square',
                        barColor: $(this).data('color'),
                        lineWidth: 4,
                        scaleColor: false,
                        barColor: '#CC9900',
                        trackColor: '#F3F3F3',
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + '%';
                        }
                    }));
                });

            },
            offset: '45%'
        });




        var waypoints = $('.main').waypoint({
            handler: function(direction) {
                // Radial progress bar
                var easy_pie_chart = {};
                $('.circular-item-style-2').removeClass("hidden");
                $('.circular-pie-style-2').each(function() {
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 220,
                        animate: 2000,
                        lineWidth: 42,
                        lineCap: 'square',
                        barColor: $(this).data('color'),
                        lineWidth: 24,
                        scaleColor: false,
                        barColor: '#2980b9',
                        trackColor: 'transparent',
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + '%';
                        }
                    }));
                });

            },
            offset: '45%'
        });



        var waypoints = $('.main').waypoint({
            handler: function(direction) {
                // Radial progress bar
                var easy_pie_chart = {};
                $('.circular-item-style-2').removeClass("hidden");
                $('.circular-pie-style-2').each(function() {
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 220,
                        animate: 2000,
                        lineWidth: 42,
                        lineCap: 'square',
                        barColor: $(this).data('color'),
                        lineWidth: 24,
                        scaleColor: false,
                        barColor: '#2980b9',
                        trackColor: 'transparent',
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + '%';
                        }
                    }));
                });

            },
            offset: '45%'
        });



        var waypoints = $('.main').waypoint({
            handler: function(direction) {
                // Radial progress bar
                var easy_pie_chart = {};
                $('.circular-item-style-1').removeClass("hidden");
                $('.circular-pie-style-1').each(function() {
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 100,
                        animate: 2000,
                        lineWidth: 2,
                        lineCap: 'square',
                        barColor: $(this).data('color'),
                        lineWidth: 4,
                        scaleColor: false,
                        barColor: '#2980b9',
                        trackColor: '#DAD9DB',
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + '%';
                        }
                    }));
                });

            },
            offset: '45%'
        });




        var waypoints = $('.main').waypoint({
            handler: function(direction) {
                var easy_pie_chart = {};
                $('.circular-item-style-3').removeClass("hidden");
                $('.circular-pie-style-3').each(function() {
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 220,
                        animate: 2000,
                        lineWidth: 42,
                        lineCap: 'square',
                        barColor: $(this).data('color'),
                        lineWidth: 24,
                        scaleColor: false,
                        barColor: '#2980b9',
                        trackColor: '#DAD9DB',
                        onStep: function(from, to, percent) {
                            this.el.children[0].innerHTML = Math.round(percent) + '%';
                        }
                    }));
                });
            },
            offset: '45%'
        });





    }




    $window = $(window);

    $('.parallax').each(function() {
        var $scroll = $(this);

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});
