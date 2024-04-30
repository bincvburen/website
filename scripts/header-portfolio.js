console.log('Script: Header Portfolio');

window.onload = function() {
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'header-container');
    document.body.prepend(headerContainer);

    // Functie om het pad naar header.html te bepalen op basis van de huidige URL
    function bepaalHeaderPad() {
        // Haal het pad van de huidige URL op
        var huidigPad = window.location.pathname;

        // Controleer of de huidige pagina zich in een submap bevindt
        if (huidigPad !== "/") {
            // Als de huidige pagina zich in een submap bevindt, gebruik dan /portfolio
            return "/portfolio/header.html";
        } else {
            // Anders, gebruik ../Portfolio
            return "../Portfolio/header.html";
        }
    }

    // Gebruik de bepaalHeaderPad-functie om het juiste pad naar header.html te verkrijgen
    var headerPad = bepaalHeaderPad();

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                headerContainer.innerHTML = xhr.responseText;
            } else {
                console.error('Er is een fout opgetreden bij het laden van de header.');
            }
        }
    };
    xhr.open('GET', headerPad, true);
    xhr.send();
};

