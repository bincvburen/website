// Algemeen
console.log("Script: Algemeen");

if (window.history.replaceState) {
  var currentPath = window.location.pathname;
  var currentHash = window.location.hash;
  if (currentPath.endsWith('/')) {
      currentPath = currentPath.slice(0, -1); // Verwijder de laatste slash
  }
  var newUrl = currentPath.replace('.html', '') + currentHash;
  window.history.replaceState(null, null, newUrl);
}








