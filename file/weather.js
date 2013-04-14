$(document).ready(function() {
	$.simpleWeather({
		zipcode: 'THXX0004',
		unit: 'c',
		success: function(weather) {
                html = '<div id="date">' + weather.updated + '</div>';
                html += '<div id="city">' + weather.city +  '</div>';
		html += '<div id="current">' + weather.currently + '</div>';
		html += '<img id="img" src="file/weather/' + weather.code +'.png">';
		html += '<div id="temp">' + weather.temp + '&deg </div>';
		html += '<div id="hilo">' + weather.high + '&deg/' + weather.low + '&deg </div>';
			
			$("#weather").html(html);
		},
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}
	});
});
