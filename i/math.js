
const Math = {};

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if (x2 == 0){
        console.log("no se puede dividir por 0")
    } else {
        return x1 / x2;
    }
}

// exporta una propiedad de obj

// exports.add = add;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

// permite exportar cualquier cosa
module.exports = Math

function hello(name){
    console.log('Hola ', name)
}


// se queda con el ultimo
module.exports = hello