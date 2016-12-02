if (window.DeviceMotionEvent==undefined) {
}

window.addEventListener("deviceorientation", handleOrientation, true)

function handleOrientation(event){
  var absolute = event.absolute;
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

   document.getElementById('absolute').innerHTML = absolute.toFixed(4)
  document.getElementById('alpha').innerHTML = alpha.toFixed(4)
  document.getElementById('beta').innerHTML = beta.toFixed(4)
  document.getElementById('gamma').innerHTML = gamma.toFixed(4)
}
