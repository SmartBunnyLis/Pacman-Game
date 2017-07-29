var world =
[[2,2,2,2,2,2,2,2,2],
 [2,0,1,1,1,1,1,1,2],
 [2,1,1,0,1,2,1,1,2],
 [2,1,1,2,1,1,1,1,2],
 [2,1,1,2,2,2,2,1,2],
 [2,1,1,0,1,1,0,1,2],
 [2,1,0,1,1,0,1,1,2],
 [2,1,1,0,1,1,0,1,2],
 [2,2,2,2,2,2,2,2,2]
];
var pacman = {
  x: 1,
  y: 1
}
var score = 0
function displayWorld() {
  var display = "";
  for(var i = 0; i < world.length; i++){
    display += "<div class='row'>";
    for(var j = 0; j < world[i].length; j++){
      var value = world[i][j];
      if(value === 0){
        display += "<div class='empty'></div>"
      }
      else if( value === 2){
        display += "<div class='brick'></div>"
      }
      else if( value === 1){
        display += "<div class='coin'></div>"
      }
    }
    display +="</div>"
  }
  document.getElementById('world').innerHTML = display;
}

function displayPacman() {
  document.getElementById('pacman').style.left = pacman.x*30 + "px";
  document.getElementById('pacman').style.top = pacman.y*30 + "px";
}
displayWorld();
displayPacman();
  document.onkeydown = function(e) {
    var dir = e.keyCode;
    if(dir === 37){
      pacman.x --;
    }
    else if(dir === 39){
      pacman.x ++;
    }
    else if(dir === 40){
      pacman.y ++;
    }
    else if(dir === 38){
      pacman.y --;
    }
      if(world[pacman.y][pacman.x] === 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        document.getElementById('score').innerHTML = score;
        displayWorld();


      }
    displayPacman();
  }
