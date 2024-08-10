const { Role } = require('../db.js')
const {response} = require('../arrays/roles.js');

const getRoles = async () => {
	try {
        const all= await Role.findAll()
        if(all.length<1){
            return {success:false,data:"No se econtraron roles en la base de datos"}
        }else{
            return {success:true,data:all}
        }  
	} catch (error) {
		return {success:false,data: 'Error al buscar los roles ' + error};
	}
};

const loadRoles = async () => {
	try {
		response.forEach(async (i) => {
			await Role.findOrCreate({
				where: {name: i.name},
				defaults: i,
			});
		});
		return {success:true, data:'Creados: ' + response.length}
	} catch (error) {
		return {success:false,error: 'Error al agregar los roles a la DB desde el JSON: ' + error};
	}
};

module.exports = {
	getRoles,
    loadRoles
};