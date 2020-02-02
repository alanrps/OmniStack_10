const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(request,response){
       const {latitude,longitude,techs} = request.query;

       const Arraytecnologias = parseStringAsArray(techs);

       //Filtros de Devs
       const devs = await Dev.find({
           techs : {
                $in: Arraytecnologias, //$in - operadores mongo
           },
        location: {
            $near : {
                $geometry : {
                    type : 'Point',
                    coordinates: [longitude,latitude],
                    $maxDistance : 10000,
                },
            },
        },
       }); //retorna todos os devs find()

        return response.json(devs);
    }
    // async update(){

    // }
    // async destroy(){

    // }
};

