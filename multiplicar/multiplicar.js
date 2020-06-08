const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite = 10) => {
    // return new Promise((resolve, reject) => {
    //     if (!Number(base)) {
    //         reject(`${base} no es un número`);
    //         return;
    //     }
    //     if (!Number(limite)) {
    //         reject(`${limite} no es un número`);
    //         return;
    //     }

    //     let data = '';
    //     for (let i = 1; i <= limite; i++) {
    //         data += `${base} * ${i} = ${ base * i}\n`;
    //     }
    //     resolve(data);
    // })
    console.log('tabla del', `${base}`.green)
    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i}`.yellow);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`${limite} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.blue);

        });

    })

}
module.exports = {
    crearArchivo,
    listarTabla
}