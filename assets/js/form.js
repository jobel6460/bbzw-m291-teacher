const submit = document.getElementById("submit")
const name = document.getElementById("name")
const vorname = document.getElementById("vorname")
const mail = document.getElementById("mail")

submit.disabled = true


submit.addEventListener("click", async (event) => {
    event.preventDefault()
    const result = await databaseClient.insertInto("users", ["name", "vorname", "mail"], [name.value, vorname.value, mail.value])
    if (result.error) {
        alert("Datenbank Fehler: " + JSON.stringify(result.error, null, 2))
    }
    else {
        // Weiterleitung auf die Game Page  
        location.href = "../../game.html"
    }

})