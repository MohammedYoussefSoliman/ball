

var BallJump = document.getElementById('allJump');
var h = window.innerHeight;
var w = window.innerWidth;
var ball = document.getElementById('ball'),
	x = 0,
	y = 0;
	t = 0;

BallJump.addEventListener("keydown",jump);


function jump(e) {

	if (e.keyCode == 32) {	
		var counter = 60;
// 100 iterations
	var increase = Math.PI*2/100;
	  x += 5;
	  y += Math.cos(counter)*2;
	  counter += increase;
		
			ball.style.left = x +'px';
			ball.style.bottom = y +'px';
	}
	console.log(x+' '+y)
}

game.addEventListener('keyup', fall)

function fall(e) {

	if (e.keyCode == 32) {
		
		box.style.transition = .4 + "s";
		box.style.bottom = 0 + "%";

	}
}