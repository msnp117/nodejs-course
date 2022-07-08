
// interactuar con archivos del sistema
// crear y leer archivos
const fs = require('fs');

/*

// nombre del archivo - contenido - en caso de error
// codigo asincrono (cosas que node no hace, pero tiene que esperar)
fs.writeFile('./texto.txt', 'linea uno', function (err) {
    // callback
    if (err){
        console.log(err)
    }
    console.log("archivo creado")
})

console.log('ultima linea de codigo')

*/

fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err)
    }
    console.log(data.toString())
})
