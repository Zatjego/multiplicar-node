//tipos de Requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("El valor bla bla bla");
        } else {
            console.log('======================='.green);
            console.log(`Tabla de ${ base }`.green);
            console.log('======================='.green);
            for (let i = 0; i <= limite; i++) {
                resolve(console.log(`${base} * ${i} = ${base * i}`));
            }
        }
    })

}

crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido " ${base} " no es un numero`);
            return;
        }

        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}