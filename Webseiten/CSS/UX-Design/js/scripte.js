    // 1. Das Element auswählen
    const emailFeld = document.getElementById('email');

    // 2. Das "blur"-Event hinzufügen (wenn der Nutzer das Feld verlässt)
    emailFeld.addEventListener('blur', function() {
    
    // Prüfen, ob die Eingabe den HTML5-Regeln (type="email", required) entspricht
    if (this.checkValidity()) {
        // Alles okay -> Grün
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    } else {
        // Fehler -> Rot
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
    });

    // OPTIONAL: Wenn der Nutzer wieder reinklickt, um zu korrigieren, 
    // können wir das Rot entfernen, damit es nicht stört.
    emailFeld.addEventListener('focus', function() {
    this.classList.remove('is-invalid');
    });


    const plzFeld = document.getElementById('plz');

    // Schritt 1: Erst beim Rausklicken prüfen
    plzFeld.addEventListener('blur', function() {
    if (this.checkValidity()) {
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
    } else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }
    });

    // Schritt 2: Beim Tippen (Korrektur) die Fehlermeldung sofort verstecken
    plzFeld.addEventListener('input', function() {
    // Wenn der Nutzer tippt, nehmen wir das Rot weg, damit er in Ruhe arbeiten kann
    this.classList.remove('is-invalid');
    // Wir nehmen auch das Grün weg, da wir erst beim nächsten 'blur' wieder final prüfen
    this.classList.remove('is-valid');
    });