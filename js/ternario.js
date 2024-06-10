//Expresion ? 'si es true' : 'si es false'

let edad = 18;

function permitido()
{
    console.log("Acceso permitido");
}

function denegado()
{
    console.log("acceso denegado");
}

edad <= 17 ? denegado() : permitido();