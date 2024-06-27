const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dpsi', 'dpsi', 'Dpsidpsidpsi123', {

host: 'localhost',
 dialect: 'mysql',
 port: '8889'
});
// Uji koneksi
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;