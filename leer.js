
//Marcos Daniel Mayen de Leon.--.2011-23065
var fs = require('fs');
//nombre del archivo a leer: file.txt
fs.readFile('./file.txt', 'utf8', function(err, data) {
	//si no existe, tira error
    if( err ){
        console.log(err)
    }
    //si existe, imprime el archivo
    else{
        console.log(data);
    }
});