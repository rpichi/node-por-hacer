const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
let resultado;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log(comando)
        porHacer.listar();
        break;
    case 'actualizar':
        resultado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (resultado) {
            console.log('actualizado correctamente');
        } else {
            console.log('no encontrado');
        }
        console.log(comando)
        break;
    case 'borrar':
        resultado = porHacer.borrar(argv.descripcion);
        if (resultado) {
            console.log('actualizado correctamente');
        } else {
            console.log('no encontrado');
        }
        console.log(comando);
        break;
    default:
        console.log('comando no reconocido');
        break;
}