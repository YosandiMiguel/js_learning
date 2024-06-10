let animales = ["Perro", "gato"];

//Adding new elemets

    //At the end 
animales.push("pinguino");


    //at the begining
animales.unshift("Pulpo");



//Deleting elements from an array

    //Elements to be deleted
animales.push("deleteLast");
animales.unshift("deleteFirst");

console.log("Without deleting the elements ", animales);

    //Delete the last element
animales.pop();


    //Delete the first element
animales.shift();


console.log("deleting the elements ", animales);