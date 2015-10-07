function $(name) {
	return document.getElementById(name);
}

var sprites = [];

function start() {
  $('map').innerHTML = '';
	for(var y = 0; y < world.height; y ++) {
		sprites[y] = [];
    	for(var x = 0; x < world.width; x ++) {
          var cell = world.grid[y][x];
       	 	sprites[y][x] = document.createElement('div');
       	 	sprites[y][x].style.position = 'absolute';
       	 	sprites[y][x].style.backgroundColor = cell.getColor();
       	 	sprites[y][x].style.width = world.cellSize + 'vw';
       	 	sprites[y][x].style.height = world.cellSize + 'vw';
       	 	sprites[y][x].style.left = x * (world.cellSize + 0.2) + 'vw';
       	 	sprites[y][x].style.top = y * (world.cellSize + 0.2) + 'vw';
          sprites[y][x].style.color = 'white';
          sprites[y][x].style.border = 'solid 1px white';
          sprites[y][x].style.textAlign = 'center';
       	 	$('map').appendChild(sprites[y][x]);
   		}
	}
  for(var y = 0; y < world.height; y ++) {
    for(var x = 0; x < world.width; x ++) {
      sprites[y][x].style.backgroundColor = world.grid[y][x].getColor();
    }
  }
}

function step() {
	world.step();
	for(var y = 0; y < world.height; y ++) {
    	for(var x = 0; x < world.width; x ++) {
     		sprites[y][x].style.backgroundColor = world.grid[y][x].getColor();
   		}
	}
  requestAnimationFrame(step);
}