if (window.DeviceMotionEvent==undefined) {
}

window.addEventListener("deviceorientation", handleOrientation, true)

function handleOrientation(event){
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  document.getElementById('absolute').innerHTML = absolute.round(4)
  document.getElementById('alpha').innerHTML = alpha.round(4)
  document.getElementById('beta').innerHTML = beta.round(4)
  document.getElementById('gamma').innerHTML = gamma.round(4)
}
