const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {loadUsers } = require('./src/controllers/user.js');
const {loadCountries} = require('./src/controllers/country.js');
const {loadIndustries} = require('./src/controllers/industry.js');
const { loadRoles } = require('./src/controllers/role.js');


conn.sync({ force: false }).then(() => {
  server.listen(3001, async() => {
    loadIndustries()
    loadUsers()
    loadCountries()
    loadRoles()
    console.log('%s listening at 3001');
  })
}); 
