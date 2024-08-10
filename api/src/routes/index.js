const { Router } = require('express');
const countries=require('./country')
const industries=require('./industry')
const roles=require('./role')
const users=require('./user');


const router = Router();

router.use('/countries',countries)
router.use('/industries',industries)
router.use('/roles',roles)
router.use('/users',users)


module.exports = router;
