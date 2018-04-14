//VARS
var loopInterval = 100; //loop speed
var cLeft = 0; //character left
var cTop = 0; //character top
var cMove = 16; //number of pixels the character moves per move
var cStartL = cMove * 3;
var cStartT = cMove * 3;

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
    var character = document.getElementById("character"); //get the character
    
    if (e.keyCode == 39) { 
        cLeft += cMove; 
        character.style.left = cLeft + "px"; 
    } 
    else if (e.keyCode == 37) {
        cLeft -= cMove; 
        character.style.left = cLeft + "px"; 
    }
    else if (e.keyCode == 40) {
        cTop += cMove; 
        character.style.top = cTop + "px"; 
    }
    else if (e.keyCode == 38) {
        cTop -= cMove; 
        character.style.top = cTop + "px"; 
    }
} document.onkeydown = move;

function detectBlock() {//detect when the user is standing at certain coordinates
	var character = document.getElementById("character"); //get the character

	if(character.style.top == "48px" && character.style.left == "96px") {
		//alert("Thy est atop thee portl!");
		mapArray[5][6] = 10;
		mapArray[3][6] = 1;
	}
	if(character.style.top == "80px" && character.style.left == "96px") {
		//alert("Thy est atop thee portl!");
		mapArray[5][6] = 1;
		mapArray[3][6] = 10;
	}
	setTimeout(function(){}, loopInterval)
}