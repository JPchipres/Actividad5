var particle = new Particle();
var token;
particle.login({username: 'ccruz4@ucol.mx', password: 'Lilo2024'}).then(
  function(data) {
    token = data.body.access_token;
  },
  function (err) {
    console.log('Could not log in.', err);
  }
);
setInterval(function() {
var breaker1 = document.getElementById('Breaker1');
breaker1.oninput = function() {
    var output = document.getElementById('state1');
    output.innerHTML = this.value;
    var Salida1=this.value;   
    particle.callFunction({ deviceId: '1c002a000847313037363132', name: 'led', argument: Salida1, auth: token, });
}
  },1000)
