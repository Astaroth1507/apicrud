import { Sequelize } from 'sequelize'

const db = new Sequelize('database_app', 'root', 'Astaroth1507', {
    host: 'mysql',
    port: 3306,
    dialect: 'mysql'
})

export default db