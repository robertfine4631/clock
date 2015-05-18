function updateClock() {
  var now = new Date();
 
   var hours = now.getHours();
   var minutes = now.getMinutes();
   var seconds = now.getSeconds();
 
    if (hours < 10) {
      hours = "0" + hours;
      }
    if (minutes < 10) {
      minutes = "0" + minutes;
      }
    if (seconds < 10) {
      seconds = "0" + seconds;
      }
 
  var elem = document.getElementById('time');
 
  elem.innerHTML = '#' + hours + ' ' + minutes + ' ' + seconds;
document.bgColor="#" + hours + minutes + seconds;
}

window.setInterval(updateClock, 200);
