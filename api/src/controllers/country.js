const { Country } = require('../db.js')
const {response} = require('../arrays/countries.js');

const getCountries = async () => {
	try {
        const all= await Country.findAll()
        if(all.length<1){
            return {success:false,data:"No se econtraron paises en la base de datos"}
        }else{
            return {success:true,data:all}
        }  
	} catch (error) {
		return  {success:false,data: 'Error al buscar los paises ' + error};
	}
};

const loadCountries = async () => {
	try {
		response.forEach(async (i) => {
			await Country.findOrCreate({
				where: {name: i.name},
				defaults: i,
			});
		});
		return {success:true, data:'Creados: ' + response.length}
	} catch (error) {
		return {success:false,error: 'Error al agregar los paises a la DB desde el JSON: ' + error};
	}
};

module.exports = {
	getCountries,
    loadCountries
};