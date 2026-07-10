function analyser() {
    let id = document.getElementById("jeuId").value;
    let annee = document.getElementById("annee").value;

    if (annee < 2006) {
        document.getElementById("resultat").innerHTML =
            "⚠️ Cette année est avant la sortie publique de Roblox.";

        return;
    }
    if (annee === "2006")  {
        document.getElementById("resultat").innerHTML =
            "🎉 Première année publique de Roblox<br><br>"+
         "ID du jeu : " + id +
         "<br>Année choisie : " + annee;
            return;
     } 
    document.getElementById("resultat").innerHTML =
        "ID du jeu : " + id + "<br>Année choisie : " + annee;
}