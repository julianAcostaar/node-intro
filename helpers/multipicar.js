const fs = require('fs');
// const { resolve } = require('path');

const multiplica = async(base) => {

    try{
        let salida = '';
    
        console.log(`Tabla del ${base}\n`)
        
        for(i=1; i<13; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync(`Tabla-${base}.txt`, salida);
        
        return `Tabla-${base}.txt`; //equivalente a resolve de promise

    }catch(err){  //equivalente a reject de promise
        throw err;
    }

 
}

module.exports = {
    // multiplica : multiplica   es redundante
    multiplica
}