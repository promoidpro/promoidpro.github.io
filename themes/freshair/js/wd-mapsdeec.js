jQuery(document).ready(function($) {
    /**  ------------ Maps -------------------
     **/

    function initializeMap(image , freshair_map_style, latitude, longitude, freshair_zoom, companyname, description, el) {
        
        switch (freshair_map_style) {
            case "wa_map_style1":
                var styles = [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#444444"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                        "saturation": -100
                    }, {
                        "lightness": 45
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#46bcec"
                    }, {
                        "visibility": "on"
                    }]
                }];
                break;
            case "wa_map_style2":
                var styles = [{
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#fcfcfc"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#fcfcfc"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "saturation": "25"
                    }, {
                        "lightness": "-5"
                    }, {
                        "gamma": "0.53"
                    }, {
                        "color": "#8f8888"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#eeeeee"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#dddddd"
                    }]
                }];
                break;
            case "wa_map_style3":

                var styles = [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#193341"
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c5a71"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#29768a"
                    }, {
                        "lightness": -37
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#406d80"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#406d80"
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#3e606f"
                    }, {
                        "weight": 2
                    }, {
                        "gamma": 0.84
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [{
                        "weight": 0.6
                    }, {
                        "color": "#1a3541"
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#2c5a71"
                    }]
                }];
                break;
            case "wa_map_style4":

                var styles = [{
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "geometry",
                    "stylers": [{
                        "lightness": "80"
                    }]
                }, {
                    "featureType": "administrative.country",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "color": "#777777"
                    }]
                }, {
                    "featureType": "administrative.locality",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "simplified"
                    }, {
                        "lightness": 60
                    }]
                }, {
                    "featureType": "administrative.neighborhood",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative.land_parcel",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fbfbfb"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#cfcfcf"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#dedede"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.attraction",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                }, {
                    "featureType": "poi.business",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#d1d1d1"
                    }, {
                        "invert_lightness": true
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "invert_lightness": true
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }, {
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#cfcfcf"
                    }, {
                        "visibility": "on"
                    }, {
                        "weight": "0.55"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.text",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#efefef"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "labels.text",
                    "stylers": [{
                        "color": "#777777"
                    }, {
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#cdcdcd"
                    }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit.station",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#cccccc"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#e0e0e0"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }];

        }
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        var mapOptions = {
            scaleControl: true,
            scrollwheel: false,
            zoomControl: false,
            scaleControl: false,
            mapTypeControl: false,
            center: new google.maps.LatLng(latitude, longitude),
            zoom: freshair_zoom,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']

            }
        };
        
        var map = new google.maps.Map(el, mapOptions);
        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            position: map.getCenter()
        });

        var infowindow = new google.maps.InfoWindow();
        if (companyname != "") {
            companyname = "<h4>" + companyname + "</h4>";
        }
        infowindow.setContent("<div class='map-description'>" + companyname + " " + description + "</div>");

  

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }

    if ($('.map-canvas').length) {
        $('.map-canvas').each(function(i, obj) {
            freshair_map_setting(this);
        });
    }
    function freshair_map_setting(el) {
      if ($(el).length > 0) {
          var latitude = $(el).data('latitude'),
              longitude = $(el).data('longitude'),
              freshair_zoom = $(el).data('zoom'),
              companyname = $(el).data('companyname'),
              imagepath = $(el).data('imagepath'),
              description = $(el).data('decription');
              var image = $(el).data('imagepath');
              var freshair_map_style = $(el).data('wdmapstyle');
          if (imagepath == "") {
              var image_markup = '';
          } else {
              var image_markup = '<div class="map-img"><i class="' + imagepath + ' "></i></div>';
          }
          google.maps.event.addDomListener(window, 'load', initializeMap(image , freshair_map_style, latitude, longitude, freshair_zoom, companyname, description, el));
    };
  }
});
