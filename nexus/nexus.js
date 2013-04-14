//nexus live wallpaper 
//original code by http://www.renownedmedia.com Renowned Media
//original code here http://www.renownedmedia.com/blog/android-nexus-neural-network-live-wallpaper-in-jquery/
var colors = new Array('blue', 'red', 'green', 'yellow');
var directions = new Array('north', 'south', 'east', 'west');
var arenaSelector = "#arena";
var widthToHeight;
var itemShort = 24;
var itemLong = 256;
var counter = 0;
var blockSize = 8;
var minSpeed = 10000;
var maxSpeed = 15000;
var minRespawn = 100;
var maxRespawn = 1000;
$(function() {
	$arena = $("#arena");
	arenaWidth = Math.floor($arena.width() / blockSize);
	arenaHeight = Math.floor($arena.height() / blockSize);
	arenaWidth = screen.width;
	arenaHeight = screen.height;
	widthToHeight = arenaWidth / arenaHeight;
	spawnPlasma();
});
function spawnPlasma() {
	var direction = random(0,4);
	var color = random(0,4);
	var speed = random(minSpeed, maxSpeed);
	var startLeft, startTop, stopLeft, stopTop;
	switch (direction) {
		case 0:
			// NORTH
			offset = random(0, arenaWidth);

			startLeft = (offset * 8 - 8) + 'px';
			stopLeft = (offset * 8 - 8) + 'px';
			startLeft = (offset) + 'px';
			stopLeft = (offset) + 'px';
			startTop = itemLong + arenaHeight * blockSize + 'px';
			stopTop = -itemLong + 'px';
			orientation = 'vert';
			break;
		case 1:
			// SOUTH
			offset = random(0, arenaWidth);
			startLeft = (offset) + 'px';
			stopLeft = (offset) + 'px';
			startTop = -itemLong + 'px';
			stopTop = itemLong + arenaHeight * blockSize + 'px';
			orientation = 'vert';
			break;
		case 2:
			// EAST
			offset = random(0, arenaHeight);
			startLeft = -itemLong + 'px';
			stopLeft = itemLong + arenaWidth * blockSize + 'px'
			startTop = (offset) + 'px';
			stopTop = (offset) + 'px';
			orientation = 'horz';
			speed *= widthToHeight;
			break;
		case 3:
			// WEST
			offset = random(0, arenaHeight);
			startLeft = itemLong + arenaWidth * blockSize + 'px'
			stopLeft = -itemLong + 'px';
			startTop = (offset) + 'px';
			stopTop = (offset) + 'px';
			orientation = 'horz';
			speed *= widthToHeight;
			break;
	}
	$(arenaSelector).append("<div class='plasma' id='plasma-" + counter + "'></div>");
	$plasma = $("#plasma-"+counter);
	counter++;
	$plasma.addClass("plasma-"+orientation).css("background-image", "url(" + colors[color]+ "-" + directions[direction] + ".png)");
	$plasma.css({left: startLeft, top: startTop}).animate({top: stopTop, left: stopLeft}, speed, 'linear', function() {$(this).remove()});
	setTimeout ("spawnPlasma()", random(minRespawn, maxRespawn));
}

function random(min, max) {
	return Math.floor(Math.random() * ( max - min )) + min;
}
