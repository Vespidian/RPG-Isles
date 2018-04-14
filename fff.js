
var cLeft = 0; 
var cTop = 0;  
function move(e) { 
    var character = document.getElementById("character"); 
if (e.keyCode == 39) { 
    cLeft += 32; 
    character.style.left = cLeft + "px"; 
} 
else if (e.keyCode == 37) {
    cLeft -= 32; 
    character.style.left = cLeft + "px"; 
}
else if (e.keyCode == 40) {
    cTop += 32; 
    character.style.top = cTop + "px"; 
}
else if (e.keyCode == 38) {
    cTop -= 32; 
    character.style.top = cTop + "px"; 
}

} document.onkeydown = move;
