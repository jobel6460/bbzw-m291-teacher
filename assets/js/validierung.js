// Funktion um die Fehlermeldung darzustellen
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Funktion zur Validierung des Formulares
function validateForm() {
    // Hier werden den Variablen die Werte aus dem Formular zugewiesen. 
    var name = document.anmeldeformular.name.value;
    var vorname = document.anmeldeformular.vorname.value;
    var mail = document.anmeldeformular.mail.value;

    // Variabeln für Fehlermeldungen
    var nameErr = vornameErr =  mailErr = true;

    //Validiere Name
    //Wenn name leer ist, fehlermeldung ausgeben
    if (name == "") {
        printError("nameErr", "Bitte Nachnamen eingeben");
    } else {
        //Wenn name andere Zeichen hat als die, die in der regex Variable definiert wurden, fehlermeldung ausgeben
        var regex = /^[a-zA-ZÄÖÜÉÈÀäöüéèà\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Bitte keine Zahlen und Sonderzeichen");
        } else {
            //Wenn alles stimmt, keine Meldung ausgeben
            printError("nameErr", "");
            nameErr = false;
        }
    }

    //Validiere Vorname
    if (vorname == "") {
        printError("vornameErr", "Bitte Vornamen eingeben");
    } else {
        var regex = /^[a-zA-ZÄÖÜÉÈÀäöüéèà\s]+$/;
        if (regex.test(vorname) === false) {
            printError("vornameErr", "Bitte keine Zahlen und Sonderzeichen");
        } else {
            printError("vornameErr", "");
            vornameErr = false;
        }
    }

    //Validiere E-Mail Adresse
    if (mail == "") {
        printError("mailErr", "Bitte E-Mail eingeben");
    } else {
        var regex = /^[a-zA-Z0-9.@_-\s]+$/;
        if (regex.test(mail) === false) {
            printError("mailErr", "Bitte E-Mail Adresse korrekt eingeben");
        } else {
            printError("mailErr", "");
            mailErr = false;
        }
    }

    // Formular wird nicht gesandt, wenn etwas nicht richtig ausgefüllt ist
    if ((nameErr || vornameErr || mailErr) == true) {
        return false;
    }
};