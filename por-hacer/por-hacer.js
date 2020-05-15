const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = descripcion => {
    let porHacer = {
        descripcion,
        completado: false
    }

    cargarBD();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(err)
    });
}

const listar = () => {
        cargarBD();
        console.log("=================Tareas ======================");
        for (let tarea of listadoPorHacer) {
            console.log(tarea.descripcion.blue);
            console.log(`Estado: ${(tarea.completado=="true" || tarea.completado? `${tarea.completado}`.green: `${tarea.completado}`.red)}`);
    }
    console.log("==============================================");
}

const borrar = descripcion => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0){
        //listadoPorHacer.splice(index,1);
        let nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        if (listadoPorHacer.length != nuevolistado.length && listadoPorHacer.length > 0){
        listadoPorHacer = nuevolistado;
            guardarDB();
        return true;
        }
    }
    else{
        return false;
    }
}
const  actualizar = (descripcion, completado = true) =>{
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion == descripcion);

    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}


module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}