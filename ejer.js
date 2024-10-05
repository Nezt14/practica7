const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contadorF(Oracion) {
    let vocales = "aeiouAEIOU";
    let dígitos = "0123456789";
    let numVocales = 0;
    let numDigitos = 0;

    for (let i = 0; i < Oracion.length; i++) {
        let char = Oracion[i];
        if (vocales.includes(char)) {
            numVocales++;
        }
        if (dígitos.includes(char)) {
            numDigitos++;
        }
    }

    return { numVocales, numDígitos };
}

function PedirOracion() {
    rl.question("Ingrese una cadena de texto : ", function(Oracion) {
        if (Oracion.trim() === "") {
            console.log("Debe escribir una oracion");
            PedirOracion();
        } else {
            let resultado = contadorF(Oracion);
            console.log(`Numero de vocales: ${resultado.numVocales}`);
            console.log(`Numero de dígitos: ${resultado.numDigitos}`);
            rl.close(); 
        }
    });
}


PedirOracion();
