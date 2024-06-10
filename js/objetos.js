let nombre = "Yosandi";
let edad = 21;
let ocupacion = "estudiante";


let person = 
{
    nombre : "Yosandi",
    edad : 21,
    ocupacion : "Estudiante",
    pruebaEliminacion : true,
}

let variable = "pruebaEliminacion";

console.log(person);
console.log(person.nombre);
console.log(person.edad);
console.log(person["ocupacion"]);
console.log(person[variable]);

//-----------------------------------------------------
            //Eliminar una propiedad de un objecto

delete person.pruebaEliminacion;
console.log(person);

