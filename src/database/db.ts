const Sequelize = require('sequelize');

export const database = new Sequelize('almacen2023_mssql_nodejs', 'sa', '12345678', {
  host: 'localhost',
  port: 1433,
  dialect: 'mssql'
});


async function generateDb() {
  await database.sync({ force: false })
  console.log('Base de datos y tablas creada');
}

generateDb();



 