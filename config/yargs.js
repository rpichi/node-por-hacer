const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca de completado'
}

const argv = require('yargs')
    .command('crear', 'crear comando por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar el estado', {
        descripcion,
        completado
    }).command('borrar', 'borrar', {
        descripcion
    }).help()
    .argv;

module.exports = {
    argv
};