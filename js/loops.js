//--------------FOR OF -----------
//PARA ARREGLOS

let animales = ["gato", "perro","pato"];

for( let animal of animales)
    {
        console.log(animal);
    }

//--------------FOR IN -----------
//PARA OBJETOS

let empleado = 
{
    nombre : "Yosandi",
    apellido : "Reyes",
    edad : 21,
    numbero : "809-321-4024"
}

for( let prop in empleado)
{
    console.log(prop ," : ", empleado[prop]);
}