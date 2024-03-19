// JavaScript Document
console.log("hiii");

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.pathname.replace('.html', ''));
}

var today = new Date();
var time = today.getHours();
var greet;

if (time >= 18) {
  greet = 'Goedenavond';
} else if (time >= 12) {
  greet = 'Goedemiddag';
} else if (time >= 5) {
  greet = 'Goedemorgen';
} else {
  greet = 'Goedenacht';
}

var show = document.getElementById('time');
show.textContent = greet;






