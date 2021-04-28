
const { multiplica } = require('./helpers/multipicar')

// let datos = {
//     nombre: "santiago",
//     edad: 20
// }

// let {nombre} = datos;

// console.log(nombre)

const base = 7;

multiplica(base)
    .then( archivo => console.log(archivo, 'Creado'))
    .catch( err => console.log(err));