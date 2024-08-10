var express = require('express');
var router = express.Router();
module.exports = router;
const { getUsers } = require('../controllers/user');


router.get('/',async function(req,res){
    try {
		const role = req.query.role
		const industry = req.query.industry
		const country = req.query.country
		const CNAEmin = req.query.CNAEmin
		const CNAEmax = req.query.CNAEmax
		const response = await getUsers(role, industry, country, CNAEmin, CNAEmax);
            res.status(response.success ? 200 : 404).send(response.data);
	} catch (e) {
		res.status(500).send('Error al buscar los usuarios: ' + e);
	} 
})