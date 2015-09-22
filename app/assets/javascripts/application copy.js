// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
	var myLatLng = new google.maps.LatLng(40.666878, -73.979856);

	function initialize() {
		var mapOptions = {
			center: myLatLng, zoom: 12, scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Maybe I can afford Australia one day!'
  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);



});
