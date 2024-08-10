const { Industry } = require('../db.js')
const {response} = require('../arrays/industries.js');

const getIndustries = async () => {
	try {
        const all= await Industry.findAll()
        if(all.length<1){
            return {success:false,data:"No se econtraron actividades en la base de datos"}
        }else{
            return {success:true,data:all}
        }  
	} catch (error) {
		return {success:false,data: 'Error al buscar las industrias ' + error};
	}
};

const loadIndustries = async () => {
	try {
		response.forEach(async (i) => {
			await Industry.findOrCreate({
				where: {name: i.name},
				defaults: i,
			});
		});
		return {success:true, data:'Creados: ' + response.length}
	} catch (error) {
		return {success:false,error: 'Error al agregar las industrias a la DB desde el JSON: ' + error};
	}
};

module.exports = {
	getIndustries,
	loadIndustries
};