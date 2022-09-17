
//Primer ejercicio 
// En una mezcla de arreglos tengo que eliminar los que no son administradores
const admins = ["Camilo", "Manuela"];
const empleados = ["Juan", "Ana", "Sofia"];

const mezlarYeliminar = (admins,empleados) =>{
    const mezcla = admins.concat(empleados);
    const evaluar = mezcla.filter(mezcla => mezcla != "Juan" && mezcla != "Ana" && mezcla != "Sofia");
    console.log(`El arreglo mezclado es: ${mezcla}`);
    console.log(`El arreglo con los usuarios eliminados es: ${evaluar}`);
    
}

const manipularArray = (callbackFuntion,admins,empleados) =>{
    const result = callbackFuntion(admins,empleados);
    return admins,empleados;
}


manipularArray(mezlarYeliminar,admins,empleados)


// Segundo ejercicio
// se quiere verificar que los empleados postulados a la empresa sean mayores de edad 

const trabajadores = [ 'gabriel', 'juan','Marta','Miryan','Pedro'];

const edad = (edad,nombre) => {
    if(edad >= 18){ 
        trabajadores.push(nombre);
        console.log(`Bienvenido señor/ra ${nombre}`);
    }
    else
    { console.log(`Lo siento señor/ra ${nombre} el puesto solo es para gente mayor de edad`)}
}

const aspirante = (callbackFuntion ,edad,nombre) => {
    console.log(`la edad de ${nombre} es de ${edad}`);
    const verificar = callbackFuntion(edad,nombre);
    return nombre,edad;
}

aspirante(edad,18,'Luisa');
console.log(trabajadores);


// tercer ejercicio 

const estatura = [1.50,1.59,1.76,1.67,1.45,1.86];

const evaluarEstatura = (estatura) =>{
    const losQuePasan = estatura.filter(estatura => estatura >= 1.70);
    console.log(`Los más altos en el array son : ${losQuePasan}`);
}

const mirarEstatura = (callbackFuntion,estatura) =>{
    const masAltos = callbackFuntion(estatura);
    return estatura;
}

mirarEstatura(evaluarEstatura,estatura);

