//VARS
var loopInterval = 100; //loop speed
var cLeft = 0; //character left
var cTop = 0; //character top
var cMove = 1; //number of pixels the character moves per move
var cStartL = cMove * 3;
var cStartT = cMove * 3;
//Player Variables
var level = 0;
var xp = 0;

//FUNCTIONS

function setup() {//first initialization setup
    drawMap();
    loop();
} window.onload = setup();


function loop() {//game loop
    setInterval(function(){

    	detectBlock();


    	clearMap();
    	drawMap();
        console.log("loop");
    }, loopInterval); //loop speed
}


function drawMap() {//draw the background from the tiled file
	for(var i=0; i < mapArray.length; i++){
		for(var j=0; j < mapArray[i].length; j++){
			
				$('#mapContainer').append(tiles[parseInt(mapArray[i][j])]);
			
		}
	}
}

function clearMap() {//clear the map
	var map = document.getElementById('mapContainer');
	while ( map.firstChild ) map.removeChild( map.firstChild );
}

function move(e) { //character movement
    if (e.keyCode == 39) { 
        cLeft += cMove; 
        mapArray[cTop][cLeft - 1] = mapOriginal[cTop][cLeft - 1];
        mapArray[cTop][cLeft] = 0;
    } 
    else if (e.keyCode == 37) {
        cLeft -= cMove; 
        mapArray[cTop][cLeft + 1] = mapOriginal[cTop][cLeft + 1];
        mapArray[cTop][cLeft] = 0;
    }
    else if (e.keyCode == 40) {
        cTop += cMove; 
        mapArray[cTop - 1][cLeft] = mapOriginal[cTop - 1][cLeft];
        mapArray[cTop][cLeft] = 0;
    }
    else if (e.keyCode == 38) {
        cTop -= cMove; 
        mapArray[cTop + 1][cLeft] = mapOriginal[cTop + 1][cLeft];
        mapArray[cTop][cLeft] = 0;
    }
} document.onkeydown = move;

function detectBlock() {//detect when the user is standing at certain coordinates
	if(mapArray[3][6] == 0) {
		//alert("Thy est atop thee portl!");
		mapArray[3][6] = 0; //the block you step on
		mapOriginal[3][6] = 1;
		mapArray[5][6] = 10; //the block that changes
		mapOriginal[5][6] = 10;
	}
	setTimeout(function(){}, loopInterval)
}
