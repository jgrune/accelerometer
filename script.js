if (window.DeviceMotionEvent==undefined) {
}

window.addEventListener("deviceorientation", handleOrientation, true)

var absolute;
var alpha;
var beta;
var gamma;

var posx = 0
var posy = 0

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
  var ball = document.getElementById('ball')
  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

// function updatePos(){
//   setTimeout(function () {
//     posx +=
//   }, 10);
// }
