function verificarNumero() {
    var numero = document.getElementById("numero").value;

    if (numero === "27") {
        alert("FELIZ CUMPLEAÑOS AARON, UN ABRAZO Y MUCHÍSIMAS BENDICIONES");
    } else if (numero >= 1 && numero <= 30) {
        alert("Error, sigue intentando");
    } else {
        alert("Número fuera de rango (1-30)");
    }
}