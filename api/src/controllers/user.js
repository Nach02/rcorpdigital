const { User,Country,Industry,Role } = require('../db.js')
const {response} = require('../arrays/users.js');
const { Op } = require('sequelize');


const getUsers = async (role, industry, country, CNAEmin, CNAEmax) => {
	try {
		const CNAEFilter =  CNAEmax ? { [Op.between]: [CNAEmin || 0, CNAEmax] } : { [Op.gte]: CNAEmin || 0 };
        const all= await User.findAll({ 
								where: {
									CNAE:CNAEFilter
								},
								include: [{
									model: Country,							
									where: country ? { id: country } : {},
									attributes: ['name'],
								},
								{
									model: Industry,
									where: industry ? { id: industry } : {},
									attributes: ['name'],
								},
								{
									model: Role,
									where: role ? { id: role } : {},
									attributes: ['name'],
								}]
							})
		all.forEach((u)=>{
			u.DownloadCount=u.DownloadCount+1
			u.save()
		})
        if(all.length<1){
            return {success:false,data:"No se econtraron usuarios en la base de datos"}
        }else{
            return {success:true,data:all}
        }  
	} catch (error) {
		return {success:false,data: 'Error al buscar los usuarios ' + error};
	}
};

const loadUsers = async () => {
	try {
		response.forEach(async (i) => {
			
			let [emailStatus,
				email,
				fullName,
				firstName,
				lastName,
				linkedinURL,
				companyName,
				companyWebsite,
				icebreaker,
				country,
				location,
				industry,
				companyWebsitelink,
				companyProfileURL,
				civility,
				role,
				CNAEstring]=i.split('column');
				const CNAE=parseInt( CNAEstring, 10 );
			emailStatus=emailStatus==='deliverable'
			country = await Country.findOne({ where: { name: country } });
			industry = await Industry.findOne({ where: { name: industry } });
			role = await Role.findOne({ where: { name: role } });
			const [newUser,created]=await User.findOrCreate({
				where: {email: email},
				defaults: {emailStatus,
					email,
					fullName,
					firstName,
					lastName,
					linkedinURL,
					companyName,
					companyWebsite,
					icebreaker,
					location,
					companyProfileURL,
					civility,
					CNAE},
			});
			if(created){
				newUser.setCountry(country)
				newUser.setIndustry(industry)
				newUser.setRole(role)
			}
		});
		return {success: true, data:'Creados: '+ response.length}
	} catch (error) {
		return {success:false,error: 'Error al agregar los usuarios a la DB desde el JSON: ' + error};
	}
};

module.exports = {
	getUsers,
    loadUsers
};