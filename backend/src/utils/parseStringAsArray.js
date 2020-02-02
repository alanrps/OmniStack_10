module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); //Remove espaços em branco antes e depois da string e o "map" percorre o array
}