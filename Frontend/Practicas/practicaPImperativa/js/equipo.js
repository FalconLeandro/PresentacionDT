
const fs = require('fs');
jsonHelper= {
    leer:function(archivo) {
        let contenido = fs.readFileSync(__dirname + '/' + archivo, 'utf-8');
        return JSON.parse(contenido);
    }
}
module.exports = jsonHelper;