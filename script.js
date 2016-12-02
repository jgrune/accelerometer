if (window.DeviceMotionEvent==undefined) {
}

window.addEventListener("deviceorientation", handleOrientation, true)

var absolute;
var alpha;
var beta;
var gamma;

function handleOrientation(event){
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  document.getElementById('absolute').innerHTML = absolute
  document.getElementById('alpha').innerHTML = alpha
  document.getElementById('beta').innerHTML = beta
  document.getElementById('gamma').innerHTML = gamma

  moveBall(beta, gamma);
}

function moveBall(x, y){
  var ball = getElementById('ball')
  ball.style.left = x;
  ball.style.top = y;
}
