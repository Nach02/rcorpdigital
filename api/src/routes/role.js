var express = require('express');
var router = express.Router();
module.exports = router;
const { getRoles } = require('../controllers/role');


router.get('/',async function(req,res){
    try {
		const response = await getRoles();
            res.status(response.success ? 200 : 404).send(response.data);
	} catch (e) {
		res.status(500).send('Error al buscar los roles: ' + e);
	} 
})