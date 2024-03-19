// JavaScript Document
console.log("hiii");

if (window.history.replaceState) {
  var currentPath = window.location.pathname;
  var currentHash = window.location.hash;
  if (currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1); // Verwijder de laatste slash
  }
  var newUrl = currentPath.replace('.html', '') + currentHash;
  window.history.replaceState(null, null, newUrl);
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






