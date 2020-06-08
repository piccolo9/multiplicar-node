//const fs = require('fs');
//const multiplicar = require('./multiplicar/multiplicar');
//let base = 6;
// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${ base * i}\n`;
// }
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido creado!`);
// });
//let base = '7';
//console.log(process.argv);


// const { crearArchivo } = require('./multiplicar/multiplicar');
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
//     //console.log(base);
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

// const argv = require('yargs').
// command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10

//         }
//     }).help()
//     .argv;
// const { crearArchivo } = require('./multiplicar/multiplicar');
// let argv2 = process.argv;
// //console.log(argv.base);
// console.log('Limite', argv.limite);

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            // .then(archivo => console.log(archivo))
            // .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconicido');

}