if (window.DeviceMotionEvent==undefined) {
}

window.addEventListener("deviceorientation", handleOrientation, true)

function handleOrientation(event){
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  document.getElementById('absolute').text = absolute
  document.getElementById('alpha').text = alpha
  document.getElementById('beta').text = beta
  document.getElementById('gamma').text = gamma
}
