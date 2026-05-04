
function zeigeNachricht() {
    const ausgabe = document.getElementById("ausgabe");

    if (ausgabe.textContent === "") {
        ausgabe.textContent =
            "Der Makerspace ist eine Werkstatt, in der Schülerinnen und Schüler IT, 3D-Druck und handwerkliche Projekte umsetzen können.";
    } else {
        ausgabe.textContent = "";
    }
}
